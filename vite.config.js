import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    build: {
        sourcemap: false, // Nonaktifkan source map
      },
    plugins: [react()],
});
