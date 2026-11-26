import { PageHead, WayOut } from "@/components/v6/Chrome";
import { CaseGrid } from "@/components/v6/Interactive";

export default function Projects() {
  return (
    <>
      <PageHead title="Case studies" lead="Screenshots and the full write-up for each project." />
      <div className="wrap page">
        <CaseGrid />
      </div>
      <WayOut />
    </>
  );
}
