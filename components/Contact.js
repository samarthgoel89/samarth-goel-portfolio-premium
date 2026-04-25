"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Linkedin, CheckCircle2, Loader2 } from "lucide-react";

const OBJECTIVES = [
  { value: "scale", label: "Scale My Portfolio" },
  { value: "automate", label: "Automate My Operations" },
  { value: "regulatory", label: "Reduce Regulatory Risk" },
  { value: "partnership", label: "Strategic Partnership" },
  { value: "advisory", label: "Advisory & Consulting" },
];

export default function Contact() {
  const [formState, setFormState] = useState("idle"); // idle | sending | success
  const [fields, setFields] = useState({ name: "", email: "", objective: "", message: "" });

  const handleChange = (e) =>
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("sending");

    // Simulate sending (replace with actual API call)
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  return (
    <section id="contact" className="contact-apple-section">
      <div className="container-wide">

        {/* Header */}
        <div className="contact-apple-header reveal">
          <span className="cs-eyebrow">Get In Touch</span>
          <h2 className="contact-apple-title">
            Let's build something<br />
            <span className="text-gradient">extraordinary.</span>
          </h2>
          <p className="contact-apple-sub">
            Building something ambitious? Transforming operations with AI? 
            I'm available for strategic advisory, leadership roles, and high-stakes AI builds.
          </p>
        </div>

        <div className="contact-apple-grid">

          {/* Left: Info */}
          <div className="contact-apple-info reveal">
            <div className="contact-info-cards">
              <a href="mailto:samarth.goel89@gmail.com" className="contact-info-card">
                <Mail size={20} className="contact-info-icon" style={{ color: "hsl(var(--accent-blue))" }} />
                <div>
                  <p className="contact-info-label">Email</p>
                  <p className="contact-info-val">samarth.goel89@gmail.com</p>
                </div>
              </a>

              <div className="contact-info-card">
                <MapPin size={20} className="contact-info-icon" style={{ color: "hsl(var(--accent-purple))" }} />
                <div>
                  <p className="contact-info-label">Location</p>
                  <p className="contact-info-val">Gurugram / New Delhi, India</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/samarth-goel/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
              >
                <Linkedin size={20} className="contact-info-icon" style={{ color: "hsl(var(--accent-emerald))" }} />
                <div>
                  <p className="contact-info-label">LinkedIn</p>
                  <p className="contact-info-val">linkedin.com/in/samarth-goel</p>
                </div>
              </a>
            </div>

            {/* Availability Badge */}
            <div className="contact-avail">
              <span className="contact-avail-dot" />
              <span>Open to select engagements — let's connect</span>
            </div>

            {/* Engagement Types */}
            <div className="contact-engage-list">
              <p className="contact-engage-label">What I help with</p>
              <div className="contact-engage-pills">
                {["Scale Portfolio", "Automate Ops", "Reduce Risk", "AI Strategy", "Partnership"].map((l) => (
                  <span key={l} className="contact-engage-pill">{l}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="contact-apple-form-wrap glass border-beam"
          >
            {formState === "success" ? (
              <div className="contact-success">
                <CheckCircle2 size={48} style={{ color: "#00FFA3" }} />
                <h3 className="contact-success-title">Request Received</h3>
                <p className="contact-success-sub">
                  I'll be in touch within 24 hours. Looking forward to the conversation.
                </p>
                <button
                  className="contact-success-reset"
                  onClick={() => { setFormState("idle"); setFields({ name: "", email: "", objective: "", message: "" }); }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-apple-form">
                <div className="contact-form-row">
                  <div className="contact-field-group">
                    <label htmlFor="contact-name" className="contact-field-label">Full Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      value={fields.name}
                      onChange={handleChange}
                      className="contact-apple-input"
                    />
                  </div>
                  <div className="contact-field-group">
                    <label htmlFor="contact-email" className="contact-field-label">Email Address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={fields.email}
                      onChange={handleChange}
                      className="contact-apple-input"
                    />
                  </div>
                </div>

                <div className="contact-field-group">
                  <label htmlFor="contact-objective" className="contact-field-label">How can I help?</label>
                  <div className="contact-select-wrap">
                    <select
                      id="contact-objective"
                      name="objective"
                      required
                      value={fields.objective}
                      onChange={handleChange}
                      className="contact-apple-select"
                    >
                      <option value="" disabled>Select your objective...</option>
                      {OBJECTIVES.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <ArrowUpRight size={16} className="contact-select-icon" />
                  </div>
                </div>

                <div className="contact-field-group">
                  <label htmlFor="contact-message" className="contact-field-label">
                    Message <span className="contact-field-optional">(optional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Describe the challenge or vision you'd like to work on..."
                    value={fields.message}
                    onChange={handleChange}
                    className="contact-apple-input contact-apple-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="contact-submit"
                >
                  {formState === "sending" ? (
                    <>
                      <Loader2 size={18} className="contact-submit-spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Let's Connect
                      <ArrowUpRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
