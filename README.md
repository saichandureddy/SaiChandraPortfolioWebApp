# Sai Chandra Portfolio

A modern, animated portfolio website built with React and Vite, showcasing data science and machine learning expertise.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Animated UI**: Beautiful animations and transitions
- **Modern Styling**: Gradient backgrounds and glass morphism effects
- **Dynamic Content**: Portfolio data loaded from JSON configuration
- **GitHub Pages Ready**: Automated deployment workflow

## 🛠️ Technologies Used

- React 18
- Vite
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## 📦 Installation & Setup

**Prerequisites:**
1. **Install Node.js**: Download from https://nodejs.org/ (choose LTS version)
2. **Install Git**: Download from https://git-scm.com/download/win

**Local Development:**
1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open http://localhost:5173 in your browser
5. Build for production: `npm run build`

## 🌐 GitHub Pages Deployment

**Simple Deployment Process:**

1. **Install Prerequisites:**
   - Node.js: https://nodejs.org/
   - Git: https://git-scm.com/download/win

2. **Create GitHub Repository:**
   - Go to https://github.com and create a new **PUBLIC** repository
   - Name it: `SaiChandraPortfolioWebApp` (or any name you prefer)
   - Don't initialize with README

3. **Deploy Your Portfolio:**
   ```bash
   # Install dependencies
   npm install
   
   # Initialize git and push to GitHub
   git init
   git add .
   git commit -m "Initial commit: Add animated portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository → **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

5. **Your Site Will Be Live At:**
   `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`

**Alternative: Manual Build Upload**
If GitHub Actions fails, you can manually deploy:
```bash
npm run build
# Then upload the 'dist' folder contents to your web hosting
```

**Troubleshooting:**
- Make sure repository is **PUBLIC**
- Wait 5-10 minutes after enabling Pages
- Check the **Actions** tab for deployment status
- Ensure you replace YOUR_USERNAME and REPOSITORY_NAME with actual values

## 📝 Customization

Edit the `public/portfolio.config.json` file to update:
- Personal information
- Work experience
- Projects
- Skills
- Education
- Social media links

## 📄 License

© 2025 Sai Chandra. All rights reserved.
