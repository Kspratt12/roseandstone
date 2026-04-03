"use client";

import { motion } from "framer-motion";

const feedItems = [
  "Icy Blonde",
  "Honey Balayage",
  "Dimensional Color",
  "Platinum",
  "Lived-In Blonde",
  "Smoothing Treatment",
  "Color Correction",
  "Bridal Styling",
];

export default function InstagramFeed() {
  return (
    <section className="py-20 md:py-28 bg-beige/25">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4">
            Follow Along
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            See our latest work
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3">
          {feedItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden bg-beige/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-sm md:text-base text-blush/25 group-hover:text-blush/40 transition-colors duration-500 text-center px-2">
                    {item}
                  </span>
                </div>
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <a
              href="https://www.instagram.com/bettywiththegoodhair_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blush hover:text-blush-dark text-sm tracking-wider transition-colors font-light"
            >
              @bettywiththegoodhair_
            </a>
            <span className="text-beige hidden sm:inline">|</span>
            <a
              href="https://www.instagram.com/colourmebree/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blush hover:text-blush-dark text-sm tracking-wider transition-colors font-light"
            >
              @colourmebree
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
