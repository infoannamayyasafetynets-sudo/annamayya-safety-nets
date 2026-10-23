import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Request Received | Annamayya Safety Nets - Safety Nets & Invisible Grills Bangalore, Karnataka",
  description:
    "Your request for a free site measurement and quote has been successfully received by Annamayya Safety Nets. We will contact you shortly.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center select-none">
      <div className="max-w-md bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md flex flex-col items-center gap-6">
        <div className="p-4 bg-emerald-50 text-success-green rounded-full shadow-xs border border-emerald-100/50">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight leading-none">
            Request Received!
          </h1>
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            Booking Confirmed
          </h2>
        </div>

        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
          Thank you for contacting Annamayya Safety Nets. Our local Bangalore, Karnataka team will review your service requirements and contact you within 24 hours to schedule your free site inspection.
        </p>

        {/* Back channels */}
        <div className="flex flex-col gap-3 w-full border-t border-slate-100 pt-6">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
            Need Instant Booking?
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <a
              href="tel:+916281048162"
              className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-[#F57C00] hover:text-white text-slate-800 border border-slate-200 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#F57C00] group-hover:text-white" />
              <span>Call: +91 62810 48162</span>
            </a>
            <a
              href="https://wa.me/916281048162?text=Hi%20Annamayya%20Safety%20Nets%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
              className="flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-800 border border-emerald-200 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        <Link
          href="/"
          className="w-full flex items-center justify-center gap-2 bg-[#23272F] hover:bg-[#F57C00] text-white font-bold py-3.5 rounded-xl transition-all shadow-xs text-xs"
        >
          <span>Return to Homepage</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
