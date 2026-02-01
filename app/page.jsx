"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import TypingAnimation from "@/components/TypingAnimation";
import CircularTools from "@/components/CircularTools";
import { SiUpwork } from "react-icons/si";
import "@/styles/home.css";

const professionalHighlights = [
  {
    quote: "Leading cross-functional teams to deliver complex projects on time and within budget, ensuring stakeholder satisfaction and business objectives are met.",
    name: "Project Leadership",
    title: "Team Coordination & Delivery",
  },
  {
    quote: "Implementing agile methodologies and strategic planning frameworks to optimize project workflows and enhance team productivity.",
    name: "Agile & Strategy",
    title: "Process Optimization",
  },
  {
    quote: "Managing project lifecycles from initiation to closure, coordinating resources, timelines, and deliverables with precision and excellence.",
    name: "End-to-End Management",
    title: "Full Lifecycle Oversight",
  },
  {
    quote: "Facilitating effective communication between stakeholders, clients, and development teams to ensure alignment and project success.",
    name: "Stakeholder Management",
    title: "Communication & Alignment",
  },
  {
    quote: "Driving innovation and continuous improvement through data-driven decision making and adaptive project management approaches.",
    name: "Innovation & Growth",
    title: "Strategic Development",
  },
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Disable animations on mobile
  const animationProps = isMobile ? {
    initial: {},
    animate: {},
    transition: { duration: 0 }
  } : {};

  return (
    <LazyMotion features={domAnimation}>
      <section className="hero">
      {/* Animated Gradient Orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Grid Overlay */}
      <div className="grid-overlay"></div>

      {/* Background Name with Enhanced Effects */}
      <motion.div 
        className="hero-bg-name"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="name-wrapper">
          <motion.span 
            className="bg-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SALAAR
          </motion.span>
          <motion.span 
            className="bg-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AHMAD
          </motion.span>
          <motion.span 
            className="bg-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            FURQAN
          </motion.span>
        </div>
        
        {/* Glowing Accent Line */}
        <motion.div 
          className="accent-line"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.8 }}
        ></motion.div>
        
        <TypingAnimation />
        
        {/* Stats as Text */}
        <motion.div 
          className="stats-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="stat-item">
            <div className="stat-num">20+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          
          <Link href="/contact" className="work-with-me-btn">
            <span>WORK WITH ME</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </Link>
        </motion.div>
        
        {/* Tools Grid replacing Moving Cards */}
        <motion.div 
          className="tools-section"
          {...(isMobile ? {} : {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5, delay: 0.6 }
          })}
        >
          <CircularTools />
        </motion.div>
      </motion.div>

      {/* Center - Profile Image with Enhanced Effects */}
      <motion.div 
        className="hero-center"
        {...(isMobile ? {} : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5, delay: 0.2 }
        })}
      >
        <div className="profile-container">
          {/* Glowing Ring Effect - Removed */}
          
          {/* Main Profile Image */}
          <div className="profile-image-wrapper">
            <Image 
              src="/images/profile4.png" 
              alt="Salaar Ahmad Furqan" 
              width={600}
              height={800}
              className="profile-image"
              priority
            />
          </div>
          
          {/* Circular Text Ring with Upwork Logo */}
          <div className="circular-text-ring">
            <svg viewBox="0 0 200 200" className="circular-svg">
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                />
              </defs>
              <g>
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 100 100"
                  to="360 100 100"
                  dur="30s"
                  repeatCount="indefinite"
                />
                <text className="circular-text">
                  <textPath href="#circlePath" startOffset="0%">
                    PROJECT MANAGER • CLICKUP • SAP • DEVOPS  •
                  </textPath>
                </text>
              </g>
            </svg>
            
            {/* Upwork Logo in Center */}
            <a
              href="https://www.upwork.com/freelancers/salaarahmad?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="upwork-center-logo"
            >
              <SiUpwork className="upwork-icon" />
            </a>
            
            {/* Arrow below circular text */}
            {/* <div className="circular-arrow">
              <Image 
                src="/images/arrow3.png" 
                alt="Arrow" 
                width={60}
                height={60}
                className="arrow-image"
              />
            </div> */}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* Removed scroll indicator */}
    </section>
    </LazyMotion>
  );
}
