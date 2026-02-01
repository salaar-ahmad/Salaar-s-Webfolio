"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiTrello, FiCloud, FiUsers, FiTarget, FiBriefcase, FiArrowRight, FiCheck, FiSettings, FiBarChart } from "react-icons/fi";
import { SiJira, SiClickup, SiZapier, SiNotion, SiAsana, SiSap, SiN8N } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import "@/styles/services.css";

const services = [
  { 
    icon: FiTarget, 
    title: "Technical Project Management", 
    description: "End-to-end project delivery with Agile methodologies and stakeholder alignment. From scope definition to production launch, I own the full delivery lifecycle. 50+ projects delivered on-time",
    features: ["Sprint Planning & Execution", "Backlog Management & Prioritization", "Risk Mitigation & Issue Resolution", "Stakeholder Communication & Alignment", "Cross-functional Team Coordination"],
    badge: "Featured Service",
    badgeColor: "blue",
    stats: [
      { value: "50+", label: "Projects" },
      { value: "100%", label: "On-Time" },
      { value: "5+ Years", label: "Experience" }
    ],
    tools: [
      { icon: SiJira, name: "Jira" },
      { icon: "/images/azure.png", name: "Azure DevOps", type: "image" },
      { icon: SiClickup, name: "ClickUp" },
      { icon: SiNotion, name: "Notion" }
    ]
  },
  { 
    icon: FiCloud, 
    title: "SAP Integration & Implementation", 
    description: "Enterprise SAP solutions across SD, C4C, FICO, PLM, and HCM modules. Delivered across 4 continents",
    features: ["SAP S/4HANA Implementation", "SAP C4C Service Cloud", "API Development & Integration", "ECC Landscape Management"],
    badge: "Enterprise",
    badgeColor: "purple",
    stats: [
      { value: "4", label: "Continents" },
      { value: "15+", label: "Modules" },
      { value: "Multi", label: "Industry" }
    ],
    tools: [
      { icon: SiSap, name: "SAP" },
      { icon: "/images/azure.png", name: "Azure", type: "image" },
      { icon: SiJira, name: "Jira" }
    ]
  },
  { 
    icon: FiSettings, 
    title: "Microsoft Dynamics 365", 
    description: "CRM/ERP implementation and customization for enterprise clients. Enterprise-scale deployments",
    features: ["Dynamics 365 CRM Setup", "ERP Configuration", "Business Process Automation", "Custom Module Development"],
    badge: "Enterprise",
    badgeColor: "purple",
    stats: [
      { value: "10+", label: "Clients" },
      { value: "Multi", label: "Industry" },
      { value: "CRM+ERP", label: "Full Suite" }
    ],
    tools: [
      { icon: "/images/microsoft365.png", name: "Microsoft 365", type: "image" },
      { icon: "/images/azure.png", name: "Azure", type: "image" },
      { icon: SiJira, name: "Jira" }
    ]
  },
  { 
    icon: "/images/clickup-blue1.png",
    iconType: "image",
    title: "ClickUp Transformation", 
    description: "From scattered tools to unified ClickUp workspace. Complete workspace architecture, automations, and team adoption. 50+ successful transformations",
    features: ["Complete Workspace Architecture", "Zapier & Native Automations", "Custom Views & Dashboards", "Team Training & Adoption", "Process Optimization"],
    badge: "Most Popular",
    badgeColor: "green",
    stats: [
      { value: "50+", label: "Workspaces" },
      { value: "5.0", label: "Rating" },
      { value: "100%", label: "Satisfaction" }
    ],
    tools: [
      { icon: SiClickup, name: "ClickUp" },
      { icon: SiZapier, name: "Zapier" },
      { icon: SiNotion, name: "Notion" }
    ]
  },
  { 
    icon: "/images/clickup-blue1.png",
    iconType: "image",
    title: "ClickUp Workspace Expert", 
    description: "Transform chaotic workflows into streamlined ClickUp systems that teams actually use.",
    features: ["Strategic Workspace Design", "Zapier & API Integrations", "Custom Dashboard Creation", "Workflow Automation"],
    badge: "Top Rated",
    badgeColor: "blue",
    stats: [
      { value: "40+", label: "Workspaces" },
      { value: "5.0", label: "Rating" },
      { value: "Expert", label: "Level" }
    ],
    tools: [
      { icon: SiClickup, name: "ClickUp" },
      { icon: SiZapier, name: "Zapier" },
      { icon: SiNotion, name: "Notion" }
    ]
  },
  { 
    icon: "/images/clay-blue.png",
    iconType: "image",
    title: "GTM Engineering & Clay Expert", 
    description: "Clay-powered lead generation and automation for recruiters. Data enrichment, AI personalization, and multi-channel outreach. Specialized in recruiter workflows",
    features: ["Clay Workflow Architecture (150+ sources)", "Candidate & Client Prospecting", "AI-Powered Personalization (Claygent)", "Multi-Channel Campaign Setup", "ATS/CRM Integration"],
    badge: "High Demand",
    badgeColor: "blue",
    stats: [
      { value: "1000+", label: "Leads/Month" },
      { value: "10x", label: "ROI" },
      { value: "70%", label: "Time Saved" }
    ],
    tools: [
      { icon: "/images/clay.png", name: "Clay", type: "image" },
      { icon: "/images/apollo.png", name: "Apollo", type: "image" },
      { icon: SiN8N, name: "n8n" }
    ]
  },
  { 
    icon: FiUsers, 
    title: "Agile Transformation", 
    description: "Implementing Agile frameworks and establishing Scrum environments. PMI Certified Agile PM",
    features: ["Scrum Framework Setup", "Team Training & Coaching", "Sprint Ceremonies", "Agile Best Practices"],
    badge: "Certified",
    badgeColor: "teal",
    stats: [
      { value: "20+", label: "Teams" },
      { value: "PMI", label: "Certified" },
      { value: "Global", label: "Delivery" }
    ],
    tools: [
      { icon: SiJira, name: "Jira" },
      { icon: SiClickup, name: "ClickUp" },
      { icon: SiAsana, name: "Asana" }
    ]
  },
  { 
    icon: FiBarChart, 
    title: "SaaS Product Delivery", 
    description: "MVP to production delivery for startups and scale-ups. Across USA, Australia, Europe",
    features: ["Product Roadmap Planning", "MVP Development & Launch", "Go-to-Market Strategy", "Scaling & Optimization"],
    badge: "Startup",
    badgeColor: "orange",
    stats: [
      { value: "15+", label: "Products" },
      { value: "3", label: "Regions" },
      { value: "MVP→Scale", label: "Full Cycle" }
    ],
    tools: [
      { icon: SiJira, name: "Jira" },
      { icon: SiClickup, name: "ClickUp" },
      { icon: SiNotion, name: "Notion" }
    ]
  },
  { 
    icon: FiTrello, 
    title: "Workflow Automation", 
    description: "Zapier, Make, and automation solutions to streamline operations. 200+ workflows delivered",
    features: ["Zapier Integration & Workflows", "Process Optimization", "API Connections", "Custom Automation Workflows"],
    badge: "Automation",
    badgeColor: "green",
    stats: [
      { value: "200+", label: "Workflows" },
      { value: "30+", label: "Tools" },
      { value: "50%", label: "Time Saved" }
    ],
    tools: [
      { icon: SiClickup, name: "ClickUp" },
      { icon: SiZapier, name: "Zapier" },
      { icon: SiNotion, name: "Notion" }
    ]
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeService, setActiveService] = useState(0);

  return (
    <section ref={ref} className="services-section">
      <div className="services-glow" />
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.7 }}
        >
          <span className="services-label">Services</span>
          <h1 className="services-heading">
            What I <span className="accent">Deliver</span>
          </h1>
          <p className="services-subtitle">Specialized in enterprise project management, SAP integrations, and delivering mission-critical systems across global teams.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.iconType === "image" ? null : service.icon;
            return (
              <motion.div
                key={service.title}
                className={`service-card ${activeService === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveService(index)}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-header">
                  <div className="service-icon-wrap">
                    {service.iconType === "image" ? (
                      <Image 
                        src={service.icon} 
                        alt={service.title}
                        width={32}
                        height={32}
                        className="service-icon-image"
                      />
                    ) : (
                      <Icon className="service-icon" />
                    )}
                  </div>
                  <span className={`badge badge-${service.badgeColor}`}>{service.badge}</span>
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map(feature => (
                    <li key={feature}>
                      <FiCheck className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="service-tools">
                  {service.tools.map((tool, idx) => (
                    <div key={idx} className="tool-badge" title={tool.name}>
                      {tool.type === "image" ? (
                        <Image 
                          src={tool.icon} 
                          alt={tool.name}
                          width={16}
                          height={16}
                          className="tool-image"
                        />
                      ) : (
                        <tool.icon className="tool-icon" />
                      )}
                    </div>
                  ))}
                </div>

                {service.stats && (
                  <div className="service-stats">
                    {service.stats.map((stat, idx) => (
                      <div key={idx} className="stat-item">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="cta-content">
            <h3>Behind schedule? Team confused? Stakeholders asking "when?"</h3>
            <p>I turn chaos into clarity. Deadlines into deliverables. Questions into execution.</p>
          </div>
          <Link href="/contact" className="cta-btn">
            <span>Let's Fix This</span>
            <FiArrowRight className="arrow-icon" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
