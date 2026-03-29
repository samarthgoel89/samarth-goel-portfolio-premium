"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const studies = [
  {
    id: "clix",
    title: "The 400Cr Growth Engine",
    client: "Enterprise Scale",
    role: "Strategic Architect",
    description: "Scaling co-lending from zero to 50Cr/month in 180 days. Architected a scorecard-based underwriting system and 100% digital co-lending framework — zero human resource ramp-up, 40% of company PAT within one fiscal year.",
    metrics: ["INR 400 Cr Built in 12 Months", "40% of Company PAT", "Zero Headcount Ramp"],
    color: "#00FFA3", 
    image: "/images/case_studies/growth.png"
  },
  {
    id: "dmi",
    title: "The 4800X Multiplier",
    client: "Platform Ecosystems",
    role: "Ecosystem Architect",
    description: "Automating digital KYC and end-to-end loan journeys to generate INR 60Cr annual business value. Grew the loan book from 1200Cr to 4300Cr+ in 3 years through intelligent API-first integrations with Samsung and Google Pay.",
    metrics: ["4800X Efficiency Gain", "INR 60Cr Annual Value", "1200Cr → 4300Cr+ Growth"],
    color: "#7000FF", 
    image: "/images/case_studies/efficiency.png"
  },
  {
    id: "citi",
    title: "Regulatory & Risk Shield",
    client: "Global Institutional Banking",
    role: "Lead Tech Strategist",
    description: "Saving $2M in potential regulatory fines across US and HK markets through AI-driven compliance automation. Deployed 'Policy Saarthi' (RAG-based AI Bot) for real-time policy navigation — ranking #1 globally on regulatory scorecards.",
    metrics: ["$2M Fines Prevented", "#1 Global Regulatory Rank", "35th → 1st Place"],
    color: "#00E5FF", 
    image: "/images/case_studies/security.png"
  }
];

export default function CaseStudies() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 4 items (1 intro + 3 slides) = 400vw width in flex.
  // To reach the end, we slide by -75% (3/4 of total).
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="hs-section">
      <div className="hs-sticky-container">
        <motion.div style={{ x }} className="hs-track">
          
          {/* Intro Slide */}
          <div className="hs-intro-slide">
             {/* Large background text for parallax effect */}
            <motion.div 
              style={{ y: useTransform(smoothProgress, [0, 0.25], [0, 200]) }}
              className="hs-intro-bg-text font-mono"
            >
              ROI<br/>GRID
            </motion.div>

            <div style={{ maxWidth: "800px", position: "relative", zIndex: 10 }}>
              <span className="mono-label" style={{ fontSize: "1.2rem", letterSpacing: "0.3em", color: "#00FFA3" }}>
                [ THE_ROI_GRID ]
              </span>
              <h2 className="heading-xl text-gradient" style={{ marginTop: "1rem", lineHeight: 1.1 }}>
                Strategic<br/>Interventions
              </h2>
              <p style={{ color: "var(--text-secondary)", marginTop: "2rem", fontSize: "1.2rem", lineHeight: 1.6, fontWeight: 300 }}>
                Three high-stakes problems. Three AI-powered solutions. Hard numbers, not estimates.
              </p>
            </div>
          </div>

          {/* Cards */}
          {studies.map((study, idx) => {
            const parallaxY = useTransform(smoothProgress, [0, 1], [150, -150]);
            
            return (
              <div key={study.id} className="hs-slide">
                <div className="hs-card">
                  
                  {/* Subtle noise over the card */}
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/noise.png)', opacity: 0.03, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 5 }} />

                  {/* Visual side with parallaxed image */}
                  <div className="hs-visual-side">
                    <Image 
                      src={study.image} 
                      alt={study.title}
                      fill
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2) 50%, transparent)' }} />
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', backgroundColor: study.color, boxShadow: `0 0 20px ${study.color}`, zIndex: 10 }} />
                  </div>

                  {/* Content side */}
                  <div className="hs-content-side">
                    {/* Parallax Digit */}
                    <motion.div className="hs-bg-digit font-mono" style={{ y: parallaxY }}>
                      0{idx + 1}
                    </motion.div>

                    <div style={{ position: 'relative', zIndex: 10 }}>
                      <span className="mono-label" style={{ color: study.color, display: 'block', marginBottom: '1rem' }}>
                        {study.client} // {study.role}
                      </span>
                      
                      <h3 className="hs-title">
                        {study.title}
                      </h3>
                      
                      <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '90%' }}>
                        {study.description}
                      </p>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase' }}>
                          Key Outcomes
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                          {study.metrics.map((m, i) => (
                            <div key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', padding: '0.5rem 1rem', borderRadius: '4px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: study.color }} />
                              {m}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Progress Bar */}
        <div className="hs-progress-bar">
          <motion.div 
            className="hs-progress-fill"
            style={{ scaleX: smoothProgress }}
          />
        </div>

      </div>
    </section>
  );
}
