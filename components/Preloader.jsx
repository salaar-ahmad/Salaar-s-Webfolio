"use client";

import { motion } from "framer-motion";
import "@/styles/preloader.css";

export default function Preloader() {
  return (
    <div className="preloader">
      <motion.div
        className="preloader-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="preloader-name">
          <span className="first">SALAAR</span>
          <span className="last">AHMAD</span>
        </div>
        <div className="preloader-bar">
          <motion.div
            className="preloader-progress"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
