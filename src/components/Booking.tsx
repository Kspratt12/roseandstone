"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BookingProps {
  onBookClick: () => void;
}

const bookingOptions = [
  {
    name: "Betty Vandivier",
    title: "Blonding Specialist",
    focus: "Blonding · Balayage · Brazilian Blowout · Extensions",
    phone: "(919) 651-0004",
    email: "betty@roseandstonesalon.com",
    url: "https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so",
    buttonText: "Book with Betty",
    note: "Books through Square Appointments",
    image: "/images/betty.jpg",
  },
  {
    name: "Bree Szalkowski",
    title: "Color Expert",
    focus: "Color · Highlights · Dry Cut · Hair Loss Care",
    phone: "(984) 777-0699",
    email: "colourmebree@gmail.com",
    url: "https://www.colourmebree.com/",
    buttonText: "Book with Bree",
    note: "Books through ColourMeBree.com",
    image: "/images/bree.jpg",
  },
];

export default function Booking({ onBookClick }: BookingProps) {
  return (
    <section id="booking" className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">Ready to Book?</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-tight max-w-[800px] mx-auto">Choose your stylist</h2>
          <p className="mt-3 text-stone font-light text-[15px] leading-relaxed max-w-[480px] mx-auto">Pick who feels right. You can&apos;t go wrong either way.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[680px] mx-auto">
          {bookingOptions.map((option, i) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-cream rounded-2xl p-7 border border-beige/60 hover:border-blush-light/40 hover:shadow-lg hover:shadow-blush/5 transition-all duration-300"
            >
              {/* Centered content */}
              <div className="flex flex-col items-center text-center">
                <div className="w-[72px] h-[72px] rounded-full overflow-hidden mb-5 ring-2 ring-beige/50">
                  <Image src={option.image} alt={option.name} width={72} height={72} quality={85} className="w-full h-full object-cover" />
                </div>

                <h3 className="font-serif text-xl text-charcoal tracking-tight">{option.name}</h3>
                <p className="text-gold text-[10px] tracking-[0.12em] uppercase mt-0.5 mb-3 font-light">{option.title}</p>
                <p className="text-stone/60 text-[12px] mb-6 font-light">{option.focus}</p>

                <a
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-blush text-white text-center text-[12px] tracking-wider uppercase rounded-full hover:bg-blush-dark hover:scale-[1.03] transition-all duration-300 active:scale-[0.97]"
                >
                  {option.buttonText}
                </a>
                <p className="text-[10px] text-stone-light mt-2 font-light">{option.note}</p>

                <div className="mt-4 pt-4 border-t border-beige/30 w-full flex flex-col items-center gap-0.5 text-[12px] text-stone/60 font-light">
                  <a href={`tel:${option.phone.replace(/\D/g, "")}`} className="hover:text-blush transition-colors duration-200">{option.phone}</a>
                  <a href={`mailto:${option.email}`} className="hover:text-blush transition-colors duration-200 text-[11px]">{option.email}</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 space-y-2"
        >
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-7 py-3 bg-charcoal text-white text-[11px] tracking-wider uppercase rounded-full hover:bg-soft-black hover:scale-[1.03] transition-all duration-300 active:scale-[0.97] cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Open Booking Calendar
          </button>
          <p className="text-stone/50 text-[12px] font-light">
            Not sure who to choose?{" "}
            <a href="#contact" className="text-blush hover:text-blush-dark underline underline-offset-4 decoration-blush/20 transition-colors duration-200">Tell us what you&apos;re looking for</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
