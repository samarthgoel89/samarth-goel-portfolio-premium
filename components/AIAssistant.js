"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { MessageSquare, X, Send, Bot, Terminal } from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-[100] p-4 rounded-full bg-slate-900 border border-slate-700 text-[#00FFA3] shadow-2xl hover:border-[#00FFA3] hover:shadow-[0_0_20px_rgba(0,255,163,0.3)] transition-all flex items-center gap-2 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        <Terminal size={20} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-mono font-semibold text-sm">
          INIT_AI_COMMAND
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] z-[100] flex flex-col rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700 shadow-2xl overflow-hidden font-mono"
          >
            {/* Header */}
            <div className="flex bg-slate-800/80 justify-between items-center p-4 border-b border-slate-700">
              <div className="flex items-center gap-3 text-slate-200 text-sm">
                <div className="relative">
                  <Bot size={20} className="text-[#00FFA3]" />
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFA3] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFA3]"></span>
                  </span>
                </div>
                <div>
                  <h3 className="font-bold tracking-wider">SAMARTH_AI OS v2.0</h3>
                  <p className="text-xs text-slate-400">Strategic knowledge index active.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-slate-400 hover:text-white hover:bg-slate-700 p-1 rounded transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans">
              {messages.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center justify-center h-full text-center space-y-4"
                >
                  <div className="p-4 rounded-full bg-[#00FFA3]/10 text-[#00FFA3] border border-[#00FFA3]/20">
                    <Terminal size={32} />
                  </div>
                  <div>
                    <p className="text-slate-200 font-medium">Terminal Initialized.</p>
                    <p className="mt-2 text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                      Ask about Samarth's strategic scaling at Clix/DMI, his 4800x efficiency improvements, or core AI capabilities.
                    </p>
                  </div>
                  
                  {/* Suggestion Pills */}
                  <div className="flex flex-wrap justify-center gap-2 mt-4 pt-4">
                    {["How did you scale the 400Cr LAP book?", "Explain the 4800X efficiency.", "What are your core AI tools?"].map((suggestion, i) => (
                      <button
                        key={i}
                        onClick={() => handleInputChange({ target: { value: suggestion } })}
                        className="text-xs px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-[#00FFA3] hover:text-[#00FFA3] transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {messages.map((m) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={m.id} 
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    m.role === "user" 
                      ? "bg-[#00FFA3]/10 text-slate-100 border border-[#00FFA3]/30 rounded-br-sm ml-auto" 
                      : "bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-sm"
                  }`}>
                    {m.content.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] animate-pulse"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] animate-pulse delay-150"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] animate-pulse delay-300"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-slate-700 bg-slate-800/80">
              <div className="relative flex items-center">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Query knowledge base..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-4 pr-12 py-3 text-sm text-slate-200 focus:outline-none focus:border-[#00FFA3]/70 focus:ring-1 focus:ring-[#00FFA3]/50 font-sans transition-all placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  disabled={!input || isLoading}
                  className="absolute right-2 text-slate-400 hover:text-[#00FFA3] p-2 rounded-lg disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
