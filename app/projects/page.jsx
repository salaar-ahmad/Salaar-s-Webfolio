import { PageHead, WayOut } from "@/components/v6/Chrome";
import { CaseGrid } from "@/components/v6/Interactive";

export default function Projects() {
  return (
    <>
      <PageHead title="Case studies." lead="End-to-end delivery across SaaS, enterprise, and automation projects." />
      <div className="wrap page">
        <CaseGrid />
      </div>
      <WayOut />
    </>
  );
}
