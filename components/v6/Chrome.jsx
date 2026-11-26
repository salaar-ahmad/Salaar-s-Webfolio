"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCalApi } from "@calcom/embed-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FiMail, FiPhone } from "react-icons/fi";
import { BOOKING_URL, EMAIL, PHONE, PHONE_TEL, UPWORK_URL } from "@/data/site";

export const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16M13 5l7 7-7 7" /></svg>
);

// Cal.com booking opens in an in-page modal. The plain link stays as a fallback
// (no JavaScript, embed blocked, or a ctrl/cmd-click to open a new tab).
const CAL_NAMESPACE = "intro-call";
const CAL_LINK = new URL(BOOKING_URL).pathname.replace(/^\//, "");
const CAL_CONFIG = { layout: "month_view", theme: "dark" };
let calReady = null;
function loadCal() {
  if (!calReady) {
    calReady = getCalApi({ namespace: CAL_NAMESPACE }).then((cal) => {
      cal("ui", { theme: "dark", hideEventTypeDetails: false, layout: "month_view", cssVarsPerTheme: { dark: { "cal-brand": "#c6f24e" } } });
      return cal;
    });
  }
  return calReady;
}

export function Book({ className, children }) {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    loadCal()
      .then((cal) => cal("modal", { calLink: CAL_LINK, config: CAL_CONFIG }))
      .catch(() => window.open(BOOKING_URL, "_blank", "noopener"));
  };
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick} onPointerEnter={() => loadCal().catch(() => {})} aria-haspopup="dialog">{children}</a>
  );
}

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#how", label: "Process" },
  { href: "/#history", label: "Experience" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export function SignBand() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [spy, setSpy] = useState("");
  // On the homepage, highlight the menu item for the section in view.
  useEffect(() => {
    if (pathname !== "/") return;
    const els = NAV.filter((n) => n.href.startsWith("/#")).map((n) => document.getElementById(n.href.slice(2))).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setSpy(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  const current = (href) => {
    if (href.startsWith("/#")) return pathname === "/" && spy === href.slice(2) ? "location" : undefined;
    return pathname === href || pathname.startsWith(href + "/") ? "page" : undefined;
  };

  return (
    <header className="band">
      <div className="band-in">
        <Link href="/" className="band-mark">Salaar Ahmad Furqan</Link>
        <nav className={"band-nav" + (open ? " open" : "")} id="site-nav" aria-label="Primary">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current(n.href)} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button type="button" className="band-menu" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        <Book className="band-exit"><span className="long">Book a 30-min call</span><span className="short">Book a call</span><ArrowRight /></Book>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <span>Salaar Ahmad Furqan, Islamabad</span>
        <nav aria-label="Elsewhere" className="foot-links">
          <a href="https://linkedin.com/in/salaarahmadfurqan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn aria-hidden="true" /></a>
          <a href="https://github.com/salaar-ahmad/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><FaGithub aria-hidden="true" /></a>
          <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" aria-label="Upwork" title="Upwork"><SiUpwork aria-hidden="true" /></a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" title="Email"><FiMail aria-hidden="true" /></a>
        </nav>
      </div>
    </footer>
  );
}

// Shared top of every inner page: a station-name sign with the page's line colour.
export function PageHead({ title, lead, children }) {
  return (
    <div className="phead">
      <div className="wrap phead-in">
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
      <span className="phead-line" aria-hidden="true" />
    </div>
  );
}

// Closing call to action, shared by the homepage and the inner pages.
export function WayOut({ id }) {
  return (
    <section id={id} className="exit">
      <div className="wrap exit-in">
        <h2>Got a rollout that keeps slipping?</h2>
        <p className="lead">I&apos;m taking on new projects. Book a 30-minute call to go through your systems and dates.</p>
        <div className="actions">
          <Book className="btn btn-ink">Book a 30-min call<ArrowRight /></Book>
          <a href={`mailto:${EMAIL}`} className="link"><FiMail aria-hidden="true" />{EMAIL}</a>
          <a href={`tel:${PHONE_TEL}`} className="link"><FiPhone aria-hidden="true" />{PHONE}</a>
        </div>
      </div>
    </section>
  );
}
