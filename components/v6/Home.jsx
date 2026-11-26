"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiFileText } from "react-icons/fi";
import { LOGO, SHOT, PROJECTS, ROLES, TOOLS_A, PROJECTS_DELIVERED, UPWORK_JOBS } from "@/data/site";
import { LINES, LINE, linesOf, lineCount } from "@/data/lines";
import { Book, ArrowRight } from "./Chrome";
import ContactSection from "./Contact";
import ProjectModal from "./ProjectModal";
import Cover, { hasCover } from "./Cover";
import { Chips, History, Credentials, QuoteReel, ServiceList } from "./Interactive";

const byN = (n) => PROJECTS.find((p) => p.n === n);
const WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"];
const word = (n) => WORDS[n] || String(n);

// The first screen speaks to whoever is visiting: someone with a project, or someone hiring.
const AUDIENCE = {
  client: {
    tab: "I have a project",
    forWhom: "For operations and IT leaders with an ERP or automation rollout",
    h: <>I run rollouts that <em>still work</em> after go&#8209;live.</>,
    lead: "I'm Salaar, a technical and ERP project manager. I take SAP, Dynamics 365, Power Platform and ClickUp projects from scope to hypercare, for teams in Australia, the US, Europe and Latin America.",
    side: "Recent results",
  },
  hire: {
    tab: "I'm hiring full-time",
    forWhom: "For hiring managers looking for a Technical or ERP Project Manager",
    h: <>A project manager who has run <em>real operations.</em></>,
    lead: "Six roles across the Pakistan Army, SAP integrations, Dynamics 365 delivery and product launches. Teams of up to 22, clients in four regions, PMP in progress.",
    side: "Most recent roles",
  },
};
const FEATURED = ["01", "02", "03", "09"];

// Counts up from zero the first time it scrolls into view.
function Count({ to, plus }) {
  return <b>{to}{plus ? "+" : ""}</b>;
}

// Salaar's local time, ticking on the client only.
function LocalTime() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => setT(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Karachi" }).format(new Date()));
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 20000);
    return () => { clearTimeout(first); clearInterval(id); };
  }, []);
  return <span className="time">{t || "--:--"}</span>;
}

const STEPS = [
  { k: "Scope", t: "Agree the scope", d: "Requirements, estimates and the solution outline are signed off before the first sprint.", ex: [["01", "Solution Architecture Document for an in-house CRM"], ["03", "MVP scope defined for the Hail rider and driver apps"], ["14", "Effort estimates and solution outline for a government tender"]] },
  { k: "Run", t: "Run the delivery", d: "Sprints, UAT and one weekly cadence for every team on the project.", ex: [["06", "Sprint planning and delivery cadence in Azure DevOps"], ["03", "Three engineering teams coordinated to launch"], ["09", "CI/CD pipelines, UAT and production deployment"]] },
  { k: "Hand over", t: "Hand it over", d: "A planned go-live with trained users, then support after launch.", ex: [["15", "One cutover playbook covering 5 workstreams"], ["02", "Training and post-go-live stabilisation"], ["01", "Structured handover and post-launch support"]] },
];

export default function Home() {
  const [who, setWho] = useState("client");
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [step, setStep] = useState(0);
  const a = AUDIENCE[who];

  const matches = PROJECTS.filter((p) => cat === "all" || linesOf(p).includes(cat));
  const shown = cat === "all" && !showAll ? matches.slice(0, 6) : matches;

  // Projects open in a modal. Arrows inside it move through the filtered list when the project is in it, otherwise through all projects.
  const openProject = (n) => setOpen(n);
  const current = open ? byN(open) : null;
  const navList = current && matches.some((p) => p.n === current.n) ? matches : PROJECTS;

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="switch" role="group" aria-label="Who are you?">
              {Object.entries(AUDIENCE).map(([k, v]) => (
                <button key={k} type="button" aria-pressed={who === k} onClick={() => setWho(k)}>{v.tab}</button>
              ))}
            </div>
            <div key={who} className="swap">
              <h1>{a.h}</h1>
              <p className="for">{a.forWhom}</p>
              <p className="lead">{a.lead}</p>
            </div>
            <div className="actions">
              {who === "client" ? (
                <>
                  <Book className="btn btn-exit">Book a 30-minute call<ArrowRight /></Book>
                  <a href="#work" className="btn btn-line">See the work</a>
                </>
              ) : (
                <>
                  <Link href="/resume" className="btn btn-exit"><FiFileText aria-hidden="true" />Open the resume</Link>
                  <a href="#history" className="btn btn-line">See the experience</a>
                </>
              )}
            </div>
            <ul className="trust" aria-label="Credentials">
              <li><span className="trust-logo"><img src={LOGO.ClickUp} alt="" /></span><span><b>ClickUp Expert</b> certified</span></li>
              <li><span className="trust-logo"><img src={LOGO.PMI} alt="" /></span><span><b>PMP</b> in progress with PMI</span></li>
            </ul>
            <p className="status-line"><span className="live" aria-hidden="true" />Booking calls for new projects<span className="sep" aria-hidden="true" />Islamabad <LocalTime /></p>
          </div>

          <figure className="stage">
            <span className="stage-glow" aria-hidden="true" />
            <img className="stage-me" src="/v5/hero.webp" alt="Salaar Ahmad Furqan in a dark suit" fetchPriority="high" />
            <ul className="badges" aria-label="Highlights">
              <li className="b1"><img src={LOGO.Upwork} alt="" /><span><b>Top Rated on Upwork</b>{UPWORK_JOBS} jobs completed</span></li>
              <li className="b2"><b className="big">{PROJECTS_DELIVERED}+</b><span>projects<br />delivered</span></li>
              <li className="b3"><span><b>Ex-Army Captain</b>led teams of up to 22</span></li>
            </ul>
          </figure>
        </div>

        <div className="wrap proof-row" key={who + "-side"}>
          <p className="proof-cap">{a.side}</p>
          <div className="proof">
            {who === "client"
              ? FEATURED.map(byN).map((p) => (
                <a key={p.n} href={`#st-${p.n}`} className="pcard" onClick={(e) => { e.preventDefault(); openProject(p.n); }}>
                  {hasCover(p.n) ? <Cover project={p} size="mini" /> : SHOT[p.n] ? <img src={SHOT[p.n]} alt="" /> : <span className="pcard-blank" />}
                  <span><strong>{p.title}</strong><span>{p.summary}</span></span>
                  <ArrowRight />
                </a>
              ))
              : ROLES.slice(0, 4).map((r) => (
                <a key={r.org} href="#history" className="pcard">
                  <span className="pcard-logo"><img src={r.logo} alt="" /></span>
                  <span><strong>{r.title}</strong><span>{r.org}, {r.dates}</span></span>
                  <ArrowRight />
                </a>
              ))}
          </div>
        </div>

        <div className="wrap">
          <ul className="logos" aria-label="Platforms I deliver on">
            <li className="logos-cap">Platforms I deliver on</li>
            {TOOLS_A.slice(0, 8).map((n) => <li key={n}><img src={LOGO[n]} alt="" />{n}</li>)}
          </ul>
        </div>
      </section>

      <section id="work" className="wrap sec">
        <div className="sec-head">
          <h2>Selected work</h2>
          <p className="sec-intro">{word(PROJECTS.length)} projects across ERP, Power Platform, ClickUp, automation and product delivery.</p>
          <Chips label="Filter projects by kind of work" value={cat} onChange={(v) => setCat(v)} options={[{ id: "all", label: "All", count: PROJECTS.length }, ...LINES.map((l) => ({ id: l.id, label: l.name, count: lineCount(l.id) }))]} />
        </div>
        <ul className="work-grid">
          {shown.map((p) => {
            const shot = SHOT[p.n];
            const seen = new Set();
            const logos = p.platforms.filter((x) => LOGO[x] && !seen.has(LOGO[x]) && seen.add(LOGO[x])).slice(0, 3);
            return (
              <li key={p.n} id={`st-${p.n}`} className="wcard">
                <button type="button" className="wbtn" aria-haspopup="dialog" onClick={() => setOpen(p.n)}>
                  <span className="wvis">
                    {hasCover(p.n) ? <Cover project={p} /> : shot ? <img src={shot} alt="" loading="lazy" /> : <span className="wlogos">{logos.map((x) => <img key={x} src={LOGO[x]} alt="" />)}</span>}
                  </span>
                  <span className="wbody">
                    <span className="wmeta">{linesOf(p).map((id) => LINE[id].name).join(" · ")}<span>{p.region}</span></span>
                    <span className="wtitle">{p.title}</span>
                    <span className="wres">{p.result}</span>
                  </span>
                  <span className="st-toggle" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg></span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="actions sec-more">
          {cat === "all" && <button type="button" className="btn btn-line" onClick={() => setShowAll(!showAll)}>{showAll ? "Show fewer projects" : `Show all ${PROJECTS.length} projects`}</button>}
          <Link href="/projects" className="link">Case studies with screenshots<ArrowRight /></Link>
        </div>
      </section>

      <ProjectModal project={current} list={navList} onChange={setOpen} onClose={() => setOpen(null)} />

      <div id="services" className="wrap sec anchor">
        <ServiceList />
      </div>

      <section id="how" className="wrap sec anchor">
        <div className="sec-head">
          <h2>How I run a project</h2>
        </div>
        <div className="bento">
          <div className="tile stat"><Count to={PROJECTS_DELIVERED} plus /><span>projects delivered, plus {UPWORK_JOBS} jobs on Upwork</span></div>
          <div className="tile stat"><Count to={4} /><span>client regions: Australia, US, Europe, Latin America</span></div>
          <div className="tile stat"><Count to={22} /><span>people in the largest team I have led</span></div>
          <div className="tile how">
            <div className="steps" role="tablist" aria-label="How a project runs">
              {STEPS.map((x, i) => (
                <button key={x.k} type="button" role="tab" id={`step-${i}`} aria-selected={step === i} aria-controls="step-panel" className="step" onClick={() => setStep(i)}><span>{i + 1}</span>{x.k}</button>
              ))}
            </div>
            <div className="step-panel" role="tabpanel" id="step-panel" aria-labelledby={`step-${step}`} key={step}>
              <h3>{STEPS[step].t}</h3>
              <p>{STEPS[step].d}</p>
              <ul>
                {STEPS[step].ex.map(([n, text]) => (
                  <li key={n + text}><a href={`#st-${n}`} onClick={(e) => { e.preventDefault(); openProject(n); }}><span>{text}</span><ArrowRight /></a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tile face">
            <img src="/images/about-pfp.jpeg" alt="Salaar Ahmad Furqan" loading="lazy" />
            <p>Before this, I spent nearly four years as a Technical Project Manager and QA Officer in the Pakistan Army, leading teams of up to 22.</p>
          </div>
        </div>
      </section>

      <div className="wrap sec">
        <History />
        <Credentials />
      </div>

      <QuoteReel />

      <ContactSection />
    </>
  );
}
