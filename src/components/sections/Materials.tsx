"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Sparkles } from "lucide-react";

interface Material {
  id: number;
  name: string;
  specs: string[];
  image: string;
}

const materials: Material[] = [
  {
    id: 1,
    name: "UV-Stabilized Virgin HDPE Copolymer Netting",
    image: "/images/main-images/annamayya-safetynets-mathikere.webp",
    specs: [
      "100% Virgin High-Density Polyethylene with UV stabilizers",
      "Calibrated 25mm to 30mm square safety matrix",
      "Dynamic knot-breaking resistance exceeding 140kg",
      "Resistant to high solar exposure and heavy monsoon rains",
    ],
  },
  {
    id: 2,
    name: "Marine-Grade SS316 Invisible Grill Cables",
    image: "/images/main-images/annamayya-grills-mathikere.webp",
    specs: [
      "Aerospace-grade 7x7 core SS316 marine alloy",
      "Over 400kg tensile breaking threshold per cable",
      "Transparent protective nylon sheath prevents wire cuts",
      "Impervious to rust, moisture, and outdoor weathering",
    ],
  },
  {
    id: 3,
    name: "SS304 Rustproof Stainless Cloth Drying Tubes",
    image: "/images/main-images/annamayya-ceiling-cloth-hangers-mathikere.webp",
    specs: [
      "Certified non-magnetic SS304 stainless steel",
      "Individual dual-pulley nylon wheel mechanisms",
      "Supports 5kg to 8kg of wet laundry per rod",
      "Will never rust, bend, or stain fine white fabrics",
    ],
  },
  {
    id: 4,
    name: "Child & Pet High-Tenacity Fall Mesh",
    image: "/images/services/annamayya-child-mathikere.webp",
    specs: [
      "Multi-filament braided knot reinforcement",
      "Smooth non-abrasive texture safe for toddler play",
      "Translucent design preserving outdoor daylight",
      "Tight anchor pitch eliminating railing gaps",
    ],
  },
  {
    id: 5,
    name: "Architectural Aluminum Mounting Tracks",
    image: "/images/services/annamayya-invisible-grills-real-mathikere.webp",
    specs: [
      "Heavy-gauge 6063-T6 architectural extruded aluminum",
      "Powder-coated finish matching apartment color schemes",
      "Concealed tamper-resistant screw cap profile",
      "High rigidity to prevent cable deflection under load",
    ],
  },
  {
    id: 6,
    name: "Humane Balcony Bird Deterrence Netting",
    image: "/images/main-images/annamayya-building-duct-pigeon-netting-mathikere.webp",
    specs: [
      "Discreet bird exclusion aperture",
      "Humane physical barrier that prevents roosting",
      "Lightweight monofilament with high tear resistance",
      "Weather-treated for a 10-year outdoor lifespan",
    ],
  },
];

export default function Materials() {
  return (
    <section className="bg-[#FFFFFF] py-24 scroll-mt-12" id="materials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-[#FFE8CC] text-[#23272F] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider self-center border border-[#F57C00]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F57C00]" />
            <span>Material Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#23272F] tracking-tight leading-tight">
            Certified Hardware &amp; Weather-Proof Components
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We never compromise on metallurgy or polymer density. Every component installed by Annamayya Safety Nets is engineered to withstand Bangalore&apos;s weather conditions for over 10 years.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#F57C00] transition-all duration-300 flex flex-col"
            >
              {/* Material Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={`Annamayya Safety Nets - ${item.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white tracking-wide">
                  Grade Verified
                </span>
              </div>

              {/* Specs Body */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#23272F] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {item.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#F57C00] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
