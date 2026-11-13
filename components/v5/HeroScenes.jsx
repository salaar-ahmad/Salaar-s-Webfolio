"use client";

// Six code-drawn scenes of how Salaar delivers, used as a slow cinematic backdrop
// behind the hero. Everything is SVG: tiny, crisp at any size, and uses real facts.
// Content sits mostly on the right (x > 700) so the headline on the left stays clear.

const C = {
  card: "#12141c",
  line: "rgba(255,255,255,0.10)",
  ink: "#e4e4e7",
  muted: "#8b8b95",
  brand: "#3d5afe",
  tint: "#c7d0ff",
  green: "#4ade80",
};
const font = { fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" };

function Card({ x, y, w, h, r = 18, children, glow }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={r} fill={C.card} stroke={glow ? C.brand : C.line} strokeWidth={glow ? 2 : 1.5} />
      {children}
    </g>
  );
}
const T = ({ x, y, s = 18, c = C.ink, w = 600, a = "start", children }) => (
  <text x={x} y={y} fontSize={s} fill={c} fontWeight={w} textAnchor={a} style={font}>{children}</text>
);

/* 1. Systems map: separate platforms flowing into one operation */
function SystemsMap() {
  const hub = { x: 1180, y: 450 };
  const nodes = [
    { n: "SAP", x: 860, y: 210 },
    { n: "Dynamics 365", x: 1500, y: 200 },
    { n: "Power Platform", x: 800, y: 470 },
    { n: "ClickUp", x: 1540, y: 470 },
    { n: "Azure DevOps", x: 900, y: 720 },
    { n: "n8n · Zapier", x: 1460, y: 730 },
  ];
  return (
    <>
      {nodes.map((p, i) => (
        <g key={p.n}>
          <line x1={p.x} y1={p.y} x2={hub.x} y2={hub.y} stroke={C.line} strokeWidth="2" />
          <line x1={p.x} y1={p.y} x2={hub.x} y2={hub.y} stroke={C.brand} strokeWidth="3" strokeDasharray="10 26" className="sc-flow" style={{ animationDelay: `${-i * 0.4}s` }} />
        </g>
      ))}
      {nodes.map((p) => (
        <Card key={p.n + "c"} x={p.x - 110} y={p.y - 34} w={220} h={68} r={34}>
          <circle cx={p.x - 78} cy={p.y} r="8" fill={C.green} />
          <T x={p.x - 58} y={p.y + 7} s={20}>{p.n}</T>
        </Card>
      ))}
      <circle cx={hub.x} cy={hub.y} r="120" fill="rgba(61,90,254,0.10)" className="sc-pulse" />
      <Card x={hub.x - 140} y={hub.y - 60} w={280} h={120} r={28} glow>
        <T x={hub.x} y={hub.y - 8} s={16} c={C.tint} w={500} a="middle">Integrated</T>
        <T x={hub.x} y={hub.y + 28} s={30} a="middle" w={800}>One operation</T>
      </Card>
    </>
  );
}

/* 2. Delivery timeline: scope to hypercare */
function Timeline() {
  const phases = ["Scope", "Build", "UAT", "Cutover", "Go-live", "Hypercare"];
  return (
    <Card x={720} y={170} w={860} h={560} r={26}>
      <T x={770} y={240} s={26} w={800}>Delivery plan</T>
      <T x={1530} y={240} s={18} c={C.muted} w={500} a="end">Week 1 → 16</T>
      {phases.map((p, i) => {
        const y = 300 + i * 68;
        const x = 900 + i * 95;
        const w = i === 4 ? 24 : 190 + (i % 2) * 40;
        return (
          <g key={p}>
            <T x={770} y={y + 24} s={19} c={C.muted} w={500}>{p}</T>
            <rect x={900} y={y} width={620} height={34} rx={17} fill="rgba(255,255,255,0.04)" />
            {i === 4 ? (
              <rect x={x} y={y - 2} width={w} height={w} transform={`rotate(45 ${x + 12} ${y + 17})`} fill={C.green} className="sc-pop" />
            ) : (
              <rect x={x} y={y} width={w} height={34} rx={17} fill={i < 3 ? C.brand : "rgba(199,208,255,0.35)"} className="sc-grow" style={{ animationDelay: `${i * 0.35}s`, transformOrigin: `${x}px ${y}px` }} />
            )}
          </g>
        );
      })}
      <line x1={1250} y1={280} x2={1250} y2={710} stroke={C.green} strokeWidth="2" strokeDasharray="6 8" />
      <T x={1262} y={700} s={16} c={C.green} w={600}>Today</T>
    </Card>
  );
}

/* 3. Sprint board: work moving to done */
function SprintBoard() {
  const cols = ["To do", "In progress", "UAT", "Done"];
  const cards = [[3, 2], [2, 1], [2, 0], [3, 0]];
  return (
    <>
      {cols.map((c, i) => {
        const x = 720 + i * 222;
        return (
          <Card key={c} x={x} y={170} w={206} h={560} r={22}>
            <T x={x + 20} y={214} s={19}>{c}</T>
            <T x={x + 186} y={214} s={17} c={C.muted} w={500} a="end">{cards[i][0]}</T>
            {Array.from({ length: cards[i][0] }).map((_, j) => (
              <g key={j}>
                <rect x={x + 16} y={240 + j * 112} width={174} height={96} rx={14} fill="rgba(255,255,255,0.05)" stroke={C.line} />
                <rect x={x + 32} y={262 + j * 112} width={110 - (j % 2) * 30} height={10} rx={5} fill="rgba(255,255,255,0.22)" />
                <rect x={x + 32} y={284 + j * 112} width={130} height={8} rx={4} fill="rgba(255,255,255,0.10)" />
                <circle cx={x + 170} cy={312 + j * 112} r="9" fill={i === 3 ? C.green : i === 2 ? C.tint : C.brand} />
              </g>
            ))}
          </Card>
        );
      })}
      <g className="sc-move">
        <rect x={958} y={576} width={174} height={96} rx={14} fill="#1b2140" stroke={C.brand} strokeWidth="2" />
        <rect x={974} y={598} width={120} height={10} rx={5} fill={C.tint} />
        <rect x={974} y={620} width={100} height={8} rx={4} fill="rgba(199,208,255,0.5)" />
      </g>
    </>
  );
}

/* 4. Executive dashboard: real numbers */
function Dashboard() {
  const bars = [62, 78, 70, 88, 81, 94, 90];
  return (
    <>
      <Card x={720} y={170} w={400} h={190} r={24}>
        <T x={752} y={220} s={18} c={C.muted} w={500}>Assets tracked</T>
        <T x={752} y={300} s={64} w={800}>470+</T>
      </Card>
      <Card x={1140} y={170} w={440} h={190} r={24}>
        <T x={1172} y={220} s={18} c={C.muted} w={500}>Sprints delivered on time</T>
        <T x={1172} y={300} s={64} w={800} c={C.green}>100%</T>
      </Card>
      <Card x={720} y={380} w={860} h={350} r={24}>
        <T x={752} y={430} s={20}>Monthly fitness ratio</T>
        {bars.map((b, i) => {
          const x = 770 + i * 112;
          const h = b * 2.4;
          return <rect key={i} x={x} y={700 - h} width={64} height={h} rx={10} fill={i === bars.length - 1 ? C.brand : "rgba(199,208,255,0.30)"} className="sc-rise" style={{ animationDelay: `${i * 0.12}s`, transformOrigin: `${x}px 700px` }} />;
        })}
        <polyline points={bars.map((b, i) => `${802 + i * 112},${690 - b * 2.4 - 20}`).join(" ")} fill="none" stroke={C.green} strokeWidth="3" strokeLinecap="round" className="sc-draw" />
      </Card>
    </>
  );
}

/* 5. Launch funnel: 400 registrations to 50 paid */
function Funnel() {
  const rows = [
    { l: "Registrations", v: "400", w: 760 },
    { l: "Webinar attendees", v: "", w: 560 },
    { l: "Paid members", v: "50", w: 300 },
  ];
  return (
    <>
      <T x={1150} y={210} s={26} w={800} a="middle">LATAM launch funnel</T>
      {rows.map((r, i) => {
        const y = 260 + i * 160;
        const x = 1150 - r.w / 2;
        return (
          <g key={r.l} className="sc-fade" style={{ animationDelay: `${i * 0.5}s` }}>
            <rect x={x} y={y} width={r.w} height={130} rx={24} fill={i === 2 ? "rgba(61,90,254,0.35)" : C.card} stroke={i === 2 ? C.brand : C.line} strokeWidth="2" />
            <T x={1150} y={y + 58} s={20} c={C.muted} w={500} a="middle">{r.l}</T>
            {r.v && <T x={1150} y={y + 104} s={40} w={800} a="middle">{r.v}</T>}
          </g>
        );
      })}
    </>
  );
}

/* 6. Go-live checklist */
function Checklist() {
  const items = ["Data migrated and validated", "UAT signed off", "Cutover rehearsed", "Users trained", "Hypercare on call"];
  return (
    <Card x={760} y={170} w={780} h={560} r={26}>
      <T x={810} y={242} s={26} w={800}>Go-live readiness</T>
      {items.map((it, i) => {
        const y = 300 + i * 82;
        return (
          <g key={it}>
            <rect x={810} y={y} width={680} height={64} rx={16} fill="rgba(255,255,255,0.04)" stroke={C.line} />
            <circle cx={850} cy={y + 32} r="16" fill={C.green} className="sc-check" style={{ animationDelay: `${0.6 + i * 0.55}s` }} />
            <path d={`M842 ${y + 32} l6 6 l11 -12`} fill="none" stroke="#0b0d12" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="sc-check" style={{ animationDelay: `${0.6 + i * 0.55}s` }} />
            <T x={884} y={y + 39} s={21} w={500}>{it}</T>
          </g>
        );
      })}
    </Card>
  );
}

export const SCENES = [SystemsMap, Timeline, SprintBoard, Dashboard, Funnel, Checklist];

export default function HeroScenes() {
  return (
    <>
      {SCENES.map((Scene, i) => (
        <svg key={i} className="cine-frame cine-scene" style={{ animationDelay: `${i * 6}s` }} viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
          <Scene />
        </svg>
      ))}
    </>
  );
}
