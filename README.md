### Forked from [navn-r](https://github.com/navn-r)

### Schema

This resume uses the schema from the [JSON Resume](https://jsonresume.org/schema/) initiative. As such, all information found in the resume is located in [`resume.json`](/src/resume.json). Types for each property in the Resume schema is located in [`resume.schema.ts`](/src/resume.schema.ts).

### Built with:

- [Svelte](https://svelte.dev) + TypeScript + SCSS
- Puppeteer for auto-magically generating a pdf on build (view [here](https://github.com/aryanA101a/resume/blob/gh-pages/AryanArora_Resume.pdf))
- GitHub Actions on push to Github Pages
- :heart:

### Get Started

Install dependencies
```
pnpm install
```

Dev server
```
npm run dev
```

Build to production
```
npm run build
```

Print to PDF (Requires dev server to be running)
```
npm run print
```
