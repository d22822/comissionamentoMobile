import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'ComissionamentoMobile';

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()], 
})

