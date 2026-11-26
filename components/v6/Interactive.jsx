"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import Link from "next/link";
import { ROLES, CREDS, LOGO, UPWORK_URL } from "@/data/site";
import { CERTIFICATIONS, EDUCATION, SERVICES, REVIEWS, REVIEW_SHOTS } from "@/data/pages";
import { projects } from "@/data/projects";
import { LINES, LINE } from "@/data/lines";
import { ArrowRight } from "./Chrome";

const Plus = () => (
  <span className="st-toggle" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></span>
);
const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12H4M11 5l-7 7 7 7" /></svg>
);

// A row of filter buttons. options: [{ id, label, count, color }]
export function Chips({ label, options, value, onChange }) {
  return (
    <div className="filter" role="group" aria-label={label}>
      <ul className="key-list">
        {options.map((o) => (
          <li key={o.id}>
            <button type="button" className="key-btn" aria-pressed={value === o.id} onClick={() => onChange(o.id)}>
              {o.color !== undefined && <span className={"swatch" + (o.color ? "" : " all")} style={o.color ? { background: o.color } : undefined} aria-hidden="true" />}
              {o.label}{o.count !== undefined && <em>{o.count}</em>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Roles as stops on a line; each one opens.
export function History() {
  const [open, setOpen] = useState(0);
  return (
    <section id="history">
      <div className="sec-head">
        <h2>Experience</h2>
      </div>
      <ol className="history">
        {ROLES.map((r, i) => {
          const ex = open === i;
          return (
            <li key={r.org} className={(r.current ? "now" : "") + (ex ? " open" : "")}>
              <span className="h-date">{r.dates}{r.current && <b>In service</b>}</span>
              <span className="h-mark" aria-hidden="true" />
              <div className="h-body">
                <button type="button" className="h-btn" aria-expanded={ex} aria-controls={`role-${i}`} onClick={() => setOpen(ex ? null : i)}>
                  <span><span className="h-title">{r.title}</span><span className="h-org">{r.org}, {r.place}</span></span>
                  <Plus />
                </button>
                {ex && <p id={`role-${i}`} className="h-line">{r.line}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function Credentials() {
  return (
    <ul className="creds" aria-label="Education and credentials">
      {CREDS.map((c) => (
        <li key={c.name} className={/progress/i.test(c.by) ? "building" : undefined}>
          <span className="cred-logo"><img src={c.logo} alt="" loading="lazy" /></span>
          <span><strong>{c.name}</strong><span>{c.by}</span></span>
        </li>
      ))}
    </ul>
  );
}

// Certificates, filterable by who issued them.
const issuerOf = (c) => (/Project Management Institute/.test(c.issuer) ? "PMI" : /LinkedIn/.test(c.issuer) ? "LinkedIn" : c.issuer === "ClickUp" ? "ClickUp" : "Other");
export function CertList() {
  const [who, setWho] = useState("All");
  const groups = ["All", "PMI", "LinkedIn", "ClickUp", "Other"];
  const shown = CERTIFICATIONS.filter((c) => who === "All" || issuerOf(c) === who);
  return (
    <section>
      <div className="sec-head">
        <h2>Education and certifications</h2>
        <Chips label="Filter certificates by issuer" value={who} onChange={setWho} options={groups.map((g) => ({ id: g, label: g, count: g === "All" ? CERTIFICATIONS.length : CERTIFICATIONS.filter((c) => issuerOf(c) === g).length }))} />
      </div>
      <ul className="rows">
        {who === "All" && (
          <li><div><h3>{EDUCATION.degree}</h3></div><p>{EDUCATION.school}. {EDUCATION.period}.</p></li>
        )}
        {shown.map((c) => (
          <li key={c.name}><div><h3>{c.name}</h3></div><p>{c.issuer}, {c.date}</p></li>
        ))}
      </ul>
    </section>
  );
}

// Services: filter by line, open one to see what is included.
export function ServiceList() {
  const [line, setLine] = useState("all");
  const [open, setOpen] = useState(SERVICES[0].title);
  const used = LINES.filter((l) => SERVICES.some((s) => s.line === l.id));
  const shown = SERVICES.filter((s) => line === "all" || s.line === line);
  return (
    <section>
      <div className="sec-head">
        <h2>Services</h2>
        <Chips label="Filter services by kind of work" value={line} onChange={setLine} options={[{ id: "all", label: "All", count: SERVICES.length, color: "" }, ...used.map((l) => ({ id: l.id, label: l.name, count: SERVICES.filter((s) => s.line === l.id).length, color: l.color }))]} />
      </div>
      <ul className="acc">
        {shown.map((s) => {
          const ex = open === s.title;
          return (
            <li key={s.title} className={ex ? "open" : undefined}>
              <button type="button" className="acc-btn" aria-expanded={ex} onClick={() => setOpen(ex ? null : s.title)}>
                <span>
                  <span className="acc-title">{s.title}</span>
                  <span className="tag"><span className="swatch" style={{ background: LINE[s.line].color }} aria-hidden="true" />{LINE[s.line].name}</span>
                </span>
                <Plus />
              </button>
              {ex && (
                <div className="acc-body">
                  <p>{s.description}</p>
                  <ul className="ticks">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// Case studies with a live keyword filter.
const hasShot = (p) => p.image && !p.image.includes("placeholder");
export function CaseGrid() {
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const shown = projects.filter((p) => !needle || (p.title + " " + p.tags.join(" ")).toLowerCase().includes(needle));
  const quick = ["SAP", "ClickUp", "Dynamics 365", "Zapier", "Power Platform"];
  return (
    <section>
      <div className="sec-head">
        <h2>{needle ? `${shown.length} of ${projects.length} case studies` : `${projects.length} case studies`}</h2>
        <div className="search">
          <label htmlFor="case-q">Filter by tool or keyword</label>
          <input id="case-q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="For example SAP, ClickUp, Stripe" autoComplete="off" />
        </div>
        <Chips label="Quick filters" value={q} onChange={(v) => setQ(q === v ? "" : v)} options={quick.map((t) => ({ id: t, label: t }))} />
      </div>
      {shown.length === 0 ? (
        <div className="empty">
          <p>No case study mentions &ldquo;{q}&rdquo;.</p>
          <button type="button" className="btn btn-ink" onClick={() => setQ("")}>Show all case studies</button>
        </div>
      ) : (
        <ul className="cases">
          {shown.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`} className="case">
                {hasShot(p) ? <span className="case-img"><img src={p.image} alt="" loading="lazy" /></span> : <span className="case-blank">No screenshots</span>}
                <h3>{p.title}</h3>
                <p>{p.tags.slice(0, 5).join(", ")}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

// Where a review came from: a small logo badge that links to the source.
const Stars = () => (
  <span className="stars" role="img" aria-label="Rated 5.0 out of 5">
    {[0, 1, 2, 3, 4].map((n) => <svg key={n} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6L2.5 9.5l6.6-.8z" /></svg>)}
    <b>5.0</b>
  </span>
);
export function Source({ kind }) {
  return kind === "upwork"
    ? <a className="source" href={UPWORK_URL} target="_blank" rel="noopener noreferrer"><img src={LOGO.Upwork} alt="" />Review on Upwork</a>
    : <span className="source"><img src={LOGO.ClickUp} alt="" />ClickUp client testimonial</span>;
}

// Upwork reviews (text, or a screenshot when one is set in data/pages.js) plus the client testimonial graphics.
const SLIDES = [
  ...REVIEWS.map((r) => ({ kind: "upwork", quote: r.feedback, title: r.title, date: r.date, shot: r.shot })),
  ...REVIEW_SHOTS.map((s) => ({ kind: "clickup", shot: s.src, alt: s.alt, title: s.title })),
];

// One review at a time, large. Advances on its own until the visitor takes over.
export function QuoteReel() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const [all, setAll] = useState(false);
  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 6500);
    return () => clearInterval(id);
  }, [auto]);
  const go = (d) => { setAuto(false); setI((n) => (n + d + SLIDES.length) % SLIDES.length); };
  const s = SLIDES[i];
  return (
    <section id="reviews" className="reel" aria-label="Client reviews" onPointerEnter={() => setAuto(false)}>
      <div className="wrap reel-in">
        <div className="sec-head">
          <h2>What clients say</h2>
          <p className="sec-intro">Reviews from my Upwork profile, and two testimonials from ClickUp clients.</p>
        </div>
        <figure key={i} className={"reel-quote" + (s.shot ? " has-shot" : "") + (s.shot && s.kind === "upwork" ? " wide" : "")} aria-live="polite">
          {s.shot && <a className="reel-shot" href={s.shot} target="_blank" rel="noopener noreferrer" aria-label="Open the full image"><img src={s.shot} alt={s.alt || `Upwork review for ${s.title}: ${s.quote}`} /></a>}
          <div>
            <div className="reel-meta"><Source kind={s.kind} />{s.kind === "upwork" && <Stars />}</div>
            {s.quote && !s.shot && <blockquote>&ldquo;{s.quote}&rdquo;</blockquote>}
            <figcaption>{s.title && <strong>{s.title}</strong>}{s.date}</figcaption>
          </div>
        </figure>
        <div className="reel-nav">
          <button type="button" className="round" aria-label="Previous review" onClick={() => go(-1)}><ArrowLeft /></button>
          <span className="reel-count">{i + 1} / {SLIDES.length}</span>
          <button type="button" className="round" aria-label="Next review" onClick={() => go(1)}><ArrowRight /></button>
          <span className="reel-dots" aria-hidden="true">{SLIDES.map((_, n) => <i key={n} className={n === i ? "on" : undefined} />)}</span>
          <button type="button" className="btn btn-line reel-all" aria-expanded={all} onClick={() => { setAll(!all); setAuto(false); }}>{all ? "Hide the full list" : `See all ${SLIDES.length} at once`}</button>
        </div>
        {all && (
          <ul className="quotes">
            {SLIDES.map((x) => (
              <li key={x.title + (x.date || "")}>
                <Source kind={x.kind} />
                {x.shot
                  ? <img className="quote-shot" src={x.shot} alt={x.alt || `Upwork review for ${x.title}: ${x.quote}`} loading="lazy" />
                  : <blockquote>&ldquo;{x.quote}&rdquo;</blockquote>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
