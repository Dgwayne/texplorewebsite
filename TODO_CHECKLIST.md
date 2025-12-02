# What You Need to Add to Your Website

## 🎯 Critical (Must Add Before Launch)

### 1. **Game Content** (`siteConfig.ts`)
- [ ] Update `gameName` if different from "Texplore"
- [ ] Update `tagline` with your actual tagline
- [ ] Update `description` with your game's description
- [ ] **Update Steam URL** - Replace placeholder with your real Steam store page
- [ ] Update social media URLs:
  - [ ] Discord invite link
  - [ ] TikTok profile URL
  - [ ] YouTube channel URL

### 2. **Trailer** (`siteConfig.ts`)
- [ ] Upload trailer to YouTube
- [ ] Get YouTube video ID from URL (e.g., `youtube.com/watch?v=VIDEO_ID`)
- [ ] Update `trailer.youtubeId` in `siteConfig.ts`
- [ ] Thumbnail URL will auto-update

### 3. **Screenshots** (6 images needed)
- [ ] Take 6 high-quality screenshots (1920x1080 recommended)
- [ ] Save as:
  - `/public/images/screenshot-1.jpg`
  - `/public/images/screenshot-2.jpg`
  - `/public/images/screenshot-3.jpg`
  - `/public/images/screenshot-4.jpg`
  - `/public/images/screenshot-5.jpg`
  - `/public/images/screenshot-6.jpg`
- [ ] Update alt text in `siteConfig.ts` if needed

### 4. **OG Image** (Social Sharing)
- [ ] Create 1200x630px image for social media previews
- [ ] Save as: `/public/images/og-image.jpg`
- [ ] Should show your game logo/title prominently

### 5. **Demo Files** (If you have a demo)
- [ ] Create demo ZIP files for each platform
- [ ] Place in `/public/downloads/`:
  - `texplore-demo-windows.zip`
  - `texplore-demo-linux.zip` (optional)
  - `texplore-demo-mac.zip` (optional)
- [ ] Update file sizes in `siteConfig.ts`
- [ ] OR: Host externally and update URLs in `siteConfig.ts`

### 6. **Favicon** (Browser Tab Icon)
- [ ] Create favicon files:
  - `/app/favicon.ico` (16x16, 32x32, 48x48)
  - `/app/icon.png` (optional, 512x512)
  - `/app/apple-icon.png` (180x180 for iOS)

## 📝 Content Updates (`siteConfig.ts`)

### 7. **Features** (6 feature cards)
- [ ] Update all 6 feature titles
- [ ] Update all 6 feature descriptions
- [ ] Icons are already set (pickaxe, sword, upgrade, rocket, strategy, infinity)

### 8. **Reviews/Quotes**
- [ ] Replace 3 placeholder reviews with real quotes
- [ ] Update author names
- [ ] Update roles/publications

### 9. **FAQ**
- [ ] Review all 6 FAQ questions
- [ ] Update answers with accurate information
- [ ] Add/remove questions as needed

### 10. **Demo Info**
- [ ] Update demo version number
- [ ] Update "What's in the demo?" list items
- [ ] Update file sizes if different

## 🔧 Optional but Recommended

### 11. **Analytics** (Choose one)
- [ ] **Google Analytics:**
  - Get GA4 Measurement ID (format: `G-XXXXXXXXXX`)
  - Add to `siteConfig.ts` → `analytics.googleAnalyticsId`
- [ ] **OR Plausible:**
  - Set up Plausible account
  - Add domain to `siteConfig.ts` → `analytics.plausibleDomain`

### 12. **Email Service** (For newsletter)
- [ ] Choose provider: Mailchimp, ConvertKit, or custom
- [ ] Get API key
- [ ] Update `/app/api/email/route.ts` with your provider
- [ ] Add API key to environment variables (Vercel settings)

### 13. **Direct Purchase** (If offering)
- [ ] Get Stripe account and keys
- [ ] Update `siteConfig.ts` → `directPurchase.stripePublishableKey`
- [ ] Implement Stripe Checkout in `/app/checkout/page.tsx`
- [ ] OR: Keep "Coming soon" message if not ready

### 14. **Curator Logos** (Optional)
- [ ] If featured on platforms, add logos:
  - `/public/images/logos/indiedb.png`
  - `/public/images/logos/itchio.png`
  - `/public/images/logos/gamejolt.png`
- [ ] Update paths in `siteConfig.ts` if different

## 🎨 Visual Polish

### 15. **Colors** (If you want to customize)
- [ ] Edit `tailwind.config.ts` to change accent colors
- [ ] Current: emerald, cyan, purple
- [ ] Adjust to match your game's aesthetic

### 16. **Legal Pages**
- [ ] Review and customize `/app/privacy/page.tsx`
- [ ] Review and customize `/app/terms/page.tsx`
- [ ] Add contact email/address if needed

## ✅ Testing Checklist

Before going live:
- [ ] Test all links (Steam, social media)
- [ ] Test demo downloads (if available)
- [ ] Test email capture form
- [ ] Test on mobile devices
- [ ] Test trailer modal
- [ ] Test FAQ accordion
- [ ] Verify all images load
- [ ] Check spelling/grammar

## 🚀 Quick Start Priority

**Minimum to Launch:**
1. Update Steam URL
2. Add trailer YouTube ID
3. Add 6 screenshots
4. Add OG image
5. Update tagline/description
6. Add favicon

**Everything else can be added later!**

---

## File Structure Reference

```
texplore website/
├── siteConfig.ts          ← Edit ALL content here
├── public/
│   ├── images/
│   │   ├── screenshot-1.jpg  ← Add 6 screenshots
│   │   ├── og-image.jpg      ← Add social preview image
│   │   └── logos/            ← Optional curator logos
│   └── downloads/
│       ├── texplore-demo-windows.zip  ← Add demo files
│       ├── texplore-demo-linux.zip
│       └── texplore-demo-mac.zip
└── app/
    ├── favicon.ico        ← Add favicon
    └── icon.png          ← Optional
```

## Need Help?

- See `CONTENT_GUIDE.md` for detailed content update instructions
- See `README.md` for technical setup
- See `HOSTING_GUIDE.md` for deployment

