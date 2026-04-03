"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "I've never felt more like myself walking out of a salon. Betty understood exactly what I wanted before I could even explain it. The blonde is perfect — dimensional, natural, and so easy to maintain.",
    name: "Sarah M.",
    service: "Blonding with Betty",
  },
  {
    text: "Bree is a true artist. She took my hair from damaged box dye to the most beautiful brunette I've ever had. The dry cut technique is a game-changer — my hair has never moved this well.",
    name: "Ashley R.",
    service: "Color Correction with Bree",
  },
  {
    text: "This salon is different. You feel it the moment you walk in — it's calm, it's warm, it's yours. After years of big-box salons, Rose & Stone feels like a secret I don't want to share.",
    name: "Jordan T.",
    service: "Balayage with Betty",
  },
  {
    text: "I came to Bree after losing confidence due to hair thinning. She was so compassionate and knowledgeable. I left feeling beautiful for the first time in months. I cried happy tears in the car.",
    name: "Michelle K.",
    service: "Hair Loss Consultation with Bree",
  },
  {
    text: "The Brazilian Blowout changed my morning routine completely. My hair is smooth, shiny, and I actually look forward to getting ready now. Betty is a miracle worker.",
    name: "Lauren P.",
    service: "Brazilian Blowout with Betty",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blush text-sm tracking-[0.3em] uppercase mb-4">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            What our clients say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative min-h-[280px] md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="mb-8">
                <span className="font-serif text-5xl text-blush/30">
                  &ldquo;
                </span>
              </div>

              <p className="font-serif text-xl md:text-2xl lg:text-3xl text-charcoal font-light leading-relaxed italic max-w-3xl mx-auto">
                {testimonials[current].text}
              </p>

              <div className="mt-8">
                <p className="text-charcoal font-medium">
                  {testimonials[current].name}
                </p>
                <p className="text-blush text-sm tracking-wider mt-1">
                  {testimonials[current].service}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-blush w-6"
                  : "bg-blush/30 hover:bg-blush/50"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
