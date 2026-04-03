"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-soft-black py-16 md:py-20">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        {/* Top row: Logo centered */}
        <div className="text-center mb-12">
          <Image
            src="/images/logo.jpeg"
            alt="Rose & Stone Salon"
            width={100}
            height={40}
            className="h-8 w-auto mx-auto mb-3 brightness-200 opacity-70"
          />
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
