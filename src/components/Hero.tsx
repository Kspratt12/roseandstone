"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background - crystal clear hair shot */}
      <Image
        src="/hero2.png"
        alt="Rose & Stone Salon — Luxury Hair Experience"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Gradient overlay — stronger on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-charcoal/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/30" />

      {/* Content - left aligned like Haven inspo */}
      <div className="relative z-10 min-h-[100svh] flex flex-col justify-center w-full max-w-[1280px] mx-auto px-6 py-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-white/50 text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-6 font-light"
        >
          Private Boutique Salon · Cary, North Carolina
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.08] max-w-xl"
        >
          Your Hair
          <br />
          Deserves{" "}
          <span className="italic text-blush-light">Someone</span>
          <br />
          <span className="italic text-blush-light">Who Listens.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 text-white/50 text-[15px] md:text-base max-w-md font-light leading-relaxed"
        >
          Come in, settle down, and leave feeling like yourself again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row items-start gap-3"
        >
          <button
            onClick={onBookClick}
            className="px-9 py-3.5 bg-blush text-white text-[12px] tracking-[0.15em] uppercase rounded-full hover:bg-blush-dark hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-blush/20 cursor-pointer active:scale-[0.97]"
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
      </div>
    </section>
  );
}
