"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-soft-black py-16 md:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        {/* Top row: Rose icon + brand */}
        <div className="text-center mb-12">
          {/* Pink rose SVG icon */}
          <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
              <path d="M24 4c-2 4-8 8-8 14 0 6 3.6 10 8 10s8-4 8-10c0-6-6-10-8-14z" fill="#bd959f" opacity="0.8"/>
              <path d="M24 8c-1.5 3-6 6.5-6 11 0 4.5 2.7 7.5 6 7.5s6-3 6-7.5c0-4.5-4.5-8-6-11z" fill="#d4b5bc" opacity="0.6"/>
              <path d="M24 12c-1 2-4 4.5-4 8 0 3 1.8 5 4 5s4-2 4-5c0-3.5-3-6-4-8z" fill="#e8cdd3" opacity="0.5"/>
              <path d="M24 28c-0.5 0-1 0.2-1 0.5V44h2V28.5c0-0.3-0.5-0.5-1-0.5z" fill="#8c7e76" opacity="0.4"/>
              <path d="M23 34c-3-1-5-0.5-6 1 1.5 0 3.5 0.5 5 1.5" fill="#8c7e76" opacity="0.25"/>
              <path d="M25 36c2.5-1.5 4.5-1 5.5 0.5-1.5-0.2-3.5 0.3-5 1" fill="#8c7e76" opacity="0.25"/>
            </svg>
          </div>
          <p className="text-white/25 text-sm font-light max-w-xs mx-auto leading-relaxed">
            A boutique salon in Cary, North Carolina where your hair gets the attention it deserves.
          </p>
        </div>

        {/* Links row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 text-center mb-12 max-w-[800px] mx-auto">
          <div>
            <h4 className="text-white/35 text-[10px] tracking-[0.15em] uppercase mb-3">Navigate</h4>
            <div className="space-y-1.5">
              {[
                { label: "Our Story", href: "#story" },
                { label: "Stylists", href: "#stylists" },
                { label: "Services", href: "#services" },
                { label: "Reviews", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="block text-white/20 text-[13px] font-light hover:text-blush-light transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/35 text-[10px] tracking-[0.15em] uppercase mb-3">Book</h4>
            <div className="space-y-1.5">
              <a href="https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so" target="_blank" rel="noopener noreferrer" className="block text-white/20 text-[13px] font-light hover:text-blush-light transition-colors duration-200">
                Betty (Square)
              </a>
              <a href="https://www.colourmebree.com/" target="_blank" rel="noopener noreferrer" className="block text-white/20 text-[13px] font-light hover:text-blush-light transition-colors duration-200">
                Bree (ColourMeBree)
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white/35 text-[10px] tracking-[0.15em] uppercase mb-3">Betty</h4>
            <div className="space-y-1.5 text-[13px] font-light">
              <a href="tel:9196510004" className="block text-white/20 hover:text-blush-light transition-colors duration-200">(919) 651-0004</a>
              <a href="mailto:betty@roseandstonesalon.com" className="block text-white/15 text-[11px] hover:text-blush-light transition-colors duration-200 break-all">betty@roseandstone<wbr />salon.com</a>
              <a href="https://www.instagram.com/bettywiththegoodhair_/" target="_blank" rel="noopener noreferrer" className="block text-white/15 text-[11px] hover:text-blush-light transition-colors duration-200">@bettywiththegoodhair_</a>
            </div>
          </div>

          <div>
            <h4 className="text-white/35 text-[10px] tracking-[0.15em] uppercase mb-3">Bree</h4>
            <div className="space-y-1.5 text-[13px] font-light">
              <a href="tel:9847770699" className="block text-white/20 hover:text-blush-light transition-colors duration-200">(984) 777-0699</a>
              <a href="mailto:colourmebree@gmail.com" className="block text-white/15 text-[11px] hover:text-blush-light transition-colors duration-200">colourmebree@gmail.com</a>
              <a href="https://www.instagram.com/colourmebree/" target="_blank" rel="noopener noreferrer" className="block text-white/15 text-[11px] hover:text-blush-light transition-colors duration-200">@colourmebree</a>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="text-center text-white/15 text-[12px] font-light mb-10">
          1340 SE Maynard Rd, Suite 101 · Cary, NC 27511
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/10 text-[11px] font-light">&copy; {new Date().getFullYear()} Rose & Stone Salon</p>
          <p className="text-white/10 text-[11px] font-light">Cary, North Carolina</p>
        </div>
      </div>
    </footer>
  );
}
