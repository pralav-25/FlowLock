# FlowLock

[![Checks](https://github.com/pralav-25/FlowLock/actions/workflows/ci.yml/badge.svg)](https://github.com/pralav-25/FlowLock/actions/workflows/ci.yml)

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

## Interaction and validation

Mobile navigation supports Escape, focus return, and a focus loop. Calls to
action lead to the architecture, repository, or an email draft. Prices remain
illustrative; there is no trial signup or billing service.

Run `python3 scripts/check_site.py` with Node.js installed to validate local
resources, fragments, duplicate IDs, and JavaScript syntax. The same checks run
in GitHub Actions on pushes and pull requests.

Footer navigation links to implemented sections, repository documentation, and
change history. Visitors requesting reduced motion do not start the two
continuous WebGL background effects.
