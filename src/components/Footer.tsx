"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-soft-black py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.jpeg"
              alt="Rose & Stone Salon"
              width={120}
              height={48}
              className="h-10 w-auto mb-4 brightness-200"
            />
            <p className="text-white/35 text-sm font-light leading-relaxed max-w-xs">
              A boutique salon in Cary, North Carolina — where your hair gets
              the attention it deserves.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/50 text-xs tracking-wider uppercase mb-3">
              Navigate
            </h4>
            <div className="space-y-1.5">
              {[
                { label: "Our Story", href: "#story" },
                { label: "Stylists", href: "#stylists" },
                { label: "Services", href: "#services" },
                { label: "Reviews", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/30 text-sm font-light hover:text-blush-light transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <h4 className="text-white/50 text-xs tracking-wider uppercase mb-3 mt-6">
              Book Online
            </h4>
            <div className="space-y-1.5">
              <a
                href="https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/30 text-sm font-light hover:text-blush-light transition-colors"
              >
                Book with Betty (Square) →
              </a>
              <a
                href="https://www.colourmebree.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/30 text-sm font-light hover:text-blush-light transition-colors"
              >
                Book with Bree (ColourMeBree.com) →
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white/50 text-xs tracking-wider uppercase mb-3">
              Visit Us
            </h4>
            <div className="space-y-2.5 text-white/30 text-sm font-light">
              <p>
                1340 SE Maynard Rd, Suite 101
                <br />
                <span className="text-white/20">(around the back of building)</span>
                <br />
                Cary, NC 27511
              </p>
            </div>

            <h4 className="text-white/50 text-xs tracking-wider uppercase mb-2 mt-5">
              Betty
            </h4>
            <div className="space-y-0.5 text-white/30 text-sm font-light">
              <a href="tel:9196510004" className="block hover:text-blush-light transition-colors">
                (919) 651-0004
              </a>
              <a href="mailto:betty@roseandstonesalon.com" className="block hover:text-blush-light transition-colors">
                betty@roseandstonesalon.com
              </a>
            </div>

            <h4 className="text-white/50 text-xs tracking-wider uppercase mb-2 mt-4">
              Bree
            </h4>
            <div className="space-y-0.5 text-white/30 text-sm font-light">
              <a href="tel:9847770699" className="block hover:text-blush-light transition-colors">
                (984) 777-0699
              </a>
              <a href="mailto:colourmebree@gmail.com" className="block hover:text-blush-light transition-colors">
                colourmebree@gmail.com
              </a>
            </div>

            {/* Social */}
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
              <a
                href="https://www.instagram.com/bettywiththegoodhair_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/20 hover:text-blush-light transition-colors text-xs font-light"
              >
                Instagram (Betty)
              </a>
              <a
                href="https://www.instagram.com/colourmebree/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/20 hover:text-blush-light transition-colors text-xs font-light"
              >
                Instagram (Bree)
              </a>
              <a
                href="https://www.facebook.com/ColourMeBree/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/20 hover:text-blush-light transition-colors text-xs font-light"
              >
                Facebook (Bree)
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/15 text-xs font-light">
            &copy; {new Date().getFullYear()} Rose & Stone Salon. All rights
            reserved.
          </p>
          <p className="text-white/15 text-xs font-light">
            Cary, North Carolina
          </p>
        </div>
      </div>
    </footer>
  );
}
