# Deployment Guide

## Pre-Deployment Checklist

### 1. Update Content
- [ ] Edit `siteConfig.ts` with your actual content
- [ ] Add screenshots to `/public/images/`
- [ ] Add demo ZIP files to `/public/downloads/` or update URLs
- [ ] Update trailer YouTube ID
- [ ] Add OG image (1200x630px) to `/public/images/og-image.jpg`

### 2. Configure Analytics
- [ ] Add Google Analytics ID OR Plausible domain in `siteConfig.ts`
- [ ] Test tracking in development

### 3. Set Up Email Service
- [ ] Choose email provider (Mailchimp/ConvertKit/custom)
- [ ] Update `/app/api/email/route.ts` with your provider
- [ ] Add API keys to environment variables

### 4. Configure Direct Purchase (Optional)
- [ ] Get Stripe keys
- [ ] Update `siteConfig.ts` with Stripe publishable key
- [ ] Implement Stripe Checkout in `/app/checkout/page.tsx`

### 5. Environment Variables
Create `.env.local` (or set in your hosting platform):
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
MAILCHIMP_API_KEY=your_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_SITE_URL=https://texplore.com
```

## Vercel Deployment (Recommended)

### Step 1: Prepare Repository
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/texplore-website.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings
5. Add environment variables in project settings
6. Click "Deploy"

### Step 3: Configure Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Other Deployment Options

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in site settings

### AWS Amplify
1. Connect repository
2. Build settings auto-detected
3. Add environment variables
4. Deploy

### Railway
1. Create new project
2. Connect GitHub repository
3. Railway auto-detects Next.js
4. Add environment variables
5. Deploy

## Post-Deployment

### 1. Verify Functionality
- [ ] Test demo downloads
- [ ] Test email capture
- [ ] Test Steam purchase button
- [ ] Test all navigation
- [ ] Check mobile responsiveness

### 2. SEO Verification
- [ ] Submit sitemap to Google Search Console
- [ ] Test OpenGraph tags (use [opengraph.xyz](https://www.opengraph.xyz))
- [ ] Verify structured data (use [schema.org validator](https://validator.schema.org))

### 3. Performance
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Test on slow connections
- [ ] Verify images are optimized

### 4. Analytics
- [ ] Verify analytics tracking works
- [ ] Set up conversion goals
- [ ] Test event tracking

## Monitoring

### Recommended Tools
- **Uptime:** UptimeRobot, Pingdom
- **Analytics:** Google Analytics, Plausible
- **Error Tracking:** Sentry (optional)
- **Performance:** Vercel Analytics (built-in)

## Updates

To update content:
1. Edit `siteConfig.ts`
2. Commit and push
3. Vercel auto-deploys (or trigger manual deploy)

No rebuild needed for content changes if using `siteConfig.ts`!

## Troubleshooting

### Build Fails
- Check Node.js version (18+ required)
- Verify all dependencies installed
- Check for TypeScript errors

### Downloads Not Working
- Verify file paths in `siteConfig.ts`
- Check file permissions
- For external URLs, verify CORS

### Email Capture Fails
- Check API route is deployed
- Verify environment variables set
- Check provider API keys are correct

### Images Not Loading
- Verify paths start with `/`
- Check files are in `/public/`
- Clear browser cache

## Support

For deployment issues:
- Check Vercel/Netlify logs
- Review Next.js deployment docs
- Check hosting platform status

