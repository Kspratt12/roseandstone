"use client";

export default function Footer() {
  return (
    <footer className="bg-soft-black py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl text-white mb-0.5">
              Rose & Stone
            </h3>
            <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase mb-3">
              Salon
            </p>
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
                { label: "Book Now", href: "#booking" },
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
          </div>

          {/* Contact */}
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
              <p>
                <a href="tel:9196510004" className="hover:text-blush-light transition-colors">
                  (919) 651-0004
                </a>
                {" · "}
                <a href="tel:9847770699" className="hover:text-blush-light transition-colors">
                  (984) 777-0699
                </a>
              </p>
            </div>

            <div className="mt-4 flex gap-4">
              <a
                href="https://www.instagram.com/bettywiththegoodhair_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/20 hover:text-blush-light transition-colors text-sm font-light"
              >
                @bettywiththegoodhair_
              </a>
            </div>
            <div className="mt-1">
              <a
                href="https://www.instagram.com/colourmebree/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/20 hover:text-blush-light transition-colors text-sm font-light"
              >
                @colourmebree
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/15 text-xs font-light">
            &copy; {new Date().getFullYear()} Rose & Stone Salon
          </p>
          <p className="text-white/15 text-xs font-light">
            Cary, North Carolina
          </p>
        </div>
      </div>
    </footer>
  );
}
