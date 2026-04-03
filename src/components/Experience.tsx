"use client";

import { motion } from "framer-motion";
import AutoPlayVideo from "@/components/AutoPlayVideo";

export default function Experience() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.2rem] font-light text-charcoal leading-tight tracking-tight max-w-[500px]">
              This isn&apos;t just a haircut.
            </h2>
            <p className="mt-3 font-serif text-xl md:text-2xl italic text-blush-dark/70 font-light">
              It&apos;s the best part of your week.
            </p>
            <p className="mt-8 text-stone text-[15px] font-light leading-relaxed max-w-[480px]">
              The moment you walk in, everything slows down. Warm light, quiet
              music, and a stylist who already knows how you take your coffee. No
              rush. No assembly line. Just an hour that&apos;s entirely yours.
            </p>

            <div className="w-12 h-[1px] bg-gold/25 mt-10" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { title: "Personalized", text: "Built around your hair, your goals, and your life." },
                { title: "Unhurried", text: "We never double-book. Your time is yours." },
                { title: "Intentional", text: "Every product chosen specifically for you." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                >
                  <h3 className="font-serif text-lg text-charcoal mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-stone text-[13px] font-light leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[500px] lg:max-h-[600px] order-1 lg:order-2"
          >
            <AutoPlayVideo
              src="/videos/reel-betty-2.mp4"
              poster="/videos/reel-betty-2-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
