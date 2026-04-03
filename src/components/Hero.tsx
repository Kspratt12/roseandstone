"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Rose & Stone Salon"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/45 via-charcoal/30 to-charcoal/55" />

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center px-6 py-20 max-w-5xl mx-auto">
        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-white/40 text-[11px] md:text-xs tracking-[0.4em] uppercase mb-6 font-light"
        >
          Private boutique salon · Cary, North Carolina
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="font-serif text-[2.5rem] md:text-6xl lg:text-7xl text-white font-light leading-[1.12] max-w-3xl"
        >
          Your hair deserves
          <br />
          <span className="italic text-blush-light">
            someone who listens.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 text-white/55 text-base md:text-lg max-w-md font-light leading-relaxed"
        >
          Come in, settle down, and leave feeling like yourself again.
          A calm, personalized experience designed around you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <button
            onClick={onBookClick}
            className="px-10 py-4 bg-blush text-white text-sm tracking-[0.15em] uppercase rounded-full hover:bg-blush-dark transition-all duration-300 shadow-lg shadow-blush/20 cursor-pointer active:scale-[0.97]"
          >
            Book Your Appointment
          </button>
          <a
            href="#stylists"
            className="px-8 py-4 text-white/60 hover:text-white text-sm tracking-[0.15em] uppercase transition-colors duration-300"
          >
            Meet Our Stylists
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 md:bottom-12 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-gradient-to-b from-white/25 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
