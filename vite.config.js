import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Sesuaikan jika Anda tidak pakai React

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Sesuaikan jika Anda tidak pakai React
  base: '/portfolio/', // Tambahkan baris ini
  build: {
    // Optional: Jika Anda ingin output directorynya bukan 'dist'
    // outDir: 'build_static',
  },
});