import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/spotify": {
        target: "https://moodliy-spotify-auth-git-main-csakafeda.vercel.app",
        rewrite: (path) => path.replace(/^\/spotify/, ""),
      },
    },
  },
})
