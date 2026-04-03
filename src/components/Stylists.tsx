"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const stylists = [
  {
    name: "Betty Vandivier",
    title: "Owner · Blonding Specialist",
    specialties: ["Blonding", "Balayage", "Brazilian Blowout", "Extensions"],
    bio: "I'm Betty and I'm the owner of Rose & Stone Salon! I was born and raised in North Carolina and couldn't imagine living anywhere else. I'm a boy mom and love everything that comes along with that!",
    extended: "After years of working as a receptionist in a hair salon, I decided I wanted to be the one behind the chair. Over the last 10+ years of my career, I've spent countless hours continuing my education and perfecting my craft. Whether it be highlights or balayage, my passion and specialty is all things BLONDING! I love helping clients achieve natural lived-in color. I'm certified in Brazilian Blowout as well as various methods of extensions that can be customized to suit your individual needs.",
    image: "/images/betty.jpg",
    instagram: "@bettywiththegoodhair_",
    instagramUrl: "https://www.instagram.com/bettywiththegoodhair_/",
    bookingUrl: "https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so",
    bookingLabel: "Book with Betty",
  },
  {
    name: "Brianna Szalkowski",
    title: "Owner · Color Expert",
    specialties: ["Color Transformations", "Highlights", "Dry Cutting", "Hair Loss Care"],
    bio: "My name is Bree and I am the owner of Rose & Stone Salon. Throughout my 12 years in the beauty industry, I have diligently trained in many different areas.",
    extended: "From studying in NYC, where I mastered the drycut and became a L'Oréal color expert, to learning how to care for clients who suffer from different forms of hair loss, I have taken cues from all aspects of my career to fine-tune my techniques. When I'm not at the salon, I enjoy getting lost in a good book or soaking up some sunshine. Weekend trips to the beach and spending time with my daughter bring me happiness. I'm also an avid animal lover, with 4 pets of my own that keep life interesting in the best way possible.",
    image: "/images/bree.jpg",
    instagram: "@colourmebree",
    instagramUrl: "https://www.instagram.com/colourmebree/",
    bookingUrl: "https://www.colourmebree.com/",
    bookingLabel: "Book with Bree",
  },
];

function StylistCard({ stylist, index }: { stylist: typeof stylists[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
      className="group text-center"
    >
      {/* Portrait - properly constrained */}
      <div className="relative mb-6 overflow-hidden rounded-2xl mx-auto" style={{ maxWidth: "380px" }}>
        <div className="aspect-[3/4] relative overflow-hidden bg-beige">
          <Image
            src={stylist.image}
            alt={stylist.name}
            fill
            quality={85}
            sizes="380px"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/12 via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap justify-center gap-1.5">
          {stylist.specialties.map((s) => (
            <span key={s} className="px-2.5 py-0.5 bg-white/80 backdrop-blur-sm text-charcoal text-[9px] tracking-wider rounded-full">
              {s}
            </span>
          ))}
        </div>
      </div>

      <h3 className="font-serif text-2xl text-charcoal mb-1">{stylist.name}</h3>
      <p className="text-gold text-[10px] tracking-[0.15em] uppercase mb-4 font-light">{stylist.title}</p>

      <div className="max-w-xs mx-auto">
        <p className="text-stone font-light leading-[1.7] text-[14px]">
          {stylist.bio}
          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="ml-1.5 text-blush hover:text-blush-dark text-[14px] font-normal transition-colors cursor-pointer underline underline-offset-2 decoration-blush/30"
            >
              Read more
            </button>
          )}
        </p>
        {expanded && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <p className="text-stone font-light leading-[1.7] text-[14px] mt-3">{stylist.extended}</p>
            <button onClick={() => setExpanded(false)} className="mt-2 text-stone-light hover:text-blush text-xs font-light transition-colors cursor-pointer">
              Show less
            </button>
          </motion.div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-2 mt-6">
        <a href={stylist.bookingUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-2.5 bg-blush text-white text-[12px] tracking-wider uppercase rounded-full hover:bg-blush-dark transition-all duration-300 active:scale-[0.97]">
          {stylist.bookingLabel}
        </a>
        <a href={stylist.instagramUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-2.5 border border-beige text-stone text-[12px] tracking-wider rounded-full hover:border-blush-light hover:text-blush-dark transition-all duration-300">
          {stylist.instagram}
        </a>
      </div>
    </motion.div>
  );
}

export default function Stylists() {
  return (
    <section id="stylists" className="py-20 md:py-28 bg-cream">
      <div className="w-full max-w-[900px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">Your Stylists</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">Two stylists. Your full attention.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
          {stylists.map((stylist, i) => (
            <StylistCard key={stylist.name} stylist={stylist} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
