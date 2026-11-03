# Project Instructions

- This is a dependency-free static storefront. Open `index.html` directly in a browser; no build task is required.
- Product data lives in the `products` array near the top of `script.js`. Keep each product's category, price, old price, image, alt text, featured/deal flags, and destination URL in that object.
- Keep product destinations pointed to the official affiliate URLs and preserve their tracking parameters. Check links, prices, availability, discounts, and legal text before publishing.
- Use authorized product photos that match each listing; prefer local files in `assets` over temporary external image URLs.
- Institutional page content is stored in the `legalPages` object in `script.js`; revise it if the site's data collection or operation changes.
- Search, category filtering, and hash-based institutional pages are implemented in vanilla JavaScript. Keep the markup IDs used by `script.js` in sync when changing `index.html`.
