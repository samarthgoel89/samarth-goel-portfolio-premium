"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Linkedin, Terminal, ChevronDown } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container-wide">
        <div className="section-header reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="mono-label" style={{ fontSize: "1rem", letterSpacing: "0.2em" }}>[ INITIATE_CONNECTION ]</span>
          <h2 className="heading-lg text-gradient" style={{ marginTop: "1rem" }}>Start The Conversation.</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", fontSize: "1.05rem", maxWidth: "480px", margin: "0.75rem auto 0", lineHeight: 1.5 }}>
            Have a complex institutional challenge? Select your goal and let's build the solution.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <p className="contact-lead">Have a complex institutional challenge or an AI-driven vision? Open a secure channel for collaboration.</p>
            
            <div className="info-cards">
              <div className="info-item mono-sm">
                <Mail size={18} className="icon-blue" />
                <span>samarth.goel89@gmail.com</span>
              </div>
              <div className="info-item mono-sm">
                <MapPin size={18} className="icon-purple" />
                <span>Gurugram / New Delhi, India</span>
              </div>
              <div className="info-item mono-sm">
                <Linkedin size={18} className="icon-emerald" />
                <a href="https://www.linkedin.com/in/samarth-goel/" target="_blank" rel="noopener noreferrer" className="link-hover">linkedin.com/in/samarth-goel</a>
              </div>
            </div>
            
            <div className="contact-status liquid-glass">
              <Terminal size={14} />
              <span className="mono-sm">AGENT_STATUS: ACTIVE &amp; REACHABLE</span>
            </div>

            {/* Engagement type pills */}
            <div className="engagement-pills">
              {["Scale My Portfolio", "Automate My Ops", "Reduce Regulatory Risk", "Partnership"].map((label) => (
                <span key={label} className="engagement-pill mono-sm">{label}</span>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="contact-card border-beam glass"
          >
            <form className="strategic-form">
              <div className="form-row">
                <div className="input-group">
                  <label className="mono-label">IDENTITY.fullname</label>
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                <div className="input-group">
                  <label className="mono-label">CHANNEL.email</label>
                  <input type="email" placeholder="your@email.com" className="form-input" />
                </div>
              </div>

              <div className="input-group">
                <label className="mono-label">ENGAGEMENT_TYPE</label>
                <div className="form-select-wrapper">
                  <select className="form-input form-select">
                    <option value="" disabled selected>Select your objective...</option>
                    <option value="scale">Scale My Portfolio</option>
                    <option value="automate">Automate My Ops</option>
                    <option value="regulatory">Reduce Regulatory Risk</option>
                    <option value="partnership">Partnership</option>
                  </select>
                  <ChevronDown size={18} className="select-chevron" />
                </div>
              </div>

              <div className="input-group">
                <label className="mono-label">MESSAGE (OPTIONAL)</label>
                <textarea placeholder="Describe the problem or vision you wish to share..." className="form-input" rows={2}></textarea>
              </div>

              <button type="submit" className="submit-btn mono cta-button-primary cta-highlight" style={{ width: '100%', justifyContent: 'center' }}>
                Book My AI Strategy Audit <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
