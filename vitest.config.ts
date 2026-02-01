import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import viteTsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [viteTsConfigPaths({ projects: ['./tsconfig.json'] })],
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}'],
    // Exclude worker-specific tests that need Cloudflare bindings
    exclude: ['src/**/*.worker.test.{ts,tsx}', 'node_modules'],
    setupFiles: ['./src/test/setup.ts'],
  },
})
