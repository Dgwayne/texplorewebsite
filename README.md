# Texplore Marketing Website

A modern, production-ready marketing website for the indie game Texplore. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## 📝 How to Update Content

All content is managed through a single configuration file: **`siteConfig.ts`**

### Key Sections to Edit:

1. **Game Info**: Update `gameName`, `tagline`, and `description`
2. **URLs**: Update Steam, Discord, social media links
3. **Demo Downloads**: Update download URLs and file sizes
4. **Trailer**: Replace `youtubeId` with your actual YouTube video ID
5. **Screenshots**: Update screenshot paths in the `screenshots` array
6. **Features**: Edit the 6 feature cards
7. **Reviews**: Update review quotes and sources
8. **FAQ**: Modify questions and answers
9. **Analytics**: Add your Google Analytics ID or Plausible domain

### Example: Updating the Trailer

```typescript
trailer: {
  youtubeId: "YOUR_VIDEO_ID", // Replace this
  thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg"
}
```

## 🖼️ Adding Images

### Favicon

Add your favicon files to `/app/`:
- `favicon.ico` (16x16, 32x32, 48x48)
- `icon.png` (optional, for modern browsers)
- `apple-icon.png` (180x180, for iOS)

### Screenshots

1. Place your screenshots in `/public/images/`
2. Name them: `screenshot-1.jpg`, `screenshot-2.jpg`, etc.
3. Update paths in `siteConfig.ts` if using different names

### Logo/OG Image

1. Add `og-image.jpg` (1200x630px) to `/public/images/` for social sharing
2. Add your game logo if you want to replace the text logo

### Curator Logos

1. Place logos in `/public/images/logos/`
2. Update paths in `siteConfig.ts` under `socialProof.curatorLogos`

## 📦 Demo Downloads

### Option 1: Direct File Links (Simple)

1. Create `/public/downloads/` directory
2. Place your demo ZIP files there:
   - `texplore-demo-windows.zip`
   - `texplore-demo-linux.zip`
   - `texplore-demo-mac.zip`
3. Update file sizes in `siteConfig.ts`

### Option 2: External Hosting (Recommended)

1. Host files on GitHub Releases, S3, Cloudflare R2, etc.
2. Update URLs in `siteConfig.ts`:
   ```typescript
   windows: {
     url: "https://github.com/yourusername/texplore/releases/download/v0.1.0/texplore-demo-windows.zip",
     size: "250 MB",
     filename: "texplore-demo-windows.zip"
   }
   ```

## 📧 Email Capture Setup

### Development (Current)

Emails are saved to `/data/emails.json` for testing.

### Production Options

**Option 1: Mailchimp**

1. Get your API key and list ID
2. Uncomment the Mailchimp code in `/app/api/email/route.ts`
3. Add environment variable: `MAILCHIMP_API_KEY`

**Option 2: ConvertKit**

1. Get your API key and form ID
2. Replace the email handler in `/app/api/email/route.ts`
3. Add environment variable: `CONVERTKIT_API_KEY`

**Option 3: Custom Database**

Replace the file-based storage with your database of choice.

## 💳 Direct Purchase Setup

### Stripe Integration (Optional)

1. Get your Stripe publishable key
2. Update `siteConfig.ts`:
   ```typescript
   directPurchase: {
     enabled: true,
     stripePublishableKey: "pk_live_...", // Your key
     checkoutUrl: "/checkout",
   }
   ```
3. Implement Stripe Checkout in `/app/checkout/page.tsx` or use Stripe's hosted checkout

### Coming Soon Mode

The checkout page currently shows a "Coming soon" message. Replace it with your Stripe integration when ready.

## 📊 Analytics

### Google Analytics

1. Get your GA4 Measurement ID (format: `G-XXXXXXXXXX`)
2. Update `siteConfig.ts`:
   ```typescript
   analytics: {
     googleAnalyticsId: "G-XXXXXXXXXX",
   }
   ```

### Plausible

1. Get your domain from Plausible
2. Update `siteConfig.ts`:
   ```typescript
   analytics: {
     plausibleDomain: "texplore.com",
   }
   ```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The site is a standard Next.js app and works on:
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:
- `accent-emerald`: Primary green
- `accent-cyan`: Secondary cyan
- `accent-purple`: Accent purple

### Typography

The site uses Inter font (loaded from Google Fonts). To change:
1. Update the font import in `app/layout.tsx`
2. Adjust font sizes in Tailwind classes

### Animations

Animations use Framer Motion and CSS. Adjust timing in:
- `tailwind.config.ts` (keyframes)
- Component files (Framer Motion props)

## 📱 SEO Checklist

- ✅ OpenGraph tags
- ✅ Twitter cards
- ✅ Structured data (VideoGame schema)
- ✅ Sitemap
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Meta descriptions

## 🔧 Troubleshooting

### Images not loading

- Ensure images are in `/public/` directory
- Use relative paths starting with `/` (e.g., `/images/screenshot-1.jpg`)
- Check file names match exactly (case-sensitive)

### Downloads not working

- Verify file paths in `siteConfig.ts`
- Check that files exist in `/public/downloads/`
- For external URLs, ensure CORS is configured

### Email capture failing

- Check `/data/` directory is writable
- For production, ensure API route is deployed
- Check browser console for errors

## 📄 License

This website code is provided as-is for your game marketing needs.

## 🤝 Support

For issues or questions:
- Check the FAQ section
- Review Next.js documentation
- Check Tailwind CSS docs

---

Built with ❤️ for indie game developers

