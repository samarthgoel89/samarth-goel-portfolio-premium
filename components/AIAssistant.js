"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { X, Send, Bot, Sparkles, MessageCircle } from "lucide-react";

const SUGGESTIONS = [
  "What makes Samarth different from other PMs?",
  "How did you build ₹400Cr in AUM from zero?",
  "What AI systems has Samarth shipped?",
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input = "", handleInputChange, handleSubmit, isLoading, append } = useChat();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const handleSuggestionClick = (suggestion) => {
    append({ role: "user", content: suggestion });
  };

  useEffect(() => {
    if (isOpen && messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  return (
    <>
      {/* FAB Trigger Button */}
      <motion.button
        aria-label="Open AI assistant"
        className="ai-fab"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => setIsOpen(true)}
        style={{ display: isOpen ? "none" : "flex" }}
      >
        <MessageCircle size={22} />
        <span className="ai-fab-label">Ask Samarth AI</span>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop (mobile only) */}
            <motion.div
              className="ai-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="ai-panel"
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header */}
              <div className="ai-header">
                <div className="ai-header-left">
                  <div className="ai-avatar">
                    <Bot size={18} />
                    <span className="ai-status-dot" />
                  </div>
                  <div>
                    <p className="ai-header-name">Samarth AI</p>
                    <p className="ai-header-sub">Strategic knowledge index · Active</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="ai-close-btn"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Messages */}
              <div className="ai-messages">
                {messages.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="ai-empty"
                  >
                    <div className="ai-empty-icon">
                      <Sparkles size={28} />
                    </div>
                    <p className="ai-empty-title">Ask me anything</p>
                    <p className="ai-empty-sub">
                      Ask about his career, AI frameworks, key wins, or how he approaches strategy.
                    </p>
                    <div className="ai-suggestions">
                      {SUGGESTIONS.map((s, i) => (
                        <button
                          key={i}
                          className="ai-suggestion"
                          onClick={() => handleSuggestionClick(s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`ai-msg-row ${m.role === "user" ? "ai-msg-user" : "ai-msg-bot"}`}
                  >
                    <div className={`ai-bubble ${m.role === "user" ? "ai-bubble-user" : "ai-bubble-bot"}`}>
                      {m.content}
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <div className="ai-msg-row ai-msg-bot">
                    <div className="ai-bubble ai-bubble-bot ai-typing">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="ai-input-row">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about strategy, AI, or impact..."
                  className="ai-input"
                  disabled={isLoading}
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="ai-send-btn"
                  aria-label="Send"
                >
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
