"use client";

import { motion } from "framer-motion";

const transformations = [
  {
    caption: "From brassy to icy blonde — Betty's signature dimensional blonding",
    stylist: "Betty",
  },
  {
    caption: "A full color correction turned into a beautiful lived-in balayage",
    stylist: "Bree",
  },
  {
    caption: "Sun-kissed highlights that look like you just came back from the coast",
    stylist: "Betty",
  },
  {
    caption: "From box dye to boutique-worthy brunette with rich, multidimensional tones",
    stylist: "Bree",
  },
];

export default function Transformations() {
  return (
    <section className="py-24 md:py-36 bg-beige/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-blush text-sm tracking-[0.3em] uppercase mb-4">
            The Proof
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            Real transformations
          </h2>
          <p className="mt-4 text-stone font-light max-w-xl mx-auto">
            Every before-and-after tells a story. Here are a few of our
            favorites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              {/* Before/After Container */}
              <div className="relative rounded-xl overflow-hidden">
                <div className="flex">
                  {/* Before */}
                  <div className="w-1/2 relative">
                    <div className="aspect-[3/4] bg-stone-light/30">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-3xl text-stone/20">
                          Before
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/80 backdrop-blur-sm text-xs tracking-wider text-charcoal rounded">
                      Before
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-[2px] bg-white relative z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                      <span className="text-blush text-xs">✦</span>
                    </div>
                  </div>

                  {/* After */}
                  <div className="w-1/2 relative">
                    <div className="aspect-[3/4] bg-blush/10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-3xl text-blush/20">
                          After
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-1 bg-blush/80 backdrop-blur-sm text-xs tracking-wider text-white rounded">
                      After
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-start gap-3">
                <span className="text-blush text-sm mt-0.5">✦</span>
                <div>
                  <p className="text-charcoal text-sm font-light leading-relaxed">
                    {t.caption}
                  </p>
                  <p className="text-blush text-xs tracking-wider mt-1">
                    By {t.stylist}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
