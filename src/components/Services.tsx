"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const serviceCategories = [
  {
    name: "Blonding & Color",
    services: [
      {
        title: "Full Custom Blonding",
        price: "$245+",
        time: "3 hrs 30 mins",
        description:
          "Multiple blonding techniques — baby lights, balayage, foilyage, tipping out — for all-over blonde transformation & maximum brightness. Consultation required for new clients.",
      },
      {
        title: "Partial Custom Blonding",
        price: "$185+",
        time: "2 hrs 30 mins",
        description:
          "Various blonding techniques with coverage including the sides and top of the head. When a typical partial highlight just isn't enough.",
      },
      {
        title: "Balayage",
        price: "$210+",
        time: "1 hr 30 mins+",
        description:
          "Hand-painted highlighting technique — price varies based on length and amount of product needed. Short, mid-length, and long hair pricing available.",
      },
      {
        title: "Full Highlight",
        price: "Price varies",
        time: "2 hrs 30 mins+",
        description: "Full head foil highlights for maximum dimension and brightness.",
      },
      {
        title: "Partial Highlight",
        price: "Price varies",
        time: "2 hrs+",
        description: "Partial foil highlights for natural-looking dimension.",
      },
      {
        title: "Mini Highlight",
        price: "$120",
        time: "1 hr 30 mins",
        description:
          "12 foils or less — add brightness around the face or create very subtle dimension. Toner included.",
      },
      {
        title: "Bleach & Tone",
        price: "$180+",
        time: "2 hrs",
        description:
          "Blonding technique used primarily for achieving all-over platinum results. Toner included.",
      },
      {
        title: "Full Color",
        price: "Price varies",
        time: "1 hr 45 mins+",
        description: "Single process color roots to ends.",
      },
      {
        title: "Color Retouch",
        price: "Price varies",
        time: "1 hr 30 mins+",
        description:
          "Single process color applied to regrowth for gray coverage. Blow dry included.",
      },
      {
        title: "Reverse Balayage",
        price: "$190+",
        time: "2 hrs",
        description:
          "Reintroduces depth to previously lightened hair — transition traditional highlights into low-maintenance lived-in blondes.",
      },
      {
        title: "Fashion Color + Lightening",
        price: "$180+",
        time: "2 hrs 30 mins",
        description: "Creative color work. Consultation required prior to service.",
      },
    ],
  },
  {
    name: "Add-Ons",
    services: [
      {
        title: "Toner with Color Service",
        price: "$30",
        time: "15 mins",
        description: "Booked only with highlights or balayage service.",
      },
      {
        title: "Toner Only",
        price: "Price varies",
        time: "30 mins+",
        description: "Standalone toner refresh.",
      },
      {
        title: "Root Shade",
        price: "$55",
        time: "30 mins",
        description:
          "Creates a softer grow out while still maintaining brightness. Lived-in look.",
      },
      {
        title: "Lowlight",
        price: "$45",
        time: "30 mins",
        description: "Booked only with highlight service for added depth.",
      },
      {
        title: "Brow Tint",
        price: "$15",
        time: "10 mins",
        description:
          "Semi-permanent dye to enhance, darken, and define your brows.",
      },
    ],
  },
  {
    name: "Cuts & Styling",
    services: [
      {
        title: "Women's Haircut",
        price: "Price varies",
        time: "1 hr",
        description: "Precision cut tailored to your face shape, texture, and lifestyle.",
      },
      {
        title: "Men's Haircut",
        price: "$42",
        time: "45 mins",
        description: "Clean, detailed men's cut.",
      },
      {
        title: "Teen Girl's Haircut",
        price: "Price varies",
        time: "1 hr+",
        description: "",
      },
      {
        title: "Teen Boy's Haircut",
        price: "$40",
        time: "45 mins",
        description: "",
      },
      {
        title: "Girl's Haircut (12 & under)",
        price: "Price varies",
        time: "45 mins+",
        description: "",
      },
      {
        title: "Boy's Haircut (12 & under)",
        price: "$35",
        time: "45 mins",
        description: "",
      },
      {
        title: "Bang Trim",
        price: "Free",
        time: "10 mins",
        description: "Complimentary for existing clients.",
      },
      {
        title: "Shampoo + Style",
        price: "$50+",
        time: "45 mins",
        description: "",
      },
    ],
  },
  {
    name: "Smoothing & Extensions",
    services: [
      {
        title: "Brazilian Blowout",
        price: "$250+",
        time: "2 hrs 30 mins",
        description:
          "Eliminates frizz, reduces blow dry and styling time, and makes hair more manageable. Does not include haircut.",
      },
      {
        title: "Consultation",
        price: "Free",
        time: "15 mins",
        description:
          "Required prior to any new client extension installation & color correction.",
      },
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4">
            Service Menu
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            Every service starts with a conversation
          </h2>
          <p className="mt-4 text-stone font-light max-w-lg mx-auto text-[15px]">
            We don&apos;t start until we understand your hair, your routine,
            and what you actually want. Consultations are always free.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {serviceCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2 text-xs tracking-wider uppercase rounded-full border transition-all duration-300 active:scale-[0.97] ${
                i === activeCategory
                  ? "bg-blush text-white border-blush"
                  : "bg-transparent text-stone border-beige hover:border-blush-light hover:text-blush-dark"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Service List */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-1"
        >
          {serviceCategories[activeCategory].services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.03 }}
              className="group flex items-start justify-between gap-4 py-4 border-b border-beige/40 last:border-0"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="font-serif text-lg text-charcoal">
                    {service.title}
                  </h3>
                  <span className="text-stone-light text-xs font-light">
                    {service.time}
                  </span>
                </div>
                {service.description && (
                  <p className="text-stone text-sm font-light leading-relaxed mt-1 max-w-lg">
                    {service.description}
                  </p>
                )}
              </div>
              <span className="text-blush font-serif text-lg shrink-0">
                {service.price}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <div className="mt-8 p-4 bg-cream/60 rounded-xl space-y-2">
          <p className="text-stone text-xs font-light leading-relaxed text-center">
            Prices shown are Betty&apos;s menu. Bree&apos;s pricing may differ
            — her services include toner and blowout. For Bree&apos;s full
            menu and pricing, visit{" "}
            <a
              href="https://www.colourmebree.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blush underline underline-offset-2"
            >
              ColourMeBree.com
            </a>
            .
          </p>
          <p className="text-stone text-xs font-light leading-relaxed text-center">
            Prices may vary based on hair length, density, and desired result.
            Additional bowls of color/lightener are $20 each.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#booking"
            className="inline-flex items-center px-8 py-3.5 bg-blush text-white text-sm tracking-wider uppercase rounded-full hover:bg-blush-dark transition-all duration-300 active:scale-[0.97]"
          >
            Book Your Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
