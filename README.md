# Eagle Hills Homes — hyperlocal realtor site for Eagle Hills / The Hills South, Summerlin.

Clone pattern from opportunityzonespecialist.com with RealScout office-listings and Calendly widgets on every page.

## Stack

- Next.js 15 App Router
- TypeScript + Tailwind CSS
- Official RealScout web components (`em.realscout.com` + `www.realscout.com`)
- Official Calendly embed + badge widgets

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Key routes

| Path | Purpose |
|------|---------|
| `/` | Eagle Hills homepage + widgets |
| `/homes-for-sale` | Live MLS search |
| `/community` | Hyperlocal community guide |
| `/buyers` / `/sellers` | Realtor services |
| `/home-valuation` | CMA / valuation CTA |
| `/contact` | NAP, map, Calendly |
| `/faq` | FAQ + schema |

## Environment

See `.env.example` for RealScout agent id, Calendly URL, GBP URL, and Search Console verification.

## Google Search Console

1. Add URL-prefix property: `https://www.eaglehillshomes.com`
2. Verify with **HTML tag**: set `GOOGLE_SITE_VERIFICATION` in Vercel → redeploy  
   (or place `googleXXXXXXXX.html` in `/public` — see `public/google-site-verification.README.txt`)
3. Confirm `<meta name="google-site-verification" …>` on the homepage
4. **Sitemaps** → submit `https://www.eaglehillshomes.com/sitemap.xml`
5. Apex `https://eaglehillshomes.com` 308-redirects to www (middleware)

Live crawl aids already in the build: `app/robots.ts`, `app/sitemap.ts`, index/follow robots metadata, LocalBusiness + FAQ JSON-LD, www canonicals.
