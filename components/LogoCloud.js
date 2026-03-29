"use client";

import { motion } from "framer-motion";

const PARTNERS = [
  { name: "Samsung", id: 1 },
  { name: "Google", id: 2 },
  { name: "Reliance Jio", id: 3 },
  { name: "Clix Capital", id: 4 },
  { name: "DMI Finance", id: 5 },
  { name: "Citibank", id: 6 },
];

export default function LogoCloud() {
  return (
    <section className="logo-cloud-section mono">
      <p className="cloud-label">TRUSTED BY GLOBAL ECOSYSTEMS</p>
      
      <div className="marquee-wrapper">
        <motion.div 
          className="marquee-content"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
          }}
        >
          {/* Double the array for seamless loops */}
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
             <div key={`${partner.id}-${index}`} className="partner-item">
              <span className="partner-name">{partner.name.toUpperCase()}</span>
              <div className="dot" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
