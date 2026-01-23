import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    include: ['**/*.js', '**/*.jsx']  // This tells Vite to process .js files as JSX
  })],
  base: '/react-app/',  // Set base path for GitHub Pages deployment
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})