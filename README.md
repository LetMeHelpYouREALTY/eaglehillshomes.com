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
