"use client";

import { motion } from "framer-motion";

export default function MobileBookButton() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-beige px-4 py-3 safe-area-pb">
        <a
          href="#booking"
          className="block w-full py-3.5 bg-blush text-white text-center text-sm tracking-[0.2em] uppercase rounded-full hover:bg-blush-dark transition-colors duration-300 shadow-md"
        >
          Book Your Appointment
        </a>
      </div>
    </motion.div>
  );
}
