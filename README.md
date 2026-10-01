# Manakeesh Corner ordering page

One link for Instagram, Facebook, posts, and WhatsApp.

## Update links, images, and branches

Edit `config.js` only.

- Put a link in quotes to show that button.
- Leave `""` to hide it.
- `offer` shows a gold strip when filled. Leave it empty if there is no confirmed offer.
- Add another object inside `branches` to show a branch picker before the ordering buttons.
- Replace `images/logo.jpg` or `images/hero.jpg`, or change the paths in config.

Platform keys: `direct`, `talabat`, `deliveroo`, `careem`, `noon`, `whatsapp`.

## Clicks

Each order button records the platform and traffic source (Instagram, Facebook, WhatsApp, a `utm_source`, or direct) in this browser. Open the page with `?stats` to see counts on that phone.

For counts across customers, paste a GA4 measurement ID into `gaMeasurementId` in `config.js`.
