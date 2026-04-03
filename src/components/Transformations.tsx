"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const transformations = [
  {
    title: "Brassy to Icy Blonde",
    caption: "She'd been coloring at home and her blonde had gone really warm and brassy. We did a full custom blonding session — baby lights through the top, balayage around the face — and brought her back to a cool, clean, dimensional blonde she can actually maintain.",
    stylist: "Betty",
    service: "Full Custom Blonding",
    beforeImage: "/hair9.png",
    afterImage: "/hair1.png",
  },
  {
    title: "Lived-In Balayage",
    caption: "She wanted to go lighter but still look natural — not stripey, not solid, just sun-kissed and dimensional. Hand-painted balayage with a root melt to keep the grow-out soft. Low maintenance, high impact.",
    stylist: "Betty",
    service: "Balayage",
    beforeImage: "/hair18.png",
    afterImage: "/hair19.png",
  },
  {
    title: "Cool Blonde Refresh",
    caption: "All she said was 'I want to look like I just got back from the beach.' We kept it really soft and natural, blended everything seamlessly. She keeps texting me photos because she can't stop looking at it.",
    stylist: "Betty",
    service: "Partial Custom Blonding",
    beforeImage: "/hair3.png",
    afterImage: "/hair8.png",
  },
  {
    title: "Warm Copper Transformation",
    caption: "First-time color client, super nervous about making a big change. We talked through everything during the consultation and decided on a warm tone that would complement her skin tone. When I turned her around in the chair, she couldn't believe it was her.",
    stylist: "Bree",
    service: "Full Color",
    beforeImage: "/hair20.png",
    afterImage: "/hair14.png",
  },
  {
    title: "Dimensional Blonde",
    caption: "She came in with flat, one-dimensional blonde that had lost all its life. We added depth at the root and brightness through the ends — the kind of color that catches light from every angle. This is what 'expensive blonde' looks like.",
    stylist: "Betty",
    service: "Full Custom Blonding",
    beforeImage: "/hair4.png",
    afterImage: "/hair6.png",
  },
  {
    title: "Soft Honey Blonde",
    caption: "Years of highlights had left her hair feeling heavy and brassy. We stripped back the old buildup and rebuilt warmth and dimension where it belongs. Softer, healthier, and exactly what she wanted.",
    stylist: "Bree",
    service: "Color Correction",
    beforeImage: "/hair17.png",
    afterImage: "/hair15.png",
  },
];

function TransformationCard({ t, i }: { t: typeof transformations[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="group"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-charcoal/5 transition-shadow duration-500">
        <div className="flex">
          {/* Before */}
          <div className="w-1/2 relative">
            <div className="aspect-[3/4] relative">
              <Image src={t.beforeImage} alt={`Before - ${t.title}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" quality={85} />
            </div>
            <div className="absolute top-3 left-3 px-3 py-1 bg-white/80 backdrop-blur-sm text-[9px] tracking-[0.15em] uppercase text-charcoal/60 rounded-full font-light">
              Before
            </div>
          </div>

          <div className="w-[2px] bg-white relative z-10 shrink-0" />

          {/* After */}
          <div className="w-1/2 relative">
            <div className="aspect-[3/4] relative">
              <Image src={t.afterImage} alt={`After - ${t.title}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" quality={85} />
            </div>
            <div className="absolute top-3 right-3 px-3 py-1 bg-blush/60 backdrop-blur-sm text-[9px] tracking-[0.15em] uppercase text-white rounded-full font-light">
              After
            </div>
          </div>
        </div>
      </div>

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
