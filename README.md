# Soham Ghosh — Personal Portfolio

A minimal, fast, and fully responsive personal portfolio built with **Next.js 15**, **React 19**, and **Tailwind CSS**. Designed to be clean, developer-focused, and highly interactive.

---

## Live Demo

> _Deploy link here (e.g. Vercel)_

---

## Preview

| Home | About | Projects |
|------|-------|----------|
| _screenshot_ | _screenshot_ | _screenshot_ |

---

## Features

- **Snap-scroll single-page layout** — each section fills the viewport, navigated with smooth scroll snapping
- **Animated robotic arm** — custom 13-keyframe SVG SMIL animation with pick-and-place choreography (scan → approach → grip → transport → place → retract)
- **Shooting stars background** — procedural canvas animation on the hero section
- **Scroll-triggered animations** — fade-in and swipe-left reveals on scroll using IntersectionObserver
- **Interactive world map** — contact section displays a live dot map via react-simple-maps
- **Side navigation dots** — floating section indicator that tracks the active viewport section
- **Cursor glow effect** — soft accent glow that follows the cursor
- **Fully accessible** — semantic HTML, logical tab order, skip-to-content link, WCAG AA contrast, keyboard-navigable
- **CV direct download** — one-click PDF download from the hero
- **Multi-page routing** — dedicated `/about`, `/projects`, and `/resume` pages with full detail
- **Dark theme** — CSS variable-based design token system for consistent theming
- **Security hardened** — HTTP security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) set via Next.js config

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Language | TypeScript 5 |
| Animations | CSS + SVG SMIL (zero JS animation libraries) |
| Map | [react-simple-maps](https://www.react-simple-maps.io/) |
| Deployment | [Vercel](https://vercel.com/) _(recommended)_ |

---

## Project Structure

```
MyPortfolio/
├── app/
│   ├── page.tsx              # Home (single-page with all section previews)
│   ├── about/page.tsx        # Full About page
│   ├── projects/page.tsx     # Full Projects page
│   ├── resume/page.tsx       # Full Resume page
│   ├── layout.tsx            # Root layout + metadata
│   └── globals.css           # Design tokens + global styles
│
├── components/
│   ├── Hero.tsx              # Landing section with profile image + CTAs
│   ├── AboutPreview.tsx      # About preview with robotic arm animation
│   ├── About.tsx             # Full about page content
│   ├── ProjectsPreview.tsx   # Projects grid preview
│   ├── Projects.tsx          # Full projects page content
│   ├── Resume.tsx            # Resume/CV page content
│   ├── Contact.tsx           # Contact section with world map
│   ├── Navbar.tsx            # Top navigation bar
│   ├── SideNav.tsx           # Floating section indicator dots
│   ├── Footer.tsx            # Footer with links
│   ├── SectionWrapper.tsx    # Reusable full-screen section container
│   ├── ProjectCard.tsx       # Individual project card component
│   ├── ResumeBlock.tsx       # Resume entry block component
│   ├── ScrollCue.tsx         # Animated scroll-down indicator
│   ├── ScrollAnimations.tsx  # IntersectionObserver scroll reveal
│   ├── SnapScroll.tsx        # CSS snap-scroll controller
│   ├── ShootingStars.tsx     # Canvas shooting stars animation
│   ├── CursorGlow.tsx        # Cursor follow glow effect
│   ├── WorldMap.tsx          # react-simple-maps world map
│   ├── PageWrapper.tsx       # Page transition wrapper
│   └── icons.tsx             # Shared SVG icon components
│
├── public/
│   ├── images/               # Profile, about, and education photos
│   └── Soham_Ghosh_CV.pdf    # Downloadable CV
│
├── types/                    # Shared TypeScript type definitions
├── tailwind.config.ts        # Tailwind theme configuration
└── next.config.mjs           # Next.js config + HTTP security headers
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Sghoshxperia/AI-Native_Portfolio.git
cd AI-Native_Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/):

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

---

## Customisation

All personal content is centralised:

| What | Where |
|------|-------|
| Name, bio, social links | `components/Hero.tsx` |
| About text & timeline | `components/About.tsx` |
| Projects | `components/Projects.tsx`, `components/ProjectsPreview.tsx` |
| Resume entries | `components/Resume.tsx` |
| Contact details | `components/Contact.tsx` |
| CV file | `public/Soham_Ghosh_CV.pdf` |
| Profile photo | `public/images/profile.jpeg` |
| Theme colours | `app/globals.css` (CSS variables) |

---

## License

MIT — feel free to fork and adapt for your own portfolio.

---

<p align="center">Built by <a href="https://github.com/Sghoshxperia">Soham Ghosh</a></p>
