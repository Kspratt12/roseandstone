"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/*
 * IMAGE GUIDE: Replace placeholder images with real before/after photos.
 *
 * Add images to /public/images/transformations/:
 *   - transform-1-before.jpg, transform-1-after.jpg
 *   - transform-2-before.jpg, transform-2-after.jpg
 *   - transform-3-before.jpg, transform-3-after.jpg
 *   - transform-4-before.jpg, transform-4-after.jpg
 *   - transform-5-before.jpg, transform-5-after.jpg
 *   - transform-6-before.jpg, transform-6-after.jpg
 *
 * Recommended: 800x1000px minimum, portrait orientation (3:4 ratio)
 * Pull from: @bettywiththegoodhair_ and @colourmebree Instagram
 */

const transformations = [
  {
    title: "Brassy to Icy Blonde",
    caption: "She'd been coloring at home and her blonde had gone really warm and brassy. We did a full custom blonding session — baby lights through the top, balayage around the face — and brought her back to a cool, clean, dimensional blonde she can actually maintain between visits.",
    stylist: "Betty",
    service: "Full Custom Blonding",
    beforeImage: "/images/transformations/transform-1-before.jpg",
    afterImage: "/images/transformations/transform-1-after.jpg",
  },
  {
    title: "Box Dye Color Correction",
    caption: "Years of box dye had left her hair flat and pulling orange in all the wrong places. We spent the consultation mapping out a plan, then did a corrective session to lift out the old color and rebuild warmth and depth where it belongs. She literally teared up when she saw herself.",
    stylist: "Bree",
    service: "Color Correction",
    beforeImage: "/images/transformations/transform-2-before.jpg",
    afterImage: "/images/transformations/transform-2-after.jpg",
  },
  {
    title: "Beachy Balayage",
    caption: "All she said was 'I want to look like I just got back from the beach.' Hand-painted balayage, kept it soft and natural, blended everything seamlessly. She keeps texting me photos because she can't stop looking at it. That's the best part of this job.",
    stylist: "Betty",
    service: "Balayage",
    beforeImage: "/images/transformations/transform-3-before.jpg",
    afterImage: "/images/transformations/transform-3-after.jpg",
  },
  {
    title: "Warm Copper Transformation",
    caption: "First-time color client, super nervous about making a big change. We talked through everything during the consultation and decided on a warm copper that would complement her skin tone. When I turned her around in the chair, she couldn't believe it was her.",
    stylist: "Bree",
    service: "Full Color",
    beforeImage: "/images/transformations/transform-4-before.jpg",
    afterImage: "/images/transformations/transform-4-after.jpg",
  },
  {
    title: "Lived-In Blonde Refresh",
    caption: "She wanted to go lighter but still look natural — not stripey, not solid, just sun-kissed and dimensional. We did a partial custom blonding with a root melt to keep the grow-out soft. Low maintenance, high impact. Exactly what she wanted.",
    stylist: "Betty",
    service: "Partial Custom Blonding",
    beforeImage: "/images/transformations/transform-5-before.jpg",
    afterImage: "/images/transformations/transform-5-after.jpg",
  },
  {
    title: "Thinning Hair Recovery",
    caption: "She came in feeling really self-conscious about thinning around her crown. We worked together on a color strategy that adds visual fullness and dimension, plus a cut that works with her hair instead of against it. Watching her confidence come back — that's why I do this.",
    stylist: "Bree",
    service: "Color + Dry Cut",
    beforeImage: "/images/transformations/transform-6-before.jpg",
    afterImage: "/images/transformations/transform-6-after.jpg",
  },
];

function TransformationCard({ t, i }: { t: typeof transformations[0]; i: number }) {
  const hasImages = true;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="group"
    >
      {/* Before/After Image Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-charcoal/5 transition-shadow duration-500">
        <div className="flex">
          {/* Before */}
          <div className="w-1/2 relative">
            {hasImages ? (
              <div className="aspect-[3/4] relative">
                <Image src={t.beforeImage} alt={`Before - ${t.title}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" quality={85} />
              </div>
            ) : (
              <div className="aspect-[3/4] bg-gradient-to-br from-stone/12 via-stone/8 to-beige/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full border border-stone/15 mx-auto mb-2 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-stone/25">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                  </div>
                  <p className="text-stone/20 text-[10px] tracking-wider uppercase font-light">Before</p>
                </div>
              </div>
            )}
            <div className="absolute top-3 left-3 px-3 py-1 bg-white/80 backdrop-blur-sm text-[9px] tracking-[0.15em] uppercase text-charcoal/60 rounded-full font-light">
              Before
            </div>
          </div>

          {/* Divider */}
          <div className="w-[2px] bg-white relative z-10 shrink-0" />

          {/* After */}
          <div className="w-1/2 relative">
            {hasImages ? (
              <div className="aspect-[3/4] relative">
                <Image src={t.afterImage} alt={`After - ${t.title}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" quality={85} />
              </div>
            ) : (
              <div className="aspect-[3/4] bg-gradient-to-br from-blush/5 via-rose/5 to-gold/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full border border-blush/15 mx-auto mb-2 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blush/30">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <p className="text-blush/25 text-[10px] tracking-wider uppercase font-light">After</p>
                </div>
              </div>
            )}
            <div className="absolute top-3 right-3 px-3 py-1 bg-blush/60 backdrop-blur-sm text-[9px] tracking-[0.15em] uppercase text-white rounded-full font-light">
              After
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-5">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-serif text-[17px] text-charcoal">{t.title}</h3>
          <span className="text-[9px] tracking-wider text-gold/60 uppercase font-light">{t.service}</span>
        </div>
        <p className="text-stone text-[13px] font-light leading-relaxed max-w-[480px]">
          &ldquo;{t.caption}&rdquo;
        </p>
        <p className="text-blush/50 text-[11px] tracking-wider mt-2.5 font-light">
          — {t.stylist === "Betty" ? "Betty V." : "Bree S."}
        </p>
      </div>
    </motion.div>
  );
}

export default function Transformations() {
  return (
    <section id="transformations" className="py-16 md:py-24 bg-beige/20">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
            The Proof Is in the Hair
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-tight max-w-[800px] mx-auto">
            Real clients. Real transformations.
          </h2>
          <p className="mt-4 text-stone font-light text-[15px] leading-relaxed max-w-[540px] mx-auto">
            Every transformation starts with a conversation. Here are some of our favorite before & afters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {transformations.map((t, i) => (
            <TransformationCard key={i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
