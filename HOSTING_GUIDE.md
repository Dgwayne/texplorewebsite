# Hosting Guide: texploregame.com

## Recommended: Vercel (Best for Next.js)

**Why Vercel?**
- Made by the creators of Next.js
- Free tier (perfect for indie games)
- Automatic deployments from GitHub
- Built-in SSL certificates
- Global CDN for fast loading
- Zero configuration needed

## Step-by-Step: Deploy to Vercel

### 1. Prepare Your Code

First, make sure your code is ready:

```bash
# Test the build locally
npm run build

# If it works, you're ready!
```

### 2. Push to GitHub

If you haven't already, create a GitHub repository:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Texplore marketing site"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/texplore-website.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (free)

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your `texplore-website` repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)
   - **Click "Deploy"**

4. **Wait for Build**
   - Vercel will build your site (takes 1-2 minutes)
   - You'll get a URL like: `texplore-website.vercel.app`

### 4. Connect Your Squarespace Domain

**Important:** You bought the domain on Squarespace, but you'll point it to Vercel's servers.

#### Option A: Use Squarespace DNS (Recommended)

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter: `texploregame.com`
   - Click "Add"
   - Vercel will show you DNS records to add

2. **In Squarespace:**
   - Log into Squarespace
   - Go to Settings → Domains → `texploregame.com`
   - Click "DNS Settings" or "Advanced DNS"
   - Add these records (Vercel will show you the exact values):
     - **A Record:** `@` → `76.76.21.21` (or IP Vercel provides)
     - **CNAME Record:** `www` → `cname.vercel-dns.com` (or value Vercel provides)
   - Save changes

3. **Wait for DNS Propagation**
   - Can take 5 minutes to 48 hours (usually 1-2 hours)
   - Check status in Vercel dashboard

#### Option B: Transfer DNS to Vercel (Advanced)

If Squarespace allows it, you can transfer DNS management to Vercel:
1. Get nameservers from Vercel
2. Update nameservers in Squarespace
3. Vercel manages all DNS

### 5. Verify Domain

- Vercel will automatically issue SSL certificate
- Your site will be live at `https://texploregame.com`
- `www.texploregame.com` will also work

## Alternative Hosting Options

### Netlify (Also Great)

1. Sign up at [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add custom domain: `texploregame.com`
5. Update DNS in Squarespace with Netlify's DNS records

### Railway

1. Sign up at [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Auto-detects Next.js
4. Add custom domain in project settings
5. Update DNS in Squarespace

## DNS Configuration Details

### Squarespace DNS Settings

When Vercel gives you DNS records, add them in Squarespace:

**For root domain (texploregame.com):**
- Type: **A Record**
- Host: `@` or leave blank
- Points to: `76.76.21.21` (Vercel's IP - they'll provide exact)

**For www subdomain:**
- Type: **CNAME Record**
- Host: `www`
- Points to: `cname.vercel-dns.com` (Vercel's CNAME - they'll provide exact)

### How to Find DNS Settings in Squarespace

1. Log into Squarespace
2. Settings → Domains
3. Click on `texploregame.com`
4. Look for "DNS Settings" or "Advanced DNS"
5. If you don't see DNS settings, Squarespace may not allow external DNS
   - In that case, contact Squarespace support or consider transferring domain

## Environment Variables (If Needed)

If you add email service or Stripe later, add environment variables in Vercel:

1. Project → Settings → Environment Variables
2. Add each variable:
   - `MAILCHIMP_API_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - etc.
3. Redeploy (automatic or manual)

## Post-Deployment Checklist

- [ ] Site loads at `https://texploregame.com`
- [ ] `www.texploregame.com` redirects correctly
- [ ] SSL certificate is active (green lock in browser)
- [ ] All pages work (home, checkout, privacy, terms)
- [ ] Demo downloads work
- [ ] Email capture works
- [ ] Mobile responsive
- [ ] Analytics tracking (if configured)

## Troubleshooting

### Domain Not Working

1. **Check DNS Propagation:**
   - Use [whatsmydns.net](https://www.whatsmydns.net)
   - Enter `texploregame.com`
   - Check if A record points to Vercel's IP

2. **Wait Longer:**
   - DNS can take up to 48 hours
   - Usually works within 1-2 hours

3. **Check Vercel Dashboard:**
   - Settings → Domains
   - Should show "Valid Configuration" when ready

### Squarespace Won't Let You Edit DNS

Some Squarespace plans don't allow external DNS. Options:
1. **Upgrade Squarespace plan** (if they offer DNS management)
2. **Transfer domain** to another registrar (Namecheap, Google Domains, etc.)
3. **Use Squarespace's forwarding** (not ideal, but works)

### SSL Certificate Issues

- Vercel automatically issues SSL certificates
- If you see "Not Secure", wait 5-10 minutes after DNS propagates
- Check Vercel dashboard for certificate status

## Cost Breakdown

**Vercel Free Tier:**
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Custom domains
- ✅ SSL certificates
- ✅ Perfect for indie game sites

**When You Need to Upgrade:**
- Only if you get massive traffic (100k+ visitors/month)
- Pro plan: $20/month (unlikely needed)

## Next Steps After Deployment

1. **Submit to Google Search Console:**
   - Add `https://texploregame.com`
   - Submit sitemap: `https://texploregame.com/sitemap.xml`

2. **Test Everything:**
   - Demo downloads
   - Email capture
   - All links
   - Mobile experience

3. **Set Up Analytics:**
   - Add Google Analytics ID in `siteConfig.ts`
   - Or configure Plausible

4. **Share Your Site!**
   - Update Steam page with website link
   - Share on social media
   - Add to game press kits

## Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support:** Very responsive, great for Next.js issues
- **Squarespace Support:** Help with DNS settings if needed

---

**Recommended Path:** Vercel + Squarespace DNS = Easiest and best performance! 🚀

