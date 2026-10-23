"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Shield,
  Eye,
  Settings,
  ArrowRight,
  Sparkles,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { trackPhoneClick, trackWhatsAppClick } from "@/utils/analytics";

const safetyNetsServices = [
  { name: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
  { name: "Children Safety Nets", href: "/services/children-safety-nets" },
  { name: "Pet Safety Nets", href: "/services/pet-safety-nets" },
  { name: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
  { name: "Monkey Safety Nets", href: "/services/monkey-safety-nets" },
  { name: "Cricket Practice Nets", href: "/services/cricket-practice-nets" },
  { name: "Sports Netting", href: "/services/sports-nets" },
  { name: "Construction Safety Nets", href: "/services/construction-safety-nets" },
  { name: "Duct Area Safety Nets", href: "/services/duct-area-safety-nets" },
  { name: "Anti-Bird Spikes", href: "/services/anti-bird-spikes" },
  { name: "Mosquito Nets for Windows", href: "/services/mosquito-nets" },
];

const invisibleGrillsServices = [
  { name: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills" },
  { name: "Window Invisible Grills", href: "/services/window-invisible-grills" },
  { name: "Children Invisible Grills", href: "/services/children-invisible-grills" },
  { name: "Pet Invisible Grills", href: "/services/pet-invisible-grills" },
  { name: "Staircase & Duplex Grills", href: "/services/staircase-invisible-grills" },
];

const clothHangersServices = [
  { name: "Ceiling Cloth Drying Hangers", href: "/services/ceiling-cloth-hangers" },
  { name: "Balcony Cloth Drying Hangers", href: "/services/balcony-cloth-hangers" },
  { name: "Wall Mounted Cloth Hangers", href: "/services/wall-mounted-cloth-hangers" },
];

// Cleaned up desktop navigation links
const primaryNavLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", isMegaMenu: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Areas", href: "/areas" },
  {
    label: "Company",
    isDropdown: true,
    sublinks: [
      { label: "About Us", href: "/about", description: "Our Mathikere team & certified credentials" },
      { label: "Testimonials", href: "/testimonials", description: "5.0-star feedback from Bangalore homes" },
      { label: "Projects", href: "/projects", description: "Recent apartment & commercial installations" },
      { label: "Case Studies", href: "/case-studies", description: "Detailed high-rise balcony transformations" },
      { label: "Safety Blog", href: "/blog", description: "Safety tips, maintenance & buying guides" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuHoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const companyHoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
        setIsCompanyDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnterServices = () => {
    if (megaMenuHoverTimeout.current) clearTimeout(megaMenuHoverTimeout.current);
    setIsCompanyDropdownOpen(false);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveServices = () => {
    megaMenuHoverTimeout.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  const handleMouseEnterCompany = () => {
    if (companyHoverTimeout.current) clearTimeout(companyHoverTimeout.current);
    setIsMegaMenuOpen(false);
    setIsCompanyDropdownOpen(true);
  };

  const handleMouseLeaveCompany = () => {
    companyHoverTimeout.current = setTimeout(() => {
      setIsCompanyDropdownOpen(false);
    }, 200);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileCompanyOpen(false);
  };

  return (
    <>
      {/* Complete header sentinel for scroll-based detection */}
      <div
        id="complete-header-sentinel"
        className="absolute top-0 left-0 right-0 h-[96px] sm:h-[104px] pointer-events-none -z-50 invisible"
        aria-hidden="true"
      />

      {/* PART 1: TOP BAR (Charcoal #23272F with Vibrant Orange Accents) */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#23272F] text-white text-xs font-medium py-1.5 px-3 sm:px-6 shadow-sm border-b border-[#323842]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
          {/* Left: Phone number */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+916281048162"
              onClick={() => trackPhoneClick("navbar_top_bar_call")}
              className="flex items-center gap-1.5 hover:text-[#F57C00] transition-colors"
              aria-label="Call Annamayya Safety Nets"
            >
              <Phone className="w-3.5 h-3.5 text-[#F57C00] animate-pulse" />
              <span className="font-extrabold text-xs sm:text-sm text-white tracking-wide">+91 62810 48162</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-slate-300 bg-white/10 px-2 py-0.5 rounded-full">
              <MapPin className="w-3 h-3 text-[#F57C00]" />
              <span>Mathikere &amp; All Bangalore</span>
            </span>
          </div>

          {/* Center: Promotional Highlight */}
          <div className="hidden lg:flex items-center gap-2 text-[11px] font-bold text-white tracking-wide">
            <span className="bg-[#F57C00] text-slate-950 font-black px-2 py-0.5 rounded text-[10px] uppercase shadow-xs">
              Flat 20% OFF
            </span>
            <span className="text-amber-200">Limited Period Offer:</span>
            <span className="text-slate-100 font-semibold">10 Years Replacement Warranty | Free Doorstep Inspection</span>
          </div>

          {/* Right: Quick Quote & WhatsApp Badge */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <span className="flex sm:hidden items-center gap-1 bg-[#F57C00] text-slate-950 px-2 py-0.5 rounded text-[10px] font-black uppercase">
              20% OFF
            </span>
            <a
              href="https://wa.me/916281048162?text=Hi%20Annamayya%20Safety%20Nets%2C%20I%20would%20like%20to%20claim%20the%20Flat%2020%25%20Discount%20and%2010%20Years%20Warranty%20for%20safety%20nets%2Finvisible%20grills."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("navbar_top_bar_whatsapp")}
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-emerald-400 text-slate-950 px-2.5 py-0.5 rounded text-[11px] font-black shadow-xs transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping"></span>
              <span>WhatsApp Quote</span>
            </a>

            <a
              href="mailto:info.annamayyasafetynets@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#F57C00] transition-colors text-slate-300"
              aria-label="Email Us"
            >
              <Mail className="w-3.5 h-3.5 text-[#F57C00]" />
              <span className="truncate max-w-[180px] xl:max-w-none text-[11px]">info.annamayyasafetynets@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* PART 2 & 3: MAIN STICKY NAVBAR */}
      <header
        className={`fixed top-[33px] left-0 right-0 z-40 transition-all duration-300 ease-in-out bg-white border-b border-[#E5E7EB] ${
          isScrolled ? "shadow-md py-1.5 sm:py-2" : "py-2 sm:py-2.5"
        }`}
        ref={megaMenuRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LOGO - Premium Capsule Badge */}
            <Link
              href="/"
              className="flex items-center bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_10px_rgba(35,39,47,0.06)] hover:shadow-[0_4px_16px_rgba(35,39,47,0.14)] hover:border-[#F57C00]/40 transition-all duration-300 hover:scale-[1.01] p-1.5 sm:px-2.5 sm:py-1.5 group focus:outline-none focus:ring-2 focus:ring-[#F57C00]/40 shrink-0"
              aria-label="Annamayya Safety Nets Home"
            >
              <Image
                src="/images/logo/annamayya-safetynets-logo.webp"
                alt="Annamayya Safety Nets - Safety Nets & Invisible Grills Bangalore"
                width={2172}
                height={724}
                priority
                className="w-[125px] h-[38px] sm:w-[150px] sm:h-[44px] md:w-[172px] md:h-[48px] object-contain transition-transform duration-200"
              />
            </Link>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {primaryNavLinks.map((link) => {
                const isActive = pathname === link.href;

                // MEGA MENU FOR SERVICES
                if (link.isMegaMenu) {
                  const isServicesActive = pathname?.startsWith("/services");
                  return (
                    <div
                      key={link.label}
                      className="relative py-2 group"
                      onMouseEnter={handleMouseEnterServices}
                      onMouseLeave={handleMouseLeaveServices}
                    >
                      <button
                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                        className={`flex items-center gap-1 text-sm font-bold tracking-wide transition-colors cursor-pointer py-1 ${
                          isMegaMenuOpen || isServicesActive
                            ? "text-[#F57C00]"
                            : "text-[#23272F] hover:text-[#F57C00]"
                        }`}
                        aria-expanded={isMegaMenuOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isMegaMenuOpen ? "rotate-180 text-[#F57C00]" : "text-slate-400 group-hover:text-[#F57C00]"
                          }`}
                        />
                      </button>
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#F57C00] transition-all duration-300 ${
                          isMegaMenuOpen || isServicesActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>

                      {/* DESKTOP MEGA-MENU DROPDOWN */}
                      <AnimatePresence>
                        {isMegaMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="fixed left-0 right-0 top-[100%] w-full bg-white shadow-2xl border-t border-[#E5E7EB] py-7 px-4 sm:px-8 rounded-b-3xl z-50 pointer-events-auto"
                          >
                            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 text-left">
                              {/* COLUMN 1: Safety Nets (11 Services) */}
                              <div className="col-span-5 bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200">
                                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-200">
                                  <div className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-[#F57C00]" />
                                    <h3 className="text-sm font-extrabold text-[#23272F]">
                                      Safety Nets Solutions
                                    </h3>
                                  </div>
                                  <span className="text-[11px] font-bold bg-[#FFE8CC] text-[#23272F] px-2 py-0.5 rounded-full">
                                    {safetyNetsServices.length} Services
                                  </span>
                                </div>
                                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                                  {safetyNetsServices.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setIsMegaMenuOpen(false)}
                                      className="text-xs font-semibold text-slate-700 hover:text-[#F57C00] hover:translate-x-1 transition-all duration-200 py-1 flex items-center gap-1.5 group"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#F57C00] transition-colors shrink-0"></span>
                                      <span className="truncate">{item.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* COLUMN 2: Invisible Grills (5 Services) */}
                              <div className="col-span-4 bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200">
                                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-200">
                                  <div className="flex items-center gap-2">
                                    <Eye className="w-5 h-5 text-[#F57C00]" />
                                    <h3 className="text-sm font-extrabold text-[#23272F]">
                                      SS316 Invisible Grills
                                    </h3>
                                  </div>
                                  <span className="text-[11px] font-bold bg-[#FFE8CC] text-[#23272F] px-2 py-0.5 rounded-full">
                                    {invisibleGrillsServices.length} Services
                                  </span>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                  {invisibleGrillsServices.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setIsMegaMenuOpen(false)}
                                      className="text-xs font-semibold text-slate-700 hover:text-[#F57C00] hover:translate-x-1 transition-all duration-200 py-1 flex items-center gap-1.5 group"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#F57C00] transition-colors shrink-0"></span>
                                      <span>{item.name}</span>
                                    </Link>
                                  ))}
                                </div>

                                <div className="mt-4 pt-3 border-t border-slate-200">
                                  <Link
                                    href="/services/invisible-grills"
                                    onClick={() => setIsMegaMenuOpen(false)}
                                    className="text-xs font-extrabold text-[#F57C00] hover:text-[#E65100] flex items-center gap-1"
                                  >
                                    <span>Explore Invisible Grills Hub</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>
                              </div>

                              {/* COLUMN 3: Cloth Hangers (3 Services) + Quick Consultation Card */}
                              <div className="col-span-3 flex flex-col justify-between">
                                <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200 mb-3">
                                  <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-200">
                                    <div className="flex items-center gap-1.5">
                                      <Settings className="w-4 h-4 text-[#F57C00]" />
                                      <h3 className="text-xs font-extrabold text-[#23272F]">
                                        Cloth Drying Systems
                                      </h3>
                                    </div>
                                    <span className="text-[10px] font-bold bg-[#FFE8CC] text-[#23272F] px-2 py-0.5 rounded-full">
                                      {clothHangersServices.length}
                                    </span>
                                  </div>
                                  <div className="flex flex-col gap-1.5">
                                    {clothHangersServices.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMegaMenuOpen(false)}
                                        className="text-xs font-semibold text-slate-700 hover:text-[#F57C00] hover:translate-x-1 transition-all duration-200 py-1 flex items-center gap-1.5 group"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#F57C00] transition-colors shrink-0"></span>
                                        <span>{item.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Free Inspection Consultation Card */}
                                <div className="bg-[#FFE8CC] p-4 rounded-2xl border border-[#F2D2BD] flex flex-col gap-2">
                                  <div className="flex items-center gap-1.5 text-[10px] font-black text-[#23272F] uppercase tracking-wider">
                                    <Sparkles className="w-3 h-3 text-[#F57C00]" />
                                    <span>Free On-Site Visit</span>
                                  </div>
                                  <h4 className="text-xs font-bold text-[#23272F] leading-snug">
                                    Need laser measurements for your balcony?
                                  </h4>
                                  <p className="text-[11px] text-slate-600 leading-tight">
                                    Free inspection across Bangalore with physical material samples.
                                  </p>
                                  <Link
                                    href="/services"
                                    onClick={() => setIsMegaMenuOpen(false)}
                                    className="mt-1 bg-[#23272F] hover:bg-[#F57C00] text-white font-extrabold shadow-sm rounded-xl text-xs py-2 px-3 flex items-center justify-center gap-1.5 transition-all"
                                  >
                                    <span>View All 19 Services</span>
                                    <ArrowRight className="w-3 h-3" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // COMPANY DROPDOWN (About, Testimonials, Projects, Case Studies, Blog)
                if (link.isDropdown && link.sublinks) {
                  const isCompanyActive = link.sublinks.some((sub) => pathname === sub.href);
                  return (
                    <div
                      key={link.label}
                      className="relative py-2 group"
                      onMouseEnter={handleMouseEnterCompany}
                      onMouseLeave={handleMouseLeaveCompany}
                    >
                      <button
                        onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                        className={`flex items-center gap-1 text-sm font-bold tracking-wide transition-colors cursor-pointer py-1 ${
                          isCompanyDropdownOpen || isCompanyActive
                            ? "text-[#F57C00]"
                            : "text-[#23272F] hover:text-[#F57C00]"
                        }`}
                        aria-expanded={isCompanyDropdownOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isCompanyDropdownOpen ? "rotate-180 text-[#F57C00]" : "text-slate-400 group-hover:text-[#F57C00]"
                          }`}
                        />
                      </button>
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#F57C00] transition-all duration-300 ${
                          isCompanyDropdownOpen || isCompanyActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isCompanyDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 top-[100%] w-72 bg-white shadow-xl rounded-2xl border border-slate-200 p-2 z-50"
                          >
                            <div className="space-y-1">
                              {link.sublinks.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => setIsCompanyDropdownOpen(false)}
                                  className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                >
                                  <div className="text-xs font-bold text-[#23272F] group-hover/item:text-[#F57C00] transition-colors">
                                    {sub.label}
                                  </div>
                                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                                    {sub.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // STANDARD NAV LINK
                return (
                  <div key={link.label} className="relative py-2 group">
                    <Link
                      href={link.href || "/"}
                      className={`text-sm tracking-wide transition-colors duration-200 py-1 ${
                        isActive ? "text-[#F57C00] font-black" : "text-[#23272F] hover:text-[#F57C00] font-bold"
                      }`}
                    >
                      {link.label}
                    </Link>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#F57C00] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </div>
                );
              })}
            </nav>

            {/* RIGHT SIDE BUTTONS (Call & WhatsApp) */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href="tel:+916281048162"
                onClick={() => trackPhoneClick("navbar_main_call")}
                className="bg-[#23272F] hover:bg-[#F57C00] text-white font-extrabold flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs shadow-xs hover:shadow-md transition-all cursor-pointer"
                aria-label="Call Now"
              >
                <Phone className="w-3.5 h-3.5 text-[#F57C00]" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/916281048162?text=Hi%20Annamayya%20Safety%20Nets%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("navbar_main_whatsapp")}
                className="flex items-center gap-1.5 bg-[#25D366] hover:bg-emerald-400 text-slate-950 font-black px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition-all text-xs cursor-pointer"
                aria-label="WhatsApp Us"
              >
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-pulse"></span>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-[#23272F] hover:bg-[#F8FAFC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F57C00]/40"
                aria-label={isMobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav-drawer"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[92px] sm:top-[98px] left-0 right-0 z-40 bg-white border-b border-[#E5E7EB] shadow-2xl lg:hidden max-h-[calc(100vh-92px)] sm:max-h-[calc(100vh-98px)] overflow-y-auto"
          >
            <div className="px-4 py-5 space-y-4">
              {/* Brand Header inside Mobile Drawer */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <span className="text-xs font-black text-[#23272F]">Annamayya Safety Nets</span>
                <span className="text-[11px] font-bold bg-[#F57C00]/10 text-[#23272F] border border-[#F57C00]/30 px-2.5 py-1 rounded-full">
                  ★ 5.0 (32 Google Reviews)
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                {/* Home */}
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className={`py-2 text-sm font-bold transition-colors ${
                    pathname === "/" ? "text-[#F57C00]" : "text-[#23272F]"
                  }`}
                >
                  Home
                </Link>

                {/* Services Accordion with all 19 services */}
                <div className="py-1">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    aria-expanded={mobileServicesOpen}
                    className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#23272F]"
                  >
                    <div className="flex items-center gap-2">
                      <span>Services (All 19)</span>
                      <span className="text-[10px] bg-[#FFE8CC] text-[#23272F] px-2 py-0.5 rounded-full font-extrabold">
                        19
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180 text-[#F57C00]" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-3 py-2 space-y-3 border-l-2 border-[#F57C00] my-1 bg-[#F8FAFC] rounded-r-xl p-3">
                      <div>
                        <div className="font-extrabold text-[11px] text-[#F57C00] uppercase tracking-wider mb-1 flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          <span>Safety Nets ({safetyNetsServices.length})</span>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          {safetyNetsServices.map((s) => (
                            <Link
                              key={s.name}
                              href={s.href}
                              onClick={closeMobileMenu}
                              className="text-xs font-medium text-slate-700 hover:text-[#F57C00] py-0.5"
                            >
                              • {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200">
                        <div className="font-extrabold text-[11px] text-[#F57C00] uppercase tracking-wider mb-1 flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>Invisible Grills ({invisibleGrillsServices.length})</span>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          {invisibleGrillsServices.map((s) => (
                            <Link
                              key={s.name}
                              href={s.href}
                              onClick={closeMobileMenu}
                              className="text-xs font-medium text-slate-700 hover:text-[#F57C00] py-0.5"
                            >
                              • {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200">
                        <div className="font-extrabold text-[11px] text-[#F57C00] uppercase tracking-wider mb-1 flex items-center gap-1">
                          <Settings className="w-3 h-3" />
                          <span>Cloth Drying Systems ({clothHangersServices.length})</span>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          {clothHangersServices.map((s) => (
                            <Link
                              key={s.name}
                              href={s.href}
                              onClick={closeMobileMenu}
                              className="text-xs font-medium text-slate-700 hover:text-[#F57C00] py-0.5"
                            >
                              • {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/services"
                          onClick={closeMobileMenu}
                          className="inline-flex items-center gap-1 text-xs font-black text-[#F57C00] hover:text-[#23272F]"
                        >
                          <span>Explore All 19 Services &amp; Pricing Hub</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pricing */}
                <Link
                  href="/pricing"
                  onClick={closeMobileMenu}
                  className={`py-2 text-sm font-bold transition-colors ${
                    pathname === "/pricing" ? "text-[#F57C00]" : "text-[#23272F]"
                  }`}
                >
                  Pricing
                </Link>

                {/* Gallery */}
                <Link
                  href="/gallery"
                  onClick={closeMobileMenu}
                  className={`py-2 text-sm font-bold transition-colors ${
                    pathname === "/gallery" ? "text-[#F57C00]" : "text-[#23272F]"
                  }`}
                >
                  Gallery
                </Link>

                {/* Areas */}
                <Link
                  href="/areas"
                  onClick={closeMobileMenu}
                  className={`py-2 text-sm font-bold transition-colors ${
                    pathname === "/areas" ? "text-[#F57C00]" : "text-[#23272F]"
                  }`}
                >
                  Service Areas (Bangalore)
                </Link>

                {/* Company Accordion */}
                <div className="py-1">
                  <button
                    type="button"
                    onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                    aria-expanded={mobileCompanyOpen}
                    className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#23272F]"
                  >
                    <span>Company</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileCompanyOpen ? "rotate-180 text-[#F57C00]" : ""}`}
                    />
                  </button>
                  {mobileCompanyOpen && (
                    <div className="pl-3 py-2 space-y-2 border-l-2 border-[#F57C00] my-1 bg-[#F8FAFC] rounded-r-xl p-3">
                      <Link href="/about" onClick={closeMobileMenu} className="block text-xs font-semibold text-slate-700 py-1">
                        About Us
                      </Link>
                      <Link href="/testimonials" onClick={closeMobileMenu} className="block text-xs font-semibold text-slate-700 py-1">
                        Testimonials
                      </Link>
                      <Link href="/projects" onClick={closeMobileMenu} className="block text-xs font-semibold text-slate-700 py-1">
                        Projects
                      </Link>
                      <Link href="/case-studies" onClick={closeMobileMenu} className="block text-xs font-semibold text-slate-700 py-1">
                        Case Studies
                      </Link>
                      <Link href="/blog" onClick={closeMobileMenu} className="block text-xs font-semibold text-slate-700 py-1">
                        Safety Blog
                      </Link>
                    </div>
                  )}
                </div>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className={`py-2 text-sm font-bold transition-colors ${
                    pathname === "/contact" ? "text-[#F57C00]" : "text-[#23272F]"
                  }`}
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile Actions: Clean, non-redundant CTA buttons */}
              <div className="pt-4 border-t border-[#E5E7EB] flex flex-col gap-2.5">
                <a
                  href="tel:+916281048162"
                  onClick={() => {
                    trackPhoneClick("navbar_mobile_drawer_call");
                    closeMobileMenu();
                  }}
                  className="bg-[#23272F] hover:bg-[#F57C00] text-white py-3 text-center rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#F57C00]" />
                  <span>Call +91 62810 48162</span>
                </a>
                <a
                  href="https://wa.me/916281048162?text=Hi%20Annamayya%20Safety%20Nets%2C%20I%20would%20like%20to%20request%20a%20free%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick("navbar_mobile_drawer_whatsapp");
                    closeMobileMenu();
                  }}
                  className="bg-[#25D366] text-slate-950 py-3 text-center rounded-xl text-sm font-black flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="bg-[#FFE8CC] text-[#23272F] py-2.5 text-center rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-[#F57C00]/30"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#F57C00]" />
                  <span>Book Free Doorstep Inspection</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
