import Link from "next/link";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
  stacked?: boolean;
}

export default function Logo({
  className = "",
  iconOnly = false,
  light = false,
  stacked = false,
}: LogoProps) {
  if (iconOnly) {
    return (
      <Link
        href="/"
        className={`flex items-center select-none group ${className}`}
        aria-label="Annamayya Safety Nets Home"
      >
        <div className="relative h-10 w-10 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="logoGraphiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2E3440" />
                <stop offset="100%" stopColor="#1E2229" />
              </linearGradient>
              <linearGradient id="logoOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFA726" />
                <stop offset="100%" stopColor="#F57C00" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="26" fill="url(#logoGraphiteGrad)" />
            <rect x="4" y="4" width="92" height="92" rx="22" fill="none" stroke="url(#logoOrangeGrad)" strokeWidth="3" opacity="0.9" />
            <path
              d="M 28 74 L 50 24 L 72 74"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 37 54 L 63 54"
              fill="none"
              stroke="url(#logoOrangeGrad)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle cx="50" cy="18" r="4.5" fill="url(#logoOrangeGrad)" />
          </svg>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 select-none group ${className}`}
      aria-label="Annamayya Safety Nets Home"
    >
      {/* Monogram Badge */}
      <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="logoBadgeGraphite" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E3440" />
              <stop offset="100%" stopColor="#1E2229" />
            </linearGradient>
            <linearGradient id="logoBadgeOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA726" />
              <stop offset="100%" stopColor="#F57C00" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="26" fill="url(#logoBadgeGraphite)" />
          <rect x="4" y="4" width="92" height="92" rx="22" fill="none" stroke="url(#logoBadgeOrange)" strokeWidth="3" opacity="0.9" />
          <path
            d="M 28 74 L 50 24 L 72 74"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 37 54 L 63 54"
            fill="none"
            stroke="url(#logoBadgeOrange)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="50" cy="18" r="4.5" fill="url(#logoBadgeOrange)" />
        </svg>
      </div>

      {/* Clean Text Typography */}
      <div className={`flex flex-col ${stacked ? "text-center" : "text-left"}`}>
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-base sm:text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-[#23272F]"}`}>
            ANNAMAYYA
          </span>
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#F57C00]">
            SAFETY NETS
          </span>
        </div>
        <span className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 ${light ? "text-slate-300" : "text-[#4A4A4A]"}`}>
          Mathikere • Bengaluru
        </span>
      </div>
    </Link>
  );
}
