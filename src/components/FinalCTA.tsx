"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-36 bg-charcoal relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-soft-black to-charcoal" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blush/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-blush-light text-sm tracking-[0.3em] uppercase mb-6"
        >
          Your Next Chapter
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-light leading-tight"
        >
          Ready to feel like
          <br />
          <span className="italic text-blush-light">yourself again?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-white/50 font-light max-w-lg mx-auto"
        >
          Book your appointment at Rose & Stone and experience the difference a
          boutique salon makes.
        </motion.p>

        <motion.a
          href="#booking"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block mt-10 px-10 py-4 bg-blush text-white text-sm tracking-[0.2em] uppercase rounded-full hover:bg-blush-dark transition-colors duration-300 shadow-lg"
        >
          Book Your Appointment
        </motion.a>
      </div>
    </section>
  );
}
