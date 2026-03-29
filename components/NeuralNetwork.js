"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NeuralNetwork() {
  const nodes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }));

  const connections = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.sqrt(
        Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2)
      );
      if (dist < 30) {
        connections.push({ i, j });
      }
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {connections.map((conn, idx) => (
          <motion.line
            key={idx}
            x1={nodes[conn.i].x}
            y1={nodes[conn.i].y}
            x2={nodes[conn.j].x}
            y2={nodes[conn.j].y}
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: idx * 0.1 }}
          />
        ))}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size / 10}
            fill="#8b5cf6"
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              delay: node.delay,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
