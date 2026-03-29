"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Eye, Target, Zap } from "lucide-react";

export default function Philosophy() {
  const pillars = [
    {
      icon: <BrainCircuit size={32} />,
      title: "Agentic Intelligence",
      tag: "CORE_ARCHITECTURE",
      text: "Moving beyond deterministic code to autonomous financial agents that orchestrate complex business logic end-to-end."
    },
    {
      icon: <Eye size={32} />,
      title: "Strategic Foresight",
      tag: "MARKET_STEERING",
      text: "Identifying the precise intersection of emerging GenAI capabilities and structural high-impact fintech market gaps."
    },
    {
      icon: <Target size={32} />,
      title: "Impact at Scale",
      tag: "VALUE_EXTRACTION",
      text: "Engineering intelligence layers that drive INR 400cr+ in incremental PAT through hyper-filtered operational efficiency."
    }
  ];

  return (
    <section className="vision-section">
      <div className="container-wide">
        <div className="vision-header reveal" style={{ textAlign: 'center' }}>
          <span className="mono-label" style={{ display: 'block', marginBottom: '1rem' }}>[ THE_STRATEGIC_MINDSET ]</span>
          <h2 className="heading-xl text-gradient">The Philosophy</h2>
          <p className="vision-lead" style={{ margin: '0 auto' }}>Intelligence is the new infrastructure. My mission is to build the cognitive layer that defines the next decade of financial ecosystems.</p>
        </div>

        <div className="vision-grid">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="vision-pillar liquid-glass"
            >
              <div className="pillar-header">
                <div className="pillar-icon">{pillar.icon}</div>
                <span className="pillar-tag mono-sm">{pillar.tag}</span>
              </div>
              
              <div className="pillar-body">
                <h3 className="pillar-title heading-sm">{pillar.title}</h3>
                <p className="pillar-text">{pillar.text}</p>
              </div>

              <div className="pillar-status mono-sm">
                <Zap size={14} className="icon-pulse" /> SYSTEM_ACTIVE
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
