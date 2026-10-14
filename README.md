# Okinawa Off-Base Guide

English affiliate guide site for U.S. military (SOFA) families living off base
in Okinawa. Plain HTML/CSS/JS, deployed on Netlify. No framework.

```
index.html                       Home / guide hub
guide-new-arrival-essentials.html Amazon.co.jp + Wise
guide-things-to-do.html           Klook + Amazon.co.jp
guide-family-visit.html           Agoda + Airalo
about.html, contact.html, thanks.html, 404.html
affiliate-disclosure.html, privacy-policy.html
affiliates.json                   Affiliate IDs + /go/<slug> destinations (single source of truth)
scripts/build_redirects.py        Generates _redirects from affiliates.json (Netlify build command)
_redirects                        GENERATED — do not edit
js/main.js                        Nav, GA4 loader (GA_MEASUREMENT_ID), affiliate click events
```

Every affiliate link in the HTML points to `/go/<slug>`; change IDs or
destinations only in `affiliates.json`. `/go/*` links resolve on Netlify (or
`netlify dev`), not with `python3 -m http.server`.

Placeholder domain `https://www.okinawaoffbaseguide.com/` is used in canonical,
OG, sitemap, and robots — replace it with the real domain.

Operator setup steps (Japanese): see `AFFILIATE.md`.
