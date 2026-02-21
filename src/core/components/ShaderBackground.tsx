import { useEffect, useRef } from 'react'
import { cn } from '@/integrations/shadcn/lib/utils'

const VS_SOURCE = `
  attribute vec4 aVertexPosition;
  void main() {
    gl_Position = aVertexPosition;
  }
`

// iColor is passed per-frame: vec3(0) = black (light mode), vec3(1) = white (dark mode)
const FS_SOURCE = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;
  uniform vec3 iColor;

  const float overallSpeed    = 0.10;
  const float gridSmoothWidth = 0.015;
  const float scale           = 6.5;
  const float minLineWidth    = 0.005;
  const float maxLineWidth    = 0.10;
  const float lineSpeed       = 0.9 * overallSpeed;
  const float lineAmplitude   = 1.0;
  const float lineFrequency   = 0.2;
  const float warpSpeed       = 0.18 * overallSpeed;
  const float warpFrequency   = 0.5;
  const float warpAmplitude   = 0.85;
  const float offsetFrequency = 0.5;
  const float offsetSpeed     = 1.1 * overallSpeed;
  const float minOffsetSpread = 0.5;
  const float maxOffsetSpread = 2.5;
  const int   linesPerGroup   = 14;

  #define drawSmoothLine(pos, hw, t) smoothstep(hw, 0.0, abs(pos - (t)))
  #define drawCrispLine(pos, hw, t)  smoothstep(hw + gridSmoothWidth, hw, abs(pos - (t)))
  #define drawCircle(pos, r, coord)  smoothstep(r + gridSmoothWidth, r, length(coord - (pos)))

  float rnd(float t) {
    return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
  }

  float plasmaY(float x, float hFade, float offset) {
    return rnd(x * lineFrequency + iTime * lineSpeed) * hFade * lineAmplitude + offset;
  }

  void main() {
    vec2 uv    = gl_FragCoord.xy / iResolution.xy;
    vec2 space = (gl_FragCoord.xy - iResolution.xy * 0.5) / iResolution.x * 2.0 * scale;

    float hFade = 1.0 - (cos(uv.x * 6.28318) * 0.5 + 0.5);
    // Fade only at the very top/bottom edges; stay visible across the full height
    float vFade = smoothstep(0.0, 0.08, uv.y) * smoothstep(1.0, 0.92, uv.y);

    space.y += rnd(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + hFade);
    space.x += rnd(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * hFade;

    float accumulated = 0.0;

    for (int l = 0; l < linesPerGroup; l++) {
      float fi         = float(l);
      float normalised = fi / float(linesPerGroup);
      float offsetTime = iTime * offsetSpeed;
      float offsetPos  = fi + space.x * offsetFrequency;
      float rand       = rnd(offsetPos + offsetTime) * 0.5 + 0.5;
      float hw         = mix(minLineWidth, maxLineWidth, rand * hFade) * 0.5;
      float offset     = rnd(offsetPos + offsetTime * (1.0 + normalised))
                         * mix(minOffsetSpread, maxOffsetSpread, hFade);

      float lineY = plasmaY(space.x, hFade, offset);
      float line  = drawSmoothLine(lineY, hw, space.y) * 0.5
                  + drawCrispLine(lineY, hw * 0.15, space.y);

      float cx     = mod(fi + iTime * lineSpeed * 8.0, 28.0) - 14.0;
      vec2  cPos   = vec2(cx, plasmaY(cx, hFade, offset));
      float circle = drawCircle(cPos, 0.006, space) * 2.2;

      accumulated += (line + circle) * rand;
    }

    float alpha  = clamp(accumulated, 0.0, 0.75) * vFade * hFade;
    gl_FragColor = vec4(iColor, alpha);
  }
`

function loadShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function initProgram(gl: WebGLRenderingContext): WebGLProgram | null {
  const vs = loadShader(gl, gl.VERTEX_SHADER, VS_SOURCE)
  const fs = loadShader(gl, gl.FRAGMENT_SHADER, FS_SOURCE)
  if (!vs || !fs) return null
  const program = gl.createProgram()
  if (!program) return null
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Shader link error:', gl.getProgramInfoLog(program))
    return null
  }
  return program
}

export interface ShaderBackgroundProps {
  className?: string
}

export function ShaderBackground({ className }: ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const darkRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Track dark mode — the project applies `.dark` on document.body
    darkRef.current = document.body.classList.contains('dark')
    const mo = new MutationObserver(() => {
      darkRef.current = document.body.classList.contains('dark')
    })
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    // WebGL setup
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    if (!gl) {
      mo.disconnect()
      return
    }

    const program = initProgram(gl)
    if (!program) {
      mo.disconnect()
      return
    }

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const attrib = gl.getAttribLocation(program, 'aVertexPosition')
    const uResolution = gl.getUniformLocation(program, 'iResolution')
    const uTime = gl.getUniformLocation(program, 'iTime')
    const uColor = gl.getUniformLocation(program, 'iColor')

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    const t0 = Date.now()
    let raf: number

    const render = () => {
      const t = (Date.now() - t0) / 1000
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(program)
      gl.uniform2f(uResolution, canvas.width, canvas.height)
      gl.uniform1f(uTime, t)
      // black (0,0,0) for light mode, white (1,1,1) for dark mode
      const c = darkRef.current ? 1.0 : 0.0
      gl.uniform3f(uColor, c, c, c)
      gl.bindBuffer(gl.ARRAY_BUFFER, buf)
      gl.vertexAttribPointer(attrib, 2, gl.FLOAT, false, 0, 0)
      gl.enableVertexAttribArray(attrib)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      raf = requestAnimationFrame(render)
    }

    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      mo.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn(
        // Firmly behind all section content; subtle opacity for both themes
        'pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.3]',
        className
      )}
    />
  )
}
