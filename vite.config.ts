import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
	 base: '/go-ghibli/', 
  plugins: [react()],
   server: {
    proxy: {
      '/api': {
        target: 'https://ghibliapi.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
