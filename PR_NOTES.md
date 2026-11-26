# PR notes — portfolio refresh (branch `portfolio-refresh-nov26`)

## 1. Summary of what changed

This is a content and information-architecture refresh of the existing portfolio. The visual
language (bold type, color blocks, black borders, rounded cards, Onest font) was kept.

- **Resolved all merge conflicts.** `main` had unresolved conflict markers in `app/layout.tsx`,
  `hero-section`, `about-section`, `experience-section`, `education-section`, `awards-section`,
  `portfolio-section`, `footer` and `services-section`, which is why the latest Vercel production
  deploys failed. Every file now compiles cleanly.
- **English only.** Removed the EN/ES language toggle and the i18n provider (`lib/i18n.tsx`
  deleted, `LanguageProvider` removed from `app/layout.tsx`). All copy is now English.
- **New page order:** Navigation → Hero → Latest → Experience → Projects → Education →
  Community & teaching → Footer.
- **New "Latest" section** with confirmed recent activity (newest first).
- Latest also includes the Sep 2026 SDF + BAF Buildathon kick-off with Cosmos Pay, from Leo's public
  LinkedIn post.
- **Experience moved above Projects.** Shows Cosmos Pay (founder), El Depo, Food Packaging,
  Congress Rental and Nature & Fitness with their existing duties. Removed the "14+ years"
  subtitle and the Bitcoin.defi "2017 – Present" professional-tenure card.
- **Projects** now features exactly 4 cards (Cosmos Pay, Argentina.dev, Runa, Agentic City) plus
  a "See more on GitHub" link to the org (`https://github.com/Bitcoindefi`) and a compact list of
  other projects that links only to URLs already present in the repo.
- **Education** kept the existing items in English; UCASAL updated to "Mar 2018 – 2027"
  (45/49 courses completed kept), Machine Learning marked "Completed July 2026".
- **Community & teaching** section merges the confirmed community items with the awards that
  remain accurate after the Instawards fix.
- **Removed sections:** Services, Lab notes / Articles, the newsletter block in the footer, the
  keyword/logo marquee (`LogoMarquee`) and the standalone About section. All nav/footer links
  now point to real sections; `#services` and the dead `#contact` buttons are gone (the nav mail
  button is a `mailto:` link).
- Updated `app/layout.tsx` document title/metadata and the `README.md`.
- **No Download CV button shipped** (see the CV TODO below). The hero's secondary action scrolls
  to `#experience`; the primary action scrolls to `#latest`.
- Did **not** add "AI and Web3 professor/mentor at UCASAL" or a "Puna Tech closing sunset side
  event" — neither is confirmed (see TODO). Nothing mentions Stellar Snap or MetaMask.

## 2. Facts Leo must still confirm before they can be added to the site

- [x] **Stellar Meridian 2026** — confirmed as HackMeridian 2026 (Stellar), Lisbon, 25–26 Oct 2026;
      mentored Scale-track teams for Cosmos Pay and helped judge 165 projects from 350+ builders.
- [x] **Tren Solar / Cursor Hackathon Jujuy (22 Nov 2026)** — 70 attendees; mentor and judge; Estación Volcán, Tren Solar de la Quebrada; organized with jujuy.dev / Argentina.dev, Cursor, SpaceXAI community, Nodo and Argentina Space.
- [x] **Argentina.dev** — about 3,000 members in total, across Salta Dev, Jujuy Dev and Formosa Dev.
- [x] **Agentic City** — a gamified orchestrator for AI agents. Submitted to Superteam Earn / Colosseum (Oct 2026).
- [ ] **LinkedIn-only experience** not already on this site (LinkedIn could not be read without
      login) — any roles there that should be added here.
- [x] **UCASAL workshops (confirmed)** — Código Alerta Taller N°2 (8 Oct 2026, virtual) and NASA Space Apps Salta workshop “IA para llegar al MVP” (6 Nov 2026, 14:00–16:00, Aula 6, Edificio 9). The older “professor/mentor of AI and Web3 at UCASAL” title is still not used, because that exact title was not confirmed.
- [ ] **"Puna Tech closing sunset side event"** as a distinct event — only the opening/closing
      mentor-and-co-organizer role at the PunaTech Salta / Arkiv Network hackathon is confirmed.
- [ ] **A complete English PDF CV** that includes the formal jobs (Congress Rental, Food Packaging,
      Nature & Fitness) *and* studies. The existing `Leonardo_Cagliero_Resume_ATS.pdf` has the
      studies (UCASAL) but is missing those formal jobs, so it was **not** added to `public/` and
      no Download CV link was shipped. Once a complete CV exists, a Download CV button can go live.

## 3. Corrections made to previously inaccurate claims

- **Instawards** corrected from **US$15k** to **US$10k (no equity)** everywhere (Community/awards
  section, README, experience and project copy). Dropped the "$5k/month × 3 months" phrasing and
  any equity implication.
- **"14+ years"** corrected to **about 5 years of work experience in finance, payments and
  logistics**, plus founding work. Bitcoin.defi is no longer presented with a 2017 start date used
  as professional tenure.

## 4. Deployment note

Two Vercel projects auto-deploy from this repo: **`portfolio-leocagli`** and **`leocagli`**, both
under the **`leo-caglieros-projects`** team. `main`'s last production deploys failed because of the
merge-conflict markers; the live site is still serving an older successful deploy. This branch
(`portfolio-refresh-nov26`) must build cleanly before it is merged so those deploys recover.
`pnpm build` passes on this branch.


## 5. November 2026 media and facts pass

Added confirmed items and compressed media (stills under 400 KB; Tren Solar clip 6.7 MB h264; Cabildo 1.2 MB h264 with audio).

- Current work: BA Protege Plus with Innova Labs (innovation lab of the City of Buenos Aires) and LOTBA. YouTube embed (youtube-nocookie) captions the official video title “BA Protege plus” from oEmbed (`https://youtu.be/roGEFiwATeI`).
- Cursor Hackathon Jujuy / Tren Solar: mentor pass + compressed video.
- HackMeridian photos (mentoring laptop sign; “With the SDF CEO at HackMeridian” — no name). Official 165 projects, not 200.
- NASA Space Apps flyer; Código Alerta photos; Cabildo Tech video; UTN Córdoba talk “Cómo descentralizamos” (photo + short clip, no date).
- BNB Agent Studio Workshop at “BNB Builder Session: Salta” (BNB Chain LatAm). Luma screenshot only confirms Saturday 26th, starting at 11:30 — month/year and end time were not added.
- Runa: Best Game at Tripothon S1, playruna.vercel.app, 3D gameplay and landing (3D models generated with Tripo).
- Solana IRL and MedFlow/NAVES/LOTBA (4 Oct LinkedIn post) kept. MedFlow also notes HSIL origin, NAVES scholarship and finalist.
- Cosmos Pay start date (Mar 2025) and “about 5 years” were not changed.
