"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="skills-interests reveal"
          style={{ marginTop: '4rem' }}
        >
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '2rem', marginBottom: '3rem', textAlign: 'center' }}>
            <div className="mono-label" style={{ marginBottom: '1rem' }}>[ TECHNICAL_DNA ]</div>
            <h2 className="heading-xl text-gradient">Skills & Interests</h2>
          </div>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h4 className="mono-sm text-secondary">CORE_COMPETENCIES</h4>
              <div className="skills-list">
                {["Business Analysis", "Product Management", "SQL & Data Analysis", "VBA Macros", "APIs & .Net", "Applied AI"].map(s => (
                  <span key={s} className="skill-tag glass">{s}</span>
                ))}
              </div>
            </div>
            
            <div className="skill-category">
              <h4 className="mono-sm text-secondary">INTERESTS_&_PASSIONS</h4>
              <div className="skills-list">
                {["AI Enthusiast", "Financial Modeling", "Strategy & Startups", "UX Design", "Pickleball", "Traveling"].map(s => (
                  <span key={s} className="interest-tag liquid-glass">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
