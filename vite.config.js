import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  envDir: './',
  server: {
    host: '0.0.0.0', // Expose to the local network
    port: 5173, // Change if needed
    strictPort: true, // Prevents auto-changing port

    allowedHosts: [
      'dev.calvin-tango.com'
    ]
  },
})
