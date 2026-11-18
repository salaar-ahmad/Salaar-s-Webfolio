# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally (confirmed by Salaar, 2026-11-15):

- Clients hiring a project manager: founders and operations leads with an ERP, Power Platform, automation or ClickUp project that is slipping or about to start. They arrive from Upwork, LinkedIn or a referral and decide whether to book a 30-minute call.
- Employers and recruiters screening for a full-time Technical / ERP Project Manager. They scan for roles, dates, scale and credentials, then open the resume.

## Product Purpose

Personal portfolio of Salaar Ahmad Furqan, Technical & ERP Project Manager based in Islamabad. Success: a visitor understands what he delivers and for whom, sees concrete project results, and books a call (Cal.com) or opens the resume.

## Positioning

A former Pakistan Army Captain (Technical Project Manager and QA Officer, teams of up to 22) who now runs ERP and automation rollouts the way he ran operations: scoped properly, kept moving, handed over so they still work after go-live. Delivery across SAP, Dynamics 365, Power Platform, ClickUp and automation tools for clients in Australia, the US, Europe and Latin America.

## Operating Context

Visitors come from Upwork profile links, LinkedIn, proposals and direct outreach, on desktop and phone. Factual working material: cutover runbooks, sprint boards (Azure Boards), UAT, solution architecture documents, executive dashboards, go/no-go decisions, hypercare.

## Capabilities and Constraints

- Next.js 16 App Router, React 19, Tailwind 4 available, framer-motion, deployed on Vercel with Vercel Analytics.
- Routes: `/` (single-page homepage), `/about`, `/services`, `/projects`, `/projects/[slug]`, `/testimonials`, `/resume` (PDF viewer), `/contact` (EmailJS form), `/classic` (old homepage).
- Booking opens a Cal.com modal (`@calcom/embed-react`) with a plain link fallback.
- Homepage content lives in `components/v5/data.js`; long-form case studies in `data/projects.js`.
- Redesign scope confirmed: the whole site, not only the homepage.

## Brand Commitments

- Name: Salaar Ahmad Furqan. Headline line in use: "Separate systems. One operation."
- Voice: plain, first person, specific numbers, no hype.
- Problems Salaar named with the current look (2026-11-15): looks generic, too busy, the work is not the star.

## Evidence on Hand

- 15 projects with context / what I did / result (`components/v5/data.js`), 6 roles, 7 credentials.
- Project screenshots in `public/images/`, portrait `public/v5/hero.webp`, avatar, tool and employer logos in `public/v5/logos/`.
- Resume PDF `public/Resume_Salaar-Ahmad-Furqan.pdf`. Testimonials on `/testimonials`.
- Credentials: Top Rated on Upwork, ClickUp Expert certified, PMP in progress.
- Do not invent clients, metrics, testimonials or certifications beyond these.

## Product Principles

1. The work leads: results and numbers before decoration.
2. One clear path: see proof, then book a call or open the resume.
3. Fewer, stronger sections over many competing ones.
4. Every claim traceable to a named project or role.
