import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $primary-color: #ffc107;
          $primary-dark: #ff9800;
          $bg-dark: #0a0e27;
          $bg-darker: #050816;
          $text-light: #e8eaed;
          $text-muted: #9ca3af;
          $border-color: rgba(255, 255, 255, 0.1);
        `
      }
    }
  }
})