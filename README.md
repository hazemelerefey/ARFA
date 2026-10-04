# Ahmed Gamal Arfa — Portfolio

Personal portfolio for Ahmed Gamal Arfa, AI & Data Engineer, designed by Hazem Elerefy. Native Next.js App Router site with React components and Motion animations. Layout and interactions are modelled on the structure of the Spector Framer template; no Spector copy, images, logos or code are included. All copy and imagery are Ahmed's own, taken from his previous portfolio.

## Develop

```sh
npm ci
npm run dev      # http://localhost:3100
```

## Deploy

```sh
npm ci
npm run build
npm start        # port 3100
```

No environment variables or backend are required. The contact and newsletter forms open the visitor's mail app with a drafted message; nothing is stored.

## Structure

- `content/site.ts` — all copy: profile, projects, credentials, experience, articles, FAQs.
- `app/` — routes: home, about, projects (+ case studies), lab (+ articles), contact, legal pages, 404.
- `components/` — nav, footer, section headers, call card, motion helpers (reveal, line reveal, counters, hover text roll).
- `public/media` — project screenshots, certificates and portrait; `public/fonts` — Plus Jakarta Sans (SIL OFL).
