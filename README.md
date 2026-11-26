# Leonardo Cagliero — Portfolio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://portfolio-leocagli.vercel.app)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

Personal portfolio of **Leonardo Cagliero** — from Salta, Argentina. I build products, analyze data and automate work with AI. Founder of Cosmos Pay and Argentina.dev. Currently building BA Protege Plus with Innova Labs and LOTBA, with about 5 years of work experience in finance, payments and logistics. Open to junior Product, Data Analyst and AI Automation roles.

**Live:** https://portfolio-leocagli.vercel.app

---

## Highlights

- 🏆 **Hackathons & grants**: Tripothon S1 São Paulo (Best Game with Runa), Instawards (US$10k, no equity — with Cosmos Pay), Y-Hat UBA Exactas (3rd — AI Track with Provi.ia)
- 🌎 **Community**: Mentor & judge at HackMeridian 2026 (Stellar), Lisbon, 25–26 Oct 2026 (165 projects); mentor & judge at Cursor Hackathon Jujuy on the Tren Solar (22 Nov 2026, 70 attendees); Argentina.dev (~3,000 members across Salta Dev, Jujuy Dev and Formosa Dev); NASA Space Apps Salta workshop; Código Alerta at UCASAL; Cabildo Tech in Jujuy; UTN Córdoba talk with Bitcoin Argentina; GMI Cloud Clouder ambassador
- 🛠️ **Projects**: Cosmos Pay, Argentina.dev, Runa, Agentic City — and more on [GitHub](https://github.com/Bitcoindefi)

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

`Hero` (photo carousel + light 3D project nav, with a non-3D fallback) · `Latest` (short timeline) · `Experience` · `Projects` (one story per project) · `Talks & workshops` · `Education` · `Footer`

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
