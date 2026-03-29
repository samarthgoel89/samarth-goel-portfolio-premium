"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight, TrendingUp, Zap } from "lucide-react";
import Counter from "./Counter";

const experience = [
  {
    company: "Clix Capital",
    logo: "CX",
    role: "AVP | Strategy & New Business Initiatives - CEO’s Office",
    period: "Dec 2022 - Present",
    location: "Gurugram, India",
    context: "AI Strategy & Enterprise Transformation",
    impact: [
      { label: "Portfolio Value", val: "INR 400 Cr" },
      { label: "Bottom Line Impact", val: "40%" },
      { label: "Process Efficiency", val: "4800X" }
    ],
    points: [
      "Spearheaded enterprise-wide AI transformation, architecting scalable generative AI solutions that drove unprecedented operational efficiency.",
      "Developed and deployed proprietary AI agent frameworks (Voice Agents, RAG Bots, Workflow Automation) reducing manual intervention by 4800X.",
      "Conceptualized and launched a high-growth digital product line, scaling zero-to-one initiatives into multi-million dollar business units.",
      "Served as chief strategic advisor to the CEO on advanced tech adoption, leading organizational upskilling in LLM workflows and AI-first thinking."
    ]
  },
  {
    company: "DMI Finance",
    role: "Senior Product Manager",
    period: "May 2019 - Dec 2022",
    location: "New Delhi, India",
    context: "Digital Ecosystems & ML Product Innovation",
    impact: [
      { label: "Scale Multiplier", val: "3.5X" },
      { label: "Managed Ecosystem", val: "INR 4300 Cr+" }
    ],
    points: [
      "Architected heavily integrated digital ecosystems managing over INR 4300+ Cr, achieving 3.5X scale with zero linear headcount growth.",
      "Forged deep tech-driven partnerships with global leaders (Google, Samsung), establishing seamless API-first collaborative networks.",
      "Engineered automated compliance and identity verification pipelines leveraging computer vision and machine learning models.",
      "Designed algorithmic cross-selling recommendation models that drastically improved conversion funnels mathematically."
    ]
  },
  {
    company: "Citibank",
    role: "Assistant Vice President, IT Business Analyst",
    period: "Jun 2014 - Apr 2018",
    location: "Singapore",
    context: "Enterprise AI & Advanced Analytics",
    impact: [
      { label: "User Base", val: "82K+" },
      { label: "Risk Mitigation", val: "$2M" }
    ],
    points: [
      "Led the technical evolution of the firm's flagship market intelligence platform, achieving the #1 rank across global institutional platforms.",
      "Ideated and delivered a pioneering machine-learning and NLP-powered recommendation engine for global sales desks.",
      "Designed predictive risk models and automated diagnostic workflows that preemptively neutralized $2M in potential regulatory drift.",
      "Awarded top 0.125% performance honors globally for exceptional technical translation and business capability architecture."
    ]
  },
  {
    company: "HCL Technologies",
    role: "Business Analyst",
    period: "May 2012 - Jun 2014",
    location: "Singapore",
    context: "Global Business Strategy & Operations",
    points: [
      "Directed a globally distributed engineering and analytics cohort across four continents to deliver high-stakes enterprise roadmaps.",
      "Instrumental in generating $300M in strategic value optimizations via data-driven client relationship lifetime modeling.",
      "Developed advanced execution cost analytics to track operational profitability and automatically reconcile complex global invoices.",
      "Instituted rigorous technical training regimes for developers and analysts, bridging the gap between business intent and technical architecture."
    ]
  }
];

export default function Experience() {
  return (
    <section className="exp-section">
      <div className="container-wide">
        <div className="section-header reveal" style={{ textAlign: "center", marginBottom: "6rem" }}>
          <span className="mono-label" style={{ fontSize: "1rem", letterSpacing: "0.2em" }}>[ THE_CHRONOLOGY ]</span>
          <h2 className="heading-xl text-gradient" style={{ marginTop: "1rem" }}>Professional Journey</h2>
        </div>

        <div className="timeline" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <div className="marker-dot border-beam" />
                <div className="marker-line" />
              </div>

              <div className="timeline-content glass border-beam">
                <div className="exp-header">
                  <div>
                    <h3 className="company-name heading-sm">{exp.company}</h3>
                    <p className="role-title mono text-gradient">{exp.role}</p>
                    {exp.company === "Citibank" && (
                      <div className="promo-badge mono-sm">
                        <TrendingUp size={12} />
                        <span>Manager → AVP in <strong>3 years</strong> &nbsp;(Industry avg: 4.5 yrs)</span>
                      </div>
                    )}
                  </div>
                  <div className="exp-meta mono-sm">
                    <div className="meta-item"><Calendar size={14} /> {exp.period}</div>
                    <div className="meta-item"><MapPin size={14} /> {exp.location}</div>
                  </div>
                </div>

                <div className="exp-body">
                  <p className="exp-context">
                    <Zap size={14} /> {exp.context}
                  </p>
                  
                  <ul className="exp-points">
                    {exp.points.map((pt, i) => (
                      <li key={i}>
                        <ChevronRight size={14} className="text-secondary" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.impact && (
                    <div className="exp-impact-grid">
                      {exp.impact.map((imp, i) => {
                        // Extract number and surrounding text gracefully using regex
                        const prefixMatch = imp.val.match(/^[^0-9.]+/);
                        const suffixMatch = imp.val.match(/[^0-9.]+$/);
                        const numMatch = imp.val.match(/[0-9.]+/);
                        
                        const prefix = prefixMatch ? prefixMatch[0] : "";
                        const suffix = suffixMatch ? suffixMatch[0] : "";
                        const num = numMatch ? parseFloat(numMatch[0]) : 0;
                        
                        return (
                          <div key={i} className="impact-card-sm liquid-glass">
                            <span className="impact-val heading-sm">
                                <Counter value={num} prefix={prefix} suffix={suffix} delay={0.2 * i} />
                            </span>
                            <span className="impact-label mono-sm">{imp.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
}
