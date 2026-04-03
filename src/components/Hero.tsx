"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[url('/images/betty.jpg')] bg-cover bg-center bg-no-repeat scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/35 to-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-white/50 text-xs md:text-sm tracking-[0.35em] uppercase mb-8 font-light"
        >
          A boutique salon in Cary, North Carolina
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="font-serif text-[2.5rem] md:text-6xl lg:text-7xl text-white font-light leading-[1.15] max-w-4xl"
        >
          You deserve a stylist
          <br />
          who actually{" "}
          <span className="italic text-blush-light">listens.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-7 text-white/60 text-base md:text-lg max-w-md font-light leading-relaxed"
        >
          Walk in stressed. Leave feeling like you again.
        </motion.p>

        <motion.button
          onClick={onBookClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 px-10 py-4 bg-blush text-white text-sm tracking-[0.15em] uppercase rounded-full hover:bg-blush-dark transition-all duration-400 shadow-lg shadow-blush/20 cursor-pointer"
        >
          Book Your Appointment
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 md:bottom-12 flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
