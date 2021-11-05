<div align="center">
  <img src="banner.svg" width="800" height="200" />
  <h6 align="center">
  
  [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/) [![Node.js CI](https://github.com/navn-r/resume/actions/workflows/main.yml/badge.svg?branch=develop)](https://github.com/navn-r/resume/actions/workflows/main.yml) [![wakatime](https://wakatime.com/badge/github/navn-r/resume.svg)](https://wakatime.com/badge/github/navn-r/resume) [![CodeFactor](https://www.codefactor.io/repository/github/navn-r/resume/badge/develop)](https://www.codefactor.io/repository/github/navn-r/resume/overview/develop)
  
  
  </h6>
</div>

### Schema

This resume uses the schema from the [JSON Resume](https://jsonresume.org/schema/) initiative. As such, all information found in the resume is located in [`resume.json`](/src/resume.json). Types for each property in the Resume schema is located in [`resume.schema.ts`](/src/resume.schema.ts).

### Built with:

- [Svelte](https://svelte.dev) + TypeScript + SCSS
- Puppeteer for auto-magically generating a pdf on build (view [here](https://github.com/navn-r/resume/blob/master/RavindaranNavinn_Resume.pdf)) (**FIXME**)
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

Print to PDF (**FIXME**)
```
npm run print
```