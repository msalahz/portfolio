import { useMemo } from 'react'
import { ClientOnly } from '@tanstack/react-router'

// Generate deterministic pseudo-random values for consistent SSR/client rendering
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000
  return x - Math.floor(x)
}

interface Raindrop {
  id: number
  left: number
  delay: number
  duration: number
  opacity: number
  size: number
}

interface WaterDroplet {
  id: number
  left: number
  top: number
  delay: number
  duration: number
  size: number
  drift: number
}

interface RippleConfig {
  id: number
  left: number
  top: number
  delay: number
  size: number
}

export function Background() {
  // Generate raindrops with deterministic values
  const raindrops = useMemo<Raindrop[]>(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: seededRandom(i * 1.1) * 100,
      delay: seededRandom(i * 2.2) * 8,
      duration: 0.8 + seededRandom(i * 3.3) * 0.6,
      opacity: 0.3 + seededRandom(i * 4.4) * 0.5,
      size: 15 + seededRandom(i * 5.5) * 25,
    }))
  }, [])

  // Generate water droplets that slide down the glass
  const waterDroplets = useMemo<WaterDroplet[]>(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: seededRandom(i * 6.6) * 100,
      top: seededRandom(i * 7.7) * 30,
      delay: seededRandom(i * 8.8) * 15,
      duration: 12 + seededRandom(i * 9.9) * 18,
      size: 4 + seededRandom(i * 10.1) * 8,
      drift: (seededRandom(i * 11.2) - 0.5) * 30,
    }))
  }, [])

  // Generate ripple effects for where drops hit
  const ripples = useMemo<RippleConfig[]>(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 5 + seededRandom(i * 12.3) * 90,
      top: 60 + seededRandom(i * 13.4) * 35,
      delay: seededRandom(i * 14.5) * 6,
      size: 8 + seededRandom(i * 15.6) * 12,
    }))
  }, [])

  return (
    <ClientOnly>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base atmospheric gradient */}
        <div
          className="absolute inset-0 transition-colors duration-700"
          style={{
            background: `
            linear-gradient(
              180deg,
              var(--rain-sky-top) 0%,
              var(--rain-sky-mid) 40%,
              var(--rain-sky-bottom) 100%
            )
          `,
          }}
        />

        {/* Foggy atmosphere layer */}
        <div
          className="absolute inset-0 opacity-60 dark:opacity-40"
          style={{
            background: `
            radial-gradient(ellipse 120% 80% at 20% 10%, var(--rain-fog) 0%, transparent 50%),
            radial-gradient(ellipse 100% 60% at 80% 30%, var(--rain-fog) 0%, transparent 40%),
            radial-gradient(ellipse 80% 100% at 50% 100%, var(--rain-fog-bottom) 0%, transparent 60%)
          `,
          }}
        />

        {/* Primary frosted glass layer */}
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(8px) saturate(1.2)',
            WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
            background: 'var(--glass-tint)',
          }}
        />

        {/* Glass texture - fine scratches and imperfections */}
        <div
          className="absolute inset-0 opacity-40 dark:opacity-25"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                rgba(255,255,255,0.03) 1px,
                transparent 2px,
                transparent 40px
              ),
              repeating-linear-gradient(
                0deg,
                transparent 0px,
                rgba(255,255,255,0.02) 1px,
                transparent 2px,
                transparent 60px
              ),
              repeating-linear-gradient(
                45deg,
                transparent 0px,
                rgba(255,255,255,0.01) 1px,
                transparent 3px,
                transparent 80px
              )
            `,
          }}
        />

        {/* Glass edge reflection - top highlight */}
        <div
          className="absolute inset-x-0 top-0 h-32 opacity-60 dark:opacity-30"
          style={{
            background: `linear-gradient(
              180deg,
              var(--glass-highlight) 0%,
              transparent 100%
            )`,
          }}
        />

        {/* Glass edge reflection - diagonal shine */}
        <div
          className="absolute inset-0 opacity-30 dark:opacity-15"
          style={{
            background: `linear-gradient(
              135deg,
              var(--glass-shine) 0%,
              transparent 30%,
              transparent 70%,
              var(--glass-shine-alt) 100%
            )`,
          }}
        />

        {/* Animated glass shimmer */}
        <div
          className="animate-glass-shimmer absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              var(--glass-shimmer) 50%,
              transparent 100%
            )`,
            backgroundSize: '200% 100%',
          }}
        />

        {/* Frosted condensation patches */}
        <div
          className="absolute inset-0 opacity-50 dark:opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 40% 30% at 15% 20%, var(--frost-patch) 0%, transparent 70%),
              radial-gradient(ellipse 35% 25% at 85% 15%, var(--frost-patch) 0%, transparent 65%),
              radial-gradient(ellipse 45% 35% at 75% 70%, var(--frost-patch) 0%, transparent 75%),
              radial-gradient(ellipse 30% 40% at 25% 85%, var(--frost-patch) 0%, transparent 60%),
              radial-gradient(ellipse 50% 20% at 50% 50%, var(--frost-patch-light) 0%, transparent 80%)
            `,
          }}
        />

        {/* Ice crystal texture overlay */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, var(--ice-crystal) 0%, transparent 3%),
              radial-gradient(circle at 80% 20%, var(--ice-crystal) 0%, transparent 2%),
              radial-gradient(circle at 40% 70%, var(--ice-crystal) 0%, transparent 4%),
              radial-gradient(circle at 60% 40%, var(--ice-crystal) 0%, transparent 2.5%),
              radial-gradient(circle at 90% 80%, var(--ice-crystal) 0%, transparent 3%),
              radial-gradient(circle at 10% 60%, var(--ice-crystal) 0%, transparent 2%),
              radial-gradient(circle at 70% 90%, var(--ice-crystal) 0%, transparent 3.5%),
              radial-gradient(circle at 30% 10%, var(--ice-crystal) 0%, transparent 2%)
            `,
          }}
        />

        {/* Inner glass glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            boxShadow: 'inset 0 0 100px var(--glass-inner-glow)',
          }}
        />

        {/* Falling raindrops */}
        <div className="absolute inset-0 overflow-hidden">
          {raindrops.map((drop) => (
            <div
              key={drop.id}
              className="animate-rain-fall absolute"
              style={{
                left: `${drop.left}%`,
                top: '-40px',
                animationDelay: `${drop.delay}s`,
                animationDuration: `${drop.duration}s`,
                opacity: drop.opacity,
              }}
            >
              <div
                className="rounded-full bg-linear-to-b from-transparent via-(--rain-drop) to-(--rain-drop-end)"
                style={{
                  width: '2px',
                  height: `${drop.size}px`,
                  boxShadow: '0 0 4px var(--rain-drop-glow)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Water droplets sliding down the glass */}
        <div className="absolute inset-0 overflow-hidden">
          {waterDroplets.map((droplet) => (
            <div
              key={droplet.id}
              className="animate-droplet-slide absolute"
              style={{
                left: `${droplet.left}%`,
                top: `${droplet.top}%`,
                animationDelay: `${droplet.delay}s`,
                animationDuration: `${droplet.duration}s`,
                ['--drift' as string]: `${droplet.drift}px`,
              }}
            >
              {/* Main droplet body */}
              <div
                className="relative rounded-full"
                style={{
                  width: `${droplet.size}px`,
                  height: `${droplet.size * 1.3}px`,
                  background: `
                  radial-gradient(
                    ellipse 70% 60% at 30% 30%,
                    var(--rain-droplet-highlight) 0%,
                    var(--rain-droplet) 40%,
                    var(--rain-droplet-dark) 100%
                  )
                `,
                  boxShadow: `
                  inset 1px 1px 2px var(--rain-droplet-inner),
                  0 2px 4px var(--rain-droplet-shadow)
                `,
                }}
              >
                {/* Highlight reflection */}
                <div
                  className="absolute rounded-full bg-white/40"
                  style={{
                    width: '30%',
                    height: '25%',
                    top: '15%',
                    left: '20%',
                    filter: 'blur(0.5px)',
                  }}
                />
              </div>
              {/* Trail behind the droplet */}
              <div
                className="absolute rounded-full opacity-40"
                style={{
                  width: `${droplet.size * 0.5}px`,
                  height: `${droplet.size * 3}px`,
                  top: `-${droplet.size * 2.5}px`,
                  left: `${droplet.size * 0.25}px`,
                  background: `linear-gradient(to top, var(--rain-droplet), transparent)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Ripple effects where rain hits surfaces */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {ripples.map((ripple) => (
            <div
              key={ripple.id}
              className="animate-ripple absolute"
              style={{
                left: `${ripple.left}%`,
                top: `${ripple.top}%`,
                animationDelay: `${ripple.delay}s`,
              }}
            >
              <div
                className="rounded-full border border-(--rain-ripple)"
                style={{
                  width: `${ripple.size}px`,
                  height: `${ripple.size * 0.4}px`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Subtle lightning flash effect */}
        <div className="animate-lightning pointer-events-none absolute inset-0 bg-white/0 dark:bg-white/0" />

        {/* Vignette for depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
            radial-gradient(
              ellipse 80% 70% at 50% 50%,
              transparent 30%,
              var(--rain-vignette) 100%
            )
          `,
          }}
        />

        {/* Inline styles for CSS variables and animations */}
        <style>{`
        :root {
          --rain-sky-top: #d0dae6;
          --rain-sky-mid: #b8c8d8;
          --rain-sky-bottom: #9ab0c4;
          --rain-fog: rgba(200, 215, 230, 0.6);
          --rain-fog-bottom: rgba(180, 200, 220, 0.7);
          --rain-drop: rgba(160, 190, 220, 0.9);
          --rain-drop-end: rgba(130, 170, 210, 0.7);
          --rain-drop-glow: rgba(200, 225, 250, 0.4);
          --rain-droplet: rgba(210, 225, 240, 0.85);
          --rain-droplet-highlight: rgba(255, 255, 255, 0.95);
          --rain-droplet-dark: rgba(140, 165, 190, 0.9);
          --rain-droplet-inner: rgba(255, 255, 255, 0.5);
          --rain-droplet-shadow: rgba(80, 110, 140, 0.3);
          --rain-ripple: rgba(180, 210, 240, 0.5);
          --rain-vignette: rgba(130, 150, 175, 0.4);
          /* Glass effect variables */
          --glass-tint: rgba(255, 255, 255, 0.15);
          --glass-highlight: rgba(255, 255, 255, 0.4);
          --glass-shine: rgba(255, 255, 255, 0.25);
          --glass-shine-alt: rgba(255, 255, 255, 0.15);
          --glass-shimmer: rgba(255, 255, 255, 0.3);
          --glass-inner-glow: rgba(255, 255, 255, 0.1);
          --frost-patch: rgba(255, 255, 255, 0.35);
          --frost-patch-light: rgba(255, 255, 255, 0.2);
          --ice-crystal: rgba(255, 255, 255, 0.6);
        }

        .dark {
          --rain-sky-top: #080c12;
          --rain-sky-mid: #101820;
          --rain-sky-bottom: #182028;
          --rain-fog: rgba(25, 40, 60, 0.5);
          --rain-fog-bottom: rgba(15, 30, 50, 0.6);
          --rain-drop: rgba(80, 130, 180, 0.7);
          --rain-drop-end: rgba(60, 110, 160, 0.5);
          --rain-drop-glow: rgba(80, 140, 200, 0.3);
          --rain-droplet: rgba(70, 105, 140, 0.75);
          --rain-droplet-highlight: rgba(140, 175, 210, 0.85);
          --rain-droplet-dark: rgba(30, 50, 75, 0.9);
          --rain-droplet-inner: rgba(100, 140, 180, 0.3);
          --rain-droplet-shadow: rgba(0, 0, 0, 0.5);
          --rain-ripple: rgba(70, 115, 160, 0.4);
          --rain-vignette: rgba(0, 5, 15, 0.6);
          /* Glass effect variables - dark mode */
          --glass-tint: rgba(30, 50, 80, 0.2);
          --glass-highlight: rgba(100, 140, 190, 0.15);
          --glass-shine: rgba(80, 120, 170, 0.1);
          --glass-shine-alt: rgba(60, 100, 150, 0.08);
          --glass-shimmer: rgba(100, 150, 210, 0.15);
          --glass-inner-glow: rgba(50, 90, 140, 0.08);
          --frost-patch: rgba(60, 90, 130, 0.25);
          --frost-patch-light: rgba(70, 100, 140, 0.15);
          --ice-crystal: rgba(120, 160, 210, 0.4);
        }

        @keyframes rain-fall {
          0% {
            transform: translateY(0) scaleY(1);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 60px)) scaleY(1.2);
            opacity: 0;
          }
        }

        @keyframes droplet-slide {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          50% {
            transform: translateY(35vh) translateX(calc(var(--drift) * 0.5));
          }
          85% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(75vh) translateX(var(--drift));
            opacity: 0;
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes lightning {
          0%, 100% {
            background-color: transparent;
          }
          0.5% {
            background-color: rgba(255, 255, 255, 0.1);
          }
          1% {
            background-color: transparent;
          }
          1.2% {
            background-color: rgba(255, 255, 255, 0.15);
          }
          1.4% {
            background-color: transparent;
          }
        }

        .animate-rain-fall {
          animation: rain-fall linear infinite;
        }

        .animate-droplet-slide {
          animation: droplet-slide ease-in-out infinite;
        }

        .animate-ripple {
          animation: ripple 3s ease-out infinite;
        }

        .animate-lightning {
          animation: lightning 25s ease-in-out infinite;
        }

        @keyframes glass-shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-glass-shimmer {
          animation: glass-shimmer 15s ease-in-out infinite;
        }
      `}</style>
      </div>
    </ClientOnly>
  )
}
