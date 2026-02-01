"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import "@/styles/resume.css";

const resumePath = "/Resume/AbdulMoiz-resume.pdf";

export default function ResumePage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="resume-section">
      <div className="resume-glow" />
      <div className="resume-container">
        <motion.div
          className="resume-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="resume-label">Resume</span>
          <h1 className="resume-heading">
            My <span className="accent">Resume</span>
          </h1>
          <p className="resume-subtitle">View or download my professional resume</p>
          <div className="resume-actions">
            <a href={resumePath} download className="download-btn">
              <FiDownload /> Download Resume
            </a>
            <a href={resumePath} target="_blank" rel="noopener noreferrer" className="view-btn">
              <FiExternalLink /> Open PDF
            </a>
          </div>
        </motion.div>
        <motion.div
          className="resume-viewer"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="pdf-wrapper">
            <iframe
              src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              className="pdf-frame"
              title="Resume"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
