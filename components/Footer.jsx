"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import "@/styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <motion.div className="footer-brand-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h3 className="footer-name">Salaar Ahmad Furqan</h3>
            <p className="footer-tagline">Technical Project Manager specializing in end-to-end delivery of complex technical projects. From MVP to scale, I turn ambiguous requirements into production-grade systems.</p>
            <div className="footer-social">
              <a href="https://www.upwork.com/freelancers/salaarahmad?mp_source=share" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Upwork">
                <svg viewBox="0 0 24 24" className="upwork-svg-icon" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/salaarahmadfurqan" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="mailto:salaar31@gmail.com" className="social-icon" aria-label="Email"><FiMail /></a>
              <a href="https://github.com/salaar-ahmad/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><FiGithub /></a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-links-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="footer-contact-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li><FiMail /> salaar31@gmail.com</li>
              <li><FiPhone /> +92 335 3717117</li>
              <li><FiMapPin /> Islamabad, Pakistan</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div className="footer-bottom" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
          <p>© {currentYear} Salaar Ahmad Furqan. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
