# Bühler bagging line

A small Angular 22 application for the supplied assignment. Four machines are shown in the navigation and in the line overview, with matching status icons and colours.

## Running locally

Requires Node.js 22.22.3+ (or a supported Node 24/26 release).

```bash
npm install
npm start
```

```bash
npm run build
npm run typecheck
npm test
```

Machine data: `src/app/data/machines.ts`. Icons are stored in `public/icons` so the app does not depend on Google Fonts. All component templates and SCSS are in separate files.
