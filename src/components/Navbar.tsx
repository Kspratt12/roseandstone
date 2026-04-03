"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Stylists", href: "#stylists" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)] py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          <a href="#" className="relative shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="Rose & Stone Salon"
              width={120}
              height={48}
              className={`h-9 md:h-10 w-auto transition-opacity duration-500 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
            <span
              className={`font-serif text-xl md:text-2xl font-light tracking-wide transition-all duration-500 leading-none ${
                scrolled ? "opacity-0 absolute top-0 left-0 pointer-events-none" : "text-white opacity-100"
              }`}
            >
              Rose & Stone
              <span className="block text-[9px] tracking-[0.3em] uppercase font-light mt-0.5 text-white/40">
                Salon
              </span>
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[11px] tracking-[0.12em] uppercase font-light transition-colors duration-300 hover:text-blush whitespace-nowrap ${
                  scrolled ? "text-charcoal/70" : "text-white/70"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onBookClick}
              className="ml-2 px-5 py-2 bg-blush text-white text-[11px] tracking-[0.12em] uppercase rounded-full hover:bg-blush-dark transition-all duration-300 active:scale-[0.97] cursor-pointer whitespace-nowrap"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block w-6 h-[1.5px] transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[9px] bg-charcoal" : scrolled ? "bg-charcoal" : "bg-white"}`} />
              <span className={`block w-6 h-[1.5px] transition-all duration-200 ${mobileOpen ? "opacity-0" : scrolled ? "bg-charcoal" : "bg-white"}`} />
              <span className={`block w-6 h-[1.5px] transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[9px] bg-charcoal" : scrolled ? "bg-charcoal" : "bg-white"}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-7 lg:hidden"
          >
            <Image src="/images/logo.jpeg" alt="Rose & Stone Salon" width={130} height={52} className="h-12 w-auto mb-4" />
            {navLinks.map((link, i) => (
              <motion.a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                className="text-2xl font-serif text-charcoal tracking-wider hover:text-blush transition-colors">
                {link.label}
              </motion.a>
            ))}
            <motion.button onClick={() => { setMobileOpen(false); onBookClick(); }}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.3 }}
              className="mt-2 px-8 py-3.5 bg-blush text-white text-base tracking-wider rounded-full hover:bg-blush-dark transition-colors active:scale-[0.97] cursor-pointer">
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
