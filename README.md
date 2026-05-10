# Ashish Das - Portfolio

This is the personal portfolio website of Ashish Das, an Automation Engineer. Built with Vite, Tailwind CSS, and Three.js.

## Features
- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices.
- **Dark Mode Aesthetic:** Sleek, neon-accented dark theme with glassmorphism elements.
- **3D Background:** Interactive particle and ring animations using Three.js.

## Local Development Setup

To run this project locally on your machine, follow these steps:

1. **Prerequisites:** Make sure you have [Node.js](https://nodejs.org/) installed on your computer.
2. **Install Dependencies:**
   Open your terminal in the project root directory and run:
   ```bash
   npm install
   ```
3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173/`.

## Building for Production

To create a production-ready build:
```bash
npm run build
```
This will compile and minify your assets into the `dist` directory.

---

## Deployment Guide

### Hosting on GitHub Pages
1. Initialize a Git repository (if you haven't already), commit your files, and push them to a repository on GitHub.
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```
2. On your GitHub repository page, go to **Settings** > **Pages**.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
4. GitHub should automatically suggest a **Vite** workflow. Configure it and commit the generated `.github/workflows/static.yml` file. This will automatically build and deploy your `dist` folder to GitHub Pages whenever you push to `main`.
   *(Note: The `vite.config.js` is already configured with `base: './'` to support relative paths for GitHub Pages).*

### Hosting on Netlify (Easiest Method)
Netlify makes deploying Vite apps incredibly easy:

**Method 1: Drag and Drop (No Git required)**
1. Run `npm run build` on your local machine to generate the `dist` folder.
2. Go to [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop your newly created `dist` folder into the designated area. Your site will be live instantly!

**Method 2: Connect to GitHub (Recommended for automatic updates)**
1. Push your code to a GitHub repository.
2. Log in to [Netlify](https://app.netlify.com/) and click **Add new site** > **Import an existing project**.
3. Connect your GitHub account and select your repository.
4. Netlify should automatically detect the settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**. Every time you push changes to GitHub, Netlify will automatically rebuild and update your website.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
