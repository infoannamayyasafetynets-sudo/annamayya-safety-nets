"use client";

import { motion } from "framer-motion";
import { Clock, Sparkles, CheckCircle2, ShieldCheck, MapPin, Calculator } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Clock,
      tag: "Punctuality",
      title: "On-Time Visits",
      desc: "We value your weekend and working hours. Our technicians arrive at the confirmed hour for inspection and installation, with no frustrating delays or unannounced reschedules.",
    },
    {
      icon: CheckCircle2,
      tag: "Craftsmanship",
      title: "Clean Finish",
      desc: "Every installation is finished flush and taut. We use diamond-core rotary drill bits to preserve wall plaster, secure stainless anchor points neatly, and vacuum up all masonry dust before handover.",
    },
    {
      icon: Calculator,
      tag: "Integrity",
      title: "Honest Quotes",
      desc: "Upfront pricing based strictly on physical square footage. We explain hardware options clearly with material samples in hand — no hidden accessory charges or sudden quote escalations.",
    },
    {
      icon: MapPin,
      tag: "Local Presence",
      title: "North Bangalore Team",
      desc: "Stationed right here in Mathikere, our technicians understand the architecture of apartment towers in Yeshwanthpur, Malleshwaram, Hebbal, and Yelahanka, enabling fast turnaround.",
    },
    {
      icon: ShieldCheck,
      tag: "Durability",
      title: "Long-Lasting Materials",
      desc: "Virgin HDPE copolymer mesh with embedded UV stabilizers and genuine SS316 marine-grade stainless wire cables that resist monsoon oxidation, sun embrittlement, and high-altitude winds.",
    },
  ];

  return (
    <section className="py-24 bg-white scroll-mt-12" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFE8CC] text-[#23272F] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#F57C00]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F57C00]" />
            <span>The Annamayya Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#23272F] tracking-tight">
            Why Bangalore Homeowners Choose Our Technician Crew
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Based in Mathikere, we have built our reputation on technician-led dependability: on-time visits, clean anchor finishing, honest quotes, and materials built to last a decade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200 hover:border-[#F57C00] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#23272F] group-hover:bg-[#F57C00] flex items-center justify-center text-[#F57C00] group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#23272F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
