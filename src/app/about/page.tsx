import { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldCheck, Clock, CheckCircle2, Calculator, Navigation } from "lucide-react";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/utils/schema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "About Us | Annamayya Safety Nets Mathikere, Bangalore",
  description:
    "Technician-led balcony safety net and invisible grill specialists based in Mathikere, Bangalore. Punctual visits, neat finishes, and honest pricing.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Annamayya Safety Nets Mathikere, Bangalore",
    description:
      "Technician-led balcony safety net and invisible grill specialists based in Mathikere, Bangalore. Punctual visits, neat finishes, and honest pricing.",
    url: "https://annamayyasafetynets.in/about",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "About Annamayya Safety Nets Mathikere Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Annamayya Safety Nets Mathikere, Bangalore",
    description:
      "Technician-led safety net installations in Mathikere, Yeshwanthpur, Malleshwaram & all Bangalore. On-time visits, clean finish, and honest quotes.",
    images: ["/images/og-image.webp"],
  },
};

export default function AboutPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      {/* Inject Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#F57C00] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#23272F] bg-[#FFE8CC] px-3.5 py-1.5 rounded-full inline-block self-start border border-[#F57C00]/30 shadow-xs">
            Technician-Led • Mathikere Base
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Punctual Visits, Clean Finish &amp; Honest Quotes
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Headquartered at 868, 3rd Main Road, MES Road, Mathikere, our team delivers high-tensile balcony safety nets, marine-grade SS316 invisible grills, and ceiling cloth drying systems across all Bangalore neighborhoods.
          </p>
        </div>

        {/* Split Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Mission & Story (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs flex flex-col gap-5">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#F57C00] shrink-0" />
                <span>Our Technician-First Story</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                As multi-story apartment communities expanded across Mathikere, Yeshwanthpur, Malleshwaram, Hebbal, and Yelahanka, our technician team noticed recurring homeowner complaints: contractors who arrived hours late, drilled recklessly into balcony plaster, left fine masonry dust all over outdoor furniture, and inflated their final bills with hidden accessory fees.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We formed Annamayya Safety Nets to do things the right way. We are not brokers or middlemen — we are full-time technicians who take pride in our trade. When you book a visit, our crew arrives on time with physical material samples, calculates the square footage transparently in front of you, and provides an honest, all-inclusive quote.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                During installation, we use diamond-core rotary equipment to protect your balcony concrete, tighten every cable or border cord to certified tension standards, and thoroughly vacuum up drill dust before handing over your completed installation.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#FFE8CC] rounded-xl text-[#23272F] self-start border border-[#F57C00]/20">
                  <Clock className="w-5 h-5 text-[#F57C00]" />
                </div>
                <h3 className="text-base font-bold text-slate-900">On-Time Visits</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We schedule definite time slots and show up punctually so you never waste a weekend waiting.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#FFE8CC] rounded-xl text-[#23272F] self-start border border-[#F57C00]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#F57C00]" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Clean Finish</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Diamond-core drilling that eliminates plaster cracks, tidy edge tensioning, and full drill-dust vacuuming.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#FFE8CC] rounded-xl text-[#23272F] self-start border border-[#F57C00]/20">
                  <Calculator className="w-5 h-5 text-[#F57C00]" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Honest Quotes</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear per-sq-ft rates with zero hidden hardware or labour surcharges. Upfront quotes honored completely.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts Sidebar (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col gap-5">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Operational Overview
              </h3>

              <div className="flex flex-col gap-4 text-xs">
                <div>
                  <span className="font-bold text-slate-400 uppercase tracking-wider block">Headquarters</span>
                  <p className="font-semibold text-slate-800 text-sm mt-1">
                    868, 3rd Main Road, MES Road, Mathikere, Bengaluru 560054
                  </p>
                  <a
                    href="https://maps.app.goo.gl/tjw2RZBQLBjJY1rE7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F57C00] hover:underline mt-1"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>View on Google Maps</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="font-bold text-slate-400 uppercase tracking-wider block">Google Rating</span>
                  <div className="flex items-center gap-1 mt-1 text-[#F57C00] font-black">
                    <span>★ 5.0 / 5.0</span>
                    <span className="text-slate-600 font-normal text-xs">(32 Verified Reviews)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="font-bold text-slate-400 uppercase tracking-wider block">Coverage Focus</span>
                  <p className="font-medium text-slate-700 leading-relaxed mt-1">
                    Mathikere, Yeshwanthpur, Malleshwaram, RT Nagar, Sadashivanagar, Jalahalli, Peenya, Dasarahalli, Nandini Layout, Rajajinagar, Vidyaranya Pura, Hebbal, Sanjay Nagar, Yelahanka, and all Bangalore.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="font-bold text-slate-400 uppercase tracking-wider block">Core Materials</span>
                  <p className="font-medium text-slate-700 leading-relaxed mt-1">
                    Virgin UV-stabilized HDPE netting, SS316 marine-grade invisible wire cables, and SS304 rustproof stainless steel ceiling drying pipes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}
