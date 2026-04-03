"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Blonding",
    description:
      "Dimensional, lived-in blondes tailored to your skin tone and lifestyle. From icy platinum to warm honey — this is our signature.",
    image: "/services/blonding.jpg",
  },
  {
    title: "Balayage",
    description:
      "Hand-painted, sun-kissed highlights that grow out beautifully. Low maintenance, high impact — the way color should be.",
    image: "/services/balayage.jpg",
  },
  {
    title: "Color & Highlights",
    description:
      "Full color transformations, dimensional highlights, and corrective color. L'Oréal trained expertise for flawless results every time.",
    image: "/services/color.jpg",
  },
  {
    title: "Brazilian Blowout",
    description:
      "Smooth, frizz-free, and brilliantly shiny. Our smoothing treatments reduce styling time and keep your hair healthy.",
    image: "/services/blowout.jpg",
  },
  {
    title: "Precision Cuts",
    description:
      "Men's and women's cuts crafted to your face shape, hair texture, and personal style. Including Bree's signature dry cut technique.",
    image: "/services/cuts.jpg",
  },
  {
    title: "Extensions",
    description:
      "Seamless, natural-looking volume and length. Expertly placed for a flawless blend that moves like your own hair.",
    image: "/services/extensions.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-blush text-sm tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            Services crafted with care
          </h2>
          <p className="mt-4 text-stone font-light max-w-xl mx-auto">
            Every service begins with a consultation — because understanding
            your hair is just as important as styling it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-default"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-beige rounded-xl overflow-hidden mb-5">
                <div className="absolute inset-0 bg-gradient-to-br from-blush/10 to-rose-gold/10 group-hover:from-blush/20 group-hover:to-rose-gold/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-4xl text-blush/20 group-hover:text-blush/30 transition-colors duration-500">
                    {service.title.charAt(0)}
                  </span>
                </div>
                {/* Replace with real images */}
              </div>

              <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-2">
                {service.title}
              </h3>
              <p className="text-stone text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blush text-white text-sm tracking-wider uppercase rounded-full hover:bg-blush-dark transition-colors duration-300"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
