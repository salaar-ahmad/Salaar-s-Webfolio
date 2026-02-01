"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import "@/styles/navbar.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href) => pathname === href;

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? "scrolled" : ""}`} 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-container">
          <Link href="/" className="navbar-logo">
            SALAAR AHMAD FURQAN
          </Link>
          <div className="navbar-center">
            <div className="nav-pill">
              {navItems.map(item => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={`nav-link ${isActive(item.href) ? "active" : ""} ${item.name === "Projects" ? "projects-link" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contact" className="navbar-cta">Get in Touch</Link>
          
          {/* Animated Hamburger Button */}
          <button 
            className={`menu-toggle ${menuOpen ? "active" : ""}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`mobile-nav-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <div 
          className={`mobile-menu-container ${menuOpen ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="mobile-nav-content">
            {navItems.map((item, index) => (
              <div 
                key={item.name} 
                className="mobile-nav-item"
                style={{ 
                  transitionDelay: menuOpen ? `${index * 0.1}s` : "0s"
                }}
              >
                <Link 
                  href={item.href} 
                  className={`mobile-nav-link ${isActive(item.href) ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div 
              className="mobile-nav-item"
              style={{ transitionDelay: menuOpen ? `${navItems.length * 0.1}s` : "0s" }}
            >
              <Link 
                href="/contact" 
                className="mobile-cta" 
                onClick={() => setMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
