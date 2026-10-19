export interface FAQItem {
  question: string;
  answer: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  categoryName: string;
  title: string;
  description: string;
  longDescription: string;
  aiOverview: string;
  image: string;
  supportingImages: string[];
  gallery: string[];
  beforeImage: string;
  afterImage: string;
  benefits: string[];
  specsTable: SpecItem[];
  faqs: FAQItem[];
  clientNotice?: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  "balcony-safety-nets": {
    slug: "balcony-safety-nets",
    name: "Balcony Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Balcony Safety Nets in Mathikere & Bangalore | Annamayya Safety Nets",
    description: "Heavy-duty UV-stabilized balcony safety net installations across Mathikere and Bangalore. Punctual visits, neat anchor finish, and transparent quotes.",
    longDescription: "Annamayya Safety Nets provides professional balcony netting for apartment homes across Mathikere and surrounding North Bangalore neighborhoods. Our technician crew installs virgin high-density polyethylene netting treated for harsh tropical UV radiation. We anchor securely along concrete railings and lintels with rust-resistant hardware, delivering dependable fall protection for family members without spoiling your balcony airflow or open views.",
    aiOverview: "Annamayya Safety Nets delivers technician-led balcony safety installations in Mathikere, Bangalore. We specialize in high-tensile UV-treated netting anchored with marine-grade fasteners, offering prompt site inspection, clean drill-dust cleanup, and upfront pricing.",
    image: "/images/main-images/annamayya-safetynets-mathikere.webp",
    supportingImages: [
      "/images/services/annamayya-work-real-mathikere.webp",
      "/images/main-images/annamayya-balcony-work-2-mathikere.webp",
      "/images/hero/annamayya-childrensafetynet-mathikere.webp"
    ],
    gallery: [
      "/images/main-images/annamayya-safetynets-mathikere.webp",
      "/images/services/annamayya-work-real-mathikere.webp",
      "/images/main-images/annamayya-balcony-work-2-mathikere.webp"
    ],
    beforeImage: "/images/hero/annamayya-before-balcony-mathikere.webp",
    afterImage: "/images/main-images/annamayya-safetynets-mathikere.webp",
    benefits: [
      "Punctual doorstep inspection by our own experienced technician team",
      "Virgin UV-stabilized HDPE mesh engineered for intense sun and heavy monsoon rains",
      "Tested high-tensile breaking load exceeding 140kg per mesh segment",
      "Diamond-core rotary drilling that prevents plaster chipping or wall cracks",
      "Neat edge-rope tensioning for a tidy, flush architectural finish",
      "Clean site cleanup with drill-dust vacuuming before we leave"
    ],
    specsTable: [
      { label: "Material Composition", value: "100% Virgin UV-Stabilized HDPE Monofilament" },
      { label: "Cord Gauge / Thickness", value: "0.8mm - 2.5mm Multi-Strand Braided" },
      { label: "Mesh Aperture Size", value: "25mm to 50mm Diamond Matrix" },
      { label: "Tensile Breaking Strength", value: "140 kg+ per strand rating" },
      { label: "Anchor Hardware", value: "Marine-Grade SS304 Expansion Fasteners & Hooks" },
      { label: "Weather Resistance", value: "UV Fortified, Heat Resistant, Waterproof" },
      { label: "Service Turnaround", value: "Same-Day / Next-Day Installation Available" }
    ],
    faqs: [
      {
        question: "How long does a standard balcony net installation take?",
        answer: "Most standard apartment balconies (10ft to 25ft length) take our two-person technician crew between 2 and 3 hours from initial measurement to final tensioning and site cleanup."
      },
      {
        question: "How is pricing calculated for balcony safety netting?",
        answer: "We quote transparently on a square-foot basis calculated from exact perimeter dimensions. We provide a clear, itemized quote upfront with no hidden installation or hardware surcharges."
      },
      {
        question: "How do we maintain and clean the balcony net?",
        answer: "Our UV-treated HDPE nets require very little maintenance. You can simply spray down dust with a gentle water hose or wipe with a damp microfiber cloth once every few months. Avoid harsh acid-based cleaners."
      },
      {
        question: "Is this net reliable for energetic toddlers and house pets?",
        answer: "Yes. Our knotted cords possess an individual strand tensile capacity over 140 kg, creating an unyielding physical barrier that prevents accidental falls while allowing open visibility and gentle breeze."
      },
      {
        question: "Will our apartment RWA or owner society object to the installation?",
        answer: "No. Our transparent and translucent mesh blends discreetly with your building facade, and our clean drilling into solid lintels conforms to standard Bangalore high-rise association rules."
      },
      {
        question: "How do I schedule an on-site visit in Mathikere or North Bangalore?",
        answer: "Simply call +91 62810 48162 or send a message on WhatsApp. We arrange on-time visits at your preferred morning or weekend time slot."
      }
    ]
  },

  "children-safety-nets": {
    slug: "children-safety-nets",
    name: "Child Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Child Safety Nets in Mathikere, Bangalore | Annamayya Safety Nets",
    description: "Certified child protection safety nets for high-rise balconies, stairs, and windows in Mathikere & Bangalore. High-tensile fall containment.",
    longDescription: "Keeping curious toddlers and young children safe around apartment balconies, open window ledges, and stair voids is essential for high-rise living. Annamayya Safety Nets installs reinforced child safety netting with small aperture mesh that prevents head or limb trapping while eliminating fall risks completely. Our technician-led crew inspects railing heights, gap measurements, and floor anchor points to ensure total structural reliability.",
    aiOverview: "Child safety netting by Annamayya Safety Nets in Mathikere, Bangalore provides verified high-tensile perimeter containment for apartment homes. Expert technician fitting, tight diamond knotting, and punctual home service.",
    image: "/images/hero/annamayya-childrensafetynet-mathikere.webp",
    supportingImages: [
      "/images/services/annamayya-child-mathikere.webp",
      "/images/main-images/annamayya-safetynets-mathikere.webp"
    ],
    gallery: [
      "/images/hero/annamayya-childrensafetynet-mathikere.webp",
      "/images/services/annamayya-child-mathikere.webp"
    ],
    beforeImage: "/images/hero/annamayya-before-balcony-mathikere.webp",
    afterImage: "/images/hero/annamayya-childrensafetynet-mathikere.webp",
    benefits: [
      "Zero climbable horizontal footholds to prevent children from scaling railings",
      "Small 25mm-30mm mesh size prevents toys, hands, or limbs from slipping through",
      "Reinforced border roping anchored directly into concrete wall anchors",
      "Heat-treated knotting that does not slip or loosen under physical pressure",
      "High natural daylight transmission to keep children's play areas bright",
      "Non-toxic, lead-free polymer materials safe for toddlers and family pets"
    ],
    specsTable: [
      { label: "Target Application", value: "High-Rise Balconies, Stair Voids, Windows, Mezzanines" },
      { label: "Mesh Aperture", value: "25mm to 30mm Child-Safe Tight Matrix" },
      { label: "Tensile Strength", value: "160 kg+ Multi-Strand Copolymer" },
      { label: "Fastening Standard", value: "Heavy-Gauge Stainless Anchor Hooks & Border Cords" },
      { label: "Inspection Fee", value: "Complimentary Doorstep Visit in Bangalore" },
      { label: "Warranty Coverage", value: "Long-term UV and Craftsmanship Guarantee" }
    ],
    faqs: [
      {
        question: "Can a child untie or pull down the net?",
        answer: "No. The net perimeter is threaded through high-tensile border ropes and mechanically anchored into solid concrete masonry using industrial expansion anchors spaced every few inches."
      },
      {
        question: "Can child safety nets be fitted to internal staircase railings?",
        answer: "Yes, we regularly protect open duplex stair banisters, second-floor landings, and mezzanine railings using neatly tailored safety nets."
      },
      {
        question: "How soon can Annamayya Safety Nets complete the installation?",
        answer: "We usually complete site inspections within 24 hours of your call and can carry out installation on the same day or the following morning."
      },
      {
        question: "What is the cost for child safety netting in Bangalore apartments?",
        answer: "Costs depend on square footage and anchor perimeter. Our rates are competitive and honest, with zero hidden extras. Call 6281048162 for a free instant estimate."
      }
    ]
  },

  "pigeon-safety-nets": {
    slug: "pigeon-safety-nets",
    name: "Pigeon Safety Nets [CONFIRM WITH CLIENT]",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Pigeon Safety Nets in Bangalore [CONFIRM WITH CLIENT] | Annamayya Safety Nets",
    description: "Humane pigeon deterrence netting for apartment balconies and utility shafts in Mathikere & Bangalore. Note: Service offering to be confirmed with client.",
    longDescription: "Urban pigeons roosting on balcony ledges and duct openings introduce foul droppings, feathers, and respiratory allergens. Annamayya Safety Nets provides durable anti-pigeon netting engineered with discreet, translucent mesh that blocks bird entry humanely without obstructing daylight or airflow. [PLEASE NOTE: This service listing is kept as an operational placeholder pending final confirmation with client].",
    aiOverview: "Humane bird-deterrence netting for residential balconies in Mathikere, Bangalore. UV-resistant translucent mesh installed by Annamayya Safety Nets. [CONFIRM WITH CLIENT].",
    image: "/images/main-images/annamayya-building-duct-pigeon-netting-mathikere.webp",
    supportingImages: [
      "/images/services/annamayya-area-real-mathikere.webp",
      "/images/main-images/annamayya-area-2-mathikere.webp"
    ],
    gallery: [
      "/images/main-images/annamayya-building-duct-pigeon-netting-mathikere.webp",
      "/images/services/annamayya-area-real-mathikere.webp"
    ],
    beforeImage: "/images/hero/annamayya-before-balcony-mathikere.webp",
    afterImage: "/images/main-images/annamayya-building-duct-pigeon-netting-mathikere.webp",
    clientNotice: "[CONFIRM WITH CLIENT: Please confirm whether pigeon safety net installations are actively taken up for individual apartment units or commercial properties.]",
    benefits: [
      "100% humane bird barrier — keeps pigeons out without harming them",
      "Stops pigeon droppings, foul nesting debris, and air-borne pathogens",
      "Translucent wire-like appearance that preserves balcony aesthetics",
      "UV-fortified virgin polymer cords that will not rot or discolor",
      "Tightly anchored to prevent birds from sneaking past side margins"
    ],
    specsTable: [
      { label: "Mesh Spacing", value: "25mm to 40mm Bird-Proof Matrix" },
      { label: "Service Status", value: "[CONFIRM WITH CLIENT]" },
      { label: "Hardware Quality", value: "Stainless Steel Fasteners & Tie Rings" },
      { label: "Coverage Location", value: "Balconies, Utility Areas, Air Conditioning Ledges" },
      { label: "Primary Area", value: "Mathikere, Yeshwanthpur, Hebbal & All Bangalore" }
    ],
    faqs: [
      {
        question: "Does the netting harm or trap pigeons?",
        answer: "No, our nets act as a smooth physical barrier that prevents birds from landing or roosting. Pigeons simply fly away to alternative open perches without any injury."
      },
      {
        question: "Is this service currently available?",
        answer: "Please call +91 62810 48162 to confirm scheduling and availability with our team for pigeon protection services."
      }
    ]
  },

  "balcony-invisible-grills": {
    slug: "balcony-invisible-grills",
    name: "Balcony Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Balcony Invisible Grills in Mathikere & Bangalore | Annamayya Safety Nets",
    description: "Marine-grade SS316 balcony invisible wire grills in Mathikere, Bangalore. Modern high-rise safety with unobstructed 360-degree skyline views.",
    longDescription: "Upgrade your apartment balcony with modern architectural invisible grills from Annamayya Safety Nets. Fabricated with high-tensile marine-grade SS316 stainless steel cables sheathed in protective nylon, our invisible grills provide impenetrable fall prevention while preserving uninterrupted outdoor views. Unlike bulky iron grilles that rust and block light, invisible grills deliver clean contemporary styling that apartment associations prefer.",
    aiOverview: "Annamayya Safety Nets installs architectural SS316 marine invisible grills for high-rise balconies across Mathikere and Bangalore. High-tensile stainless cables, precision tensioning, and punctual technician service.",
    image: "/images/main-images/annamayya-grills-mathikere.webp",
    supportingImages: [
      "/images/services/annamayya-invisible-grills-real-mathikere.webp",
      "/images/services/annamayya-balconygrills-mathikere.webp",
      "/images/main-images/annamayya-grills-real-mathikere.webp"
    ],
    gallery: [
      "/images/main-images/annamayya-grills-mathikere.webp",
      "/images/services/annamayya-invisible-grills-real-mathikere.webp",
      "/images/services/annamayya-balconygrills-mathikere.webp"
    ],
    beforeImage: "/images/hero/annamayya-before-balcony-mathikere.webp",
    afterImage: "/images/main-images/annamayya-grills-mathikere.webp",
    benefits: [
      "Genuine marine-grade SS316 stainless steel core cables impervious to corrosion",
      "Nylon/Teflon protective jacket shields hands from wire cuts and stops friction",
      "Over 400kg tensile load capacity for unmatched high-altitude protection",
      "Slim 2mm - 3mm diameter maintains unobstructed daylight and panoramic views",
      "Sturdy heavy-gauge aluminum track with tamper-resistant anchor caps",
      "Emergency cut capability with wire cutters in case of fire evacuation"
    ],
    specsTable: [
      { label: "Cable Metallurgy", value: "Marine-Grade SS316 Stainless Steel (7x7 / 7x19 Core)" },
      { label: "Cable Diameter", value: "2.0mm - 2.5mm / 3.0mm with Protective Sheath" },
      { label: "Tensile Breaking Load", value: "400 kg+ per individual cable" },
      { label: "Cable Spacing", value: "2 inches (50mm) or 3 inches (75mm) Pitch" },
      { label: "Frame Extrusion", value: "6063-T6 Heavy Structural Aluminum Base Track" },
      { label: "Track Finish", value: "Powder-Coated Off-White, Charcoal Grey, or Custom" },
      { label: "Installation Base", value: "Mathikere, Bangalore (Doorstep Inspection)" }
    ],
    faqs: [
      {
        question: "What is the difference between SS304 and SS316 invisible grills?",
        answer: "SS316 contains 2% to 3% molybdenum, which makes it totally immune to rust and pitting, even in humid outdoor environments. At Annamayya Safety Nets, we recommend and install genuine SS316 marine-grade cables for lasting safety."
      },
      {
        question: "Can invisible grills be cut during a fire emergency?",
        answer: "Yes. Unlike traditional cast-iron grilles which trap residents inside during an emergency, invisible grills can be severed in seconds using standard wire snips kept at home, satisfying modern fire-escape safety protocols."
      },
      {
        question: "Will invisible grills loosen or sag over time?",
        answer: "We use mechanical tensioning rigs to pull each cable to exact tension specifications before locking it into heavy-duty anchor brackets, preventing looseness or sagging for years."
      },
      {
        question: "Are invisible grills permitted by Bangalore apartment RWAs?",
        answer: "Yes, virtually all luxury apartments and gated communities approve invisible grills because they maintain uniform external building aesthetics without altering facade appearance."
      }
    ]
  },

  "window-invisible-grills": {
    slug: "window-invisible-grills",
    name: "Window Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Window Invisible Grills in Mathikere, Bangalore | Annamayya Safety Nets",
    description: "Sleek SS316 invisible wire grills for French windows, bay windows, and bedroom casements in Mathikere & Bangalore. Uncompromised child safety.",
    longDescription: "Modern Bangalore apartments frequently feature large French windows and floor-to-ceiling glass casements that require reliable fall barriers. Annamayya Safety Nets installs customized window invisible grills that mount flush inside or outside the frame. Engineered with slim SS316 stainless cables, our window installations protect children and pets from high-altitude falls while retaining 100% of your natural daylight and fresh breeze.",
    aiOverview: "Customized window invisible grill installations across Mathikere and Bangalore by Annamayya Safety Nets. Marine SS316 stainless wire, precision wall track mounting, child fall safety, and clear outdoor visibility.",
    image: "/images/main-images/annamayya-grills-real-mathikere.webp",
    supportingImages: [
      "/images/services/annamayya-childreninvisiblegrills-mathikere.webp",
      "/images/main-images/annamayya-grills-mathikere.webp"
    ],
    gallery: [
      "/images/main-images/annamayya-grills-real-mathikere.webp",
      "/images/services/annamayya-childreninvisiblegrills-mathikere.webp"
    ],
    beforeImage: "/images/hero/annamayya-before-window-mathikere.webp",
    afterImage: "/images/main-images/annamayya-grills-real-mathikere.webp",
    benefits: [
      "Custom-fitted to sliding windows, French windows, and openable casements",
      "Vertical or horizontal cable orientation based on window opening mechanics",
      "Rustproof SS316 marine alloy that never requires sanding or repainting",
      "Slim profile fits easily behind mosquito mesh screens and curtains",
      "Tamper-proof fasteners securely hidden behind architectural cap profiles"
    ],
    specsTable: [
      { label: "Recommended Orientation", value: "Vertical (most common) or Horizontal" },
      { label: "Cable Metallurgy", value: "Marine SS316 Grade Stainless Steel" },
      { label: "Spreader System", value: "Optional Cross-Stiffener for Heights > 5 Feet" },
      { label: "Inspection Availability", value: "Free Same-Day Measurements in North Bangalore" }
    ],
    faqs: [
      {
        question: "Can we still open and clean our window glass with invisible grills fitted?",
        answer: "Yes, our invisible grills are installed with sufficient clearance from glass sliders or casements, allowing normal window opening and effortless glass cleaning."
      },
      {
        question: "Can mosquito mesh screens coexist with invisible grills?",
        answer: "Absolutely. We engineer the aluminum mounting tracks so they integrate smoothly alongside existing pleated or magnetic mosquito net frames."
      }
    ]
  },

  "ceiling-cloth-hangers": {
    slug: "ceiling-cloth-hangers",
    name: "Ceiling Cloth Drying Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Ceiling Cloth Drying Hangers in Mathikere & Bangalore | Annamayya Safety Nets",
    description: "Heavy-duty ceiling-mounted cloth drying pulley systems with rustproof SS304 stainless steel rods in Mathikere & Bangalore. Free doorstep installation.",
    longDescription: "Free up valuable balcony floor space with our ceiling-mounted cloth drying hangers. Annamayya Safety Nets installs individual pulley systems featuring rustproof SS304 stainless steel pipes that lower down to chest level for effortless hanging, then hoist up neatly to the ceiling. Clothes dry faster under natural rising warm air, and your balcony stays uncluttered and tidy even on laundry days.",
    aiOverview: "Ceiling cloth drying pulley systems installed by Annamayya Safety Nets in Mathikere, Bangalore. Heavy-gauge SS304 stainless tubes, smooth nylon-core pulley cords, and durable ceiling bracket hardware.",
    image: "/images/main-images/annamayya-ceiling-cloth-hangers-mathikere.webp",
    supportingImages: [
      "/images/services/annamayya-ceiling-cloth-hangers-1-mathikere.webp",
      "/images/services/annamayya-hangers-real-mathikere.webp",
      "/images/main-images/annamayya-hanger-work-mathikere.webp"
    ],
    gallery: [
      "/images/main-images/annamayya-ceiling-cloth-hangers-mathikere.webp",
      "/images/services/annamayya-ceiling-cloth-hangers-1-mathikere.webp",
      "/images/main-images/annamayya-hanger-work-mathikere.webp"
    ],
    beforeImage: "/images/hero/annamayya-before-balcony-mathikere.webp",
    afterImage: "/images/main-images/annamayya-ceiling-cloth-hangers-mathikere.webp",
    benefits: [
      "100% rustproof SS304 stainless steel rods that will never stain wet white clothes",
      "Smooth dual-pulley mechanism — each rod lowers and hoists completely independently",
      "Reclaims 100% of your balcony floor area previously wasted on folding stands",
      "Faster indoor/balcony drying thanks to natural warm air rising near ceiling level",
      "High-grade braided nylon cords with metal stopper hooks for safety locking",
      "Neat ceiling anchor installation that works on concrete slabs or metal balconies"
    ],
    specsTable: [
      { label: "Rod Metallurgy", value: "Heavy-Gauge Rustproof SS304 Stainless Steel" },
      { label: "System Configuration", value: "4-Pipe, 6-Pipe, or 8-Pipe Pulley Systems" },
      { label: "Available Pipe Lengths", value: "4 Feet, 5 Feet, 6 Feet, 7 Feet, 8 Feet" },
      { label: "Pulley Hardware", value: "High-Strength Nylon Wheels with Metal Housing" },
      { label: "Operating Cord", value: "Heavy-Duty Braided Nylon Core Rope" },
      { label: "Weight Capacity", value: "5 kg to 8 kg Wet Laundry per Individual Rod" },
      { label: "Installation Base", value: "Mathikere, Yeshwanthpur, Malleshwaram & Bangalore" }
    ],
    faqs: [
      {
        question: "What length and pipe count should I choose for my apartment balcony?",
        answer: "Standard apartment balconies in Bangalore typically fit a 6-pipe system in either 5-foot or 6-foot lengths. Our technician measures your balcony ceiling during the free visit to recommend the best fit."
      },
      {
        question: "Can heavy blankets and wet bedsheets be dried on these rods?",
        answer: "Yes, each individual SS304 rod supports 5kg to 8kg of wet laundry. You can easily drape heavy bedsheets or curtains across two adjacent rods for stable drying."
      },
      {
        question: "Will the stainless pipes rust when exposed to moisture?",
        answer: "No. We exclusively supply certified SS304 stainless steel pipes that are non-magnetic and completely immune to oxidation and rust in humid Bangalore weather."
      },
      {
        question: "How long do the pulley ropes last, and are spares available?",
        answer: "Our braided cords typically last 3 to 5 years under daily use. If replacement cords or pulleys are ever required, our technician team provides fast, low-cost maintenance visits."
      }
    ]
  },

  "balcony-cloth-hangers": {
    slug: "balcony-cloth-hangers",
    name: "Balcony Cloth Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Balcony Cloth Drying Hangers in Bangalore | Annamayya Safety Nets",
    description: "Compact wall and ceiling cloth drying systems for compact apartment balconies in Mathikere & Bangalore. Rustproof stainless pipes.",
    longDescription: "Make the most of limited balcony space with Annamayya Safety Nets balcony cloth drying systems. Tailored for utility alcoves and narrow balconies across Bangalore, our systems combine robust stainless steel rods with smooth pulleys or folding wall brackets. Say goodbye to wobbly floor stands that get knocked down by wind.",
    aiOverview: "Space-saving balcony cloth drying hanger installations in Mathikere, Bangalore by Annamayya Safety Nets. Heavy-duty stainless pipes, on-time installation, and honest pricing.",
    image: "/images/services/annamayya-ceiling-cloth-hangers-2-mathikere.webp",
    supportingImages: [
      "/images/main-images/annamayya-hangers-real-mathikere.webp",
      "/images/services/annamayya-hangers-real-mathikere.webp"
    ],
    gallery: [
      "/images/services/annamayya-ceiling-cloth-hangers-2-mathikere.webp",
      "/images/main-images/annamayya-hangers-real-mathikere.webp"
    ],
    beforeImage: "/images/hero/annamayya-before-balcony-mathikere.webp",
    afterImage: "/images/services/annamayya-ceiling-cloth-hangers-2-mathikere.webp",
    benefits: [
      "Customized for narrow balconies and utility washing zones",
      "Rustproof SS304 stainless steel pipes that protect fine clothes",
      "Keeps floor area clear for walking, plants, or seating",
      "Sturdy wind-resistant construction that prevents clothes from blowing away",
      "Installed within 2 hours by our punctual technician crew"
    ],
    specsTable: [
      { label: "Configuration", value: "Ceiling-Suspended or Wall-Mounted Pulley Systems" },
      { label: "Pipe Material", value: "SS304 Rustproof Stainless Steel" },
      { label: "Ideal Room", value: "Balcony, Utility Area, Dry Balcony" },
      { label: "Inspection", value: "Free Doorstep Visit Across Bangalore" }
    ],
    faqs: [
      {
        question: "Can this be installed on false ceilings or POP?",
        answer: "For ceiling hangers, we anchor directly into the structural RCC concrete slab above the false ceiling using extended threaded rods for total safety."
      },
      {
        question: "How do I book an installation appointment?",
        answer: "Call our Mathikere office at +91 62810 48162 or send a WhatsApp message with your location to schedule an on-time visit."
      }
    ]
  },

  "wall-mounted-cloth-hangers": {
    slug: "wall-mounted-cloth-hangers",
    name: "Wall Mounted Cloth Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Wall Mounted Cloth Hangers in Mathikere, Bangalore | Annamayya Safety Nets",
    description: "Collapsible wall-mounted stainless steel cloth drying racks in Bangalore. Folds flat against the wall when not in use.",
    longDescription: "When ceiling height or light fixtures prevent overhead hangers, wall-mounted folding cloth racks provide the perfect alternative. Annamayya Safety Nets installs heavy-duty folding wall drying systems fabricated with SS304 stainless rods. When loaded, they extend out smoothly; when dry, they fold flat against the wall, taking up zero living space.",
    aiOverview: "Collapsible wall-mounted stainless cloth drying racks for apartment balconies and utility areas in Mathikere, Bangalore. Quick installation and durable construction by Annamayya Safety Nets.",
    image: "/images/main-images/annamayya-hangers3-mathikere.webp",
    supportingImages: [
      "/images/main-images/annamayya-hangerwork2-mathikere.webp",
      "/images/services/annamayya-hangers-real-mathikere.webp"
    ],
    gallery: [
      "/images/main-images/annamayya-hangers3-mathikere.webp",
      "/images/main-images/annamayya-hangerwork2-mathikere.webp"
    ],
    beforeImage: "/images/hero/annamayya-before-balcony-mathikere.webp",
    afterImage: "/images/main-images/annamayya-hangers3-mathikere.webp",
    benefits: [
      "Folds completely flat against the wall when clothes are dry",
      "Solid stainless steel construction that does not bend under weight",
      "Ideal for utility passages, bathrooms, and compact balconies",
      "Simple accordion pull-push operation with zero rope wear",
      "Punctual same-day installation across Bangalore"
    ],
    specsTable: [
      { label: "Mechanism", value: "Accordion Scissor-Arm Wall Foldable" },
      { label: "Pipe Grade", value: "SS304 Stainless Steel" },
      { label: "Extension Range", value: "Pushes flat to 3 inches; Extends out to 2.5 feet" },
      { label: "Fasteners", value: "Heavy-Duty Wall Anchor Screws Included" }
    ],
    faqs: [
      {
        question: "How much weight can the wall-mounted rack hold?",
        answer: "A standard 5-pipe wall mounted rack securely holds up to 25 kg of distributed wet laundry when anchored into solid masonry."
      },
      {
        question: "Can it be installed outside exposed to rain?",
        answer: "Yes, because all pipes and folding arms are crafted from SS304 stainless steel, the rack can withstand outdoor rain and sun without rusting."
      }
    ]
  }
};
