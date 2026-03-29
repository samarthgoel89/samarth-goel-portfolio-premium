"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Globe,
  Plus,
  ArrowUpRight
} from "lucide-react";
import Image from "next/image";

import Navbar from "../components/Navbar";
import ExperienceView from "../components/Experience";
import ProjectGrid from "../components/Projects";
import ContactForm from "../components/Contact";
import Hero3D from "../components/Hero3D";
import LogoCloud from "../components/LogoCloud";
import Counter from "../components/Counter";
import CaseStudies from "../components/CaseStudies";
import Education from "../components/Education";
import Philosophy from "../components/Philosophy";
import Skills from "../components/Skills";
import NeuralNetwork from "../components/NeuralNetwork";
import Testimonials from "../components/Testimonials";
import AIAssistant from "../components/AIAssistant";
import CommandHUD from "../components/CommandHUD";
import { useGamificationStore } from "../store/useGamificationStore";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const markSectionViewed = useGamificationStore(state => state.markSectionViewed);
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observerOptions = { 
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          if (entry.target.dataset.section) {
            markSectionViewed(entry.target.dataset.section);
          }
          
          // Once it's revealed, we can stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, [data-section]');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) return <div style={{ background: '#0A0A0A', minHeight: '100vh' }} />;

  return (
    <div className="portfolio-root">
      <Navbar />
      
      <main>
        <div className="aurora-bg" />
        <section className="hero-viewport" data-section="hero">
          <Hero3D />
          
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="hero-container container-wide"
          >
            <div className="hero-grid">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1.2, type: "spring", bounce: 0.4 }}
                className="hero-text-content"
              >
                <h1 className="hero-display-title">
                  I Architect AI Solutions that <br />
                  <span className="text-gradient">Solve $100M Business Problems.</span>
                </h1>
                
                <p className="hero-lead-text">
                  Product Head and Strategy Professional with the mind of an AI architect. Specializing in scaling financial systems from 0 to 400Cr and delivering 4800X operational efficiency through agentic automation.
                </p>

                {/* Proof Bar - Re-positioned for Visibility */}
                <div className="proof-bar">
                  <div className="proof-metric">
                    <span className="proof-number">4000+Cr</span>
                    <span className="proof-label mono">AUM MANAGED</span>
                  </div>
                  <div className="proof-divider" />
                  <div className="proof-metric">
                    <span className="proof-number">40%</span>
                    <span className="proof-label mono">OF COMPANY PAT</span>
                  </div>
                  <div className="proof-divider" />
                  <div className="proof-metric">
                    <span className="proof-number">$2M</span>
                    <span className="proof-label mono">FINES PREVENTED</span>
                  </div>
                </div>

                <div className="hero-buttons">
                  <a href="#contact" className="cta-button-primary cta-highlight">
                    Book My AI Strategy Audit <ArrowUpRight size={20} />
                  </a>
                  <a href="#case-studies" className="cta-button-primary">
                    <span className="mono">VIEW_IMPACT</span>
                  </a>
                </div>

              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="profile-group"
              >
                <div className="profile-wrapper">
                  <div className="profile-orb">
                    <Image 
                      src="/profile_transparent.png" 
                      alt="Samarth Goel"
                      width={420}
                      height={420}
                      className="profile-img-floating"
                      priority
                    />
                  </div>
                  <div className="orb-glow"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="scroll-indicator mono">
            [ SCROLL_TO_DISCOVER ]
          </div>
        </section>
        <LogoCloud />

        {/* BENTO GRID VALUE PROPOSITION */}
        <section className="section-viewport" data-section="about">
          <div className="bento-layout container-wide">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="bento-tile col-8 row-2 glass border-beam"
            >
              <div className="tile-header">
                <TrendingUp className="icon-blue" size={48} strokeWidth={1.5} />
                <span className="mono-label">IMPACT_METRICS</span>
              </div>
              <h2 className="heading-lg">Strategic Transformation Leader</h2>
              <p className="text-mid">Orchestrating AI-driven growth and massive digital transformation across large-scale enterprises. Scaled critical business units while achieving 4800X operational efficiency gains via intelligent automation.</p>
              
              <div className="metrics-row">
                <div className="metric-box">
                  <div className="metric-val heading-xl">
                    <Counter value={4300} suffix="+" prefix="INR " />
                  </div>
                  <div className="metric-tag mono">TOTAL_VALUE_OBTAINED (Cr)</div>
                </div>
                <div className="metric-box">
                  <div className="metric-val heading-xl">
                    <Counter value={4800} suffix="X" />
                  </div>
                  <div className="metric-tag mono">OPERATIONAL_EFFICIENCY</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.3 }}
              className="bento-tile col-4 row-1 liquid-glass"
            >
              <Cpu className="icon-purple" size={48} strokeWidth={1.5} />
              <h3 className="heading-sm">AI Agent Expert</h3>
              <p className="mono-sm text-dim">LangChain, Python, LLM Orchestration.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
              className="bento-tile col-4 row-1 glass"
            >
              <ShieldCheck className="icon-emerald" size={48} strokeWidth={1.5} />
              <h3 className="heading-sm">Strategic Visionary</h3>
              <p className="mono-sm text-dim">Process Optimization & Market Strategy.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
              className="bento-tile col-12 row-1 glass border-beam-alt"
            >
              <div className="flex-between">
                <div>
                  <h3 className="heading-sm">Global Perspective</h3>
                  <p className="text-dim">Forging API-first ecosystems and scaling products alongside Samsung, Google, and other global tech titans.</p>
                </div>
                <div style={{ flexShrink: 0, marginLeft: '1.5rem', width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 0 20px rgba(138,43,226,0.3)', position: 'relative' }}>
                  <Image 
                    src="/images/global_mesh.png" 
                    alt="Global Network"
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div id="case-studies" data-section="caseStudies">
          <CaseStudies />
        </div>

        <div className="reveal">
          <Testimonials />
        </div>

        <div id="projects" className="reveal" data-section="projects">
          <ProjectGrid />
        </div>

        <div id="philosophy" className="reveal">
          <Philosophy />
        </div>

        <div id="education" className="reveal">
          <Education />
        </div>

        <div id="experience" className="reveal" data-section="experience">
          <ExperienceView />
        </div>

        <div id="skills" className="reveal" data-section="skills">
          <Skills />
        </div>

        <div id="contact" className="reveal">
          <ContactForm />
        </div>
      </main>

      {/* Floating UI Elements */}
      <CommandHUD />
      <AIAssistant />

      <footer className="footer-v2 mono">
        <p>[ © 2026 SAMARTH_GOEL | BUILT AND MAINTAINED BY AI ]</p>
      </footer>
    </div>
  );
}
