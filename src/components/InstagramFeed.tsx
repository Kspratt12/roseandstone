"use client";

import { motion } from "framer-motion";

const feedItems = [
  { label: "Icy Blonde", color: "from-blue-100/30 to-blush/10" },
  { label: "Honey Balayage", color: "from-amber-100/30 to-blush/10" },
  { label: "Dimensional Color", color: "from-rose-100/30 to-blush/10" },
  { label: "Platinum Transformation", color: "from-gray-100/30 to-blush/10" },
  { label: "Lived-In Blonde", color: "from-yellow-100/30 to-blush/10" },
  { label: "Brazilian Blowout", color: "from-pink-100/30 to-blush/10" },
  { label: "Color Correction", color: "from-purple-100/30 to-blush/10" },
  { label: "Bridal Hair", color: "from-white to-blush/10" },
];

export default function InstagramFeed() {
  return (
    <section className="py-24 md:py-36 bg-beige/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blush text-sm tracking-[0.3em] uppercase mb-4">
            Follow Along
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            @roseandstonesalon
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {feedItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                />
                <div className="absolute inset-0 bg-beige/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-lg text-blush/30 group-hover:text-blush/50 transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
                {/* Hover zoom effect */}
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700" />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/bettywiththegoodhair_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blush hover:text-blush-dark text-sm tracking-wider transition-colors"
            >
              @bettywiththegoodhair_ →
            </a>
            <span className="text-blush/30 hidden sm:inline">|</span>
            <a
              href="https://www.instagram.com/colourmebree/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blush hover:text-blush-dark text-sm tracking-wider transition-colors"
            >
              @colourmebree →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
