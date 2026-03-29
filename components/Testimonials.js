"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Samarth doesn't just build AI; he builds P&L growth. He took a business from zero to 50cr/month in six months by automating what others were trying to do manually. If you want a builder who understands the balance sheet, he's the one.",
    title: "CEO, Tier-1 NBFC Partner",
    accent: "hsl(210, 100%, 60%)",
    tag: "PORTFOLIO_SCALE"
  },
  {
    quote: "His ability to identify a $1M savings opportunity in data licensing and lead the implementation is rare. He bridges the gap between complex AI architecture and high-stakes financial strategy better than anyone I've worked with.",
    title: "Managing Director, Institutional Clients Group",
    accent: "hsl(270, 80%, 65%)",
    tag: "RISK_INTELLIGENCE"
  },
  {
    quote: "We saw a 4800X improvement in efficiency under his product leadership. Samarth is the architect you hire when you need to scale from 1200cr to 4000cr+ without adding a single person to your operations team.",
    title: "Strategic OEM Partner, Consumer Electronics",
    accent: "hsl(150, 80%, 55%)",
    tag: "OPERATIONAL_EFFICIENCY"
  }
];

export default function Testimonials() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.4; // px per frame

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const handleMouseEnter = () => { pausedRef.current = true; };
  const handleMouseLeave = () => { pausedRef.current = false; };

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <span className="mono-label" style={{ fontSize: "1rem", letterSpacing: "0.2em" }}>[ SOCIAL_PROOF ]</span>
          <h2 className="heading-xl text-gradient" style={{ marginTop: "1rem" }}>What Leaders Say</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "1rem", fontSize: "1rem", letterSpacing: "0.05em" }} className="mono">
            From the people who've seen the impact firsthand.
          </p>
        </motion.div>
      </div>

      <div
        className="testimonials-track-outer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="testimonials-track" ref={trackRef}>
          {doubled.map((t, i) => (
            <div key={i} className="testimonial-card glass" style={{ "--card-accent": t.accent }}>
              <div className="testimonial-card-top">
                <span className="testimonial-tag mono">{t.tag}</span>
                <Quote size={24} style={{ color: t.accent, opacity: 0.6, flexShrink: 0 }} />
              </div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-footer">
                <div className="testimonial-accent-bar" style={{ background: t.accent }} />
                <span className="testimonial-title mono-sm">{t.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
