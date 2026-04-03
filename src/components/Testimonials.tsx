"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    text: "I love Rose and Stone Salon. It has such a spa feel, and at the same time a feel of visiting with friends. Betty has been doing wonders with my hair style for almost 4 years. She is awesome and so super sweet. So treat yourself to a relaxing experience.",
    name: "Betsy B.",
  },
  {
    text: "Brianna's a true master of her craft, she's been doing my hair for years and I wouldn't trust anyone else. So excited to see her at her own salon and it's absolutely beautiful!",
    name: "Lacey R.",
  },
  {
    text: "As a long-time client of the owner, Betty, I can attest to her skill and customer service. If it's a trim or a full day's worth of color, she's always high energy and excited to meet with her clients. I can't recommend this salon or Betty as a stylist enough.",
    name: "Gem G.",
  },
  {
    text: "Absolutely my favorite salon. Small, private, adorable and incredibly welcoming, it's a true vibe and the stylists are beyond professional. They take the time to actually listen to your vision and work with you to bring that to life.",
    name: "Hannah J.",
  },
  {
    text: "I absolutely love Brianna and Betty! Their salon is clean and very welcoming. Both ladies are super professional and do great work. Betty is fabulous with blondes and highlights. Will be back for sure!",
    name: "Rachel A.",
  },
  {
    text: "Amazing experience overall!! Best customer service, quality, atmosphere and everything else. I can't recommend Rose & Stone enough. They go out of their way to make you feel comfortable and leave feeling so confident and happy.",
    name: "Emily K.",
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
      <div className="w-full max-w-[720px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            What our clients say
          </h2>
        </motion.div>

        {/* Testimonial */}
        <div
          className="relative min-h-[260px] md:min-h-[200px] flex items-center"
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
              <p className="font-serif text-lg md:text-[1.4rem] text-charcoal font-light leading-[1.7] italic max-w-2xl mx-auto">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="mt-8 flex flex-col items-center gap-1">
                <div className="w-8 h-[1px] bg-gold/30 mb-3" />
                <p className="text-charcoal text-sm font-medium tracking-wide">
                  {testimonials[current].name}
                </p>
                <p className="text-stone text-[11px] tracking-wider font-light">
                  Client
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
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === current
                  ? "bg-blush w-7"
                  : "bg-blush/15 w-1.5 hover:bg-blush/30"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
