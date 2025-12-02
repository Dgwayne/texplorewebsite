# Quick Deploy Checklist

## Before You Start
- [ ] Code is ready (tested `npm run build` locally)
- [ ] Domain: `texploregame.com` (you have this!)

## 5-Minute Deploy to Vercel

### Step 1: Push to GitHub (2 min)
```bash
git init
git add .
git commit -m "Initial commit"
# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/texplore-website.git
git push -u origin main
```

### Step 2: Deploy on Vercel (2 min)
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click "Add New Project"
3. Select your repository
4. Click "Deploy" (settings are auto-detected)
5. Wait 1-2 minutes

### Step 3: Connect Domain (1 min)
1. In Vercel: Project → Settings → Domains
2. Add: `texploregame.com`
3. Vercel shows DNS records to add
4. In Squarespace: Settings → Domains → DNS Settings
5. Add the A and CNAME records Vercel provides
6. Wait 5-60 minutes for DNS to propagate

**Done!** Your site will be live at `https://texploregame.com`

## What You'll Get

✅ Free hosting (Vercel free tier)
✅ Automatic SSL certificate
✅ Global CDN (fast worldwide)
✅ Auto-deploy on every git push
✅ Custom domain support

## If You Get Stuck

- **DNS not working?** Wait up to 2 hours, check [whatsmydns.net](https://www.whatsmydns.net)
- **Build fails?** Check Vercel build logs
- **Need help?** See `HOSTING_GUIDE.md` for detailed steps

