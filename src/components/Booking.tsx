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
    known: "Blonding, balayage, Brazilian Blowout, extensions",
    phone: "(919) 651-0004",
    email: "betty@roseandstonesalon.com",
    url: "https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so",
    buttonText: "Book with Betty",
    note: "Books through Square",
    image: "/images/betty.jpg",
  },
  {
    name: "Bree Szalkowski",
    title: "Color Expert",
    known: "Color, highlights, dry cut, hair loss care",
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
    <section id="booking" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
            Ready to Book?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            Choose your stylist
          </h2>
          <p className="mt-3 text-stone font-light text-[15px]">
            Pick who feels right. You can&apos;t go wrong either way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {bookingOptions.map((option, i) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group relative bg-cream rounded-2xl p-7 md:p-8 border border-beige hover:border-blush-light/50 transition-all duration-500"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Photo */}
                <div className="w-20 h-20 rounded-full overflow-hidden mb-5 ring-2 ring-beige group-hover:ring-blush-light/50 transition-colors duration-500">
                  <Image
                    src={option.image}
                    alt={option.name}
                    width={80}
                    height={80}
                    quality={85}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-serif text-2xl text-charcoal mb-0.5">
                  {option.name}
                </h3>
                <p className="text-gold text-[11px] tracking-[0.15em] uppercase mb-4 font-light">
                  {option.title}
                </p>

                <p className="text-stone text-sm mb-5 font-light">
                  {option.known}
                </p>

                <a
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-blush text-white text-center text-sm tracking-wider uppercase rounded-full hover:bg-blush-dark transition-all duration-300 active:scale-[0.97] shadow-sm shadow-blush/10"
                >
                  {option.buttonText}
                </a>

                <p className="text-[11px] text-stone-light mt-2.5 font-light">
                  {option.note}
                </p>

                <div className="mt-4 pt-4 border-t border-beige/50 w-full flex flex-col items-center gap-1 text-xs text-stone font-light">
                  <a href={`tel:${option.phone.replace(/\D/g, "")}`} className="hover:text-blush transition-colors">
                    {option.phone}
                  </a>
                  <a href={`mailto:${option.email}`} className="hover:text-blush transition-colors">
                    {option.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calendar + Help */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 space-y-3"
        >
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-8 py-3 bg-charcoal text-white text-sm tracking-wider uppercase rounded-full hover:bg-soft-black transition-colors active:scale-[0.97] cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Open Booking Calendar
          </button>
          <p className="text-stone text-sm font-light">
            Not sure who to choose?{" "}
            <a
              href="#contact"
              className="text-blush hover:text-blush-dark underline underline-offset-4 decoration-blush/25 transition-colors"
            >
              Tell us what you&apos;re looking for
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
