"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Eye, Settings, ArrowRight } from "lucide-react";

interface Category {
  id: number;
  name: string;
  count: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Safety Net Solutions",
    count: "11 Safety Net Solutions",
    image: "/images/main-images/annamayya-safetynets-mathikere.webp",
    icon: <Shield className="w-6 h-6 text-white" />,
    description: "Fortify balconies, stair voids, and building shafts with certified UV-treated virgin polymer netting. Punctual technician visits, neat edge finishing, and honest per-sq-ft pricing.",
    slug: "safety-nets",
  },
  {
    id: 2,
    name: "SS316 Invisible Grills",
    count: "5 Invisible Grill Systems",
    image: "/images/main-images/annamayya-grills-mathikere.webp",
    icon: <Eye className="w-6 h-6 text-white" />,
    description: "Maintain 100% panoramic outdoor views while securing balconies and French windows with marine SS316 stainless wire cables tested to 400kg+ tensile breaking load.",
    slug: "invisible-grills",
  },
  {
    id: 3,
    name: "Cloth Drying Systems",
    count: "3 Drying Systems",
    image: "/images/main-images/annamayya-ceiling-cloth-hangers-mathikere.webp",
    icon: <Settings className="w-6 h-6 text-white" />,
    description: "Reclaim 100% of balcony floor space with smooth individual dual-pulley stainless steel ceiling hoists and folding wall-mounted accordion drying racks.",
    slug: "cloth-hangers",
  },
];

export default function ServiceCategories() {
  return (
    <section id="services" className="bg-[#FFFFFF] py-24 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#23272F] bg-[#FFE8CC] border border-[#F57C00]/30 px-3.5 py-1.5 rounded-full inline-block self-center">
            Our Core Verticals
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#23272F] tracking-tight leading-tight">
            High-Altitude Protection &amp; Balcony Space Optimization
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Headquartered in Mathikere, Annamayya Safety Nets specializes in three core categories engineered for modern Bangalore apartments.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#F57C00] transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <Image
                  src={cat.image}
                  alt={`Annamayya Safety Nets - ${cat.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Category Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-[#23272F] flex items-center justify-center shadow-lg border border-white/20">
                  {cat.icon}
                </div>

                {/* Service Count Badge */}
                <span className="absolute bottom-4 left-4 text-xs font-black uppercase tracking-wider text-white bg-[#F57C00] px-3 py-1 rounded-full shadow-sm">
                  {cat.count}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#23272F] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {cat.description}
                  </p>
                </div>

                <Link
                  href={`/services/${cat.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#23272F] group-hover:text-[#F57C00] transition-colors mt-2"
                >
                  <span>Explore {cat.name}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
