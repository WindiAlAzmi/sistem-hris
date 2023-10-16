import { defineConfig } from 'vite';
//import config from './env.json'
import react from '@vitejs/plugin-react-swc';
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig(() => {
  const defaultConfig = {
    plugins: [react()],
    server: {
      host: true,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }
  }

  return defaultConfig
});