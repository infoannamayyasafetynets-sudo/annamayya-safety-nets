"use client";

interface MapFrameProps {
  areaName?: string;
  className?: string;
}

export default function MapFrame({ areaName = "Mathikere, Bengaluru", className = "" }: MapFrameProps) {
  // Real GBP listing coordinates for Annamayya Safety Nets: 13.0426163, 77.5510764
  const mapEmbedUrl = "https://maps.google.com/maps?q=13.0426163,77.5510764&hl=en&z=16&output=embed";

  return (
    <div className={`relative w-full h-[350px] rounded-3xl overflow-hidden shadow-xs border border-slate-200 ${className}`}>
      <iframe
        title={`Annamayya Safety Nets Google Business Profile Map - ${areaName}`}
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full filter contrast-[0.98]"
      ></iframe>
    </div>
  );
}
