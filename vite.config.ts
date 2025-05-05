import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import masterCSS from "@master/css.vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [react(), masterCSS(), tsconfigPaths()],
})
