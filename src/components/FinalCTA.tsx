"use client";

import { motion } from "framer-motion";

interface FinalCTAProps {
  onBookClick: () => void;
}

export default function FinalCTA({ onBookClick }: FinalCTAProps) {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-soft-black/90 to-charcoal" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blush/3 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />

      <div className="relative z-10 section-container-narrow text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-white font-light leading-tight"
        >
          Ready to feel like
          <br />
          <span className="italic text-blush-light">yourself again?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 text-white/35 font-light max-w-md mx-auto text-[15px]"
        >
          Your chair is waiting. Pick your stylist and let&apos;s make it happen.
        </motion.p>

        <motion.button
          onClick={onBookClick}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block mt-9 px-10 py-4 bg-blush text-white text-sm tracking-[0.15em] uppercase rounded-full hover:bg-blush-dark transition-all duration-300 shadow-lg shadow-blush/10 cursor-pointer"
        >
          Book Your Appointment
        </motion.button>
      </div>
    </section>
  );
}
