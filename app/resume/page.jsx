import { FiDownload, FiExternalLink } from "react-icons/fi";
import { RESUME_PDF } from "@/data/pages";
import { PageHead } from "@/components/v6/Chrome";

export default function ResumePage() {
  return (
    <>
      <PageHead title="Resume">
        <div className="actions">
          <a href={RESUME_PDF} download className="btn btn-ink"><FiDownload aria-hidden="true" />Download resume</a>
          <a href={RESUME_PDF} target="_blank" rel="noopener noreferrer" className="btn btn-line"><FiExternalLink aria-hidden="true" />Open PDF</a>
        </div>
      </PageHead>
      <div className="wrap page">
        <iframe className="pdf" src={`${RESUME_PDF}#toolbar=0&navpanes=0&view=FitH`} title="Resume of Salaar Ahmad Furqan" />
      </div>
    </>
  );
}
