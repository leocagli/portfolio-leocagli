# Leonardo Cagliero — Portfolio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://portfolio-leocagli.vercel.app)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

Personal portfolio of **Leonardo Cagliero** — AI & Web3 Product Strategist, Fintech Infrastructure Builder, and Ecosystem Contributor from LATAM. Building programmable coordination systems using AI agents, stablecoin payments, and smart contracts on Stellar/Soroban.

**Live:** https://portfolio-leocagli.vercel.app

---

## Highlights

- 🏆 **Hackathon wins**: ETHGlobal Buenos Aires (Yellow Track), Stellar Give Hackathon, Meridian Rio (Top 5 with Tralala Contracts), Instawards ($15k USD with Cosmos), Y-Hat UBA Exactas (3er puesto — AI Track with Provi.ia), Stellar/Nearx Pulso Hackathon (Instawards $15k + São Paulo Stellar Summit trip)
- 🌎 **Ecosystem**: Open Stellar, Cosmos LATAM, Codigo Alebrije, Stellar House Mexico City, PunaTech Salta / Arkiv (mentor & co-organizer), Descentralizar / Bitcoin Argentina (speaker)
- 🛠️ **Projects**: Cosmos Pay, Open Stellar, Shield Stellar, Tralala Contracts, PlatanPay, and more — see the [portfolio section](https://portfolio-leocagli.vercel.app/#portfolio)

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS 4 + custom neo-brutalist design system |
| UI | Radix UI primitives + shadcn/ui + lucide-react icons |
| Animation | Framer Motion (scroll-triggered reveals, marquee, photo carousel) |
| Fonts | Onest (via `next/font`) |
| Analytics | Vercel Analytics |
| Deploy | Vercel (auto-deploy from `main`) |

## Sections

`Hero` (photo carousel) · `Logo marquee` · `Services` · `About` · `Portfolio` · `Experience` · `Education` · `Awards & ecosystem` · `Speaking` · `Articles` · `Footer`

Each section is a standalone component in [`components/`](components/) — content lives inline as typed arrays, so updating projects/awards is a one-file edit.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm lint
```

## Structure

```
app/            # App Router: layout (fonts + SEO metadata) and single page
components/     # One component per section + ui/ primitives
public/
  images/       # profile photos
  logos/        # project logos (Cosmos, Open Stellar, Tralala, PlatanPay, ...)
lib/            # utils (cn)
```

## Contact

- GitHub: [@leocagli](https://github.com/leocagli)
- X: [@leocagli](https://x.com/leocagli)
- LinkedIn: [leocagli](https://linkedin.com/in/leocagli)
- Email: leocagli@gmail.com

---

<sub>Design based on the community **Paperfolio** template (original design by Brix Templates), rebuilt with [v0](https://v0.app) and heavily customized.</sub>
