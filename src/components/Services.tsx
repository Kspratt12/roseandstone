"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ServicesProps {
  onBookClick: () => void;
}

const serviceCategories = [
  {
    name: "Blonding & Color",
    services: [
      { title: "Full Custom Blonding", price: "$245+", time: "3h 30m", description: "Multiple blonding techniques including baby lights, balayage, foilyage, and tipping out for all-over blonde transformation. Consultation required for new clients." },
      { title: "Partial Custom Blonding", price: "$185+", time: "2h 30m", description: "Various blonding techniques with coverage including the sides and top of the head." },
      { title: "Balayage", price: "$210+", time: "1h 30m+", description: "Hand-painted highlighting technique. Price varies based on length and product needed." },
      { title: "Full Highlight", price: "Varies", time: "2h 30m+", description: "Full head foil highlights for maximum dimension and brightness." },
      { title: "Partial Highlight", price: "Varies", time: "2h+", description: "Partial foil highlights for natural-looking dimension." },
      { title: "Mini Highlight", price: "$120", time: "1h 30m", description: "12 foils or less for brightness around the face. Toner included." },
      { title: "Bleach & Tone", price: "$180+", time: "2h", description: "For achieving all-over platinum results. Toner included." },
      { title: "Full Color", price: "Varies", time: "1h 45m+", description: "Single process color from roots to ends." },
      { title: "Color Retouch", price: "Varies", time: "1h 30m+", description: "Single process applied to regrowth for gray coverage. Blow dry included." },
      { title: "Reverse Balayage", price: "$190+", time: "2h", description: "Reintroduces depth to previously lightened hair for a lived-in look." },
      { title: "Fashion Color", price: "$180+", time: "2h 30m", description: "Creative color work. Consultation required." },
    ],
  },
  {
    name: "Add-Ons",
    services: [
      { title: "Toner with Color Service", price: "$30", time: "15m", description: "Booked only with highlights or balayage." },
      { title: "Toner Only", price: "Varies", time: "30m+", description: "Standalone toner refresh." },
      { title: "Root Shade", price: "$55", time: "30m", description: "Softer grow-out while maintaining brightness." },
      { title: "Lowlight", price: "$45", time: "30m", description: "Booked only with a highlight service for added depth." },
      { title: "Brow Tint", price: "$15", time: "10m", description: "Semi-permanent dye to enhance and define your brows." },
    ],
  },
  {
    name: "Cuts & Styling",
    services: [
      { title: "Women's Haircut", price: "Varies", time: "1h", description: "Precision cut tailored to your face shape and lifestyle." },
      { title: "Men's Haircut", price: "$42", time: "45m", description: "" },
      { title: "Teen Girl's Haircut", price: "Varies", time: "1h+", description: "" },
      { title: "Teen Boy's Haircut", price: "$40", time: "45m", description: "" },
      { title: "Kids Haircut (12 & under)", price: "$35+", time: "45m", description: "" },
      { title: "Bang Trim", price: "Free", time: "10m", description: "Complimentary for existing clients." },
      { title: "Shampoo + Style", price: "$50+", time: "45m", description: "" },
    ],
  },
  {
    name: "Smoothing & Extensions",
    services: [
      { title: "Brazilian Blowout", price: "$250+", time: "2h 30m", description: "Eliminates frizz, reduces styling time, and makes hair more manageable." },
      { title: "Consultation", price: "Free", time: "15m", description: "Required for new client extensions or color correction." },
    ],
  },
];

export default function Services({ onBookClick }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">Service Menu</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-tight max-w-[800px] mx-auto">
            Every service starts with a conversation
          </h2>
          <p className="mt-4 text-stone font-light max-w-[600px] mx-auto text-[15px] leading-relaxed">
            We don&apos;t start until we understand your hair, your routine,
            and what you actually want. Consultations are always free.
          </p>
        </motion.div>

        {/* Inner content constrained for readability */}
        <div className="max-w-[720px] mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {serviceCategories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(i)}
                className={`px-5 py-2 text-[11px] tracking-wider uppercase rounded-full border transition-all duration-300 active:scale-[0.97] cursor-pointer ${
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {serviceCategories[activeCategory].services.map((service) => (
              <div
                key={service.title}
                className="flex items-baseline justify-between gap-4 py-4 border-b border-beige/25 last:border-0"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-serif text-[17px] text-charcoal">{service.title}</span>
                    <span className="text-stone-light text-[10px] font-light tracking-wide">{service.time}</span>
                  </div>
                  {service.description && (
                    <p className="text-stone/70 text-[13px] font-light leading-relaxed mt-1">{service.description}</p>
                  )}
                </div>
                <span className="text-blush font-serif text-[17px] shrink-0 tabular-nums text-right min-w-[60px]">{service.price}</span>
              </div>
            ))}
          </motion.div>

          {/* Pricing Note */}
          <div className="mt-8 p-5 bg-cream/60 rounded-xl text-center">
            <p className="text-stone/60 text-[11px] font-light leading-relaxed">
              Betty&apos;s pricing shown above. Bree&apos;s pricing includes toner and blowout.{" "}
              <a href="https://www.colourmebree.com/" target="_blank" rel="noopener noreferrer" className="text-blush underline underline-offset-2 hover:text-blush-dark transition-colors duration-200">
                View Bree&apos;s menu
              </a>
              &nbsp;·&nbsp;Additional bowls of color or lightener are $20 each.
            </p>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onBookClick}
              className="inline-flex items-center px-9 py-3.5 bg-blush text-white text-[12px] tracking-[0.12em] uppercase rounded-full hover:bg-blush-dark hover:scale-[1.03] transition-all duration-300 active:scale-[0.97] cursor-pointer"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
