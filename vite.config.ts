import { execSync } from 'node:child_process'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// the commit this build is made from, shown in the prototype's controls so it is obvious which version you are looking at
const git = (args: string) => {
  try {
    return execSync(`git ${args}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim()
  } catch {
    return ''
  }
}
const build = `${git('rev-parse --short HEAD') || 'unknown'}${git('status --porcelain') ? ' + local edits' : ''}`

// https://vite.dev/config/
export default defineConfig({
  base: '/Playground/',
  plugins: [react()],
  define: { __BUILD__: JSON.stringify(build) },
})
