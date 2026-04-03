"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stylists = [
  {
    name: "Betty Vandivier",
    title: "Owner + Blonding Specialist",
    specialties: ["Blonding", "Balayage", "Brazilian Blowout", "Extensions"],
    description:
      "I'm Betty & I'm the owner of Rose & Stone Salon! I was born & raised in North Carolina and couldn't imagine living anywhere else. I'm a boy mom and love everything that comes along with that! After years of working as a receptionist in a hair salon, I decided I wanted to be the one behind the chair. Over the last 10+ years of my career, I've spent countless hours continuing my education & perfecting my craft. Whether it be highlights or balayage, my passion & specialty is all things BLONDING! I love helping clients achieve natural lived-in color. I'm certified in Brazilian Blowout as well as various methods of extensions that can be customized to suit your individual needs.",
    image: "/images/betty.jpg",
    instagram: "@bettywiththegoodhair_",
    instagramUrl: "https://www.instagram.com/bettywiththegoodhair_/",
    bookingUrl:
      "https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so",
    bookingLabel: "Book with Betty",
  },
  {
    name: "Brianna Szalkowski",
    title: "Owner + Color Expert",
    specialties: ["Color Transformations", "Highlights", "Dry Cutting", "Hair Loss Care"],
    description:
      "My name is Bree and I am the owner of Rose & Stone Salon. Throughout my 12 years in the beauty industry, I have diligently trained in many different areas. From studying in NYC, where I mastered the drycut and became a L'Oréal color expert, to learning how to care for clients who suffer from different forms of hair loss — I've taken cues from all aspects of my career to fine-tune my techniques. When I'm not at the salon, I enjoy getting lost in a good book or soaking up some sunshine. Weekend trips to the beach and spending time with my daughter bring me happiness. I'm also an avid animal lover, with 4 pets of my own that keep life interesting in the best way possible.",
    image: "/images/bree.jpg",
    instagram: "@colourmebree",
    instagramUrl: "https://www.instagram.com/colourmebree/",
    bookingUrl: "https://www.colourmebree.com/",
    bookingLabel: "Book with Bree",
  },
];

export default function Stylists() {
  return (
    <section id="stylists" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4">
            Your Stylists
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            Two stylists. Your full attention.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {stylists.map((stylist, i) => (
            <motion.div
              key={stylist.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="group"
            >
              {/* Portrait */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className="aspect-[3/4] relative overflow-hidden bg-beige">
                  <Image
                    src={stylist.image}
                    alt={stylist.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5"
                >
                  {stylist.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-white/85 backdrop-blur-sm text-charcoal text-[11px] tracking-wider rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </motion.div>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-1">
                {stylist.name}
              </h3>
              <p className="text-blush text-xs tracking-[0.15em] uppercase mb-4">
                {stylist.title}
              </p>
              <p className="text-stone font-light leading-[1.75] text-[15px] mb-6">
                {stylist.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={stylist.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3 bg-blush text-white text-sm tracking-wider uppercase rounded-full hover:bg-blush-dark transition-all duration-300 active:scale-[0.97]"
                >
                  {stylist.bookingLabel}
                </a>
                <a
                  href={stylist.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3 border border-beige text-stone text-sm tracking-wider rounded-full hover:border-blush-light hover:text-blush-dark transition-all duration-300"
                >
                  {stylist.instagram}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
