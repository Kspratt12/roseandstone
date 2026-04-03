"use client";

import { motion } from "framer-motion";

const transformations = [
  {
    caption: "Brassy and uneven to a cool, dimensional icy blonde — her exact Pinterest inspo, finally real",
    stylist: "Betty",
  },
  {
    caption: "Two years of box dye buildup corrected into a rich, healthy brunette with depth",
    stylist: "Bree",
  },
  {
    caption: "Flat, single-process color to a sun-kissed balayage that looks like she just came back from vacation",
    stylist: "Betty",
  },
  {
    caption: "A nervous first-time color client who left grinning — warm copper tones she never knew she could pull off",
    stylist: "Bree",
  },
];

export default function Transformations() {
  return (
    <section className="py-20 md:py-28 bg-beige/40">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4">
            See the Difference
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            The before doesn&apos;t matter.
            <br />
            <span className="italic text-blush-dark/70">The after does.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Before/After Container */}
              <div className="relative rounded-xl overflow-hidden">
                <div className="flex">
                  <div className="w-1/2 relative">
                    <div className="aspect-[3/4] bg-stone-light/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-2xl text-stone/15">Before</span>
                      </div>
                    </div>
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-white/75 backdrop-blur-sm text-[10px] tracking-wider text-charcoal rounded">
                      Before
                    </div>
                  </div>

                  <div className="w-[2px] bg-white relative z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <span className="text-blush text-[10px]">&#10022;</span>
                    </div>
                  </div>

                  <div className="w-1/2 relative">
                    <div className="aspect-[3/4] bg-blush/8">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-2xl text-blush/15">After</span>
                      </div>
                    </div>
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-blush/70 backdrop-blur-sm text-[10px] tracking-wider text-white rounded">
                      After
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 px-1">
                <p className="text-charcoal text-sm font-light leading-relaxed">
                  {t.caption}
                </p>
                <p className="text-blush/70 text-xs tracking-wider mt-1 font-light">
                  By {t.stylist}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
