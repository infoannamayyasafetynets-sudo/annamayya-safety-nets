"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";

const categories = [
  {
    id: "safety-nets",
    name: "Safety Net Solutions",
    subtitle: "High-Tensile Virgin UV-Stabilized Copolymer Netting",
    description:
      "Engineered for high-altitude balconies, child fall protection, and humane bird barriers across Mathikere and Bangalore.",
    icon: Shield,
    badgeColor: "bg-[#23272F]",
    services: [
      servicesData["balcony-safety-nets"],
      servicesData["children-safety-nets"],
      servicesData["pigeon-safety-nets"],
    ].filter(Boolean),
  },
  {
    id: "invisible-grills",
    name: "SS316 Marine Invisible Grills",
    subtitle: "High-Tensile Stainless Steel Cable Barriers with Unobstructed Views",
    description:
      "Maintain clear panoramic views while providing 400kg+ tensile breaking strength for balconies and French windows.",
    icon: Eye,
    badgeColor: "bg-[#F57C00]",
    services: [
      servicesData["balcony-invisible-grills"],
      servicesData["window-invisible-grills"],
    ].filter(Boolean),
  },
  {
    id: "cloth-hangers",
    name: "Cloth Drying Systems",
    subtitle: "SS304 Rustproof Ceiling Pulley Hoists & Wall Accordion Racks",
    description:
      "Reclaim 100% of your apartment balcony floor space with smooth dual-pulley hoist mechanisms and foldable racks.",
    icon: Settings,
    badgeColor: "bg-[#323842]",
    services: [
      servicesData["ceiling-cloth-hangers"],
      servicesData["balcony-cloth-hangers"],
      servicesData["wall-mounted-cloth-hangers"],
    ].filter(Boolean),
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC] scroll-mt-12" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFE8CC] text-[#23272F] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#F57C00]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F57C00]" />
            <span>Technician-Led Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#23272F] tracking-tight leading-tight">
            Safety Nets, Invisible Grills &amp; Cloth Hangers in Bangalore
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Based in Mathikere, we provide doorstep laser measurements, genuine SS304/SS316 marine-grade hardware, on-time installation, and honest quotes across all Bangalore localities.
          </p>

          {/* Quick Jump Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-[#F57C00] text-slate-700 hover:text-[#23272F] text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5 text-[#F57C00]" />
                  <span>{cat.name}</span>
                  <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded-full">
                    {cat.services.length}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* High-Converting Scrolling 20% OFF & 10 Years Warranty Animation */}
        <ServicePromoTicker />

        {/* Category Sections (All 18 cards displayed in order) */}
        <div className="space-y-20">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} id={cat.id} className="scroll-mt-24">
                {/* Category Header Bar */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#23272F] text-[#F57C00] flex items-center justify-center shrink-0 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-black text-[#23272F]">
                          {cat.name}
                        </h3>
                        <span className="bg-amber-100 text-amber-950 border border-amber-300 text-xs font-black px-2.5 py-0.5 rounded-full">
                          {cat.services.length} Services
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/services/${cat.id}`}
                    aria-label={`View all ${cat.name} services and pricing`}
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#23272F] hover:text-[#F57C00] transition-colors self-start md:self-auto"
                  >
                    <span>View {cat.name} Details</span>
                    <ArrowRight className="w-4 h-4 text-[#F57C00]" />
                  </Link>
                </div>

                {/* Service Cards Grid for this category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {cat.services.map((service, idx) => (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (idx % 3) * 0.05 }}
                      className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#F57C00] transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Card Image */}
                        <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                          <Image
                            src={service.image}
                            alt={`Annamayya Safety Nets - ${service.name} Installation in Bangalore, Karnataka`}
                            fill
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            quality={75}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/10 pointer-events-none" />

                          {/* Category Badge & 20% Discount */}
                          <div className="absolute top-3 left-3 bg-[#23272F]/90 backdrop-blur-xs text-[#FDE047] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-[#F57C00]" />
                            <span>{service.categoryName}</span>
                          </div>

                          <div className="absolute top-3 right-3 bg-[#F57C00] text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md animate-pulse flex items-center gap-1">
                            <Percent className="w-3 h-3" />
                            <span>Flat 20% OFF</span>
                          </div>

                          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#23272F] text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                            <Shield className="w-3 h-3 text-[#F57C00]" />
                            <span>10 Years Warranty</span>
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
                          <ul className="space-y-2 mb-6">
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
                      <div className="p-6 pt-0 flex flex-col sm:flex-row gap-2.5">
                        <Link
                          href={`/services/${service.slug}`}
                          className="flex-1 bg-[#23272F] hover:bg-[#F57C00] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-xs group/btn"
                        >
                          <span>Book (Save 20%)</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Link>
                        <a
                          href="tel:6281048162"
                          className="bg-[#F57C00]/15 hover:bg-[#F57C00] text-[#23272F] hover:text-white font-bold py-3 px-3.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
                          title="Call for immediate quote"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call</span>
                        </a>
                        <a
                          href={`https://wa.me/916281048162?text=Hi%20Annamayya%20Safety%20Nets,%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}%20installation%20in%20Bangalore.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-50 hover:bg-[#25D366] text-emerald-700 hover:text-white font-bold py-3 px-3.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
                          title="WhatsApp us"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Doorstep Inspection CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-[#23272F] to-[#323842] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[#FDE047] text-xs font-extrabold uppercase tracking-wider">
              Free Doorstep Service Across All Bangalore Localities
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
