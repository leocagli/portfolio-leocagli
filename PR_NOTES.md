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
- [ ] **Tren Solar hackathon (Argentina.dev, 22 Nov 2026)** — attendance / number of participants.
- [ ] **Argentina.dev** — member count.
- [ ] **Agentic City** — a confirmed one-line product description (currently only stated as a
      project submitted to Superteam Earn / Colosseum).
- [ ] **LinkedIn-only experience** not already on this site (LinkedIn could not be read without
      login) — any roles there that should be added here.
- [ ] **AI and Web3 professor/mentor at UCASAL** — not found on the current site or in the
      available CV; confirm before adding.
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
