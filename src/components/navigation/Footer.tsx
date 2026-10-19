import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, Navigation } from "lucide-react";
import Logo from "../ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#181B20] text-slate-300 pt-16 pb-8 border-t border-[#323842]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-5">
            <Logo light={true} />
            <p className="text-[#D1D5DB] text-sm leading-relaxed mt-2">
              Based in Mathikere, Annamayya Safety Nets serves all of Bangalore with technician-led installations of high-tensile balcony safety nets, marine-grade SS316 invisible wire grills, and space-saving stainless cloth drying systems. Punctual visits, neat finishes, and honest pricing.
            </p>
            <div className="flex flex-col gap-2 mt-1 text-xs text-[#D1D5DB]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F57C00] shrink-0" aria-hidden="true" />
                <span>Punctual Visits: Mon - Sun (8:00 AM - 8:00 PM)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F57C00] font-bold">★ 5.0 Google Rating</span>
                <span>(32 Real Customer Reviews)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#F57C00]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Transparent Pricing", href: "/pricing" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Google Reviews", href: "/testimonials" },
                { label: "Completed Projects", href: "/projects" },
                { label: "Installation Gallery", href: "/gallery" },
                { label: "Bangalore Areas", href: "/areas" },
                { label: "Safety Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#D1D5DB] hover:text-[#F57C00] transition-colors duration-200 flex items-center gap-2 group py-0.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#F57C00] transition-colors" aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick View */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#F57C00]">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
                { label: "Child Safety Nets", href: "/services/children-safety-nets" },
                { label: "Pigeon Protection Nets", href: "/services/pigeon-safety-nets" },
                { label: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills" },
                { label: "Window Invisible Grills", href: "/services/window-invisible-grills" },
                { label: "Ceiling Cloth Drying Hangers", href: "/services/ceiling-cloth-hangers" },
                { label: "Balcony Cloth Hangers", href: "/services/balcony-cloth-hangers" },
                { label: "Wall Mounted Cloth Hangers", href: "/services/wall-mounted-cloth-hangers" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#D1D5DB] hover:text-[#F57C00] transition-colors duration-200 flex items-center gap-2 group py-0.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#F57C00] transition-colors" aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Exact GBP NAP) */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#F57C00]">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-[#D1D5DB]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F57C00] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <span className="font-bold text-white block">Office Address</span>
                  <span className="block text-xs leading-relaxed text-[#D1D5DB] mt-1">
                    868, 3rd Main Road, MES Road, Sharadamba Nagar, Muthyala Nagar, Gokula Extension, Mathikere, Bengaluru, Karnataka 560054
                  </span>
                  <a
                    href="https://maps.app.goo.gl/tjw2RZBQLBjJY1rE7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F57C00] hover:underline mt-1"
                  >
                    <Navigation className="w-3 h-3" aria-hidden="true" />
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F57C00] shrink-0 mt-1" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-bold text-white block">Phone Support</span>
                  <a
                    href="tel:+916281048162"
                    className="hover:text-[#F57C00] transition-colors text-white font-semibold flex items-center gap-1.5 py-0.5"
                    aria-label="Call +91 62810 48162"
                  >
                    <span>+91 62810 48162</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#F57C00] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <span className="font-bold text-white block">Email Inquiries</span>
                  <a href="mailto:info.annamayyasafetynets@gmail.com" className="hover:text-[#F57C00] transition-colors text-xs">
                    info.annamayyasafetynets@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* North Bangalore Primary Localities Local SEO Footer Links */}
        <div className="py-6 border-t border-[#323842] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-white font-bold shrink-0">
            <MapPin className="w-4 h-4 text-[#F57C00]" aria-hidden="true" />
            <span>Serving All Bangalore (Base: Mathikere):</span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3.5 gap-y-2 text-[#D1D5DB]">
            {[
              { name: "Mathikere", slug: "mathikere" },
              { name: "Yeshwanthpur", slug: "yeshwanthpur" },
              { name: "Malleshwaram", slug: "malleshwaram" },
              { name: "RT Nagar", slug: "rt-nagar" },
              { name: "Sadashivanagar", slug: "sadashivanagar" },
              { name: "Jalahalli", slug: "jalahalli" },
              { name: "Peenya", slug: "peenya" },
              { name: "Dasarahalli", slug: "dasarahalli" },
              { name: "Nandini Layout", slug: "nandini-layout" },
              { name: "Rajajinagar", slug: "rajajinagar" },
              { name: "Vidyaranya Pura", slug: "vidyaranyapura" },
              { name: "Hebbal", slug: "hebbal" },
              { name: "Sanjay Nagar", slug: "sanjay-nagar" },
              { name: "Yelahanka", slug: "yelahanka" },
              { name: "Whitefield", slug: "whitefield" },
              { name: "Koramangala", slug: "koramangala" },
              { name: "Indiranagar", slug: "indiranagar" },
              { name: "HSR Layout", slug: "hsr-layout" },
              { name: "Electronic City", slug: "electronic-city" },
            ].map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="hover:text-[#F57C00] transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 border-t border-[#323842]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {currentYear} Annamayya Safety Nets. All rights reserved. Based in Mathikere, Bengaluru.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
            <a
              href="https://maps.app.goo.gl/tjw2RZBQLBjJY1rE7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F57C00] hover:underline"
            >
              Google Business Profile
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
