// Kinds of work. Each project in data/site.js belongs to one or two of them.
import { PROJECTS } from "./site";

export const LINES = [
  { id: "erp", cat: "ERP", name: "ERP", color: "#e4432b", fg: "#111417" },
  { id: "pp", cat: "Power Platform", name: "Power Platform", color: "#7d3fc0", fg: "#ffffff" },
  { id: "cu", cat: "ClickUp", name: "ClickUp", color: "#d6257f", fg: "#ffffff" },
  { id: "auto", cat: "Automation", name: "Automation", color: "#f2a900", fg: "#111417" },
  { id: "prod", cat: "Product", name: "Product", color: "#00875a", fg: "#ffffff" },
];

export const LINE = Object.fromEntries(LINES.map((l) => [l.id, l]));

// Lines a project sits on, in network order (top to bottom on the map).
export const linesOf = (p) => LINES.filter((l) => p.cats.includes(l.cat)).map((l) => l.id);
export const lineCount = (id) => PROJECTS.filter((p) => linesOf(p).includes(id)).length;
