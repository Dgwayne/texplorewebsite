# Fix: www.texploregame.com Not Working

Your main domain works, but `www.texploregame.com` doesn't. Here's how to fix it:

## Step 1: Add www Domain in Vercel

1. **Go to Vercel Dashboard:**
   - Your project → Settings → Domains
   - Click **"Add Domain"** again
   - Enter: `www.texploregame.com`
   - Click **"Add"**

2. **Vercel will show you a CNAME record:**
   - It should be something like: `www` → `cname.vercel-dns.com`
   - Or it might say "Already configured" if the root domain handles it

## Step 2: Check Squarespace DNS

1. **Go to Squarespace DNS Settings:**
   - Settings → Domains → `texploregame.com` → DNS Settings

2. **Verify CNAME Record for www:**
   - Look for a CNAME record with:
     - **Host:** `www`
     - **Points to:** Should match what Vercel shows (usually `cname.vercel-dns.com` or similar)
   
3. **If Missing or Wrong:**
   - Add/Edit the CNAME record:
     - Type: **CNAME**
     - Host: `www`
     - Points to: [Value from Vercel - usually `cname.vercel-dns.com` or your root domain]
   - Save changes

## Step 3: Alternative - Redirect www to Root

If Vercel doesn't provide a separate CNAME, you can:

1. **In Squarespace DNS:**
   - Add a CNAME record:
     - Host: `www`
     - Points to: `texploregame.com` (your root domain)
   - This will redirect www to the main domain

2. **Or in Vercel:**
   - Sometimes Vercel automatically handles www if you add both domains
   - Check if both `texploregame.com` and `www.texploregame.com` are listed in Domains

## Step 4: Wait for DNS Propagation

- DNS changes can take 5 minutes to 2 hours
- Check status: https://www.whatsmydns.net
  - Enter `www.texploregame.com`
  - Should show CNAME pointing to Vercel

## Step 5: Test

Once DNS propagates:
- Visit `https://www.texploregame.com`
- Should work or redirect to `https://texploregame.com`

---

**Most likely:** You need to add the `www` CNAME record in Squarespace DNS, or add `www.texploregame.com` as a separate domain in Vercel.

