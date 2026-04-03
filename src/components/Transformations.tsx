"use client";

import { motion } from "framer-motion";

const transformations = [
  {
    caption: "This client had been coloring at home for a while and her blonde had gotten really brassy. She showed me a photo of what she wanted and honestly, we nailed it. We went in with a full custom blonding session and brought her back to a cool, clean, dimensional blonde she could actually maintain.",
    stylist: "Betty",
  },
  {
    caption: "She came in really frustrated. Years of box dye had left her hair flat and the color was pulling in a way she didn't love. We did a corrective session to lift out the old color, then built in warmth and depth. She literally teared up when she saw the final result.",
    stylist: "Bree",
  },
  {
    caption: "All she said was \"I want to look like I just got back from the beach.\" So we did a hand-painted balayage, kept it really soft and natural, and blended everything together. She keeps texting me photos because she can't stop looking at it. That's the best feeling.",
    stylist: "Betty",
  },
  {
    caption: "First time color client, super nervous. We talked through everything during the consultation and decided on a warm copper that would complement her skin tone. When I turned her around in the chair, she couldn't believe it was her. Those are the moments I love most about this job.",
    stylist: "Bree",
  },
];

export default function Transformations() {
  return (
    <section className="py-20 md:py-28 bg-beige/25">
      <div className="w-full max-w-[1120px] mx-auto px-6 lg:px-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Before/After Container */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="flex">
                  <div className="w-1/2 relative">
                    {/* Replace with real before photo from Betty/Bree Instagram */}
                    <div className="aspect-[3/4] bg-stone/8">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-lg text-stone/10 italic">Before</span>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/75 backdrop-blur-sm text-[9px] tracking-[0.15em] uppercase text-charcoal/60 rounded-full">
                      Before
                    </div>
                  </div>

                  <div className="w-[1px] bg-white/80 relative z-10" />

                  <div className="w-1/2 relative">
                    {/* Replace with real after photo from Betty/Bree Instagram */}
                    <div className="aspect-[3/4] bg-blush/4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-lg text-blush/10 italic">After</span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-blush/50 backdrop-blur-sm text-[9px] tracking-[0.15em] uppercase text-white rounded-full">
                      After
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 px-1">
                <p className="text-stone text-[14px] font-light leading-[1.7]">
                  &ldquo;{t.caption}&rdquo;
                </p>
                <p className="text-gold/50 text-[11px] tracking-wider mt-2 font-light">
                  {t.stylist === "Betty" ? "Betty V." : "Bree S."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
