# keshtek.com

Marketing site for Keshtek LLC. Vite + React, built to static files.

## Develop

```bash
npm install
npm run dev
```

Site copy (services, expertise, contact details) lives in `src/content.js`.

## Deploy (Cloudflare Pages)

Connected to GitHub; every push to `main` redeploys.

- Framework preset: Vite (or None)
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: set by `.node-version`
