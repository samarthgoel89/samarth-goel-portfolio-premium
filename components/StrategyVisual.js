"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StrategyVisual({ type, color }) {
  const renderVisual = () => {
    switch (type) {
      case "growth":
        return (
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
            <motion.path
              d="M20 160 L60 120 L100 140 L140 60 L180 20"
              stroke={color}
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {[1, 2, 3, 4, 5].map((_, i) => (
              <motion.circle
                key={i}
                cx={[20, 60, 100, 140, 180][i]}
                cy={[160, 120, 140, 60, 20][i]}
                r="4"
                fill={color}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.3 }}
              />
            ))}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
          </svg>
        );
      case "efficiency":
        return (
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
            <motion.rect
              x="50" y="50" width="100" height="100"
              stroke={color}
              strokeWidth="2"
              strokeDasharray="10 5"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <circle cx="100" cy="100" r="40" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
            <motion.circle
              cx="100" cy="100" r="20"
              fill={color}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        );
      case "security":
        return (
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
            <path d="M100 20 L160 50 V110 C160 150 100 180 100 180 C100 180 40 150 40 110 V50 L100 20Z" stroke={color} strokeWidth="2" />
            <motion.path
              d="M70 100 L90 120 L130 80"
              stroke={color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-8 bg-black/20 overflow-hidden">
      {renderVisual()}
    </div>
  );
}
