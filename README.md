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

**Step-by-Step Deployment Process:**

1. **Create GitHub Repository:**
   - Go to https://github.com and create a new repository
   - Name it: `SaiChandraPortfolioWebApp`
   - Make it **Public**
   - Don't initialize with README

2. **Push Your Code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Add animated portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/SaiChandraPortfolioWebApp.git
   git push -u origin main
   ```

3. **Enable GitHub Pages (IMPORTANT - Do this BEFORE the workflow runs):**
   - Go to your repository on GitHub
   - Click **Settings** tab
   - Scroll to **Pages** in the left sidebar
   - Under **Source**, select **GitHub Actions**
   - Click **Save**

4. **Trigger Deployment:**
   - Make any small change to your code
   - Commit and push: `git add . && git commit -m "Enable Pages" && git push`
   - The GitHub Actions workflow will now run successfully

5. **Access Your Site:**
   - Your portfolio will be live at: `https://YOUR_USERNAME.github.io/SaiChandraPortfolioWebApp/`

**Note:** You must enable GitHub Pages in repository settings BEFORE pushing code with the workflow, otherwise you'll get the "Pages not enabled" error.

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
