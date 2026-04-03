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
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="Rose & Stone Salon"
              width={120}
              height={48}
              className={`h-10 md:h-12 w-auto transition-opacity duration-500 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
            <span
              className={`font-serif text-2xl md:text-[1.7rem] font-light tracking-wide transition-all duration-500 ${
                scrolled ? "opacity-0 absolute" : "text-white opacity-100"
              }`}
            >
              Rose & Stone
              <span className="block text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-light mt-0.5 text-white/50">
                Salon
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] tracking-wider uppercase font-light transition-colors duration-300 hover:text-blush ${
                  scrolled ? "text-charcoal/80" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onBookClick}
              className="ml-3 px-6 py-2.5 bg-blush text-white text-[13px] tracking-wider uppercase rounded-full hover:bg-blush-dark transition-all duration-300 active:scale-[0.97] cursor-pointer"
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
              <span
                className={`block w-6 h-[1.5px] transition-all duration-300 origin-center ${
                  mobileOpen
                    ? "rotate-45 translate-y-[9px] bg-charcoal"
                    : scrolled ? "bg-charcoal" : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] transition-all duration-200 ${
                  mobileOpen ? "opacity-0" : scrolled ? "bg-charcoal" : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] transition-all duration-300 origin-center ${
                  mobileOpen
                    ? "-rotate-45 -translate-y-[9px] bg-charcoal"
                    : scrolled ? "bg-charcoal" : "bg-white"
                }`}
              />
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
            <Image
              src="/images/logo.jpeg"
              alt="Rose & Stone Salon"
              width={140}
              height={56}
              className="h-14 w-auto mb-4"
            />
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                className="text-2xl font-serif text-charcoal tracking-wider hover:text-blush transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              onClick={() => { setMobileOpen(false); onBookClick(); }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="mt-2 px-8 py-3.5 bg-blush text-white text-base tracking-wider rounded-full hover:bg-blush-dark transition-colors active:scale-[0.97]"
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
