# How to Edit Your Website - Easy Methods

## 🎯 Easiest Method: GitHub Web Editor (No Installation!)

**This is the simplest way - works in your browser!**

### Step 1: Go to Your Repository
1. Visit: https://github.com/Dgwayne/texplorewebsite
2. Navigate to the file you want to edit

### Step 2: Edit in Browser
1. Click on any file (like `siteConfig.ts`)
2. Click the **pencil icon** (✏️) in the top right
3. Make your changes directly in the browser
4. Scroll down, write a commit message (e.g., "Update tagline")
5. Click **"Commit changes"**

### Step 3: Automatic Deployment
- Vercel automatically detects the change
- Rebuilds and deploys your site (takes 1-2 minutes)
- Your changes go live automatically!

## 📝 What to Edit

**Almost everything is in ONE file: `siteConfig.ts`**

This file controls:
- Game name, tagline, description
- All URLs (Steam, social media)
- Features, reviews, FAQ
- Demo information
- Screenshots paths
- Trailer YouTube ID

### Quick Edits in `siteConfig.ts`:

```typescript
// Change tagline
tagline: "Your new tagline here",

// Update Steam URL
steamUrl: "https://store.steampowered.com/app/YOUR_ID/",

// Change features
features: [
  {
    title: "New Feature",
    description: "Description here",
    icon: "pickaxe" // or sword, upgrade, rocket, strategy, infinity
  },
  // ... more features
],

// Update FAQ
faq: [
  {
    question: "Your question?",
    answer: "Your answer here"
  },
  // ... more FAQs
]
```

## 🖼️ Adding/Changing Images

### Screenshots:
1. Go to GitHub → `public/images/`
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop your new screenshot
4. Name it: `screenshot-1.jpg` (or 2, 3, etc.)
5. Commit changes

### OG Image or Favicon:
- Same process, upload to the correct folder
- OG image: `public/images/og-image.jpg`
- Favicon: `app/favicon.ico`

## 🎨 Other Editing Options

### Option 2: VS Code (If You Have It)
1. Clone your repo locally
2. Edit files in VS Code
3. Commit and push

### Option 3: GitHub Desktop
1. Clone repo with GitHub Desktop
2. Edit files in any text editor
3. Commit and push through GitHub Desktop

## ⚡ Pro Tips

1. **Test Locally First (Optional):**
   ```bash
   npm install
   npm run dev
   ```
   Visit http://localhost:3000 to preview changes

2. **Always Edit `siteConfig.ts` First:**
   - 95% of changes are in this one file
   - No need to touch code files

3. **Vercel Auto-Deploys:**
   - Every push to GitHub = automatic deployment
   - No manual steps needed!

4. **Preview Before Going Live:**
   - Vercel creates preview deployments for pull requests
   - Or test locally with `npm run dev`

## 🚨 Important Notes

- **Don't edit:** `app/`, `components/`, or config files unless you know what you're doing
- **Do edit:** `siteConfig.ts` for all content changes
- **Images:** Upload to `public/images/` folder
- **Always commit:** Changes won't go live until you commit and push

---

## 📋 Quick Reference

**To change content:** Edit `siteConfig.ts` on GitHub  
**To add images:** Upload to `public/images/` on GitHub  
**To change design:** Edit component files (advanced)  
**To see changes:** Wait 1-2 minutes after committing, then refresh your site

**The GitHub web editor is your best friend!** Just edit `siteConfig.ts` and commit. 🚀

