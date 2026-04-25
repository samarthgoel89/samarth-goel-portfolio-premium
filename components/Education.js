"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const educationList = [
    {
      institution: "Indian School of Business (ISB)",
      period: "2018 – 2019",
      degree: "Post Graduation Program (PGP) in Management",
      major: "Major: Finance and Marketing",
      highlights: [
        "Dean's List",
      ],
      icon: <GraduationCap size={24} />,
      color: "var(--accent-primary)"
    },
    {
      institution: "Jaypee Institute of Information Technology",
      period: "2007 – 2012",
      degree: "M.B.A. – Finance & Strategy | B.Tech. – Computer Science Engineering",
      major: "Dual Degree",
      highlights: [
        "Top 5% amongst 500 students",
        "Engineered an Indian Sign Language interpreter leveraging computer vision, image processing, and machine learning to translate gestures into speech in real-time.",
        "National winner (among 480 teams) of Analyst 2011, an Apple product go-to-market strategy case competition."
      ],
      icon: <BookOpen size={24} />,
      color: "var(--accent-secondary)"
    },
    {
      institution: "Delhi Public School, Vasant Kunj",
      period: "up to 2007",
      degree: "High School",
      major: "Pre-University",
      highlights: [
        "Gold medalist",
        "Top 10% amongst ~600 students for 7 consecutive years"
      ],
      icon: <Award size={24} />,
      color: "var(--text-tertiary)"
    }
  ];

  return (
    <section className="education-section relative" ref={containerRef} style={{ padding: '8rem 0' }}>
      <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-header text-center reveal" style={{ textAlign: 'center' }}>
          <span className="mono-label" style={{ marginBottom: '1rem', display: 'block' }}>[ ACADEMIC_FOUNDATION ]</span>
          <h2 className="heading-xl text-gradient">Education</h2>
        </div>

        <div className="education-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '4rem', maxWidth: '900px', margin: '4rem auto 0 auto' }}>
          {educationList.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="education-card liquid-glass relative overflow-hidden"
              style={{ padding: '2.5rem', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '1.5rem' }}
            >
              {/* Decorative gradient orb */}
              <div 
                className="absolute top-0 right-0 w-64 h-64 mix-blend-screen opacity-20 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${edu.color} 0%, transparent 70%)`, transform: 'translate(20%, -30%)', filter: 'blur(40px)', borderRadius: '50%' }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 className="heading-sm" style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{edu.institution}</h3>
                  <div className="mono-sm" style={{ color: edu.color }}>
                    {edu.degree}
                  </div>
                </div>
                <div className="mono-sm glass" style={{ padding: '0.5rem 1rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {edu.period}
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, color: 'var(--text-tertiary)' }}>{edu.major}</span>
              </div>

              <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {edu.highlights.map((highlight, hIdx) => (
                  <motion.li 
                    key={hIdx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (hIdx * 0.1) }}
                    style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.75rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}
                  >
                    <span 
                      style={{ position: 'absolute', left: 0, top: '0.6rem', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: edu.color, opacity: 0.7 }}
                    />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ y, zIndex: 0 }}
      >
        <div style={{ position: 'absolute', top: '25%', left: '10%', width: '24rem', height: '24rem', borderRadius: '50%', mixBlendMode: 'screen', filter: 'blur(100px)', background: 'var(--accent-primary)' }} />
        <div style={{ position: 'absolute', bottom: '25%', right: '10%', width: '24rem', height: '24rem', borderRadius: '50%', mixBlendMode: 'screen', filter: 'blur(100px)', background: 'var(--accent-secondary)' }} />
      </motion.div>
    </section>
  );
}
