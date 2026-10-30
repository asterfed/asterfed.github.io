# Asterfed

A responsive, static company profile website for Asterfed, built with semantic HTML, CSS, and vanilla JavaScript. It has no build step or runtime dependencies and is configured for GitHub Pages.

## Preview locally

Serve the repository root with a local static server:

```sh
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). Serving the site over HTTP also lets the browser persist language and theme preferences reliably.

## Version
v1.0.0

## Features

- Responsive company profile layout
- English and Indonesian translations
- Light and dark themes; language and theme preferences are saved in browser storage
- Theme-specific favicons
- Email, WhatsApp, Instagram, and TikTok contact links

## Project structure

```text
.
├── _config.yml
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   └── asterfed-logo-only.png
│   └── js/
│       └── main.js
├── favicon.ico
├── favicon-dark.ico
└── index.html
```

## Updating the site

- Edit page content, contact links, social profiles, and SEO metadata in `index.html`.
- Update English and Indonesian interface text in the `translations` object in `assets/js/main.js`.
- Adjust layout, responsive behavior, and theme colors in `assets/css/styles.css`.
- Replace the logo at `assets/images/asterfed-logo-only.png` and regenerate both favicon files if the brand mark changes.
