"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background - Bree's photo as hero (different from stylist cards) */}
      <Image
        src="/hero.png"
        alt="Rose & Stone Salon"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover"
      />
      {/* Stronger overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/40 to-charcoal/65" />

      {/* Content - properly centered */}
      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center w-full max-w-[1280px] mx-auto px-6 py-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-white/40 text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-6 font-light"
        >
          Private boutique salon · Cary, North Carolina
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.1] max-w-2xl mx-auto"
        >
          Your hair deserves
          <br />
          <span className="italic text-blush-light">someone who listens.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 text-white/50 text-[15px] md:text-base max-w-sm mx-auto font-light leading-relaxed"
        >
          Come in, settle down, and leave feeling like yourself again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={onBookClick}
            className="px-9 py-3.5 bg-blush text-white text-[12px] tracking-[0.15em] uppercase rounded-full hover:bg-blush-dark transition-all duration-300 shadow-lg shadow-blush/20 cursor-pointer active:scale-[0.97]"
          >
            Book Your Appointment
          </button>
          <a
            href="#stylists"
            className="px-6 py-3.5 text-white/50 hover:text-white/80 text-[12px] tracking-[0.15em] uppercase transition-colors duration-300"
          >
            Meet Our Stylists
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 md:bottom-12"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
