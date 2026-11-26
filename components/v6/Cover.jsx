/* eslint-disable @next/next/no-img-element */
import { LOGO } from "@/data/site";
import { LINE, linesOf } from "@/data/lines";
import { COVERS } from "@/data/covers";

// Simple line drawings of the kind of work, in the project's colour. 200 x 120 box.
const S = { fill: "none", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" };
const MOTIFS = {
  // Three launches, each a step up to a go-live flag.
  launches: (c) => (<g {...S} stroke={c}>
    <path d="M14 100h46v-24h46v-24h46v-24h40" /><circle cx="60" cy="100" r="5" fill={c} /><circle cx="106" cy="76" r="5" fill={c} /><circle cx="152" cy="52" r="5" fill={c} />
    <path d="M186 28V6l12 6-12 6" /></g>),
  // Five module blocks feeding one line.
  modules: (c) => (<g {...S} stroke={c}>
    {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={10 + i * 38} y="14" width="28" height="28" rx="6" fill={i === 0 ? c : "none"} />)}
    {[0, 1, 2, 3, 4].map((i) => <path key={i} d={`M${24 + i * 38} 42v26`} />)}<path d="M24 68h152M100 68v38" /><circle cx="100" cy="106" r="6" fill={c} /></g>),
  // A grid of assets, most of them checked in.
  assets: (c) => (<g stroke={c} strokeWidth="2.5">
    {Array.from({ length: 40 }, (_, i) => { const x = 14 + (i % 10) * 19, y = 14 + Math.floor(i / 10) * 26; return <rect key={i} x={x} y={y} width="12" height="12" rx="3" fill={i % 7 === 3 ? "none" : c} />; })}</g>),
  // Two small browser windows.
  tools: (c) => (<g {...S} stroke={c}>
    <rect x="12" y="14" width="96" height="70" rx="8" /><path d="M12 30h96" /><circle cx="24" cy="22" r="2.5" fill={c} />
    <rect x="92" y="40" width="96" height="70" rx="8" fill="#0f1114" /><path d="M92 56h96" /><circle cx="104" cy="48" r="2.5" fill={c} />
    <path d="M106 72h60M106 84h44M106 96h52" /></g>),
  // Sprints on a steady cadence.
  sprints: (c) => (<g {...S} stroke={c}>
    {[0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={`M${16 + i * 30} 96a14 14 0 1 1 22 0`} />)}<path d="M10 104h184" />
    {[0, 1, 2, 3, 4, 5].map((i) => <circle key={i} cx={27 + i * 30} cy="104" r="4" fill={c} />)}</g>),
  // Seven phases in a row.
  phases: (c) => (<g {...S} stroke={c}>
    {Array.from({ length: 7 }, (_, i) => <rect key={i} x={8 + i * 27} y={88 - i * 11} width="22" height={16 + i * 11} rx="5" fill={i === 6 ? c : "none"} />)}</g>),
  // A launch funnel.
  funnel: (c) => (<g {...S} stroke={c}>
    <path d="M20 14h160l-56 48v40l-48 10V62z" /><path d="M48 38h104" /><circle cx="100" cy="110" r="0" /></g>),
  // One solution linked to two banks.
  banks: (c) => (<g {...S} stroke={c}>
    <rect x="70" y="40" width="60" height="40" rx="8" fill={c} /><path d="M70 60H40M130 60h30" />
    <path d="M10 46l20-12 20 12M14 50v22M30 50v22M46 50v22M10 76h40" /><path d="M150 46l20-12 20 12M154 50v22M170 50v22M186 50v22M150 76h40" /></g>),
  // A single dashboard with a few tiles.
  dashboard: (c) => (<g {...S} stroke={c}>
    <rect x="16" y="12" width="168" height="96" rx="10" /><rect x="30" y="26" width="64" height="30" rx="5" fill={c} /><rect x="106" y="26" width="64" height="30" rx="5" />
    <path d="M30 92l26-18 22 10 30-22 26 14 36-20" /></g>),
  // Several workspaces, one portal each.
  workspaces: (c) => (<g {...S} stroke={c}>
    {[0, 1, 2].map((i) => <g key={i}><rect x={14 + i * 62} y="20" width="50" height="62" rx="8" fill={i === 1 ? c : "none"} /><path d={`M${26 + i * 62} 96h26`} /></g>)}</g>),
  // Several lead sources merging into one.
  merge: (c) => (<g {...S} stroke={c}>
    <path d="M14 20c60 0 60 40 120 40M14 60h120M14 100c60 0 60-40 120-40" /><circle cx="160" cy="60" r="22" fill={c} />
    <circle cx="14" cy="20" r="4" fill={c} /><circle cx="14" cy="60" r="4" fill={c} /><circle cx="14" cy="100" r="4" fill={c} /></g>),
  // A stack of tender documents.
  tender: (c) => (<g {...S} stroke={c}>
    <rect x="66" y="8" width="76" height="98" rx="8" /><rect x="56" y="16" width="76" height="98" rx="8" fill="#0f1114" />
    <path d="M70 38h48M70 52h48M70 66h32" /><path d="M76 88l8 8 16-18" /></g>),
  // A cutover timeline with a go/no-go gate.
  cutover: (c) => (<g {...S} stroke={c}>
    {[0, 1, 2, 3, 4].map((i) => <path key={i} d={`M12 ${18 + i * 20}h${70 + ((i * 37) % 60)}`} />)}<path d="M150 8v104" strokeDasharray="6 7" />
    <path d="M162 46l14 14-14 14M150 60h26" /></g>),
  // SMS bubbles flowing into a four-stage pipeline.
  pipeline: (c) => (<g {...S} stroke={c}>
    <path d="M14 18h54a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H32l-12 10V50h-6z" /><path d="M14 66h54a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H32l-12 10V98h-6z" />
    <path d="M84 60h20" />{[0, 1, 2, 3].map((i) => <rect key={i} x={110 + i * 22} y="22" width="16" height="76" rx="4" fill={i === 3 ? c : "none"} />)}</g>),
};

export const hasCover = (n) => Boolean(COVERS[n]);

// A designed thumbnail: tinted field in the project's colour, one real figure, platforms and a drawing.
export default function Cover({ project, size = "card" }) {
  const c = COVERS[project.n];
  if (!c) return null;
  const color = LINE[linesOf(project)[0]]?.color || "#c6f24e";
  const seen = new Set();
  const logos = project.platforms.filter((x) => LOGO[x] && !seen.has(LOGO[x]) && seen.add(LOGO[x])).slice(0, 3);
  return (
    <span className={"cover cover-" + size} style={{ "--k": color }} aria-hidden="true">
      <span className="cover-text">
        <b>{c.big}</b>
        <span>{c.label}</span>
      </span>
      <svg className="cover-art" viewBox="0 0 200 120">{MOTIFS[c.motif]?.(color)}</svg>
      {size !== "mini" && logos.length > 0 && (
        <span className="cover-logos">{logos.map((x) => <img key={x} src={LOGO[x]} alt="" />)}</span>
      )}
    </span>
  );
}
