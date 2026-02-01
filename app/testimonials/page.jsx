"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiStar, FiCalendar } from "react-icons/fi";
import { SiUpwork, SiClickup } from "react-icons/si";
import Image from "next/image";
import "@/styles/testimonials.css";

const upworkTestimonials = [
  {
    title: "ClickUp/Project Management Expert Needed to Build Agency Project Management & Operations System",
    rating: 5.0,
    date: "Dec 23, 2025 - Jan 22, 2026",
    feedback: "We had the pleasure of working with Salaar, an exceptional ClickUp consultant who not only understood our challenges, even those we hadn't yet fully articulated, but turned them into actionable solutions.",
  },
  {
    title: "Clickup Management For Agency",
    rating: 5.0,
    date: "Jan 10, 2026 - Jan 10, 2026",
    feedback: "Working with Salaar was a game-changer for how I run my business in ClickUp. Before he stepped in, my workspace was messy and underutilized. He rebuilt everything with a clean structure.",
  },
  {
    title: "Project management mentoring",
    rating: 5.0,
    date: "Oct 14, 2025 - Dec 25, 2025",
    feedback: "Thanks a lot for helping out in the complex projects and organizing and mentoring for project management was really remarkable. Looking forward to working again with you, great quality deliverance.",
  },
  {
    title: "Interim project management of team using OpenProject",
    rating: 5.0,
    date: "Sep 12, 2025 - Dec 1, 2025",
    feedback: "Salaar was an excellent project manager, with enough technical knowledge to keep everyone in line with their commitments. His command of English is excellent, and he is a pleasant and professional person.",
  },
  {
    title: "Product & Project Management Services",
    rating: 5.0,
    date: "Nov 3, 2025 - Nov 8, 2025",
    feedback: "Great work, Great ethics, and he goes above and beyond.",
  },
  {
    title: "SAP S/4HANA Program Manager Interview Coach Needed (Public Cloud, RISE)",
    rating: 5.0,
    date: "Oct 22, 2025 - Oct 22, 2025",
    feedback: "Professional and knowledgeable SAP consultant.",
  },
  {
    title: "ESG Compliance Software Decision-Maker Research Study – Paid Survey",
    rating: 5.0,
    date: "Oct 21, 2025 - Oct 21, 2025",
    feedback: "Amazing experience working with Salaar - would absolutely recommend to others!",
  }
];

const clickupTestimonials = [
  {
    image: "/images/testimonial1.png",
    alt: "ClickUp Testimonial 1"
  },
  {
    image: "/images/testimonial2.jpeg",
    alt: "ClickUp Testimonial 2"
  }
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="testimonials-section">
      <div className="testimonials-glow" />
      <div className="testimonials-glow-2" />
      
      <div className="testimonials-container">
        {/* Hero */}
        <div className="testimonials-hero">
          <motion.span 
            className="testimonials-label"
            initial={{ opacity: 0, y: 20 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.5 }}
          >
            Client Feedback
          </motion.span>
          
          <motion.h1 
            className="testimonials-heading"
            initial={{ opacity: 0, y: 30 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What <span className="accent">Clients Say</span>
          </motion.h1>
          
          <motion.p 
            className="testimonials-subtitle"
            initial={{ opacity: 0, y: 30 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real feedback from clients on Upwork and ClickUp
          </motion.p>
        </div>

        {/* Upwork Testimonials */}
        <motion.div 
          className="testimonials-section-wrapper"
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="section-header">
            <SiUpwork className="section-icon upwork-icon" />
            <h2 className="section-title">Upwork Reviews</h2>
          </div>
          
          <div className="testimonials-grid">
            {upworkTestimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }} 
                animate={inView ? { opacity: 1, y: 0 } : {}} 
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="testimonial-header">
                  <h3 className="testimonial-title">{testimonial.title}</h3>
                  {testimonial.rating && (
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="star-icon filled" />
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="testimonial-meta">
                  <div className="meta-item">
                    <FiCalendar className="meta-icon" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
                
                {testimonial.feedback && (
                  <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ClickUp Testimonials */}
        <motion.div 
          className="testimonials-section-wrapper"
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="section-header">
            <FiStar className="section-icon clickup-icon" />
            <h2 className="section-title">Client Testimonials</h2>
          </div>
          
          <div className="testimonials-images-grid">
            {clickupTestimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="testimonial-image-card"
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={inView ? { opacity: 1, scale: 1 } : {}} 
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.alt}
                  width={800}
                  height={600}
                  className="testimonial-image"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View Upwork Profile Button */}
        <motion.div 
          className="upwork-cta"
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a 
            href="https://www.upwork.com/freelancers/salaarahmad?mp_source=share" 
            target="_blank" 
            rel="noopener noreferrer"
            className="upwork-btn"
          >
            <SiUpwork className="upwork-btn-icon" />
            <span>View My Upwork Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
