"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "IMPACT", href: "#case-studies" },
    { name: "LAB", href: "#projects" },
    { name: "PHILOSOPHY", href: "#philosophy" },
    { name: "EDUCATION", href: "#education" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <nav className={`nav-root ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container container-wide">
        <div className="nav-brand">
          <Terminal size={20} className="text-gradient" />
          <span className="brand-text heading-v2">SAMARTH GOEL</span>
        </div>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item mono">
              {link.name}
              <div className="nav-underline" />
            </a>
          ))}
        </div>

        <div className="nav-cta">
          <a href="#contact" className="collaborate-btn mono">
             INIT_COLLAB.exe
            <div className="btn-glow" />
          </a>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu liquid-glass"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-item mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>


    </nav>
  );
}
