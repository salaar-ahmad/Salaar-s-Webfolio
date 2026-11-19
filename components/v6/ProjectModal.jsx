"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";
import { LOGO, SHOT } from "@/data/site";
import { LINE, linesOf } from "@/data/lines";
import { Book, ArrowRight } from "./Chrome";

const ArrowLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12H4M11 5l-7 7 7 7" /></svg>
);
const Close = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
);

// One project in a soft modal. Native <dialog> keeps focus inside and closes on Escape.
export default function ProjectModal({ project, list, onChange, onClose }) {
  const ref = useRef(null);
  const returnTo = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (project && !d.open) {
      returnTo.current = document.activeElement;
      d.showModal();
      document.documentElement.classList.add("modal-open");
    }
    if (!project && d.open) d.close();
  }, [project]);

  useEffect(() => {
    const d = ref.current;
    const done = () => {
      document.documentElement.classList.remove("modal-open");
      returnTo.current?.focus?.({ preventScroll: true });
    };
    d?.addEventListener("close", done);
    return () => d?.removeEventListener("close", done);
  }, []);

  const i = project ? list.findIndex((p) => p.n === project.n) : -1;
  const step = (d) => { if (list.length > 1 && i >= 0) onChange(list[(i + d + list.length) % list.length].n); };

  // Left and right arrow keys move between projects.
  useEffect(() => {
    if (!project || list.length < 2 || i < 0) return;
    const onKey = (e) => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (d) onChange(list[(i + d + list.length) % list.length].n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, list, i, onChange]);

  const shot = project && SHOT[project.n];
  const seen = new Set();
  const logos = project ? project.platforms.filter((x) => LOGO[x] && !seen.has(LOGO[x]) && seen.add(LOGO[x])).slice(0, 4) : [];

  return (
    <dialog ref={ref} className="pmodal" aria-labelledby="pmodal-title" onCancel={(e) => { e.preventDefault(); onClose(); }}
      onClick={(e) => { if (e.target === ref.current) onClose(); }}>
      {project && (
        <div className="pmodal-card" key={project.n}>
          <div className="pmodal-vis">
            {shot ? <img src={shot} alt={`Screenshot from ${project.title}`} /> : <span className="wlogos">{logos.map((x) => <img key={x} src={LOGO[x]} alt="" />)}</span>}
            <button type="button" className="pmodal-close" aria-label="Close" onClick={onClose}><Close /></button>
          </div>
          <div className="pmodal-body">
            <p className="wmeta">{linesOf(project).map((id) => LINE[id].name).join(" · ")}<span>{project.region}</span></p>
            <h3 id="pmodal-title">{project.title}</h3>
            <p className="pmodal-res">{project.result}</p>
            <dl className="pmodal-facts">
              <div><dt>Context</dt><dd>{project.context}</dd></div>
              <div><dt>What I did</dt><dd>{project.did}</dd></div>
              <div><dt>Platforms</dt><dd>{project.platforms.join(", ")}</dd></div>
            </dl>
            <div className="pmodal-foot">
              <Book className="btn btn-exit">Discuss a similar project<ArrowRight /></Book>
              {list.length > 1 && (
                <div className="pmodal-nav">
                  <button type="button" className="round" aria-label="Previous project" onClick={() => step(-1)}><ArrowLeft /></button>
                  <span>{i + 1} / {list.length}</span>
                  <button type="button" className="round" aria-label="Next project" onClick={() => step(1)}><ArrowRight /></button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
