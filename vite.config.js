import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  base: '/Portfolio/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: '/index.html',
        about: '/about.html',
        experience: '/experience.html',
        skills: '/skills.html',
        projects: '/projects.html',
        contact: '/contact.html',
      },
    },
  },
})
