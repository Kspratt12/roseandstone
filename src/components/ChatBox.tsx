"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quickOptions = [
  {
    label: "Book an appointment",
    response:
      "We'd love to see you! Book with Betty via Square or with Bree at ColourMeBree.com. Tap below to choose your stylist.",
    action: "booking",
  },
  {
    label: "Pricing questions",
    response:
      "Pricing varies based on hair length, density, and desired result. We recommend booking a consultation so your stylist can give you an accurate quote tailored to your hair goals.",
    action: "none",
  },
  {
    label: "First visit info",
    response:
      "Welcome! For your first visit, please arrive 10 minutes early. We'll start with a thorough consultation to understand your hair history, goals, and lifestyle. It's all about getting to know you and your hair.",
    action: "none",
  },
  {
    label: "Talk to a stylist",
    response:
      "You can reach Betty at (919) 651-0004 or betty@roseandstonesalon.com. Reach Bree at (984) 777-0699 or colourmebree@gmail.com. We typically respond within a few hours!",
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
      text: "Hey! Welcome to Rose & Stone. How can we help you today?",
    },
  ]);
  const [showOptions, setShowOptions] = useState(true);

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

    setTimeout(() => setShowOptions(true), 500);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blush text-white rounded-full shadow-lg hover:bg-blush-dark transition-colors duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="text-xl"
            >
              ✕
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-xl"
            >
              💬
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] md:w-[380px] max-h-[500px] bg-white rounded-2xl shadow-2xl border border-beige overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blush to-blush-dark px-5 py-4">
              <h3 className="text-white font-serif text-lg">Rose & Stone</h3>
              <p className="text-white/70 text-xs">
                We typically reply within a few hours
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[300px]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm font-light leading-relaxed ${
                      msg.type === "user"
                        ? "bg-blush text-white rounded-br-md"
                        : "bg-cream text-charcoal rounded-bl-md"
                    }`}
                  >
                    {msg.text}

                    {msg.showBooking && (
                      <div className="mt-3 space-y-2">
                        <a
                          href="https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full py-2 bg-blush text-white text-center text-xs tracking-wider rounded-full hover:bg-blush-dark transition-colors"
                        >
                          Book with Betty
                        </a>
                        <a
                          href="https://www.colourmebree.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full py-2 bg-blush text-white text-center text-xs tracking-wider rounded-full hover:bg-blush-dark transition-colors"
                        >
                          Book with Bree
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Options */}
            <AnimatePresence>
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="px-4 pb-4"
                >
                  <div className="flex flex-wrap gap-2">
                    {quickOptions.map((option) => (
                      <button
                        key={option.label}
                        onClick={() => handleOption(option)}
                        className="px-3 py-1.5 bg-cream border border-beige text-charcoal text-xs tracking-wider rounded-full hover:border-blush hover:text-blush transition-colors duration-200"
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
