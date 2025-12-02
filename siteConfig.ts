// Site Configuration - Edit this file to update all content

export const siteConfig = {
  // Game Info
  gameName: "Texplore",
  tagline: "Dig deep, die often, come back stronger.",
  description: "Mine, fight, and gamble your way through roguelite runs to build the ship that blasts you off a dying Earth to richer worlds.",
  
  // URLs
  steamUrl: "https://store.steampowered.com/app/4197100/Texplore/",
  discordUrl: "https://discord.gg/texplore",
  tiktokUrl: "https://www.tiktok.com/@texplore.game",
  youtubeUrl: "https://www.youtube.com/@Texploregame",
  
  // Demo Downloads
  demo: {
    version: "0.1.0",
    windows: {
      url: "/downloads/texplore-demo-windows.zip",
      size: "250 MB",
      filename: "texplore-demo-windows.zip"
    },
    linux: {
      url: "/downloads/texplore-demo-linux.zip",
      size: "245 MB",
      filename: "texplore-demo-linux.zip"
    },
    mac: {
      url: "/downloads/texplore-demo-mac.zip",
      size: "260 MB",
      filename: "texplore-demo-mac.zip"
    },
    whatsIncluded: [
      "First 3 biomes (Surface, Caverns, Deep Mines)",
      "Core mining and combat mechanics",
      "Upgrade system preview",
      "Save progression (carries to full game)",
      "~30 minutes of gameplay"
    ]
  },
  
  // Trailer
  trailer: {
    youtubeId: "ywe-PlQKIcw",
    thumbnail: "https://img.youtube.com/vi/ywe-PlQKIcw/maxresdefault.jpg"
  },
  
  // Screenshots
  screenshots: [
    {
      src: "/images/screenshot-1.jpg",
      alt: "Player character with green weapon facing an orange enemy in a rocky cavern"
    },
    {
      src: "/images/screenshot-2.jpg",
      alt: "MAX CRIT and BLOCK CRIT combat effects during intense gameplay"
    },
    {
      src: "/images/screenshot-3.jpg",
      alt: "Top-down view showing player stats, inventory, and minimap during exploration"
    },
    {
      src: "/images/screenshot-4.jpg",
      alt: "Character descending with jetpack trail, showing LEVEL 10 JETPACK upgrade"
    },
    {
      src: "/images/screenshot-5.jpg",
      alt: "Deep mining at depth 494 with GO EVEN DEEPER milestone notification"
    },
    {
      src: "/images/screenshot-6.jpg",
      alt: "Side-scrolling mining action with drill weapon breaking blocks"
    }
  ],
  
  // Features
  features: [
    {
      title: "Procedural Runs",
      description: "Randomly generated caves, ores, and enemies ensure every run is unique.",
      icon: "pickaxe"
    },
    {
      title: "Cash-Out Economy",
      description: "Sell your loot to upgrade your drill, jetpack, hull, and weapons between runs.",
      icon: "upgrade"
    },
    {
      title: "Performance Progression",
      description: "Earn Skill Points based on how well you perform, unlocking permanent upgrades.",
      icon: "strategy"
    },
    {
      title: "Lucky Roll",
      description: "Spend XP to gamble for wild per-run boosts that can completely change your strategy.",
      icon: "sword"
    },
    {
      title: "Earth to Moon",
      description: "Build the rocket to escape dying Earth and reach the Moon's rarer ores and tougher challenges.",
      icon: "rocket"
    },
    {
      title: "Boss Encounters",
      description: "Face world bosses and depth milestones as you push deeper into the planet.",
      icon: "infinity"
    }
  ],
  
  // Reviews/Quotes (Placeholders - no reviews yet)
  reviews: [
    {
      quote: "Coming soon to Early Access. Wishlist now to be notified when it launches!",
      author: "Steam",
      role: "Coming Soon"
    },
    {
      quote: "A roguelite mining adventure where every run makes you stronger. Dig deep, die often, come back better.",
      author: "Developer",
      role: "Dustin Garner"
    },
    {
      quote: "Procedurally generated runs, cash-out upgrades, and the gamble of Lucky Roll make each attempt unique.",
      author: "Game Features",
      role: "Early Access"
    }
  ],
  
  // FAQ
  faq: [
    {
      question: "What's included in the demo?",
      answer: "The demo includes the first 3 biomes, core mechanics, and about 30 minutes of gameplay. Your save progress carries over to the full game!"
    },
    {
      question: "What are the system requirements?",
      answer: "Minimum: Windows 10/11, 64-bit processor, Intel Core i3 or equivalent, 4GB RAM, DirectX 11 compatible GPU, 500MB storage. Linux and macOS versions may be available in the future."
    },
    {
      question: "Does the demo save progress?",
      answer: "Yes! Your demo progress saves automatically and will carry over when you purchase the full game."
    },
    {
      question: "Is controller support available?",
      answer: "Yes, full controller support is available. You can play with keyboard/mouse or any standard gamepad."
    },
    {
      question: "When will the game release?",
      answer: "Texplore is coming soon to Early Access! Add it to your Steam wishlist to be notified when it launches. Early Access is estimated to last 8-14 months."
    },
    {
      question: "Can I buy directly from your website?",
      answer: "Yes! We offer direct purchase options in addition to Steam. Direct purchases include a Steam key and DRM-free backup."
    }
  ],
  
  // Analytics (set to empty string to disable)
  analytics: {
    googleAnalyticsId: "", // e.g., "G-XXXXXXXXXX"
    plausibleDomain: "texploregame.com", // Your domain for Plausible
  },
  
  // Direct Purchase (Stripe)
  directPurchase: {
    enabled: true,
    stripePublishableKey: "pk_test_placeholder", // Replace with your Stripe key
    checkoutUrl: "/checkout", // Coming soon page or Stripe Checkout
  },
  
  // Email Capture
  emailCapture: {
    enabled: true,
    placeholder: "Enter your email for updates",
    buttonText: "Get Updates",
    successMessage: "Thanks! We'll keep you updated.",
  },
  
  // Social Proof
  socialProof: {
    showCuratorLogos: true,
    curatorLogos: [
      { name: "IndieDB", logo: "/images/logos/indiedb.png" },
      { name: "Itch.io", logo: "/images/logos/itchio.png" },
      { name: "Game Jolt", logo: "/images/logos/gamejolt.png" },
    ]
  }
}

export type SiteConfig = typeof siteConfig

