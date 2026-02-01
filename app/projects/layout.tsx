import { metadata } from "./metadata";
export { metadata };

// Note: Individual project pages (/projects/[slug]) have their own dynamic metadata

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
