"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Bot, Cpu, TrendingUp, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Policy Saarthi (RAG Bot)",
    category: "GEN_AI_AGENT",
    tech: ["Python", "RAG", "LangChain", "OpenAI"],
    desc: "AI-powered policy assistant for the Clix salesforce, enabling real-time queries and strategic guidance on Loan Against Property policies.",
    impact: "Enhanced Salesforce Effectiveness",
    icon: <Bot size={24} />,
    color: "var(--accent-blue)",
    link: "https://bit.ly/4r8u7pu"
  },
  {
    title: "AI Business Caller",
    category: "VOICE_AI",
    tech: ["Python", "Vapi", "AI Voice", "Groq"],
    desc: "Autonomous AI caller for automated DSA reachout, engagement, and product awareness, reducing manual outreach effort by 80%.",
    impact: "80% Reachout Automation",
    icon: <Cpu size={24} />,
    color: "var(--accent-purple)",
    link: "http://bit.ly/4ao1DAK"
  },
  {
    title: "DSA Finder AI",
    category: "GEOSPATIAL_AI",
    tech: ["Python", "Maps API", "Clustering"],
    desc: "Intelligent tool to identify and prospect nearby DSAs, optimizing the sales team's field efforts through data-driven planning.",
    impact: "Optimized Field Prospecting",
    icon: <Cpu size={24} />,
    color: "var(--accent-blue)",
    link: "https://bit.ly/DSA-finder"
  },
  {
    title: "AI Curated Newsletter",
    category: "AGENTIC_WORKFLOW",
    tech: ["Python", "NewsAPI", "LLM Summarization"],
    desc: "Automated personal intelligence system that curates and summarizes industry-specific news to keep strategic decisions updated.",
    impact: "Strategic Intel Automation",
    icon: <TrendingUp size={24} />,
    color: "var(--accent-purple)",
    link: "https://bit.ly/clix-briefs"
  }
];

function TiltCard({ project, idx }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className={idx === 0 ? 'tile-featured' : ''}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="project-tile glass border-beam"
      >
        {/* The content pops out slightly */}
        <div className="tile-content" style={{ transform: "translateZ(40px)" }}>
          <div className="tile-header">
            <div className="project-icon" style={{ color: project.color }}>{project.icon}</div>
            <span className="mono-label">{project.category}</span>
          </div>

          <div className="tile-body">
            <h3 className="project-title heading-v2">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            
            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag mono-sm">{t}</span>
              ))}
            </div>
          </div>

          <div className="tile-footer">
            <div className="impact-indicator">
              <span className="mono-tag">CORE_IMPACT</span>
              <p className="impact-text mono">{project.impact}</p>
            </div>
            <a href={project.link} className="project-link" style={{ transform: "translateZ(20px)" }}>
              <ArrowUpRight size={24} />
            </a>
          </div>
        </div>

        {/* Glow effect slightly pushed back */}
        <div className="tile-glow" style={{ background: `radial-gradient(circle at top right, ${project.color}33, transparent)`, transform: "translateZ(-20px)" }} />
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container-wide">
        <div className="section-header reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="mono-label" style={{ fontSize: "1rem", letterSpacing: "0.2em" }}>[ THE_EXPERIMENTAL_LAB ]</span>
          <h2 className="heading-xl text-gradient" style={{ marginTop: "1rem" }}>AI Lab & Projects</h2>
        </div>

        <div className="projects-bento">
          {projects.map((project, idx) => (
            <TiltCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
