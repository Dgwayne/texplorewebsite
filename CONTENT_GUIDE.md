# Content Update Guide

This guide helps you quickly update all content on the Texplore marketing website.

## Quick Reference: What to Update

### 1. Game Information (`siteConfig.ts`)

```typescript
gameName: "Texplore"  // Your game name
tagline: "Drill deeper. Get stronger. Launch to the Moon."  // Main tagline
description: "A mining roguelite..."  // SEO description
```

### 2. Social Links

Update these URLs in `siteConfig.ts`:
- `steamUrl` - Your Steam store page
- `discordUrl` - Discord invite link
- `tiktokUrl` - TikTok profile
- `youtubeUrl` - YouTube channel

### 3. Demo Downloads

**For local files:**
1. Place ZIP files in `/public/downloads/`
2. Update file sizes in `siteConfig.ts`

**For external hosting:**
1. Upload to GitHub Releases, S3, or Cloudflare R2
2. Update URLs in `siteConfig.ts`:
   ```typescript
   windows: {
     url: "https://your-host.com/path/to/file.zip",
     size: "250 MB",
     filename: "texplore-demo-windows.zip"
   }
   ```

### 4. Trailer

1. Upload trailer to YouTube
2. Get video ID from URL: `youtube.com/watch?v=VIDEO_ID`
3. Update in `siteConfig.ts`:
   ```typescript
   trailer: {
     youtubeId: "VIDEO_ID",
     thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
   }
   ```

### 5. Screenshots

1. Take 6 screenshots (recommended: 1920x1080 or 16:9 ratio)
2. Save as:
   - `/public/images/screenshot-1.jpg`
   - `/public/images/screenshot-2.jpg`
   - ... up to screenshot-6.jpg
3. Update alt text in `siteConfig.ts` if needed

### 6. Features

Edit the 6 feature cards in `siteConfig.ts`:
- `title` - Feature name
- `description` - What it does
- `icon` - One of: pickaxe, sword, upgrade, rocket, strategy, infinity

### 7. Reviews

Replace the 3 placeholder reviews with real quotes:
- `quote` - The review text
- `author` - Reviewer name
- `role` - Their role/publication

### 8. FAQ

Update questions and answers in `siteConfig.ts`. Add or remove items as needed.

### 9. Email Capture

**Development:** Works out of the box (saves to `/data/emails.json`)

**Production:** Choose one:
- **Mailchimp:** Uncomment code in `/app/api/email/route.ts`, add API key
- **ConvertKit:** Replace handler, add API key
- **Custom:** Implement your own handler

### 10. Analytics

**Google Analytics:**
```typescript
analytics: {
  googleAnalyticsId: "G-XXXXXXXXXX",
}
```

**Plausible:**
```typescript
analytics: {
  plausibleDomain: "texplore.com",
}
```

### 11. Direct Purchase

**Coming Soon Mode (default):**
- Checkout page shows "Coming soon" message
- Users can still buy on Steam

**Stripe Integration:**
1. Get Stripe keys
2. Update `siteConfig.ts`:
   ```typescript
   directPurchase: {
     enabled: true,
     stripePublishableKey: "pk_live_...",
     checkoutUrl: "/checkout",
   }
   ```
3. Implement Stripe Checkout in `/app/checkout/page.tsx`

## Image Requirements

### Screenshots
- **Format:** JPG or PNG
- **Size:** 1920x1080 (16:9) recommended
- **Naming:** screenshot-1.jpg through screenshot-6.jpg
- **Location:** `/public/images/`

### OG Image (Social Sharing)
- **Format:** JPG or PNG
- **Size:** 1200x630px (exact)
- **Name:** og-image.jpg
- **Location:** `/public/images/`

### Curator Logos (Optional)
- **Format:** PNG with transparency
- **Size:** ~200px wide
- **Location:** `/public/images/logos/`
- **Update paths in `siteConfig.ts`**

## SEO Checklist

After updating content, verify:
- [ ] Game name and tagline are correct
- [ ] Description is compelling and keyword-rich
- [ ] All URLs are working (Steam, social links)
- [ ] Screenshots are uploaded
- [ ] Trailer is embedded correctly
- [ ] OG image is set (for social sharing)
- [ ] Analytics IDs are added (if using)

## Testing Checklist

Before going live:
- [ ] Test demo downloads (all platforms)
- [ ] Test email capture form
- [ ] Test Steam purchase button
- [ ] Test mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Check FAQ accordion works
- [ ] Test trailer modal
- [ ] Verify analytics tracking

## Need Help?

- Check `README.md` for detailed setup instructions
- Review Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

