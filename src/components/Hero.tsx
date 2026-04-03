"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background — gradient overlay on a warm tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-soft-black/60 via-soft-black/40 to-soft-black/70" />

      {/* Ambient background with soft movement */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white/60 text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light"
        >
          Cary, North Carolina
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight max-w-4xl"
        >
          Walk in stressed.
          <br />
          <span className="italic text-blush-light">
            Leave feeling like you again.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 text-white/70 text-base md:text-lg max-w-xl font-light leading-relaxed"
        >
          A calm, personalized salon experience — where every detail is about
          you.
        </motion.p>

        <motion.a
          href="#booking"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 px-10 py-4 bg-blush text-white text-sm tracking-[0.2em] uppercase rounded-full hover:bg-blush-dark transition-colors duration-300 shadow-lg"
        >
          Book Your Appointment
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
