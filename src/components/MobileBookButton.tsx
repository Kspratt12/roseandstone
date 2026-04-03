"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileBookButtonProps {
  onBookClick: () => void;
}

export default function MobileBookButton({ onBookClick }: MobileBookButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-beige/40 px-4 py-3 safe-area-pb">
            <button
              onClick={onBookClick}
              className="block w-full py-3.5 bg-blush text-white text-center text-sm tracking-[0.15em] uppercase rounded-full hover:bg-blush-dark transition-all duration-300 active:scale-[0.97] shadow-sm shadow-blush/15 cursor-pointer"
            >
              Book Your Appointment
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
