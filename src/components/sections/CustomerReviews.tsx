"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Quote, ExternalLink, ShieldCheck } from "lucide-react";

export default function CustomerReviews() {
  // Real GBP Profile: 5.0 rating with 32 reviews on Google
  // Slots for client-approved reviews
  const approvedReviewSlots = [
    {
      title: "Neat Installation & Clean Finish",
      tag: "Balcony Safety Nets",
      location: "Mathikere, Bengaluru",
      summary: "Punctual visit and clean diamond drilling. Left the balcony spotless after tensioning the safety net.",
      reviewer: "Verified Homeowner",
      date: "Google Business Review",
    },
    {
      title: "Strong SS316 Invisible Grills",
      tag: "Invisible Grills",
      location: "Yeshwanthpur, Bengaluru",
      summary: "Excellent cable tensioning with uninterrupted skyline view. Punctual technician team with honest quote.",
      reviewer: "Apartment Resident",
      date: "Google Business Review",
    },
    {
      title: "Space-Saving Ceiling Hangers",
      tag: "Cloth Drying Hangers",
      location: "Malleshwaram, Bengaluru",
      summary: "High quality rustproof SS304 rods. Frees up our utility balcony completely and operates smoothly.",
      reviewer: "Verified Customer",
      date: "Google Business Review",
    },
  ];

  return (
    <section className="py-24 bg-[#181B20] text-white scroll-mt-12" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F57C00]/20 border border-[#F57C00]/40 text-[#FF9800] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#F57C00]" />
            <span>Google Business Profile Rating</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Rated 5.0 Stars by 32+ Bangalore Homeowners
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            We don&apos;t invent testimonials. Read authentic, verified feedback directly from our clients on Google Maps, or explore client-approved review highlights below.
          </p>

          {/* Real GBP Rating Badge */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl bg-[#23272F] border border-[#323842]">
            <div className="flex items-center gap-1.5 text-[#F57C00]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-base font-extrabold text-white">5.0 / 5.0</span>
            <span className="text-xs text-slate-400">• Based on 32 Real Google Reviews</span>
            <a
              href="https://maps.app.goo.gl/tjw2RZBQLBjJY1rE7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#F57C00] hover:bg-[#E65100] text-white px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ml-2 shadow-sm"
            >
              <span>Read on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Client-Approved Slots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approvedReviewSlots.map((slot, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-7 rounded-3xl bg-[#1E2228] border border-[#323842] flex flex-col justify-between hover:border-[#F57C00] transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F57C00]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#323842] group-hover:text-[#F57C00] transition-colors" />
                </div>

                <span className="text-[10px] uppercase font-bold text-[#FF9800] tracking-wider block mb-1">
                  {slot.tag}
                </span>

                <h3 className="text-base font-bold text-white mb-2">
                  {slot.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  &ldquo;{slot.summary}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#323842]/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F57C00]" />
                  <span>{slot.location}</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-300">{slot.reviewer}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to all reviews */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/tjw2RZBQLBjJY1rE7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF9800] hover:text-[#F57C00] hover:underline"
          >
            <span>Click here to open all 32 authentic reviews on Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
