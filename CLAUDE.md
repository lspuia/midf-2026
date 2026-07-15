# MIDF Website - Project Context

## Overview
Website for Mizoram Interior Designers Forum (MIDF), a professional organization for interior designers in Mizoram, India.

**Live URL:** https://www.midf.in (also https://midf.vercel.app)
**GitHub:** https://github.com/lspuia/midf-2026

## Tech Stack
- **Framework:** Next.js 16.2.10 (App Router, TypeScript)
- **Styling:** Inline styles (no CSS classes except fonts)
- **Fonts:** Archivo (UI), Bodoni Moda (display) via Google Fonts
- **Analytics:** @vercel/analytics
- **Deployment:** Vercel CLI (`vercel --prod`)

## Design Tokens
```
Primary Green:  #033A37
Gold Accent:    #C5975B
Paper/Cream:    #F4F0E8
Footer Dark:    #0b2e2a
Text Light:     #cfe0da
Text Muted:     #8a7a5c, #7d968f
```

## Project Structure
```
app/
├── page.tsx           # Home page
├── membership/        # Membership info
├── rates/             # Consultation fees
├── gallery/           # Photo gallery with lightbox
├── components/
│   ├── Header.tsx     # Navigation header
│   └── Footer.tsx     # Site footer
├── layout.tsx         # Root layout with SEO metadata
├── globals.css        # Base styles
├── icon.svg           # Favicon (green circle)
├── robots.ts          # SEO robots.txt
└── sitemap.ts         # SEO sitemap.xml

public/assets/
├── New-LOGO.png       # MIDF logo
└── gallery/           # Event photos (00001-00034 naming)
```

## Key Implementation Notes

### Styling Approach
- All styles are inline (design handoff requirement)
- Use `clamp()` for responsive typography
- No external CSS libraries

### Gallery Images
- Photos use naming: `00XXX-midf-meet-2022.jpeg/jpg`
- Explicit file list in `gallery/page.tsx` (not auto-generated)
- Hero image: `00019-midf-meet-2022.jpeg`
- Home page preview uses: 00001, 00006, 00010, 00034

### SEO
- Metadata in `layout.tsx`
- JSON-LD structured data for Organization
- Sitemap and robots.txt generated via Next.js

### Language
- Content is in Mizo language (html lang="mzn")
- Some English headings

## Common Tasks

### Run locally
```bash
npm run dev
```

### Deploy
```bash
git add . && git commit -m "message" && git push && vercel --prod
```

### Add gallery photos
1. Add images to `public/assets/gallery/`
2. Update the `inauguralImages` array in `app/gallery/page.tsx`

## Contact Info (in footer/SEO)
- Email: midf.mizoram@gmail.com
- Phone: 87943 15532, 96121 47337
- Registration: MSR 1573 of 02.02.2023
