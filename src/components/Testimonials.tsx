"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    text: "I showed Betty a Pinterest photo I was honestly embarrassed to share — like, is this even possible? She looked at it, looked at my hair, and said 'absolutely.' Three hours later, I looked better than the photo. I almost cried in the chair.",
    name: "Sarah M.",
    detail: "Blonding client for 2 years",
  },
  {
    text: "I'd been to six salons trying to fix a bad box dye job. Every one made it worse. Bree didn't judge me — she just sat down, explained exactly what we'd do, and got to work. I finally have hair I don't want to hide.",
    name: "Ashley R.",
    detail: "Color correction with Bree",
  },
  {
    text: "It's the little things. They remember my name. They remember my kids' names. I don't have to re-explain what I want every time. After years of feeling like a number, Rose & Stone feels like coming home.",
    name: "Jordan T.",
    detail: "Regular client since 2022",
  },
  {
    text: "I started losing hair after my second pregnancy and was terrified to talk to anyone about it. Bree made me feel so safe. She explained options I didn't even know existed. I left with more hair AND more confidence.",
    name: "Michelle K.",
    detail: "Hair loss care with Bree",
  },
  {
    text: "My Brazilian Blowout with Betty literally changed my mornings. I went from 45 minutes of fighting my hair to 10 minutes and done. My husband asked if I got a new haircut — I told him I got my life back.",
    name: "Lauren P.",
    detail: "Brazilian Blowout client",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4">
            From Our Clients
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            Don&apos;t take our word for it
          </h2>
        </motion.div>

        {/* Testimonial */}
        <div
          className="relative min-h-[300px] md:min-h-[240px] flex items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center w-full"
            >
              <p className="font-serif text-lg md:text-2xl text-charcoal font-light leading-[1.7] italic max-w-2xl mx-auto">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="mt-8">
                <p className="text-charcoal text-sm font-medium tracking-wide">
                  {testimonials[current].name}
                </p>
                <p className="text-stone text-xs tracking-wider mt-1 font-light">
                  {testimonials[current].detail}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current
                  ? "bg-blush w-8"
                  : "bg-blush/20 w-1.5 hover:bg-blush/40"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
