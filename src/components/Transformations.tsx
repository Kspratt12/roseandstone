"use client";

import { motion } from "framer-motion";

const transformations = [
  {
    caption: "She came in with brassy, uneven color and wanted something cooler and brighter. We created a soft dimensional blonde that felt clean, modern, and completely natural on her.",
    stylist: "Betty",
  },
  {
    caption: "Two years of box dye had left her color flat and damaged. After a full corrective session, she walked out with a rich, healthy brunette full of depth and movement.",
    stylist: "Bree",
  },
  {
    caption: "She wanted highlights that looked like she just came back from vacation. We used hand-painted balayage to build warmth gradually, with a result that feels effortless and sun-kissed.",
    stylist: "Betty",
  },
  {
    caption: "A first-time color client who was nervous about making a big change. We started with warm copper tones she never knew she could pull off, and she left absolutely glowing.",
    stylist: "Bree",
  },
];

export default function Transformations() {
  return (
    <section className="py-20 md:py-28 bg-beige/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
            See the Difference
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            Real transformations, real stories
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Before/After Container */}
              <div className="relative rounded-xl overflow-hidden">
                <div className="flex">
                  <div className="w-1/2 relative">
                    {/* Replace with real before photo from Betty/Bree Instagram */}
                    <div className="aspect-[3/4] bg-stone-light/15">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-xl text-stone/12">Before</span>
                      </div>
                    </div>
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-white/70 backdrop-blur-sm text-[10px] tracking-wider text-charcoal rounded">
                      Before
                    </div>
                  </div>

                  <div className="w-[2px] bg-white relative z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <span className="text-gold text-[8px]">&#10022;</span>
                    </div>
                  </div>

                  <div className="w-1/2 relative">
                    {/* Replace with real after photo from Betty/Bree Instagram */}
                    <div className="aspect-[3/4] bg-blush/6">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-xl text-blush/12">After</span>
                      </div>
                    </div>
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-blush/60 backdrop-blur-sm text-[10px] tracking-wider text-white rounded">
                      After
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3 px-1">
                <p className="text-charcoal/80 text-sm font-light leading-relaxed">
                  {t.caption}
                </p>
                <p className="text-gold/60 text-[11px] tracking-wider mt-1.5 font-light italic">
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
