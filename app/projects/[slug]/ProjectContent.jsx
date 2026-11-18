"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";
import { PageHead, WayOut, ArrowRight } from "@/components/v6/Chrome";

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12H4M11 5l-7 7 7 7" /></svg>
);

export default function ProjectContent({ project }) {
  const [selected, setSelected] = useState(0);
  const images = (project.images?.length ? project.images : [project.image]).filter((src) => src && !src.includes("placeholder"));
  const i = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[i - 1], next = projects[i + 1];

  return (
    <>
      <PageHead title={project.title}>
        <ul className="plain">{project.tags.map((t) => <li key={t}>{t}</li>)}</ul>
      </PageHead>
      <div className="wrap page">
        <div className="split">
          <div className="prose">
            <p>{project.description}</p>
            {(project.github !== "#" || project.live !== "#") && (
              <div className="actions">
                {project.live !== "#" && <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-ink"><FiExternalLink aria-hidden="true" />Open live site</a>}
                {project.github !== "#" && <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-line"><FiGithub aria-hidden="true" />Source on GitHub</a>}
              </div>
            )}
          </div>
          <Link href="/projects" className="link"><ArrowLeft />All case studies</Link>
        </div>

        {images.length > 0 && (
          <div className="gallery">
            <img className="gallery-main" src={images[selected]} alt={`${project.title}, screenshot ${selected + 1} of ${images.length}`} />
            {images.length > 1 && (
              <div className="thumbs" role="group" aria-label="Screenshots">
                {images.map((src, n) => (
                  <button key={src + n} type="button" aria-pressed={n === selected} aria-label={`Show screenshot ${n + 1}`} onClick={() => setSelected(n)}>
                    <img src={src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <nav className="pager" aria-label="More case studies">
          {prev ? <Link href={`/projects/${prev.slug}`} className="link"><ArrowLeft />{prev.title}</Link> : <span />}
          {next ? <Link href={`/projects/${next.slug}`} className="link">{next.title}<ArrowRight /></Link> : <span />}
        </nav>
      </div>
      <WayOut />
    </>
  );
}
