# GovAccess — Responsive Dashboard Demo

A standalone, mobile-first accessibility audit dashboard built with semantic HTML5, CSS custom properties, CSS Grid, Flexbox, and vanilla JavaScript.

## Features

- Responsive layout designed for 320px, 480px, 768px, 1024px, and 1440px viewports.
- CSS design tokens for colors, typography, spacing, radii, shadows, and transitions.
- Light/dark theme toggle with preference saved in browser local storage.
- Mobile navigation drawer.
- Responsive audit statistics, CSS chart, compliance visualization, and horizontally scrollable data table.
- Accessible landmarks, labels, table headers, dialog, status messages, and keyboard focus styles.
- Reduced-motion support.

## Run locally

No build tools or dependencies are required.

1. Extract the project.
2. Open `index.html` in a browser.

Optional: run a local static server from this folder:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Responsive testing

Use Chrome or Edge DevTools:

1. Open DevTools (`F12`).
2. Toggle the Device Toolbar (`Ctrl + Shift + M`).
3. Test widths: `320`, `480`, `768`, `1024`, and `1440`.
4. Capture screenshots at each width and save them in `screenshots/`.

The page itself should not have horizontal overflow. The audit table intentionally has its own horizontal scroll container on narrow screens.

## Project files

```text
responsive-dashboard-project/
├── index.html
├── style.css
├── script.js
├── README.md
└── screenshots/
```

## Integration into an existing React project

This is a complete standalone demo, not a drop-in replacement for an existing React app. To integrate it, port the page structure from `index.html` into your React components and import `style.css` from your app entry point. Preserve existing app-specific component styles and class names where needed.

## GitHub

From the project folder:

```bash
git init
git add .
git commit -m "Build responsive accessibility audit dashboard"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
