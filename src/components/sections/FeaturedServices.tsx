"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
  Phone,
  MessageSquare,
  Shield,
  Eye,
  Settings,
  Percent,
  Search,
  CheckCircle2,
} from "lucide-react";
import { servicesData, ServiceDetail } from "@/utils/servicesData";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";

type CategoryFilter = "all" | "safety-nets" | "invisible-grills" | "cloth-hangers";

const categoryMeta = {
  "safety-nets": {
    name: "Safety Nets",
    title: "High-Tensile Safety Net Solutions",
    subtitle: "100% Virgin UV-Stabilized Copolymer Netting for High-Rise Apartments",
    icon: Shield,
    badgeColor: "bg-[#23272F]",
  },
  "invisible-grills": {
    name: "Invisible Grills",
    title: "SS316 Marine Invisible Grills",
    subtitle: "High-Tensile Stainless Wire Cable Systems with Unobstructed Panoramic Views",
    icon: Eye,
    badgeColor: "bg-[#F57C00]",
  },
  "cloth-hangers": {
    name: "Cloth Hangers",
    title: "Cloth Drying Systems",
    subtitle: "SS304 Rustproof Ceiling Pulley Hoists & Wall Accordion Racks",
    icon: Settings,
    badgeColor: "bg-[#323842]",
  },
};

// Filter out alias duplicates like cricket-nets if cricket-practice-nets exists
const allServicesList: ServiceDetail[] = Object.values(servicesData).filter(
  (s, idx, arr) => arr.findIndex((item) => item.slug === s.slug) === idx && s.slug !== "cricket-nets"
);

export default function FeaturedServices() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered services based on tab and optional search query
  const filteredServices = useMemo(() => {
    return allServicesList.filter((service) => {
      const matchesTab = activeTab === "all" || service.category === activeTab;
      const matchesSearch =
        searchQuery.trim() === "" ||
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const safetyNetsCount = allServicesList.filter((s) => s.category === "safety-nets").length;
  const invisibleGrillsCount = allServicesList.filter((s) => s.category === "invisible-grills").length;
  const clothHangersCount = allServicesList.filter((s) => s.category === "cloth-hangers").length;

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC] scroll-mt-12" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FFE8CC] text-[#23272F] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#F57C00]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F57C00]" />
            <span>Complete Doorstep Solutions in Bangalore</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#23272F] tracking-tight leading-tight">
            All Safety Nets, Invisible Grills &amp; Cloth Drying Systems
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Headquartered in Mathikere, we install certified balcony nets, SS316 marine invisible grills, and ceiling cloth drying systems across every Bangalore neighborhood. Free laser site inspection, genuine 10-year warranty, and honest per-sq-ft pricing.
          </p>
        </div>

        {/* High-Converting Scrolling 20% OFF & 10 Years Warranty Animation */}
        <div className="mb-10">
          <ServicePromoTicker />
        </div>

        {/* Interactive Filter Tabs & Quick Search Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "all"
                  ? "bg-[#23272F] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <span>All Services</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                  activeTab === "all" ? "bg-[#F57C00] text-slate-950" : "bg-white text-slate-600 border border-slate-200"
                }`}
              >
                {allServicesList.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("safety-nets")}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "safety-nets"
                  ? "bg-[#23272F] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-[#F57C00]" />
              <span>Safety Nets</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                  activeTab === "safety-nets" ? "bg-[#F57C00] text-slate-950" : "bg-white text-slate-600 border border-slate-200"
                }`}
              >
                {safetyNetsCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("invisible-grills")}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "invisible-grills"
                  ? "bg-[#23272F] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[#F57C00]" />
              <span>Invisible Grills</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                  activeTab === "invisible-grills" ? "bg-[#F57C00] text-slate-950" : "bg-white text-slate-600 border border-slate-200"
                }`}
              >
                {invisibleGrillsCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("cloth-hangers")}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "cloth-hangers"
                  ? "bg-[#23272F] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <Settings className="w-3.5 h-3.5 text-[#F57C00]" />
              <span>Cloth Hangers</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                  activeTab === "cloth-hangers" ? "bg-[#F57C00] text-slate-950" : "bg-white text-slate-600 border border-slate-200"
                }`}
              >
                {clothHangersCount}
              </span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F57C00]/40 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Tab Status Bar if filtered */}
        {activeTab !== "all" && (
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#23272F] text-[#F57C00] flex items-center justify-center shrink-0">
                {activeTab === "safety-nets" && <Shield className="w-5 h-5" />}
                {activeTab === "invisible-grills" && <Eye className="w-5 h-5" />}
                {activeTab === "cloth-hangers" && <Settings className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#23272F]">
                  {categoryMeta[activeTab].title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {categoryMeta[activeTab].subtitle}
                </p>
              </div>
            </div>
            <Link
              href={`/services/${activeTab}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F57C00] hover:text-[#E65100] transition-colors self-start sm:self-center"
            >
              <span>View Category Details Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {/* Services Grid (Shows all matching services) */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-600 text-sm font-semibold">No services found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveTab("all");
              }}
              className="mt-3 px-4 py-2 bg-[#F57C00] text-slate-950 font-bold rounded-xl text-xs hover:bg-[#FF9800] transition-all cursor-pointer"
            >
              Reset Search &amp; Show All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => (
                <motion.div
                  key={service.slug}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: (idx % 6) * 0.03 }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#F57C00] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={service.image}
                        alt={`Annamayya Safety Nets - ${service.name} in Bangalore`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10 pointer-events-none" />

                      {/* Category Badge & 20% Discount */}
                      <div className="absolute top-3 left-3 bg-[#23272F]/90 backdrop-blur-xs text-[#FDE047] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#F57C00]" />
                        <span>{service.categoryName}</span>
                      </div>

                      <div className="absolute top-3 right-3 bg-[#F57C00] text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                        <Percent className="w-3 h-3" />
                        <span>20% OFF</span>
                      </div>

                      <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#23272F] text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#F57C00]" />
                        <span>10 Years Warranty</span>
                      </div>

                      <div className="absolute bottom-3 right-3 bg-emerald-600/90 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-xs">
                        Free Inspection
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#F57C00] transition-colors leading-snug">
                        <Link href={`/services/${service.slug}`}>
                          {service.name}
                        </Link>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                        {service.description}
                      </p>

                      {/* 3 Key Benefits */}
                      <ul className="space-y-1.5 mb-4">
                        {service.benefits.slice(0, 3).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                            <Check className="w-3.5 h-3.5 text-[#F57C00] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-0 flex flex-col sm:flex-row gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex-1 bg-[#23272F] hover:bg-[#F57C00] text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs group/btn"
                    >
                      <span>Book (Save 20%)</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                    <a
                      href="tel:6281048162"
                      className="bg-[#F57C00]/15 hover:bg-[#F57C00] text-[#23272F] hover:text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
                      title="Call for immediate quote"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call</span>
                    </a>
                    <a
                      href={`https://wa.me/916281048162?text=Hi%20Annamayya%20Safety%20Nets,%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}%20installation%20in%20Bangalore.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-50 hover:bg-[#25D366] text-emerald-700 hover:text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
                      title="WhatsApp us"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Quick Doorstep Inspection CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#23272F] to-[#323842] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[#FDE047] text-xs font-extrabold uppercase tracking-wider">
              Doorstep Service Across All Bangalore Localities
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-2">
              Need a Custom Measurement for Your Balcony or Windows?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Our technicians arrive at your home with laser measurement tools and physical samples. Get a confirmed quotation on the spot with zero obligation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:6281048162"
              className="bg-[#F57C00] hover:bg-[#FF9800] text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call 62810 48162</span>
            </a>
            <a
              href="https://wa.me/916281048162?text=Hi%20Annamayya%20Safety%20Nets,%20I%20would%20like%20to%20book%20a%20free%20doorstep%20measurement%20in%20Bangalore."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-emerald-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
