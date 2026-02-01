"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import "@/styles/projects.css";

export default function ProjectContent({ project }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const displayImages = project.images || [project.image];
  
  return (
    <section style={{ background: "#0a0a0a", minHeight: "100vh", padding: "120px 0 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 5%" }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.6)", marginBottom: 30, textDecoration: "none", transition: "color 0.3s" }}>
            <FiArrowLeft /> Back to Projects
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", marginBottom: 20 }}>{project.title}</h1>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 30 }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{ background: "rgba(77, 166, 255, 0.1)", color: "#4da6ff", padding: "6px 14px", borderRadius: 20, fontSize: "0.8rem", fontWeight: 500, border: "1px solid rgba(77, 166, 255, 0.2)" }}>{tag}</span>
            ))}
          </div>

          <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 15, border: "1px solid rgba(255,255,255,0.05)" }}>
            <img src={displayImages[selectedImage]} alt={project.title} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          
          {displayImages.length > 1 && (
            <div style={{ display: "flex", gap: 10, marginBottom: 30, justifyContent: "center" }}>
              {displayImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  style={{
                    width: 80,
                    height: 60,
                    border: selectedImage === index ? "2px solid #4da6ff" : "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8,
                    overflow: "hidden",
                    cursor: "pointer",
                    background: "transparent",
                    padding: 0,
                    opacity: selectedImage === index ? 1 : 0.6,
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = selectedImage === index ? 1 : 0.6}
                >
                  <img src={img} alt={`${project.title} ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </button>
              ))}
            </div>
          )}

          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 20, padding: "30px", marginBottom: 30 }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 600, color: "#fff", marginBottom: 15 }}>About this project</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.8 }}>{project.description}</p>
          </div>

          <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
            {project.github !== "#" && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  flex: 1, 
                  minWidth: 150,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "14px 32px",
                  background: "transparent",
                  color: "#4da6ff",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: 50,
                  border: "2px solid #4da6ff",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(77, 166, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FiGithub /> View Code
              </a>
            )}
            {project.live !== "#" && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  flex: 1, 
                  minWidth: 150,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #4da6ff, #6bb8ff)",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: 50,
                  border: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(77, 166, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
