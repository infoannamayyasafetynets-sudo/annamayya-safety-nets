"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, ArrowRight, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import { areasList, primaryClusterSlugs } from "@/utils/areasData";

export default function ServiceAreas() {
  // Show the 14 primary North Bangalore cluster areas
  const primaryAreas = areasList.filter((a) => primaryClusterSlugs.includes(a.slug));

  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-24 scroll-mt-12" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Info Text (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#23272F] bg-white border border-[#E5E7EB] px-3.5 py-1.5 rounded-full self-start shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#F57C00]" />
              <span>North Bangalore Specialist</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#23272F] tracking-tight leading-tight">
              Based in Mathikere, Serving All of Bangalore
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              With our central workshop and technician base on MES Road, Mathikere, we provide rapid same-day doorstep measurement, physical material samples, and clean installations across Mathikere, Yeshwanthpur, Malleshwaram, Hebbal, and all Bangalore neighborhoods.
            </p>
            <div className="flex items-center gap-3 text-[#23272F] text-xs sm:text-sm font-bold mt-1">
              <Globe className="w-4 h-4 text-[#F57C00]" />
              <span>Punctual Doorstep Visits &amp; Honest Quotes</span>
            </div>
            <div className="pt-2">
              <Link
                href="/areas"
                className="inline-flex items-center gap-2 bg-[#23272F] hover:bg-[#F57C00] text-white text-xs font-bold px-6 py-3 rounded-full transition-all shadow-md group cursor-pointer"
              >
                <span>View All Bangalore Coverage Areas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Localities Cards Grid (Right) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Primary North Bangalore Cluster
              </span>
              <span className="text-xs text-[#F57C00] font-bold">
                14 Dedicated Hubs
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {primaryAreas.map((area, index) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.2, delay: (index % 4) * 0.04 }}
                >
                  <Link
                    href={`/areas/${area.slug}`}
                    className={`flex flex-col justify-between p-4 border rounded-2xl transition-all duration-300 group shadow-2xs h-full ${
                      area.slug === "mathikere"
                        ? "bg-[#FFE8CC]/40 border-[#F57C00]"
                        : "bg-[#F8FAFC]/80 hover:bg-[#FFE8CC] border-[#E5E7EB] hover:border-[#F57C00]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <MapPin className="w-4 h-4 text-[#23272F] group-hover:text-[#F57C00] shrink-0 transition-colors" />
                        <span className="text-sm font-black text-slate-800 group-hover:text-[#23272F] transition-colors">
                          {area.name}
                        </span>
                        {area.slug === "mathikere" && (
                          <span className="text-[10px] bg-[#F57C00] text-white px-2 py-0.5 rounded-full font-black">
                            HQ Base
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-600 group-hover:text-slate-800 leading-snug transition-colors line-clamp-2">
                        {area.tagline}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-200/60 text-[11px] font-bold">
                      <span className="flex items-center gap-1 text-slate-500 font-medium">
                        <Clock className="w-3 h-3 text-[#F57C00]" />
                        <span>Punctual Visit</span>
                      </span>
                      <span className="text-[#23272F] group-hover:text-[#F57C00] flex items-center gap-1 transition-colors">
                        <span>View Area</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
                Serving Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, and across Bangalore.
              </span>
              <Link
                href="/areas"
                className="text-xs font-bold text-[#23272F] hover:text-[#F57C00] flex items-center gap-1 shrink-0"
              >
                <span>Browse All Areas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
