import { randomUUID } from "crypto"
import path from "path"
import react from "@vitejs/plugin-react"
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer(),
    ViteMinifyPlugin({})
  ],
  build: {
    outDir: "dist",
    sourcemap: 'hidden',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        entryFileNames: `assets/js/ZAYDEN-${randomUUID().toUpperCase()}.js`,
        chunkFileNames: `assets/js/ZAYDEN-${randomUUID().toUpperCase()}.js`,
        assetFileNames: `assets/[ext]/ZAYDEN-${randomUUID().toUpperCase()}.[ext]`,
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
