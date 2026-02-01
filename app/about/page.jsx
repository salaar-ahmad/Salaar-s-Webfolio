"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiDownload, FiArrowRight, FiCode, FiLayers, FiZap, FiBriefcase, FiBook, FiSlack, FiFileText, FiAward, FiCheckCircle, FiLinkedin } from "react-icons/fi";
import { SiJira, SiNotion, SiFigma, SiConfluence, SiN8N, SiSap, SiZapier } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import "@/styles/about.css";

const skills = [
  { icon: SiJira, name: "Jira", type: "icon" }, 
  { icon: "/images/azure-blue.png", name: "Azure DevOps", type: "image" },
  { icon: SiN8N, name: "n8n", type: "icon" }, 
  { icon: "/images/clickup-blue1.png", name: "ClickUp", type: "image" },
  { icon: SiNotion, name: "Notion", type: "icon" }, 
  { icon: "/images/microsoft365-blue.png", name: "Microsoft 365", type: "image" }, 
  { icon: "/images/clay-blue.png", name: "Clay", type: "image" },
  { icon: FiSlack, name: "Slack", type: "icon" },
  { icon: SiSap, name: "SAP", type: "icon" },
  { icon: SiFigma, name: "Figma", type: "icon" }, 
  { icon: SiConfluence, name: "Confluence", type: "icon" },
  { icon: SiZapier, name: "Zapier", type: "icon" },
];

const highlights = [
  { icon: FiCode, number: "20+", label: "Projects Delivered" },
  { icon: FiLayers, number: "15+", label: "Technologies" },
  { icon: FiZap, number: "5+", label: "Years Experience" },
];

const experience = [
  {
    title: "Project Delivery Manager (Remote)",
    company: "Exhortek (Australia)",
    period: "Sep 2025 – Present",
    points: [
      "Owned end-to-end delivery of Microsoft Dynamics 365 CRM and ERP implementations across multiple client projects.",
      "Led cross-functional teams, translating business requirements into deployable solutions and assigning/tracking work using Azure Boards.",
      "Managed delivery cadence, stakeholder alignment, and go-live readiness to ensure successful launches.",
      "Ensured user adoption through structured handover and post-launch support."
    ]
  },
  {
    title: "Project Manager - SAP Integrations",
    company: "The Working Town (Pakistan)",
    period: "Jul 2025 – Present",
    points: [
      "Owned delivery of SAP integration projects across multiple industries and regions, including Europe, the U.S., Brazil, and Pakistan.",
      "Coordinated technical teams and business stakeholders, optimizing workflows and driving strong end-user adoption.",
      "Delivered core SAP modules (SD, C4C, FICO, PLM, HCM), improving operational efficiency and process automation.",
      "Standardized delivery workflows, introducing structured project management processes to improve cross-team collaboration."
    ]
  },
  {
    title: "Technical Project Manager (Remote)",
    company: "Powerhouse Technologies (USA)",
    period: "Jul 2025 – Dec 2025",
    points: [
      "Owned delivery of Powerhouse's official website from scope through launch, shipping ahead of schedule.",
      "Owned delivery of an internal SaaS product built on Retool, managing product scope, sprint execution, and releases.",
      "Managed sprints using Linear, coordinating cross-functional teams across design, development, and QA.",
      "Led internal automation initiatives to streamline legal workflows and ensure production-ready systems."
    ]
  },
  {
    title: "Technical Project Manager",
    company: "Pakistan Armed Forces",
    period: "June 2022 – May 2025",
    points: [
      "Led cross-functional teams delivering mission-critical, military-grade systems under high-pressure timelines.",
      "Owned full lifecycle delivery of complex technical equipment using structured Agile methodologies.",
      "Coordinated international technical teams, including collaboration with Chinese NORINCO engineers on large-scale installations.",
      "Led large-scale operational exercises, managing 30+ technical personnel in time-critical environments."
    ]
  }
];

const education = [
  {
    degree: "Bachelor's degree, Computer Engineering",
    school: "National University of Sciences and Technology (NUST)",
    location: "Pakistan",
    period: "2017 – 2021",
    logo: "/images/nust.png"
  }
];

const certifications = [
  { name: "ClickUp Expert Certificate", issuer: "ClickUp", date: "Nov 2025", logo: "/images/clickup.png", logoType: "image" },
  { name: "Generative AI Overview for Project Managers", issuer: "Project Management Institute", date: "Oct 2025", logo: "/images/PMI.png", logoType: "image" },
  { name: "Agile Course", issuer: "Project Management Institute", date: "Sep 2025", logo: "/images/PMI.png", logoType: "image" },
  { name: "Fundamentals of Predictive Project Management", issuer: "Project Management Institute", date: "Aug 2025", logo: "/images/PMI.png", logoType: "image" },
  { name: "Project Management Foundations: Integration", issuer: "LinkedIn", date: "Aug 2025", logo: FiLinkedin, logoType: "icon" },
  { name: "SAP S/4HANA: Beyond the Basics", issuer: "LinkedIn", date: "Aug 2025", logo: FiLinkedin, logoType: "icon" },
  { name: "Power BI: Dashboards for Beginners", issuer: "LinkedIn Learning", date: "Jul 2025", logo: FiLinkedin, logoType: "icon" },
  { name: "SAP ERP Essential Training", issuer: "LinkedIn Learning", date: "Jul 2025", logo: FiLinkedin, logoType: "icon" },
  { name: "ISO 9001:2015 Quality Management System Auditor", issuer: "Udemy", date: "Jul 2024", logo: "/images/udemy.png", logoType: "image" },
  { name: "Lean Integrated Management System (LIMS)", issuer: "QMS.9000", date: "Dec 2023", logo: "/images/qms.png", logoType: "image" },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="about-section">
      <div className="about-glow" />
      <div className="about-glow-2" />
      
      <div className="about-container">
        {/* Hero */}
        <div className="about-hero">
          <motion.span 
            className="about-label"
            initial={{ opacity: 0, y: 20 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.span>
          
          <motion.h1 
            className="about-heading"
            initial={{ opacity: 0, y: 30 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I'm <span className="accent">Salaar Ahmad Furqan</span>
          </motion.h1>
          
          <motion.p 
            className="about-subtitle"
            initial={{ opacity: 0, y: 30 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Top Rated Technical Project Manager | SAP | ClickUp Expert | Automations | GTM | Agile & Strategic Execution
          </motion.p>
          
          <motion.div 
            className="about-profile-image"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={inView ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src="/images/about-pfp.jpeg" alt="Salaar Ahmad Furqan" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          className="stats-row"
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="stat-card">
                <Icon className="stat-icon" />
                <span className="stat-number">{item.number}</span>
                <span className="stat-label">{item.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Bio */}
        <motion.div 
          className="bio-section"
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bio-content">
            <h2 className="bio-title">My Story</h2>
            <p className="bio-text">
              <span className="accent">From commanding 30+ technical personnel in high-pressure military deployments to delivering enterprise systems across 4 continents</span>, I turn chaos into shipped products.
            </p>
            <p className="bio-text">
              I'm a <span className="accent">Technical Project Manager</span> who learned delivery excellence in the most demanding environment possible: the Pakistan Armed Forces, where mission failure wasn't an option. For three years, I led cross-functional teams delivering mission-critical, military-grade systems under extreme pressure, collaborating with international partners including Chinese NORINCO engineers on large-scale installations.
            </p>
            <p className="bio-text">
              That discipline now powers how I deliver <span className="accent">Microsoft Dynamics 365 CRM/ERP implementations, SAP integrations (SD, C4C, FICO, PLM, HCM)</span>, and SaaS platforms from MVP through production. My work spans startups and enterprises across <span className="accent">Australia, the U.S., Europe, and Pakistan</span>, translating complex business needs into structured technical execution that teams actually adopt.
            </p>
            <p className="bio-text">
              I specialize in <span className="accent">Agile delivery, sprint execution, stakeholder alignment, and workflow optimization</span>, using tools like Azure DevOps, Jira, Linear, ClickUp, and Microsoft 365 to create clarity and momentum. Whether it's building a ride-hailing platform with Stripe integration, implementing CI/CD pipelines for Power Platform solutions, or transforming 50+ ClickUp workspaces, I'm driven by one thing: <span className="accent">turning ambiguity into execution and building systems teams actually use</span>.
            </p>
            <p className="bio-text" style={{ fontWeight: 600, color: '#4da6ff', marginTop: '20px' }}>
              50+ projects delivered. 100% on-time. Global impact.
            </p>
            <div className="bio-actions">
              <a href="/Resume_Salaar-Ahmad-Furqan.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
                <FiDownload /> Download Resume
              </a>
              <Link href="/contact" className="contact-link">
                Let's Talk <FiArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div 
          className="timeline-section"
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="section-header">
            <FiBriefcase className="section-icon" />
            <h2 className="section-title">Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div 
                key={exp.title + exp.company} 
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }} 
                animate={inView ? { opacity: 1, x: 0 } : {}} 
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-period">{exp.period}</span>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <ul className="timeline-points">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="certifications-section"
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="section-header">
            <FiAward className="section-icon" />
            <h2 className="section-title">Certifications</h2>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, index) => {
              return (
                <motion.div 
                  key={cert.name} 
                  className="cert-card"
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={inView ? { opacity: 1, scale: 1 } : {}} 
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                >
                  <div className="cert-icon-wrapper">
                    {cert.logoType === "image" ? (
                      <Image 
                        src={cert.logo} 
                        alt={cert.issuer}
                        width={40}
                        height={40}
                        className="cert-icon-image"
                      />
                    ) : (
                      <cert.logo className="cert-icon" />
                    )}
                  </div>
                  <h3 className="cert-name">{cert.name}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-status certified">{cert.date}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div 
          className="timeline-section"
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="section-header">
            <FiBook className="section-icon" />
            <h2 className="section-title">Education</h2>
          </div>
          <div className="timeline">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.school} 
                className="timeline-item education-item"
                initial={{ opacity: 0, x: -30 }} 
                animate={inView ? { opacity: 1, x: 0 } : {}} 
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-header-with-logo">
                    {edu.logo && (
                      <Image 
                        src={edu.logo} 
                        alt={edu.school}
                        width={40}
                        height={40}
                        className="education-logo"
                      />
                    )}
                    <div>
                      <span className="timeline-period">{edu.period}</span>
                      <h3 className="timeline-title">{edu.degree}</h3>
                      <p className="timeline-company">{edu.school} {edu.location && `• ${edu.location}`}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div 
          className="skills-section"
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <h2 className="section-title center">Tools & Platforms</h2>
          <p className="section-subtitle">Technologies I use to deliver projects</p>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              return (
                <motion.div 
                  key={skill.name} 
                  className="skill-card"
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={inView ? { opacity: 1, scale: 1 } : {}} 
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.04 }}
                >
                  {skill.type === "image" ? (
                    <Image 
                      src={skill.icon} 
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="skill-icon skill-icon-image"
                    />
                  ) : (
                    (() => {
                      const Icon = skill.icon;
                      return <Icon className="skill-icon" />;
                    })()
                  )}
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="about-cta"
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <p className="cta-text">Interested in working together?</p>
          <Link href="/projects" className="cta-link">
            View My Work <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
