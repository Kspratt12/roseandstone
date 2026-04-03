"use client";

import { motion } from "framer-motion";

interface FinalCTAProps {
  onBookClick: () => void;
}

export default function FinalCTA({ onBookClick }: FinalCTAProps) {
  return (
    <section className="relative py-16 md:py-24 bg-charcoal overflow-hidden">
      {/* Gradient background — no image (avoids duplicating hero-bg.jpg) */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-soft-black/95 to-charcoal" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blush/4 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/4 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gold-light/40 text-[11px] tracking-[0.4em] uppercase mb-6 font-light"
        >
          Your Chair Is Waiting
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-white font-light leading-tight tracking-tight max-w-[700px] mx-auto"
        >
          Ready to feel like
          <br />
          <span className="italic text-blush-light">yourself again?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 text-white/30 font-light max-w-[440px] mx-auto text-[15px] leading-relaxed"
        >
          No rush. No assembly line. Just a stylist who listens, a chair that&apos;s yours, and hair that makes you feel like you again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onBookClick}
            className="px-10 py-4 bg-blush text-white text-[12px] tracking-[0.15em] uppercase rounded-full hover:bg-blush-dark hover:scale-[1.03] transition-all duration-300 shadow-xl shadow-blush/15 cursor-pointer active:scale-[0.97]"
          >
            Book Your Appointment
          </button>
          <a
            href="#contact"
            className="px-6 py-4 text-white/35 hover:text-white/60 text-[12px] tracking-[0.15em] uppercase transition-colors duration-300"
          >
            Or Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
