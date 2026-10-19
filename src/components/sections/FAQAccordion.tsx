"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much time does installation take for an apartment balcony?",
      answer:
        "For a standard apartment balcony, our two-technician crew completes the complete setup in 2 to 3 hours. This includes precision laser measurements, rotary diamond drilling, anchor seating, tension calibration, and complete cleanup of masonry drill dust before we leave.",
    },
    {
      question: "How is pricing calculated, and are there any hidden charges?",
      answer:
        "Our pricing is transparent and calculated strictly on the square footage of the installed area. When our technician visits your home, we take physical measurements with you and provide a clear, itemized quote that includes materials, marine-grade fasteners, and labour. There are zero hidden fees.",
    },
    {
      question: "What maintenance or cleaning is required for safety nets and invisible grills?",
      answer:
        "Almost none. Our UV-stabilized copolymer nets and marine-grade SS316 stainless cables do not attract greasy dirt. If dust accumulates over time, simply rinse the mesh with a bucket of water or wipe the cables with a damp cloth. Never use harsh chemical acids or bleach.",
    },
    {
      question: "How safe are these installations for energetic children and house pets?",
      answer:
        "Extremely safe. Our knotted safety net cords possess a certified breaking resistance exceeding 140kg per mesh segment, and our SS316 invisible wire cables withstand over 400kg of tension. The tight aperture prevents toddlers from climbing or squeezing through, creating a foolproof fall barrier.",
    },
    {
      question: "What types of cloth drying hangers do you offer, and which is right for my balcony?",
      answer:
        "We offer ceiling-mounted pulley systems (with 4, 6, or 8 individual SS304 stainless rods that hoist up and down independently) as well as collapsible accordion wall-mounted folding racks. Ceiling pulley systems are ideal for standard balconies to reclaim floor space, while wall-mounted folding racks suit narrow utility alcoves.",
    },
    {
      question: "Will our apartment RWA or Residents Association permit invisible grills and safety nets?",
      answer:
        "Yes. High-rise apartment associations across Bangalore generally endorse invisible wire grills and transparent safety nets because they preserve the uniform aesthetic appearance of the building facade while complying with standard high-rise fall prevention norms.",
    },
    {
      question: "How do you anchor into balconies without causing wall cracks or drill damage?",
      answer:
        "Our technicians use specialized rotary diamond-core drill bits rather than brute impact hammers. We anchor directly into the solid reinforced concrete beams and lintels, ensuring tremendous load-bearing hold while protecting wall plaster and tile work from cracking.",
    },
    {
      question: "Where is your team based, and how quickly can you visit my home?",
      answer:
        "Our primary workshop is based in Mathikere (near MES Road & Gokula Extension). For North Bangalore areas like Mathikere, Yeshwanthpur, Malleshwaram, Hebbal, and Yelahanka, we typically offer same-day doorstep visits. For other parts of Bangalore, we schedule punctual visits within 24 hours.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] scroll-mt-12" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFE8CC] text-[#23272F] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#F57C00]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#F57C00]" />
            <span>Honest Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#23272F] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Clear, honest answers about installation times, pricing models, child safety ratings, and apartment permissions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#23272F] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#F57C00] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#23272F] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold">Have a custom balcony or window requirement?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Speak directly with our technical team in Mathikere for advice and instant scheduling.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+916281048162"
              className="inline-flex items-center gap-2 bg-[#F57C00] hover:bg-[#E65100] text-white px-5 py-3 rounded-full text-xs font-black shadow-md transition-colors"
              aria-label="Call Annamayya Safety Nets directly at +91 62810 48162"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>+91 62810 48162</span>
            </a>
            <a
              href="https://wa.me/916281048162?text=Hi%20Annamayya%20Safety%20Nets%2C%20I%20have%20a%20question%20about%20installation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full text-xs font-black shadow-md transition-colors"
              aria-label="Ask questions on WhatsApp with Annamayya Safety Nets"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
