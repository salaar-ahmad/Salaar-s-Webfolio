# Design: modern dark

A clean dark site with one accent colour. The first screen says who it is for and switches between two audiences: someone with a project, or someone hiring full-time. Source of truth: `styles/v6.css`, `components/v6/`.

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0b0d` | Page |
| Surface | `#111317` | Cards, tiles, inputs |
| Surface 2 | `#181b20` | Hover and nested surfaces |
| Line | `#262a30` | Borders and dividers |
| Text | `#f3f4f1` | Headings and body |
| Muted | `#a5aab2` | Secondary text |
| Accent | `#c6f24e` | Primary buttons, selected states, results, focus rings |
| On accent | `#0a0b0d` | Text on the accent |

The accent is the only strong colour. Kind-of-work dots (red, violet, magenta, amber, green) appear only as 10px markers.

## Type

Geist, loaded with `next/font` as `--font-sans`. Headings 700 with tracking -0.035em to -0.04em; display up to 86px. Body 17px / 1.55. Card titles 600.

## Components

- Header: sticky, blurred dark bar, pill nav links, accent booking pill, 2px accent scroll-progress line.
- Hero: audience switch, audience line, headline with one accent phrase, two actions, credentials, live Islamabad time; proof cards on the right that change with the audience.
- Work cards: screenshot or logo tile, kind and region, title, result in accent; a card opens to full width with context, what I did and platforms.
- Bento: three count-up number tiles, a three-stage "how a project runs" tile, a portrait tile.
- Experience: expandable rows; credentials as small cards.
- Review reel: one large quote at a time with arrows.
- Chips: pill filter buttons; the selected one is accent.
- Inner pages: large title on a faint accent glow, then cards, accordions and filters in the same system.

## Shape and motion

Radius 22px on cards and tiles, 14px on inputs, full pills on buttons and chips. 1px borders, no drop shadows on cards. Easing `cubic-bezier(0.16, 1, 0.3, 1)`. Hover lifts of 3 to 4px, short rise-in on content swaps. All motion is disabled under `prefers-reduced-motion`.
