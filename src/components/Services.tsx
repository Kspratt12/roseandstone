"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Blonding",
    description:
      "Our signature. Dimensional, lived-in blondes custom-matched to your skin tone — from icy platinum to warm caramel. This is what we're known for.",
  },
  {
    title: "Balayage",
    description:
      "Hand-painted highlights that look like you were born with them. Grows out naturally, looks incredible for months, and requires way less upkeep.",
  },
  {
    title: "Color & Highlights",
    description:
      "Full transformations, corrective color, and dimensional highlights. Bree's L'Oréal training means your color will be rich, even, and exactly what you asked for.",
  },
  {
    title: "Brazilian Blowout",
    description:
      "Cut your morning routine in half. Smooth, shiny, frizz-free hair that lasts for weeks — and actually keeps your hair healthier.",
  },
  {
    title: "Precision Cuts",
    description:
      "Shaped to your face, your texture, and how you actually style your hair day-to-day. Ask Bree about her signature dry cut — it's a game-changer.",
  },
  {
    title: "Extensions",
    description:
      "Natural-looking length and volume placed by hand. We blend them so seamlessly, nobody will know — they'll just think you have incredible hair.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            Every service starts with a conversation
          </h2>
          <p className="mt-4 text-stone font-light max-w-lg mx-auto text-[15px]">
            We don&apos;t start until we understand your hair, your routine,
            and what you actually want. No assumptions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="relative aspect-[4/3] bg-beige/60 rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-blush/5 to-rose-gold/5 group-hover:from-blush/12 group-hover:to-rose-gold/12 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-4xl text-blush/15 group-hover:text-blush/25 transition-colors duration-700">
                    {service.title.charAt(0)}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl text-charcoal mb-2">
                {service.title}
              </h3>
              <p className="text-stone text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#booking"
            className="inline-flex items-center px-8 py-3.5 bg-blush text-white text-sm tracking-wider uppercase rounded-full hover:bg-blush-dark transition-all duration-300 active:scale-[0.97]"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
