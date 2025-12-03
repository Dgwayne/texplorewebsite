# Connect Your Domain: texploregame.com

Your site is built! Now let's connect your domain so it's live at `texploregame.com`.

## Step 1: Add Domain in Vercel

1. **Go to Vercel Dashboard:**
   - Visit https://vercel.com/dashboard
   - Click on your `texplorewebsite` project

2. **Add Domain:**
   - Click **Settings** tab (top right)
   - Click **Domains** in the left sidebar
   - Click **Add Domain** button
   - Enter: `texploregame.com`
   - Click **Add**

3. **Get DNS Records:**
   - Vercel will show you DNS records to add
   - You'll see something like:
     - **A Record:** `@` → `76.76.21.21` (or similar IP)
     - **CNAME Record:** `www` → `cname.vercel-dns.com` (or similar)

## Step 2: Update DNS in Squarespace

1. **Log into Squarespace:**
   - Go to your Squarespace account
   - Navigate to your domain settings

2. **Find DNS Settings:**
   - Go to **Settings** → **Domains**
   - Click on `texploregame.com`
   - Look for **DNS Settings** or **Advanced DNS**

3. **Add DNS Records:**
   - Add the **A Record** Vercel provided:
     - Type: **A**
     - Host: `@` (or leave blank)
     - Points to: [IP from Vercel]
   - Add the **CNAME Record** Vercel provided:
     - Type: **CNAME**
     - Host: `www`
     - Points to: [CNAME from Vercel]

4. **Save Changes**

## Step 3: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours**
- Usually works within **1-2 hours**
- You can check status at: https://www.whatsmydns.net
  - Enter `texploregame.com`
  - Check if A record points to Vercel's IP

## Step 4: Verify in Vercel

- Go back to Vercel → Settings → Domains
- Status should change from "Pending" to "Valid Configuration"
- Vercel will automatically issue SSL certificate

## Step 5: Test Your Site

Once DNS propagates:
- Visit `https://texploregame.com` (should work!)
- Visit `https://www.texploregame.com` (should redirect)

## Troubleshooting

### If Squarespace Won't Let You Edit DNS:
- Some Squarespace plans don't allow external DNS
- **Option 1:** Upgrade Squarespace plan (if they offer DNS management)
- **Option 2:** Transfer domain to another registrar (Namecheap, Google Domains, etc.)
- **Option 3:** Contact Squarespace support for help

### If Domain Doesn't Work After 2 Hours:
- Check DNS propagation: https://www.whatsmydns.net
- Verify DNS records match exactly what Vercel provided
- Check Vercel dashboard for any error messages

---

**Once DNS propagates, your site will be live at texploregame.com!** 🎉

