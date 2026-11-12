"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { getCalApi } from "@calcom/embed-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FiFileText, FiMail, FiPhone } from "react-icons/fi";
import "@/styles/v5.css";
import {
  BOOKING_URL, EMAIL, PHONE, PHONE_TEL, UPWORK_URL, LOGO, SHOT, PROJECTS, ROLES, CREDS, FILTERS, STACK, CAT_FOR,
  TOOLS_A, TOOLS_B, ORBIT, MANIFESTO,
} from "./data";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-mono", display: "swap" });

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
);
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const ArrowDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
);

function Logo({ src, size, radius, pad, bleed, alt = "", eager }) {
  return (
    <span className={"logo" + (bleed ? " bleed" : "")} style={{ width: size, height: size, borderRadius: radius, padding: pad }}>
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
    </span>
  );
}

// Cal.com booking opens in an in-page modal. The plain link stays as a fallback
// (no JavaScript, embed blocked, or a ctrl/cmd-click to open a new tab).
const CAL_NAMESPACE = "intro-call";
const CAL_LINK = new URL(BOOKING_URL).pathname.replace(/^\//, "");
const CAL_CONFIG = { layout: "month_view", theme: "dark" };
let calReady = null;
function loadCal() {
  if (!calReady) {
    calReady = getCalApi({ namespace: CAL_NAMESPACE }).then((cal) => {
      cal("ui", { theme: "dark", hideEventTypeDetails: false, layout: "month_view", cssVarsPerTheme: { dark: { "cal-brand": "#3d5afe" } } });
      return cal;
    });
  }
  return calReady;
}

function Book({ className, children }) {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    loadCal()
      .then((cal) => cal("modal", { calLink: CAL_LINK, config: CAL_CONFIG }))
      .catch(() => window.open(BOOKING_URL, "_blank", "noopener"));
  };
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick} aria-haspopup="dialog">{children}</a>
  );
}

export default function WebfolioV5() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState("01");
  const [showAll, setShowAll] = useState(false);
  const [stackOpen, setStackOpen] = useState(0);
  const [role, setRole] = useState(0);
  const [k, setK] = useState(1);

  // Warm up the Cal.com embed so the modal opens quickly on first click.
  useEffect(() => { loadCal().catch(() => {}); }, []);

  // Count-up for the stats and usage bars.
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    let raf;
    let t0 = null;
    setK(0);
    const step = (t) => {
      if (t0 === null) t0 = t;
      const v = Math.min(1, (t - t0) / 1600);
      setK(v);
      if (v < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  const ease = 1 - Math.pow(1 - k, 3);

  const platformCount = useMemo(() => new Set(PROJECTS.flatMap((p) => p.platforms)).size, []);
  const shown = PROJECTS.filter((p) => filter === "All" || p.cats.includes(filter));
  const visible = showAll || filter !== "All" ? shown : shown.slice(0, 6);
  const counts = STACK.map((s) => PROJECTS.filter((p) => p.platforms.includes(s)).length);
  const max = Math.max(...counts, 1);

  const stats = [
    { label: "Projects in this index", value: Math.round(PROJECTS.length * ease), sub: "Across ERP, automation and product" },
    { label: "Regions", value: Math.round(4 * ease), sub: "AU, US, EU, LATAM" },
    { label: "Platforms wired", value: Math.round(platformCount * ease), sub: "Into one operation per client" },
    { label: "Years delivering", value: Math.round(5 * ease), sub: "End to end, scope to hypercare" },
  ];

  const tools = (list) => list.concat(list);
  const goWork = (cat) => { setFilter(cat || "All"); setOpen(null); };

  return (
    <div className={`v5 ${inter.variable} ${mono.variable}`}>
      <header className="hdr">
        <div className="wrap hdr-in">
          <a href="#top" className="mark" aria-label="Salaar Ahmad Furqan, back to top">
            <span className="c" aria-hidden="true">©</span>
            <span className="muted">Delivered by</span>
            <span>Salaar Ahmad Furqan</span>
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#stack">Stack</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <Book className="btn btn-light hdr-cta"><span className="dot pulse" aria-hidden="true" /><span className="long">Book a 30-min call</span><span className="short">Book a call</span></Book>
        </div>
      </header>

      <main>
        <section id="top" className="hero">
          <div className="wrap hero-in">
            <div className="hero-copy">
              <div className="intro rise">
                <p className="intro-main"><span className="dot pulse" aria-hidden="true" />I&apos;m Salaar, a <span className="intro-role">technical &amp; ERP project manager</span> based in Islamabad.</p>
                <p className="intro-sub">Working with teams in Australia, the US, Europe and Latin America.</p>
              </div>
              <h1 className="h1 rise d1">Separate systems.<br /><span className="grad">One operation.</span></h1>
              <p className="lead rise d2">I deliver Dynamics 365, SAP, Power Platform and automation projects that still work after go-live. Ex-Army, now running rollouts the way I ran operations.</p>
              <div className="ctas rise d3">
                <Book className="btn btn-brand">Book a 30-min call<ArrowRight /></Book>
                <a href="#work" className="btn btn-ghost">See the work</a>
              </div>
              <ul className="creds rise d3" aria-label="Credentials">
                <li className="cred"><Logo src={LOGO.Upwork} size={24} radius={12} pad={4} />Top Rated on Upwork</li>
                <li className="cred"><Logo src={LOGO.ClickUp} size={24} radius={12} pad={4} />ClickUp Expert certified</li>
                <li className="cred"><Logo src={LOGO.PMI} size={24} radius={12} pad={3} />PMP in progress</li>
              </ul>
            </div>
            <figure className="figure">
              <div className="orbit" aria-hidden="true">
                <div className="orbit-spin">
                  {ORBIT.map((n, i) => {
                    const a = (i / ORBIT.length) * Math.PI * 2 - Math.PI / 2;
                    return (
                      <span key={n} className="orb" style={{ left: `${50 + 50 * Math.cos(a)}%`, top: `${50 + 50 * Math.sin(a)}%` }}>
                        <img src={LOGO[n]} alt="" />
                      </span>
                    );
                  })}
                </div>
              </div>
              <img className="portrait" src="/v5/hero.webp" alt="Salaar Ahmad Furqan in a dark suit" fetchPriority="high" />
            </figure>
          </div>
        </section>

        <section className="tools" aria-label="Tools I deliver with">
          <div className="marquee">
            <ul className="track">
              {tools(TOOLS_A).map((n, i) => (
                <li key={n + i} className="tool" aria-hidden={i >= TOOLS_A.length || undefined}><Logo src={LOGO[n]} size={36} radius={18} pad={7} eager />{n}</li>
              ))}
            </ul>
          </div>
          <div className="marquee" aria-hidden="true">
            <ul className="track rev">
              {tools(TOOLS_B).map((n, i) => (
                <li key={n + i} className="tool"><Logo src={LOGO[n]} size={36} radius={18} pad={7} eager />{n}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="wrap mani-sec" aria-label="How I work">
          <span className="mono tint">How I work</span>
          <p className="mani">
            {MANIFESTO.split(" ").map((t, i) => {
              if (t === "[face]") return <span key={i} className="inl" aria-hidden="true"><img src="/v5/avatar.webp" alt="" /></span>;
              if (t === "[stack]") return (
                <span key={i} className="inl logos" aria-hidden="true">
                  <img src={LOGO.SAP} alt="" /><img src={LOGO["Dynamics 365"]} alt="" /><img src={LOGO.ClickUp} alt="" /><img src={LOGO.n8n} alt="" />
                </span>
              );
              return <span key={i} className="w">{t} </span>;
            })}
          </p>
        </section>

        <section className="wrap glance" aria-label="At a glance">
          <div className="bento">
            <div className="glass story reveal span2">
              <span className="mono tint" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /></svg>
                Before this
              </span>
              <p>Nearly four years as a Technical Project Manager and QA Officer in the Pakistan Army, leading teams of up to 22. Briefings, logistics, people who depend on the plan holding. That is still the job: get the scope right, keep the teams moving, and hand over something that runs without me.</p>
            </div>
            {stats.map((s) => (
              <div key={s.label} className="glass lift stat reveal">
                <span className="mono">{s.label}</span>
                <span style={{ display: "flex", flexDirection: "column", gap: 6 }}><span className="num">{s.value}</span><span style={{ fontSize: 14 }}>{s.sub}</span></span>
              </div>
            ))}
            <div className="avail reveal span2">
              <span className="mono" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#e0e6ff" }}><span className="dot pulse" style={{ background: "#4ade80" }} aria-hidden="true" />Availability</span>
              <span style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
                <span className="big">Booking calls for new projects</span>
                <Book className="btn btn-white">Check a start date</Book>
              </span>
            </div>
          </div>
        </section>

        <section id="work" className="wrap sec">
          <div className="sec-head reveal">
            <div className="t">
              <span className="mono tint">01 / Work index</span>
              <h2 className="h2">{shown.length} projects, one way of running them.</h2>
            </div>
            <div className="chips" role="group" aria-label="Filter projects by discipline">
              {FILTERS.map((f) => {
                const count = f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.cats.includes(f)).length;
                return (
                  <button key={f} type="button" className={"chip" + (f === filter ? " on" : "")} aria-pressed={f === filter} onClick={() => setFilter(f)}>
                    {f}<span className="ct">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <ul className="cards work">
            {visible.map((p) => {
              const ex = open === p.n;
              const seen = new Set();
              const logos = p.platforms.filter((x) => LOGO[x] && !seen.has(LOGO[x]) && seen.add(LOGO[x])).slice(0, 3);
              return (
                <li key={p.n} className={"wcard" + (ex ? " open" : "")}>
                  <button type="button" className="wbtn" aria-expanded={ex} aria-controls={`panel-${p.n}`} onClick={() => setOpen(ex ? null : p.n)}>
                    <span className="wtop pad"><span className="mono">{p.n} / {p.region}</span><span className="warrow" aria-hidden="true"><Arrow /></span></span>
                    <span className="wvis">
                      {SHOT[p.n] ? <img className="wshot" src={SHOT[p.n]} alt="" loading="lazy" /> : (
                        <span className="wlogos">{logos.map((x) => <Logo key={x} src={LOGO[x]} />)}</span>
                      )}
                    </span>
                    <span className="wtitle"><span className="t">{p.title}</span><span className="s">{p.summary}</span></span>
                    <span className="pills">{p.platforms.map((t) => <span key={t}>{t}</span>)}</span>
                  </button>
                  {ex && (
                    <div id={`panel-${p.n}`} className="panel facts">
                      <div className="fact"><span className="mono">Context</span><p>{p.context}</p></div>
                      <div className="fact"><span className="mono">What I did</span><p>{p.did}</p></div>
                      <div className="fact result"><span className="mono tint">Result</span><p>{p.result}</p></div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          {filter === "All" && (
            <div className="more">
              <button type="button" className="chip lg" onClick={() => setShowAll(!showAll)}>{showAll ? "Show fewer projects" : `Show all ${PROJECTS.length} projects`}</button>
            </div>
          )}
        </section>

        <section id="stack" className="wrap sec">
          <div className="sec-head reveal">
            <div className="t">
              <span className="mono tint">02 / Stack</span>
              <h2 className="h2">Counted by use, not listed for show.</h2>
            </div>
            <p style={{ fontSize: 15 }}>Open a platform to see the projects behind the number.</p>
          </div>
          <ul className="cards stack">
            {STACK.map((s, i) => {
              const ex = stackOpen === i;
              const c = counts[i];
              const projects = PROJECTS.filter((p) => p.platforms.includes(s));
              return (
                <li key={s} className={"wcard" + (ex ? " open" : "")}>
                  <button type="button" className="wbtn pad" aria-expanded={ex} aria-controls={`stack-${i}`} onClick={() => setStackOpen(ex ? null : i)}>
                    <span className="wtop"><Logo src={LOGO[s]} size={56} radius={16} pad={11} /><span className="warrow" aria-hidden="true"><Arrow /></span></span>
                    <span className="wtop" style={{ alignItems: "flex-end" }}>
                      <span style={{ fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>{s}</span>
                      <span style={{ display: "flex", alignItems: "baseline", gap: 6 }}><span className="count">{c}</span><span style={{ fontSize: 13 }}>{c === 1 ? "project" : "projects"}</span></span>
                    </span>
                    <span className="bar" aria-hidden="true"><span style={{ width: `${Math.round((c / max) * 100 * ease)}%` }} /></span>
                  </button>
                  {ex && (
                    <div id={`stack-${i}`} className="panel" style={{ padding: "0 20px 22px", display: "flex", flexDirection: "column", gap: 16 }}>
                      <ul className="plist">
                        {projects.map((q) => (
                          <li key={q.n}>
                            <span className="mono">{q.n}</span>
                            <span style={{ flex: "1 1 auto", minWidth: 0, display: "flex", flexDirection: "column" }}>
                              <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>{q.title}</span>
                              <span style={{ fontSize: 13 }}>{q.summary}</span>
                            </span>
                            <span className="mono">{q.region}</span>
                          </li>
                        ))}
                      </ul>
                      <a href="#work" className="btn btn-light" style={{ alignSelf: "flex-start" }} onClick={() => goWork(CAT_FOR[s])}>
                        Show {CAT_FOR[s] || "all"} work in the index<ArrowDown />
                      </a>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <section id="experience" className="wrap sec">
          <div className="sec-head reveal">
            <div className="t">
              <span className="mono tint">03 / Experience</span>
              <h2 className="h2">From operations to rollouts.</h2>
            </div>
          </div>
          <ol className="cards roles">
            {ROLES.map((r, i) => {
              const ex = role === i;
              return (
                <li key={r.org} className={"wcard" + (ex ? " open" : "")}>
                  <button type="button" className="wbtn pad" style={{ flex: "1 1 auto", justifyContent: "space-between" }} aria-expanded={ex} aria-controls={`role-${i}`} onClick={() => setRole(ex ? null : i)}>
                    <span className="wtop">
                      <Logo src={r.logo} size={64} radius={18} pad={10} bleed={r.bleed} />
                      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        {r.current && <span className="mono now"><i className="pulse" aria-hidden="true" />Now</span>}
                        <span className="warrow" aria-hidden="true"><Arrow /></span>
                      </span>
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <span className="mono">{r.dates}</span>
                      <span style={{ fontSize: 21, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, color: "var(--ink)" }}>{r.title}</span>
                      <span style={{ fontSize: 15 }}>{r.org}</span>
                    </span>
                  </button>
                  {ex && (
                    <div id={`role-${i}`} className="panel" style={{ padding: "0 20px 24px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px 40px" }}>
                      <p className="role-line">{r.line}</p>
                      <span className="mono">{r.place} / 0{i + 1} of 0{ROLES.length}</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 24 }}>
            <span className="mono">Education and credentials</span>
            <ul className="credlist">
              {CREDS.map((c) => (
                <li key={c.name} className="glass">
                  <Logo src={c.logo} size={48} radius={12} pad={7} />
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>{c.name}</span>
                    <span style={{ fontSize: 13 }}>{c.by}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap contact-in">
            <span className="mono tint reveal">04 / Contact</span>
            <h2 className="reveal">Got a rollout that keeps slipping?</h2>
            <div className="reveal ctas" style={{ justifyContent: "center", gap: "16px 24px" }}>
              <Book className="btn btn-brand" >Book a 30-min call<ArrowRight /></Book>
              <a href={`mailto:${EMAIL}`} className="tap contact-link"><FiMail aria-hidden="true" />{EMAIL}</a>
              <a href={`tel:${PHONE_TEL}`} className="tap contact-link"><FiPhone aria-hidden="true" />{PHONE}</a>
            </div>
            <div className="foot">
              <span>Salaar Ahmad Furqan / Islamabad</span>
              <nav aria-label="Elsewhere" className="socials">
                <a href="https://linkedin.com/in/salaarahmadfurqan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn aria-hidden="true" /></a>
                <a href="https://github.com/salaar-ahmad/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><FaGithub aria-hidden="true" /></a>
                <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" aria-label="Upwork" title="Upwork"><SiUpwork aria-hidden="true" /></a>
                <a href="/resume" aria-label="Resume" title="Resume"><FiFileText aria-hidden="true" /></a>
                <a href={`mailto:${EMAIL}`} aria-label="Email" title="Email"><FiMail aria-hidden="true" /></a>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
