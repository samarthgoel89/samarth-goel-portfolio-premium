"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({ value, direction = "up", delay = 0, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Handle string values by extracting the number
  const numericValue = typeof value === "string" ? parseFloat(value.replace(/[^0-9.]/g, "")) : value;
  
  const motionValue = useMotionValue(direction === "down" ? numericValue : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(numericValue);
      }, delay * 1000);
    }
  }, [motionValue, isInView, numericValue, delay]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // Find if the original value had a decimal
        const hasDecimal = value.toString().includes(".");
        ref.current.textContent = prefix + (hasDecimal ? latest.toFixed(1) : Math.round(latest)) + suffix;
      }
    });
  }, [springValue, value, prefix, suffix]);

  return <span ref={ref} />;
}
