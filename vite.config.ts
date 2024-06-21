import { randomBytes } from "crypto"
import path from "path"
import react from "@vitejs/plugin-react"
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 50,
        progressive: true,
        optimiseCoding: true,
        optimizeScans: true,
      }
    }),
    ViteMinifyPlugin()
  ],
  build: {
    outDir: "dist",
    sourcemap: 'hidden',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        entryFileNames: `assets/js/ZAYDEN-${randomBytes(24).toString('hex').toUpperCase()}.js`,
        chunkFileNames: `assets/js/ZAYDEN-${randomBytes(24).toString('hex').toUpperCase()}.js`,
        assetFileNames: `assets/[ext]/ZAYDEN-${randomBytes(24).toString('hex').toUpperCase()}.[ext]`,
        format: 'esm',
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
