# FlowLock

An interactive API-security concept focused on behavior-based abuse detection,
adaptive defense, and rate-limit bypass scenarios. It was created as a front-end
prototype for Code Craft Chase 2.0.

[View the live prototype](https://flow-lock-nine.vercel.app/)

## What it demonstrates

- Product storytelling for a technical security concept
- Threat and defense scenarios presented through an interactive interface
- Responsive layouts, animated glass surfaces, and data-inspired visuals
- Clear positioning around API abuse that may pass identity-based controls

## Stack

- HTML, CSS, and JavaScript
- Tailwind CSS via CDN
- Three.js
- GSAP
- Font Awesome

## Run locally

No build step is required:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Scope

FlowLock is a user-interface and product-concept prototype. It does not ship a
production API gateway or detection engine, and should not be represented as a
deployed security control.
