"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import "@/styles/contact.css";

const contactCards = [
  { icon: FiMail, label: "Email", value: "salaar31@gmail.com", href: "mailto:salaar31@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+92 335 3717117", href: "tel:+923353717117" },
  { icon: FiLinkedin, label: "LinkedIn", value: "salaarahmadfurqan", href: "https://linkedin.com/in/salaarahmadfurqan" },
  { icon: FiGithub, label: "GitHub", value: "salaar-ahmad", href: "https://github.com/salaar-ahmad/" },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "", budget: "" });
  const [status, setStatus] = useState({ sending: false, message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ sending: true, message: "" });
    emailjs.send("service_hg67o1y", "template_ri9jval", { 
      from_name: formData.name, 
      from_email: formData.email, 
      message: formData.message + (formData.budget ? `\n\nBudget: ${formData.budget}` : ""),
      to_email: "salaar31@gmail.com" 
    }, "4McJnW1UwEbWA2DvM")
      .then(() => { 
        setStatus({ sending: false, message: "Message sent successfully!" }); 
        setFormData({ name: "", email: "", message: "", budget: "" }); 
      })
      .catch(() => { 
        setStatus({ sending: false, message: "Failed to send. Please try again." }); 
      });
  };

  return (
    <section ref={ref} className="contact-section">
      <div className="contact-container">
        {/* Main Section - Heading + Form */}
        <div className="contact-main">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6 }}
          >
            <h1 className="contact-heading">
              LET'S<br />
              COLLABORATE<br />
              TOGETHER!
            </h1>
          </motion.div>

          <motion.div 
            className="contact-form-section"
            initial={{ opacity: 0, x: 50 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Your Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Project Details</label>
                <textarea name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="What is your Project goals, requirement and specific timeline..." required className="form-input form-textarea" />
              </div>
              <div className="form-group">
                <label className="form-label">Project Budget</label>
                <input type="text" name="budget" value={formData.budget} onChange={handleChange} placeholder="What is your Budget (USD)" className="form-input" />
              </div>
              <button type="submit" disabled={status.sending} className="submit-btn">
                {status.sending ? "Sending..." : "Submit Inquiry"} <FiSend />
              </button>
              {status.message && (
                <p className={`status-message ${status.message.includes("success") ? "status-success" : "status-error"}`}>
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <motion.div 
          className="contact-info-section"
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="contact-info-grid">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="contact-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="contact-card-icon"><Icon /></div>
                  <div className="contact-card-text">
                    <span className="contact-card-label">{card.label}</span>
                    <span className="contact-card-value">{card.value}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
