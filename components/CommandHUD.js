"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGamificationStore } from "../store/useGamificationStore";
import { Award, Terminal } from "lucide-react";

export default function CommandHUD() {
  const sectionsViewed = useGamificationStore((state) => state.sectionsViewed);
  const unlockedBadges = useGamificationStore((state) => state.unlockedBadges);
  const recentUnlock = useGamificationStore((state) => state.recentUnlock);
  const clearRecentUnlock = useGamificationStore((state) => state.clearRecentUnlock);
  
  const keys = Object.keys(sectionsViewed);
  const viewedCount = keys.filter(k => sectionsViewed[k]).length;
  const progress = Math.round((viewedCount / keys.length) * 100);

  useEffect(() => {
    if (recentUnlock) {
      const timer = setTimeout(() => {
        clearRecentUnlock();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [recentUnlock, clearRecentUnlock]);

  return (
    <>
      {/* Bottom HUD */}
      <motion.div 
        className="fixed bottom-6 left-6 flex items-center gap-4 z-40 bg-slate-900/60 backdrop-blur border border-slate-700/50 p-2 md:p-3 rounded-full shadow-lg font-mono text-xs md:text-sm text-slate-300 pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[#00FFA3]" />
          <span className="opacity-80">SYS_EXPLORATION</span>
        </div>
        
        <div className="flex gap-1 items-center">
          <span className="hidden md:inline">DATA_MINED:</span> 
          <span className="text-[#00FFA3] font-bold">{progress}%</span>
        </div>
        
        {unlockedBadges.length > 0 && (
          <div className="flex gap-2 border-l border-slate-700/50 pl-4 items-center hidden sm:flex">
            {unlockedBadges.map((badge, i) => (
              <span key={i} className="flex items-center gap-1 text-[10px] uppercase tracking-wider bg-slate-800 text-[#00FFA3] px-2 py-0.5 rounded-sm border border-[#00FFA3]/20">
                <Award size={10} /> {badge}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Unlock Toast */}
      <AnimatePresence>
        {recentUnlock && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            className="fixed top-24 right-6 z-50 bg-slate-900 border border-[#00FFA3]/50 shadow-[0_0_30px_rgba(0,255,163,0.15)] rounded-lg p-4 font-mono w-72"
          >
            <div className="flex items-start gap-3">
              <div className="bg-[#00FFA3]/20 p-2 rounded text-[#00FFA3] shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-[#00FFA3] text-[10px] font-bold uppercase tracking-widest mb-1">Authorization Granted</h4>
                <p className="text-white text-sm font-semibold">{recentUnlock}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
