"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-soft-black py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl text-white mb-1">
              Rose & Stone
            </h3>
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-4">
              Salon
            </p>
            <p className="text-white/50 text-sm font-light leading-relaxed">
              A calm, personalized boutique salon experience in Cary, North
              Carolina.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white/70 text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { label: "Our Story", href: "#story" },
                { label: "Stylists", href: "#stylists" },
                { label: "Services", href: "#services" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Book Now", href: "#booking" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/40 text-sm font-light hover:text-blush-light transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white/70 text-sm tracking-wider uppercase mb-4">
              Visit Us
            </h4>
            <div className="space-y-3 text-white/40 text-sm font-light">
              <p>
                1340 SE Maynard Rd, Suite 101
                <br />
                Cary, NC 27511
              </p>
              <p>
                <a
                  href="tel:9196510004"
                  className="hover:text-blush-light transition-colors"
                >
                  (919) 651-0004
                </a>
              </p>
              <p>
                <a
                  href="mailto:betty@roseandstonesalon.com"
                  className="hover:text-blush-light transition-colors"
                >
                  betty@roseandstonesalon.com
                </a>
              </p>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/bettywiththegoodhair_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-blush-light transition-colors text-sm"
              >
                Instagram (Betty)
              </a>
              <a
                href="https://www.instagram.com/colourmebree/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-blush-light transition-colors text-sm"
              >
                Instagram (Bree)
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Rose & Stone Salon. All rights
            reserved.
          </p>
          <p className="text-white/20 text-xs">
            Cary, North Carolina
          </p>
        </div>
      </div>
    </footer>
  );
}
