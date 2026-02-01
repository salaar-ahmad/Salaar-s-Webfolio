"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SiJira, SiNotion, SiFigma, SiConfluence, SiN8N, SiSap, SiZapier } from "react-icons/si";
import { FiFileText, FiSlack } from "react-icons/fi";
import Image from "next/image";

const skills = [
  { icon: SiJira, name: "Jira", type: "icon" },
  { icon: "/images/azure.png", name: "Azure DevOps", type: "image" },
  { icon: "/images/clickup.png", name: "ClickUp", type: "image" },
  { icon: SiNotion, name: "Notion", type: "icon" },
  { icon: "/images/microsoft365.png", name: "Microsoft 365", type: "image" },
  { icon: SiSap, name: "SAP", type: "icon" },
  { icon: FiSlack, name: "Slack", type: "icon" },
  { icon: SiFigma, name: "Figma", type: "icon" },
  { icon: SiConfluence, name: "Confluence", type: "icon" },
  { icon: SiN8N, name: "n8n", type: "icon" },
  { icon: "/images/clay.png", name: "Clay", type: "image" },
  { icon: SiZapier, name: "Zapier", type: "icon" },
  { icon: "/images/apollo.png", name: "Apollo", type: "image" },
];

export default function CircularTools() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const containerRef = useRef(null);
  const lastX = useRef(0);
  const lastTime = useRef(Date.now());
  const animationRef = useRef(null);

  // Triple duplicate for smoother infinite loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  // Auto-scroll animation with seamless loop
  useEffect(() => {
    if (!isHovered && !isDragging) {
      const animate = () => {
        setPosition((prev) => {
          const newPos = prev - 0.8; // Decreased speed from 1.2 to 0.8
          // Calculate single set width (approximate)
          const itemWidth = 150; // Approximate width of each tool card with gap
          const singleSetWidth = skills.length * itemWidth;
          
          // Reset seamlessly when first set is completely off screen
          if (Math.abs(newPos) >= singleSetWidth) {
            return newPos % singleSetWidth;
          }
          return newPos;
        });
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isDragging]);

  // Apply velocity after drag
  useEffect(() => {
    if (!isDragging && velocity !== 0 && !isHovered) {
      const decelerate = () => {
        setVelocity((prev) => {
          const newVelocity = prev * 0.95; // Deceleration factor
          if (Math.abs(newVelocity) < 0.1) {
            return 0;
          }
          return newVelocity;
        });

        setPosition((prev) => {
          const newPos = prev + velocity;
          const itemWidth = 150;
          const singleSetWidth = skills.length * itemWidth;
          
          // Seamless loop for dragging
          if (Math.abs(newPos) >= singleSetWidth) {
            return newPos % singleSetWidth;
          }
          return newPos;
        });

        if (Math.abs(velocity) >= 0.1) {
          animationRef.current = requestAnimationFrame(decelerate);
        }
      };
      animationRef.current = requestAnimationFrame(decelerate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [velocity, isDragging, isHovered]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setVelocity(0);
    lastX.current = e.clientX;
    lastTime.current = Date.now();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime.current;
    const deltaX = e.clientX - lastX.current;

    if (deltaTime > 0) {
      const currentVelocity = deltaX / deltaTime * 16; // Normalize to 60fps
      setVelocity(currentVelocity);
    }

    setPosition((prev) => {
      const newPos = prev + deltaX;
      const itemWidth = 150;
      const singleSetWidth = skills.length * itemWidth;
      
      // Seamless wrap for dragging
      if (Math.abs(newPos) >= singleSetWidth) {
        return newPos % singleSetWidth;
      }
      return newPos;
    });

    lastX.current = e.clientX;
    lastTime.current = currentTime;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="tools-scroll-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={handleMouseDown}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <div
        className="tools-scroll-track"
        style={{
          transform: `translateX(${Math.round(position)}px)`,
          transition: isDragging ? "none" : "transform 0.1s linear",
        }}
      >
        {duplicatedSkills.map((skill, index) => {
          return (
            <motion.div
              key={`${skill.name}-${index}`}
              className="tool-scroll-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {skill.type === "image" ? (
                <Image 
                  src={skill.icon} 
                  alt={skill.name}
                  width={24}
                  height={24}
                  className="tool-scroll-icon tool-scroll-image"
                />
              ) : (
                (() => {
                  const Icon = skill.icon;
                  return <Icon className="tool-scroll-icon" />;
                })()
              )}
              <span className="tool-scroll-name">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
      
      {/* Fade overlays */}
      <div className="tools-fade-left"></div>
      <div className="tools-fade-right"></div>
    </div>
  );
}
