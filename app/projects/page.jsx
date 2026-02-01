"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiStar, FiBriefcase, FiZap } from "react-icons/fi";
import { useState, useEffect } from "react";
import Link from "next/link";
import "@/styles/projects.css";

// Featured Projects
const featuredProjects = [
  {
    id: 1,
    slug: "hail-ride-hailing",
    title: "Hail - Ride-Hailing Application",
    subtitle: "Technical Project Manager • End-to-End Delivery Owner",
    category: "USA • RIDE-HAILING STARTUP",
    period: "LAUNCHED JAN 2026",
    description: "Led complete MVP delivery of a ride-hailing platform similar to inDrive, from initial scope definition through final production launch. Coordinated cross-functional engineering teams across frontend, backend, and mobile development while managing architecture decisions and delivery milestones.",
    achievements: [
      "Defined MVP scope & architecture",
      "Coordinated 3 engineering teams",
      "Integrated Stripe payments",
      "Built scalable ride-matching system",
      "Delivered ahead of schedule",
      "Production-ready platform"
    ],
    tech: ["React", "React Native", "Node.js", "PostgreSQL", "Stripe", "AWS", "Redis", "Linear"],
    stats: [
      { value: "6 Months", label: "Timeline" },
      { value: "3 Teams", label: "Coordinated" },
      { value: "Full Stack", label: "Scope" }
    ],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: "🚗",
    images: ["/images/hail3.jpeg", "/images/hail4.jpeg", "/images/hail5.jpeg"],
    image: "/images/hail-main2.jpeg"
  },,
  {
    id: 2,
    slug: "simply-crm",
    title: "Simply CRM Enhancements",
    subtitle: "Technical Project Manager",
    category: "DENMARK • SAAS PLATFORM",
    period: "DELIVERED 2025",
    description: "Owned delivery of feature upgrades and complete UI transition for a live SaaS CRM product. Managed engineering teams through structured sprints while ensuring data integrity across multiple production releases.",
    achievements: [
      "Defined technical scope & sprint structure",
      "Coordinated frontend/backend engineers",
      "Validated data integrity migrations",
      "Achieved measurable UX improvements"
    ],
    tech: ["SaaS", "CRM", "Agile", "Data Migration", "UI/UX"],
    stats: [
      { value: "Denmark", label: "Region" },
      { value: "On-Time", label: "Delivery" },
      { value: "Live", label: "Production" }
    ],
    gradient: "linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)",
    icon: "📊",
    images: ["/images/crm1.jpeg", "/images/crm2.jpeg", "/images/crm3.jpeg"],
    image: "/images/crm-main1.jpeg"
  },
  {
    id: 3,
    slug: "power-platform",
    title: "Power Platform Delivery",
    subtitle: "Technical PM • Azure DevOps Lead",
    category: "AUSTRALIA • ENTERPRISE CLIENT",
    period: "DELIVERED 2025",
    description: "Owned end-to-end delivery of custom Power Platform solution from scope definition to production release. Implemented CI/CD pipelines and led cross-functional team coordination through Azure DevOps.",
    achievements: [
      "Led dev/QA teams through structured sprints",
      "Implemented CI/CD pipelines & version control",
      "Primary interface with client stakeholders",
      "Delivered with structured UAT & monitoring"
    ],
    tech: ["Power Platform", "Azure DevOps", "CI/CD", "Power Apps", "Automated Testing"],
    stats: [
      { value: "Australia", label: "Region" },
      { value: "100%", label: "UAT Pass" },
      { value: "CI/CD", label: "Automated" }
    ],
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    icon: "☁️",
    images: ["/images/power1.jpeg", "/images/power2.jpeg", "/images/power3.jpeg"],
    image: "/images/power-main1.jpeg"
  }
];

// Enterprise Projects
const enterpriseProjects = [];

// SAP Projects
const sapProjects = [
  {
    id: 4,
    slug: "sap-integration",
    title: "SAP Integration Projects",
    subtitle: "SAP Project Manager",
    category: "GLOBAL • ENTERPRISE SAP",
    period: "ONGOING • MULTI-REGION",
    description: "Owned delivery of SAP integration projects across multiple industries and regions including Europe, U.S., Brazil, and Pakistan. Delivered core SAP modules (SD, C4C, FICO, PLM, HCM) improving operational efficiency.",
    achievements: [
      "Coordinated technical teams & stakeholders",
      "Optimized workflows & drove user adoption",
      "Delivered SD, C4C, FICO, PLM, HCM modules",
      "Standardized delivery workflows"
    ],
    tech: ["SAP S/4HANA", "SAP C4C", "FICO", "PLM", "HCM", "API Integration"],
    stats: [
      { value: "4", label: "Regions" },
      { value: "5+", label: "Modules" },
      { value: "Multi", label: "Industries" }
    ],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    icon: "🔧",
    image: "/images/sap-integration1.jpeg"
  },
  {
    id: 5,
    slug: "dynamics-365",
    title: "Dynamics 365 Implementations",
    subtitle: "Project Delivery Manager",
    category: "AUSTRALIA • ENTERPRISE CRM/ERP",
    period: "MULTIPLE CLIENTS",
    description: "Led end-to-end delivery of Microsoft Dynamics 365 CRM and ERP implementations across multiple enterprise clients. Managed cross-functional teams, translated business requirements into deployable solutions using Azure Boards.",
    achievements: [
      "Owned multiple client implementations",
      "Led delivery cadence & go-live readiness",
      "Ensured user adoption through structured handover",
      "Post-launch support & optimization"
    ],
    tech: ["Dynamics 365", "CRM", "ERP", "Azure Boards", "Business Central"],
    stats: [
      { value: "10+", label: "Clients" },
      { value: "Enterprise", label: "Scale" },
      { value: "CRM+ERP", label: "Full Suite" }
    ],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    icon: "⚡",
    image: "/images/ms365.jpeg"
  }
];

// Automation Projects
const automationProjects = [
  {
    id: 6,
    slug: "clickup-transformations",
    title: "ClickUp Workspace Transformations",
    subtitle: "ClickUp Specialist",
    category: "MULTIPLE CLIENTS • AGENCIES & STARTUPS",
    period: "50+ DELIVERED",
    description: "Complete workspace architecture and setup for agencies and teams moving from scattered tools to unified ClickUp systems. From messy chaos to clean, adoption-ready operations.",
    achievements: [
      "Strategic workspace architecture design",
      "Custom automation workflows & integrations",
      "Team training & adoption support",
      "Process optimization & best practices"
    ],
    tech: ["ClickUp", "Workspace Design", "Automations", "Custom Views", "Dashboards"],
    stats: [
      { value: "50+", label: "Workspaces" },
      { value: "5.0", label: "Rating" },
      { value: "100%", label: "Satisfaction" }
    ],
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    icon: "🎯",
    images: ["/images/clickup-workflow1.jpeg", "/images/clickup-workflow2.jpeg", "/images/clickup-workflow3.jpeg"],
    image: "/images/clickup-workflow1.jpeg"
  },
  {
    id: 7,
    slug: "superagent-automation",
    title: "Superagent Automation Setup",
    subtitle: "Automation Specialist",
    category: "ENTROPIK LABS • AI/ML COMPANY",
    period: "DELIVERED 2025",
    description: "Designed and implemented advanced AI-powered automation workflows using Superagent for an AI/ML research company. Streamlined research workflows and integrated multiple data sources.",
    achievements: [
      "Built custom AI agent workflows",
      "Integrated research tools & databases",
      "Automated data processing pipelines",
      "Reduced manual work by 60%"
    ],
    tech: ["Superagent", "AI Automation", "API Integration", "Workflow Design", "Data Pipeline"],
    stats: [
      { value: "60%", label: "Time Saved" },
      { value: "AI/ML", label: "Industry" },
      { value: "Advanced", label: "Automation" }
    ],
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    icon: "🤖",
    images: ["/images/super-agent1.jpeg","/images/super-agent2.jpeg"],
    image: "/images/super-agent1.jpeg"
  },
  {
    id: 8,
    slug: "medmasters-clickup",
    title: "ClickUp Automation Setup",
    subtitle: "ClickUp Automation Expert",
    category: "MEDMASTERS • MEDICAL EDUCATION",
    period: "DELIVERED 2025",
    description: "Built comprehensive ClickUp automation system for medical education platform managing student enrollment, content delivery, and instructor coordination across multiple programs.",
    achievements: [
      "Automated student enrollment workflows",
      "Built content delivery pipelines",
      "Created instructor coordination system",
      "Integrated with learning management system"
    ],
    tech: ["ClickUp", "Automations", "Zapier", "LMS Integration", "Custom Workflows"],
    stats: [
      { value: "Healthcare", label: "Industry" },
      { value: "50+", label: "Automations" },
      { value: "3x", label: "Efficiency" }
    ],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: "🏥",
    images: ["/images/clickup-automation1.jpeg","/images/clickup-automation2.jpeg","/images/clickup-automation3.jpeg","/images/clickup-automation4.jpeg"],
    image: "/images/clickup-automation1.jpeg"
  },
  {
    id: 9,
    slug: "zapier-workflow-integrations",
    title: "Zapier & Workflow Integrations",
    subtitle: "Automation Consultant",
    category: "MULTIPLE CLIENTS • WORKFLOW OPTIMIZATION",
    period: "ONGOING SERVICES",
    description: "Design and implementation of complex Zapier workflows connecting multiple business tools. From CRM integrations to automated reporting and cross-platform data synchronization.",
    achievements: [
      "200+ automation workflows built",
      "30+ tool integrations delivered",
      "Reduced manual work by average 50%",
      "Custom API connections when needed"
    ],
    tech: ["Zapier", "Make", "n8n", "API Integration", "Webhooks", "Process Design"],
    stats: [
      { value: "200+", label: "Workflows" },
      { value: "30+", label: "Tools" },
      { value: "50%", label: "Time Saved" }
    ],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    icon: "⚙️",
    images: ["/images/zapier1.jpeg", "/images/zapier1.jpeg"],
    image: "/images/zapier1.jpeg"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const ProjectCard = ({ project, index, delay }) => {
    return (
      <motion.div
        className="project-card-new"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay }}
      >
        <Link href={`/projects/${project.slug}`} className="project-link-wrapper">
          <div className="project-header-new" style={{ background: '#1a1a1a' }}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image-new"
            />
            <div className="project-overlay-new">
              <span className="view-details-btn">View Details</span>
            </div>
          </div>
        </Link>
        
        <div className="project-body-new">
          <div className="project-meta-new">
            <span className="project-period-new">{project.period}</span>
          </div>
          
          <div className="project-category-new">{project.category}</div>
          <h3 className="project-title-new">{project.title}</h3>
          <p className="project-subtitle-new">{project.subtitle}</p>
          
          <p className="project-description-new">{project.description}</p>
          
          <div className="project-achievements-new">
            <h4 className="achievements-title">KEY ACHIEVEMENTS</h4>
            <ul className="achievements-list">
              {project.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
          
          <div className="project-tech-new">
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-badge-new">{tech}</span>
            ))}
          </div>
          
          <div className="project-stats-new">
            {project.stats.map((stat, i) => (
              <div key={i} className="stat-item-new">
                <div className="stat-value-new">{stat.value}</div>
                <div className="stat-label-new">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="projects-section-new">
      <div className="projects-container-new">
        {/* Header */}
        <motion.div
          className="projects-header-new"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="projects-label-new">Portfolio</span>
          <h1 className="projects-heading-new">
            Featured <span className="accent">Projects</span>
          </h1>
          <p className="projects-subtitle-new">
            End-to-end delivery across SaaS, enterprise, and automation projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="category-section">
          <div className="category-header">
            <FiStar className="category-icon" />
            <h2 className="category-title">FEATURED PROJECTS</h2>
          </div>
          <div className="projects-grid-new featured-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} delay={0.3} />
            ))}
          </div>
        </div>

        {/* Enterprise & SAP Projects */}
        <div className="category-section">
          <div className="category-header">
            <FiBriefcase className="category-icon" />
            <h2 className="category-title">ENTERPRISE & SAP PROJECTS</h2>
          </div>
          <div className="projects-grid-new">
            {[...enterpriseProjects, ...sapProjects].map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} delay={0.4 + index * 0.1} />
            ))}
          </div>
        </div>

        {/* Automation & Workflow Projects */}
        <div className="category-section">
          <div className="category-header">
            <FiZap className="category-icon" />
            <h2 className="category-title">AUTOMATION & WORKFLOW PROJECTS</h2>
          </div>
          <div className="projects-grid-new">
            {automationProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} delay={0.5 + index * 0.1} />
            ))}
          </div>
        </div>

        {/* Get In Touch CTA */}
        <motion.div
          className="projects-cta-section"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <p className="cta-text">Interested in working together?</p>
          <Link href="/contact" className="cta-button">
            <span>Get In Touch</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
