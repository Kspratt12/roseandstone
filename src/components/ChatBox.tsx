"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quickOptions = [
  {
    label: "I'd like to book",
    response:
      "We'd love to have you! Each stylist has their own booking link — tap below to choose who you'd like to see.",
    action: "booking",
  },
  {
    label: "How much does it cost?",
    response:
      "Great question! Pricing depends on your hair length, density, and what you're looking for. The best way to get an accurate quote is to book a consultation — it's quick and there's no pressure.",
    action: "none",
  },
  {
    label: "First time here",
    response:
      "Welcome! Plan to arrive about 10 minutes early so we can get to know you. We'll start with a one-on-one consultation about your hair goals, history, and daily routine — then we'll map out a plan together.",
    action: "none",
  },
  {
    label: "Contact a stylist",
    response:
      "Betty: (919) 651-0004 or betty@roseandstonesalon.com\n\nBree: (984) 777-0699 or colourmebree@gmail.com\n\nWe usually get back to you within a few hours!",
    action: "none",
  },
];

interface Message {
  type: "bot" | "user";
  text: string;
  showBooking?: boolean;
}

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hey there! Welcome to Rose & Stone. What can we help you with?",
    },
  ]);
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOption = (option: (typeof quickOptions)[0]) => {
    setShowOptions(false);
    setMessages((prev) => [
      ...prev,
      { type: "user", text: option.label },
      {
        type: "bot",
        text: option.response,
        showBooking: option.action === "booking",
      },
    ]);
    setTimeout(() => setShowOptions(true), 400);
  };

  return (
    <>
      {/* Chat Button — above mobile book bar with proper spacing */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-[4.5rem] lg:bottom-6 right-4 z-50 flex items-center justify-center bg-blush text-white rounded-full shadow-lg shadow-blush/20 hover:bg-blush-dark transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        style={{ width: 48, height: 48, minWidth: 48, minHeight: 48 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.svg
              key="open"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-[7.5rem] lg:bottom-[4.5rem] right-4 z-50 w-[calc(100vw-2rem)] max-w-[360px] bg-white rounded-2xl shadow-2xl shadow-charcoal/10 border border-beige/60 overflow-hidden flex flex-col"
            style={{ maxHeight: "min(460px, calc(100vh - 10rem))" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blush to-blush-dark/90 px-5 py-3.5 shrink-0">
              <h3 className="text-white font-serif text-base">Rose & Stone</h3>
              <p className="text-white/60 text-[11px] font-light">
                Usually replies within a few hours
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5 min-h-0">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: msg.type === "bot" && i > 0 ? 0.2 : 0, duration: 0.3 }}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 text-[13px] font-light leading-relaxed ${
                      msg.type === "user"
                        ? "bg-blush text-white rounded-2xl rounded-br-sm"
                        : "bg-cream text-charcoal rounded-2xl rounded-bl-sm"
                    }`}
                  >
                    {msg.text.split("\n").map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < msg.text.split("\n").length - 1 && <br />}
                      </span>
                    ))}

                    {msg.showBooking && (
                      <div className="mt-3 space-y-1.5">
                        <a
                          href="https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full py-2.5 bg-blush text-white text-center text-[11px] tracking-wider rounded-full hover:bg-blush-dark transition-colors active:scale-[0.97] min-h-[40px]"
                        >
                          Betty — Blonding Specialist
                        </a>
                        <a
                          href="https://www.colourmebree.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full py-2.5 bg-blush text-white text-center text-[11px] tracking-wider rounded-full hover:bg-blush-dark transition-colors active:scale-[0.97] min-h-[40px]"
                        >
                          Bree — Color Expert
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Options — larger touch targets */}
            <AnimatePresence>
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-3.5 pb-3.5 shrink-0"
                >
                  <div className="flex flex-wrap gap-1.5">
                    {quickOptions.map((option) => (
                      <button
                        key={option.label}
                        onClick={() => handleOption(option)}
                        className="px-3.5 py-2 bg-cream border border-beige/60 text-charcoal text-[11px] tracking-wider rounded-full hover:border-blush/40 hover:text-blush transition-colors duration-200 active:scale-[0.97] min-h-[36px]"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
