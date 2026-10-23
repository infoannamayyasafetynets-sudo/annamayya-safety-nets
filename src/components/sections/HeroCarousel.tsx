"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Phone, MessageSquare, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  highlight: string;
  subtitle: string;
  image: string;
  altText: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Based in Mathikere, Serving All of Bangalore —",
    highlight: "Balcony Safety Nets",
    subtitle: "Technician-led balcony netting engineered with 100% virgin UV-stabilized copolymer. Punctual visits, neat anchor finish, and honest per-square-foot pricing.",
    image: "/images/main-images/annamayya-safetynets-mathikere.webp",
    altText: "Annamayya Safety Nets technician-installed balcony safety net in Mathikere, Bangalore apartment",
    ctaText: "Explore Balcony Safety Nets",
    ctaLink: "/services/balcony-safety-nets",
    badge: "Mathikere Base • On-Time Visits • Clean Finish",
  },
  {
    id: 2,
    title: "Marine SS316 Architectural —",
    highlight: "Balcony & Window Invisible Grills",
    subtitle: "High-tensile stainless steel wire grills providing impenetrable child fall safety while maintaining 100% panoramic city views and gentle natural breeze.",
    image: "/images/main-images/annamayya-grills-mathikere.webp",
    altText: "Annamayya Safety Nets SS316 marine-grade invisible balcony grills overlooking Bangalore skyline",
    ctaText: "Discover Invisible Grills",
    ctaLink: "/services/balcony-invisible-grills",
    badge: "SS316 Marine Grade • 400kg+ Breaking Load • Clear Views",
  },
  {
    id: 3,
    title: "Reclaim Your Balcony Floor Area —",
    highlight: "Ceiling Cloth Drying Hangers",
    subtitle: "Heavy-duty SS304 stainless steel pulley hoists. Each rod lowers independently to chest level and hoists smoothly to the ceiling for rapid natural drying.",
    image: "/images/main-images/annamayya-ceiling-cloth-hangers-mathikere.webp",
    altText: "Annamayya Safety Nets ceiling cloth drying pulley system installed on apartment balcony ceiling",
    ctaText: "View Ceiling Cloth Hangers",
    ctaLink: "/services/ceiling-cloth-hangers",
    badge: "100% Rustproof SS304 • Dual Pulley • Frees Floor Space",
  },
  {
    id: 4,
    title: "Humane Pest Bird Defense —",
    highlight: "Pigeon Protection Netting",
    subtitle: "Discreet translucent netting that permanently blocks pigeons from balcony ledges, AC compressors, and utility voids without harming the birds.",
    image: "/images/main-images/annamayya-building-duct-pigeon-netting-mathikere.webp",
    altText: "Annamayya Safety Nets humane pigeon protection netting installed across utility balcony",
    ctaText: "Explore Pigeon Netting",
    ctaLink: "/services/pigeon-safety-nets",
    badge: "Humane Bird Barrier • UV Resistant Mesh • Clean Finish",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative bg-[#181B20] text-white min-h-[580px] sm:min-h-[640px] flex items-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.altText}
              fill
              priority={index === 0}
              className="object-cover object-center transform scale-105 motion-safe:animate-pulse-subtle filter brightness-[0.92] contrast-[1.02]"
              sizes="100vw"
            />
            {/* Clean Reduced Tint Scrims — Maximum Image Clarity & Crisp Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
          </div>
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE8CC] text-[#23272F] font-bold text-xs uppercase tracking-wider mb-6 border border-[#F57C00]/40 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#F57C00]" />
            <span>{slides[current].badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight min-h-[110px] sm:min-h-[140px] drop-shadow-sm">
            {slides[current].title}{" "}
            <span className="text-[#F57C00] block mt-1">
              {slides[current].highlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl min-h-[64px] sm:min-h-[72px]">
            {slides[current].subtitle}
          </p>

          {/* Core Value Pillars Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F57C00]" aria-hidden="true" /> On-Time Visits
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F57C00]" aria-hidden="true" /> Clean Finish &amp; Dust Cleanup
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F57C00]" aria-hidden="true" /> Honest Upfront Quotes
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F57C00]" aria-hidden="true" /> North Bangalore Specialists
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={slides[current].ctaLink}
              className="inline-flex items-center gap-2 bg-[#F57C00] hover:bg-[#E65100] text-white font-extrabold px-6 sm:px-8 py-3.5 rounded-full transition-all duration-300 text-sm shadow-xl shadow-[#F57C00]/25 transform hover:-translate-y-0.5"
            >
              <span>{slides[current].ctaText}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <a
              href="tel:+916281048162"
              className="inline-flex items-center gap-2 bg-[#23272F] hover:bg-[#323842] text-white border border-slate-600 font-extrabold px-5 sm:px-6 py-3.5 rounded-full transition-all duration-300 text-sm shadow-sm"
              aria-label="Call Annamayya Safety Nets at +91 62810 48162"
            >
              <Phone className="w-4 h-4 text-[#F57C00]" aria-hidden="true" />
              <span>Call +91 62810 48162</span>
            </a>

            <a
              href="https://wa.me/916281048162?text=Hi%20Annamayya%20Safety%20Nets%2C%20I%20would%20like%20to%20request%20a%20free%20doorstep%20inspection"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-5 py-3.5 rounded-full transition-all duration-300 text-sm shadow-lg shadow-[#25D366]/20"
              aria-label="Chat with Annamayya Safety Nets on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          type="button"
          onClick={prevSlide}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs transition-colors border border-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <div className="flex gap-1.5 px-2" role="tablist" aria-label="Hero carousel slide navigation">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-[#F57C00]" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={nextSlide}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs transition-colors border border-white/10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
