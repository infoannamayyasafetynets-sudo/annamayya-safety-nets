import Link from "next/link";
import Image from "next/image";
import { Shield, Eye, Settings, ArrowRight, Home } from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Nets, Invisible Grills & Cloth Hangers in Bangalore | Annamayya Safety Nets",
  description:
    "Explore certified balcony safety nets, marine-grade SS316 invisible grills, and ceiling cloth drying hangers from Annamayya Safety Nets based in Mathikere, Bangalore.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Annamayya Safety Nets Mathikere, Bangalore",
    description:
      "Explore certified balcony safety nets, marine SS316 invisible grills, and ceiling cloth drying hangers by Annamayya Safety Nets across Bangalore.",
    url: "https://annamayyasafetynets.in/services",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Annamayya Safety Nets Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Annamayya Safety Nets Mathikere, Bangalore",
    description:
      "Balcony safety nets, SS316 invisible grills, and stainless cloth drying systems across Mathikere, Yeshwanthpur, Malleshwaram, Hebbal, and all Bangalore.",
    images: ["/images/og-image.webp"],
  },
};

export default function ServicesPage() {
  const servicesList = Object.values(servicesData).filter(
    (s, idx, arr) => arr.findIndex((item) => item.slug === s.slug) === idx && s.slug !== "cricket-nets"
  );
  const safetyNets = servicesList.filter((s) => s.category === "safety-nets");
  const invisibleGrills = servicesList.filter((s) => s.category === "invisible-grills");
  const clothHangers = servicesList.filter((s) => s.category === "cloth-hangers");

  const categories = [
    {
      id: "safety-nets",
      name: `Safety Nets (${safetyNets.length} Solutions)`,
      icon: <Shield className="w-5 h-5 text-[#F57C00]" />,
      description: "Custom-fitted, high-tensile HDPE safety nets for balcony fall protection, toddler security, and humane pigeon barriers.",
      items: safetyNets,
    },
    {
      id: "invisible-grills",
      name: `Invisible Grills (${invisibleGrills.length} Solutions)`,
      icon: <Eye className="w-5 h-5 text-[#F57C00]" />,
      description: "Sleek marine-grade SS316 stainless wire cable systems for high-rise balconies and windows with 100% unobstructed views.",
      items: invisibleGrills,
    },
    {
      id: "cloth-hangers",
      name: `Cloth Drying Hangers (${clothHangers.length} Solutions)`,
      icon: <Settings className="w-5 h-5 text-[#F57C00]" />,
      description: "Space-saving SS304 rustproof ceiling pulley hoists and folding wall-mounted accordion racks that keep balcony floors clear.",
      items: clothHangers,
    },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#F57C00] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Services</span>
        </nav>

        {/* Header */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#23272F] bg-[#FFE8CC] px-3.5 py-1.5 rounded-full inline-block self-start border border-[#F57C00]/30 shadow-xs">
            Doorstep Services in Bangalore
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Safety Nets, Invisible Grills &amp; Cloth Drying Hangers
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Headquartered in Mathikere, Annamayya Safety Nets offers technician-led installations across Bangalore. We ensure on-time visits, clean anchor finish, and honest quotes on every job.
          </p>
        </div>

        {/* Promo Ticker */}
        <div className="mb-10">
          <ServicePromoTicker />
        </div>

        {/* Category Jump Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#F57C00] text-slate-800 text-xs font-bold shadow-xs hover:shadow-md transition-all"
            >
              <span>{cat.name}</span>
            </a>
          ))}
        </div>

        {/* Category Blocks */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id} className="scroll-mt-28" id={category.id}>
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#FFE8CC] rounded-xl border border-[#F57C00]/20">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{category.name}</h2>
                    <p className="text-xs text-slate-500 mt-0.5">{category.description}</p>
                  </div>
                </div>
                <Link
                  href={`/services/${category.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F57C00] hover:text-[#E65100] transition-colors self-start sm:self-center"
                >
                  <span>Explore Category Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service) => (
                  <div
                    key={service.slug}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#F57C00] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Thumbnail */}
                      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                        <Image
                          src={service.image}
                          alt={`Annamayya Safety Nets - ${service.name}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-3 left-4 text-[10px] font-black uppercase text-white bg-[#F57C00] px-2.5 py-0.5 rounded-md shadow-xs">
                          {service.categoryName}
                        </span>
                        <span className="absolute top-3 right-3 text-[10px] font-black uppercase text-slate-950 bg-amber-300 px-2 py-0.5 rounded shadow-xs">
                          Flat 20% OFF
                        </span>
                        <span className="absolute bottom-3 right-3 text-[10px] font-extrabold text-white bg-[#23272F]/90 px-2 py-0.5 rounded shadow-xs">
                          10 Yr Warranty
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#F57C00] transition-colors mb-2">
                          <Link href={`/services/${service.slug}`}>
                            {service.name}
                          </Link>
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 pt-0 flex flex-col gap-2.5 border-t border-slate-100 mt-2">
                      <div className="flex items-center justify-between pt-2">
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-xs font-bold text-[#23272F] group-hover:text-[#F57C00] transition-colors flex items-center gap-1"
                        >
                          <span>Full Specs &amp; Pricing</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          Free Site Visit
                        </span>
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <a
                          href="tel:6281048162"
                          className="flex-1 bg-[#23272F] hover:bg-[#F57C00] text-white text-xs font-bold py-2 rounded-xl text-center transition-colors shadow-xs"
                        >
                          Call Now
                        </a>
                        <a
                          href={`https://wa.me/916281048162?text=Hi%20Annamayya%20Safety%20Nets,%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}%20installation%20in%20Bangalore.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#25D366] hover:bg-emerald-400 text-slate-950 text-xs font-black py-2 rounded-xl text-center transition-colors shadow-xs"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
