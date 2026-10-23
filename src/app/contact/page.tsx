import { Metadata } from "next";
import Link from "next/link";
import { Home, MapPin, Phone, Mail, Navigation } from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";
import MapFrame from "@/components/ui/map-frame";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Annamayya Safety Nets Mathikere, Bangalore",
  description:
    "Schedule an on-time doorstep measurement visit or get an honest quote for safety nets & invisible grills in Mathikere & Bangalore. Call +91 62810 48162.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Annamayya Safety Nets | Mathikere, Bangalore",
    description:
      "Schedule an on-time doorstep measurement visit or get an honest quote for safety nets & invisible grills in Mathikere & Bangalore. Call +91 62810 48162.",
    url: "https://annamayyasafetynets.in/contact",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Contact Annamayya Safety Nets Mathikere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Annamayya Safety Nets | Mathikere, Bangalore",
    description:
      "Doorstep measurement and honest quotes for balcony nets & SS316 invisible grills based in Mathikere, Bengaluru. Call +91 62810 48162.",
    images: ["/images/og-image.webp"],
  },
};

export default function ContactPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Contact Us", item: "/contact" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#F57C00] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Contact Us</span>
        </nav>

        {/* Hero Title */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F57C00] bg-[#FFE8CC] px-3.5 py-1.5 rounded-full inline-block self-start">
            Mathikere Base • Serving All Bangalore
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Contact Annamayya Safety Nets
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions about netting gauges, SS316 wire specifications, or space-saving ceiling drying racks? Our technician-led team visits your location punctually, provides honest measurements, and guarantees a neat, clean finish.
          </p>
        </div>

        {/* NAP Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Business Details (Left) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col gap-6 text-left">
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
              Google Business Profile &amp; Contact Info
            </h2>

            <div className="flex flex-col gap-5">
              {/* Address (Exact GBP Match) */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#F57C00] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Official Office Address</span>
                  <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                    868, 3rd Main Road, MES Road, Sharadamba Nagar, Muthyala Nagar, Gokula Extension, Mathikere, Bengaluru, Karnataka 560054
                  </p>
                  <a
                    href="https://maps.app.goo.gl/tjw2RZBQLBjJY1rE7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F57C00] hover:text-[#E65100] mt-1 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-[#F57C00] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Phone &amp; WhatsApp Support</span>
                  <a href="tel:+916281048162" className="text-sm font-bold text-slate-700 hover:text-[#F57C00] transition-colors flex items-center gap-2">
                    <span>+91 62810 48162</span>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold">Direct Line</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-[#F57C00] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Email Inquiries</span>
                  <a href="mailto:info.annamayyasafetynets@gmail.com" className="text-sm font-bold text-slate-700 hover:text-[#F57C00] transition-colors">
                    info.annamayyasafetynets@gmail.com
                  </a>
                </div>
              </div>

              {/* Google Reviews */}
              <div className="p-4 rounded-2xl bg-[#FFE8CC]/40 border border-[#FFE8CC] flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">Google Rating</span>
                  <span className="text-xs font-black text-[#F57C00]">★ 5.0 / 5.0 (32 Reviews)</span>
                </div>
                <p className="text-xs text-slate-600">
                  Read genuine client feedback directly on our Google Business Profile.
                </p>
                <a
                  href="https://maps.app.goo.gl/tjw2RZBQLBjJY1rE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#F57C00] hover:underline mt-1"
                >
                  View 32 Real Google Reviews &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Map Frame (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-left">
                Mathikere Location Map (13.0426163, 77.5510764)
              </h3>
              <a
                href="https://maps.app.goo.gl/tjw2RZBQLBjJY1rE7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-white bg-[#F57C00] hover:bg-[#E65100] px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
            <MapFrame areaName="Mathikere, Bengaluru" className="h-[360px]" />
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}
