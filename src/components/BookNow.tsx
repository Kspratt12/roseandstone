"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stylists = [
  {
    name: "Betty",
    fullName: "Betty Vandivier",
    title: "Blonding Specialist",
    specialties: "Blonding · Balayage · Brazilian Blowout · Extensions",
    image: "/images/betty.jpg",
    url: "https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so",
    note: "Square Appointments",
  },
  {
    name: "Bree",
    fullName: "Bree Szalkowski",
    title: "Color Expert",
    specialties: "Color · Highlights · Dry Cut · Hair Loss Care",
    image: "/images/bree.jpg",
    url: "https://www.colourmebree.com/",
    note: "ColourMeBree.com",
  },
];

export default function BookNow() {
  return (
    <section id="book" className="py-16 md:py-24 bg-cream">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-charcoal tracking-tight">
            Find Your{" "}
            <span className="italic text-blush">Spot Today</span>
          </h2>
          <p className="mt-4 text-stone font-light text-base leading-relaxed">
            Real-time availability. Pick your stylist, pick your time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {stylists.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group block bg-white rounded-2xl overflow-hidden border border-beige/40 hover:border-blush-light/50 hover:shadow-xl hover:shadow-blush/8 transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.fullName}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl text-charcoal tracking-tight">{s.fullName}</h3>
                <p className="text-blush text-[10px] tracking-[0.15em] uppercase mt-1 mb-3 font-light">{s.title}</p>
                <p className="text-stone/50 text-[12px] mb-6 font-light">{s.specialties}</p>

                <div className="inline-flex items-center justify-center w-full py-3.5 bg-blush text-white text-[12px] tracking-[0.15em] uppercase rounded-full group-hover:bg-blush-dark group-hover:scale-[1.02] transition-all duration-300">
                  Book with {s.name}
                </div>
                <p className="text-stone/30 text-[10px] font-light mt-2">via {s.note}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
