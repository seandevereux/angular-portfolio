# Storybook Deployment Guide

This guide covers multiple options for deploying your Storybook separately from your main application.

## Prerequisites

Build your Storybook locally first to ensure it works:
```bash
npm run build-storybook
```

This creates a `storybook-static` folder with your static Storybook site.

---

## Option 1: Vercel (Recommended - Easiest)

### Steps:
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build-storybook`
   - **Output Directory**: `storybook-static`
   - **Install Command**: `npm install`
5. Click "Deploy"

### Custom Domain (Optional):
- Go to Project Settings → Domains
- Add your custom domain (e.g., `storybook.yourdomain.com`)

**URL**: Your Storybook will be at `https://your-project-storybook.vercel.app`

---

## Option 2: Chromatic (Official Storybook Platform)

Chromatic is built by the Storybook team and includes visual testing.

### Steps:
1. Go to [chromatic.com](https://www.chromatic.com)
2. Sign in with GitHub
3. Add your project
4. Get your project token
5. Add the token to GitHub Secrets:
   - Go to your repo → Settings → Secrets → Actions
   - Add `CHROMATIC_PROJECT_TOKEN`
6. Push to main branch - the GitHub Action will deploy automatically

**Features**:
- Visual regression testing
- UI review workflow
- Automatic deployments on push
- Free for open source

**URL**: `https://main--your-project.chromatic.com`

---

## Option 3: GitHub Pages

### Steps:
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: GitHub Actions
4. Push to main branch - the workflow will deploy automatically

**URL**: `https://yourusername.github.io/your-repo-name/`

### Note:
If your Storybook is in a subdirectory, update `.storybook/main.ts`:
```typescript
const config: StorybookConfig = {
  // ... other config
  viteFinal: async (config) => {
    config.base = '/your-repo-name/';
    return config;
  },
};
```

---

## Option 4: Netlify

### Steps:
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repo
4. Configure:
   - **Build command**: `npm run build-storybook`
   - **Publish directory**: `storybook-static`
5. Click "Deploy"

**URL**: `https://your-project-storybook.netlify.app`

---

## Option 5: Manual Deployment

Build and deploy to any static hosting:

```bash
# Build Storybook
npm run build-storybook

# The storybook-static folder contains your site
# Upload this folder to:
# - AWS S3 + CloudFront
# - Azure Static Web Apps
# - Google Cloud Storage
# - Any static hosting service
```

---

## Recommended Setup

For most projects, I recommend:

1. **Main App**: Deploy to Vercel (already configured)
2. **Storybook**: Deploy to Chromatic or separate Vercel project

This gives you:
- Separate URLs for app and component library
- Independent deployment pipelines
- Visual testing with Chromatic (optional)
- Easy sharing with team/stakeholders

---

## Testing Locally

Before deploying, test the production build:

```bash
# Build Storybook
npm run build-storybook

# Serve it locally (install serve if needed)
npx serve storybook-static

# Open http://localhost:3000
```

---

## Troubleshooting

### Build fails with module errors
- Ensure all dependencies are in `package.json`
- Run `npm ci` to clean install

### Assets not loading
- Check that `staticDirs` in `.storybook/main.ts` is correct
- Verify image paths are relative

### GitHub Pages 404
- Enable GitHub Pages in repo settings
- Check the base path configuration

---

## Next Steps

1. Choose your deployment platform
2. Follow the steps above
3. Share your Storybook URL with your team!

Your Storybook will be accessible at a separate URL from your main portfolio.
