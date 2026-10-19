export interface AreaReview {
  name: string;
  locality: string;
  rating: number;
  review: string;
  serviceUsed: string;
  date: string;
}

export interface AreaDetail {
  slug: string;
  name: string;
  isPrimaryCluster?: boolean;
  tagline: string;
  overview: string;
  apartmentLiving: string;
  balconySafety: string;
  birdProblem: string;
  weatherDetails: string;
  localities: string[];
  landmarks: string[];
  customerReviews: AreaReview[];
  nearbySlugs: string[];
}

export const primaryClusterSlugs = [
  "mathikere",
  "yeshwanthpur",
  "malleshwaram",
  "rt-nagar",
  "sadashivanagar",
  "jalahalli",
  "peenya",
  "dasarahalli",
  "nandini-layout",
  "rajajinagar",
  "vidyaranyapura",
  "hebbal",
  "sanjay-nagar",
  "yelahanka"
];

const primaryClusterData: Record<string, {
  name: string;
  tagline: string;
  overview: string;
  apartmentLiving: string;
  balconySafety: string;
  birdProblem: string;
  weatherDetails: string;
  localities: string[];
  landmarks: string[];
}> = {
  "mathikere": {
    name: "Mathikere",
    tagline: "Headquarters & Local Hub: Balcony Safety Nets & Invisible Grills in Mathikere",
    overview: "Mathikere is the home base of Annamayya Safety Nets, centrally situated near MES Road, Gokula Extension, and Ramaiah institutions. Our technician teams are stationed right here in Mathikere, allowing us to deliver rapid same-day site visits, prompt measurements, and immediate installation for residential apartments and independent homes.",
    apartmentLiving: "Residential living in Mathikere spans multi-story standalone apartment complexes, student and faculty family apartments near MS Ramaiah and IISc, and established residential layouts. Balconies along busy thoroughfares like MES Road require high-tensile safety nets to prevent accidental falls and ceiling cloth drying hangers to maximize compact balcony areas.",
    balconySafety: "Multi-floor apartments in Mathikere feature open railings and utility balconies that pose serious risks for toddlers and house pets. Annamayya Safety Nets provides virgin HDPE polymer safety netting and architectural SS316 invisible wire grills with flush anchors, creating certified fall barriers with zero obstruction of daylight.",
    birdProblem: "Balcony ledges and window voids near tree-lined streets in Mathikere frequently attract pigeons, creating hygiene issues. Our humane, durable netting solutions keep balconies clean without harming wildlife.",
    weatherDetails: "North Bangalore experiences warm sunny summers and torrential monsoon rains. We utilize UV-stabilized copolymer nets and marine-grade stainless hardware that never rusts or sags in Mathikere weather.",
    localities: ["MES Road", "Sharadamba Nagar", "Muthyala Nagar", "Gokula Extension", "Mathikere Main Road", "BK Nagar", "Pipeline Road"],
    landmarks: ["MS Ramaiah Medical College & Hospital", "Mathikere Lake Park", "Gokula Extension Bus Stand", "IISc North Gate"]
  },

  "yeshwanthpur": {
    name: "Yeshwanthpur",
    tagline: "High-Rise Balcony Safety Nets & SS316 Invisible Grills in Yeshwanthpur",
    overview: "Yeshwanthpur is a vital transport and residential junction adjacent to Mathikere, featuring prominent high-rise residential towers and modern gated apartment complexes along Tumkur Road and near the APMC corridor.",
    apartmentLiving: "High-rise apartments in Yeshwanthpur stand 10 to 30 stories high, where balconies experience elevated wind exposure and open perimeter heights. Families with young children and pets require reinforced child safety nets or modern invisible grills to secure open balconies and French windows.",
    balconySafety: "Our technician-led crew in Yeshwanthpur installs heavy-duty knotted safety netting with breaking strengths exceeding 140kg per strand. For homeowners wanting a sleek modern look, we fit SS316 marine-grade invisible wire grills with high-precision tensioning.",
    birdProblem: "Urban pigeon activity around railway junctions and market corridors makes balcony ledges prime roosting spots. Our tightly-fitted safety nets permanently bar pest birds from balconies and utility shafts.",
    weatherDetails: "High-altitude towers face heavy wind gusts during Bangalore monsoons. Our anchors are drilled with diamond-core rotary tools directly into RCC beams to ensure total structural stability.",
    localities: ["Tumkur Road Corridor", "APMC Yard Area", "Yeshwanthpur 1st Block", "Kamala Nagar", "Model Colony", "Subhash Nagar"],
    landmarks: ["Yeshwanthpur Junction Railway Station", "Orion Mall", "Yeshwanthpur Metro Station", "Taj Yeshwantpur"]
  },

  "malleshwaram": {
    name: "Malleshwaram",
    tagline: "Aesthetic Invisible Grills & Balcony Safety Netting in Malleshwaram",
    overview: "Malleshwaram is one of Bangalore's most historic cultural neighborhoods, blending traditional heritage residences with boutique apartment complexes and contemporary builder floors along Margosa and Sampige roads.",
    apartmentLiving: "Residential properties in Malleshwaram often feature wide, open balconies and expansive French windows designed to capture cross ventilation. Homeowners prioritize safety solutions that preserve classic architectural charm without looking like iron cages.",
    balconySafety: "Annamayya Safety Nets specializes in unobtrusive SS316 invisible grills and translucent balcony safety netting for Malleshwaram apartments. The slim stainless cables ensure certified child fall safety while maintaining 100% natural breeze and leafy neighborhood views.",
    birdProblem: "Dense heritage trees throughout Malleshwaram support large bird populations that frequently roost on balcony railings. Our humane netting keeps your balconies spotless and sanitary.",
    weatherDetails: "We use weather-fortified materials engineered to resist humidity, rainfall, and intense sunlight without fading or embrittlement over a 10-year lifespan.",
    localities: ["Margosa Road", "Sampige Road", "15th Cross", "18th Cross", "Vyalikaval", "Malleswaram West"],
    landmarks: ["Sankey Tank", "Kadu Malleshwara Temple", "CTR (Shri Sagar)", "Malleshwaram Metro Station"]
  },

  "rt-nagar": {
    name: "RT Nagar",
    tagline: "Certified Balcony Safety Nets & Cloth Drying Hangers in RT Nagar",
    overview: "RT Nagar (Rabindranath Tagore Nagar) is a lively residential center in North Bangalore, connecting Ganganagar, Dinnur, and HMT Layout with multi-story family apartments and residential builder floors.",
    apartmentLiving: "Apartments in RT Nagar feature compact balconies and dedicated utility areas where space efficiency is essential. Residents need dependable toddler safety netting as well as ceiling-mounted cloth drying hangers to reclaim floor space.",
    balconySafety: "We install custom-measured balcony safety nets with diamond-locked knots that prevent children from slipping through railing bars. Anchored with stainless steel fasteners, our installations guarantee complete peace of mind.",
    birdProblem: "Pigeon nuisance on AC compressor ledges and balcony banisters is common across RT Nagar apartments. Our durable netting seals voids cleanly without damaging building aesthetics.",
    weatherDetails: "Our HDPE cords are pre-treated with UV inhibitors to prevent sun damage during hot summer months and rotting during wet monsoon spells.",
    localities: ["Dinnur Main Road", "HMT Layout", "Ganganagar", "Patelappa Layout", "MLA Layout", "Matadahalli"],
    landmarks: ["RT Nagar Police Station", "Rahmath Nagar Junction", "BDA Complex RT Nagar", "HMT Bhavan"]
  },

  "sadashivanagar": {
    name: "Sadashivanagar",
    tagline: "Premium SS316 Marine Invisible Grills in Sadashivanagar",
    overview: "Sadashivanagar is an elite residential neighborhood in North Bangalore known for prestigious bungalows, luxury duplex penthouses, and low-density upscale apartment buildings near Sankey Tank.",
    apartmentLiving: "Luxury homeowners and penthouse residents in Sadashivanagar demand top-tier safety solutions that blend seamlessly with refined interior architecture and exterior building facades.",
    balconySafety: "Annamayya Safety Nets installs architectural-grade SS316 marine invisible wire grills in Sadashivanagar. Featuring 2.5mm nylon-jacketed high-tensile stainless cables and powder-coated aluminum tracks, our grills deliver foolproof safety with zero aesthetic compromise.",
    birdProblem: "Proximity to lakes and dense canopies brings persistent bird activity. Our discreet invisible grills and transparent nets keep balconies pristine without ruining open landscape views.",
    weatherDetails: "Marine-grade SS316 cables contain molybdenum for total resistance to corrosion, moisture, and oxidation throughout all seasons in Bangalore.",
    localities: ["Sankey Road", "1st Main Road", "RMV Extension", "Armane Nagar", "Bashyam Circle Area"],
    landmarks: ["Sankey Tank Boat Club", "Bashyam Circle", "Sadashivanagar Post Office", "Cauvery Theatre Junction"]
  },

  "jalahalli": {
    name: "Jalahalli",
    tagline: "Durable Balcony Safety Nets & Ceiling Hangers in Jalahalli",
    overview: "Jalahalli is a tranquil green residential district in North-West Bangalore, home to prominent PSU housing colonies (BEL, HMT), air force stations, and contemporary apartment communities.",
    apartmentLiving: "Family residences across Jalahalli East and West feature spacious balconies and utility verandas that look out onto wooded gardens, requiring reliable child safety barriers and practical clothes drying systems.",
    balconySafety: "Our technician crew installs heavy-duty HDPE balcony nets and stainless steel invisible grills tailored to Jalahalli homes. We ensure tidy anchor finishing and drill-dust cleanup with every visit.",
    birdProblem: "Abundant tree cover in Jalahalli means frequent bird nesting in balconies and duct recesses. Our humane netting keeps outdoor spaces safe and hygienic.",
    weatherDetails: "High-grade polymer netting fortified with UV blockers ensures that our installations stay taut and supple for over a decade in outdoor weather.",
    localities: ["Jalahalli Cross", "Jalahalli East", "Jalahalli West", "BEL Layout", "Air Force Station Area", "Abbigere Road"],
    landmarks: ["BEL Hospital & Campus", "Jalahalli Metro Station", "Air Force Technical College", "HMT Factory Campus"]
  },

  "peenya": {
    name: "Peenya",
    tagline: "Heavy-Duty Safety Nets & Balcony Protection in Peenya",
    overview: "Peenya is one of Asia's premier industrial and manufacturing zones, bordered by extensive residential layouts and apartment enclaves housing industrial workforce families and professionals.",
    apartmentLiving: "Residential apartment complexes in Peenya 1st and 2nd Stages feature functional balconies exposed to industrial dust and ambient noise, where child fall containment and tidy laundry systems are top priorities.",
    balconySafety: "We install robust balcony safety nets with reinforced perimeter ropes anchored into solid concrete masonry. Our high-tensile nets withstand heavy physical impact and resist outdoor wear.",
    birdProblem: "Open structural beams and utility pipes in Peenya apartments attract pigeons. Our tightly-stretched netting prevents bird nesting and keeps balconies clean.",
    weatherDetails: "Our nets withstand temperature extremes and urban airborne particles without losing tension or tensile strength.",
    localities: ["Peenya 1st Stage", "Peenya 2nd Stage", "NTTF Circle", "T Dasarahalli Link", "SRS Road", "Industrial Estate Corridor"],
    landmarks: ["Peenya Metro Station", "NTTF Campus", "Peenya Police Station", "Goraguntepalya Junction"]
  },

  "dasarahalli": {
    name: "Dasarahalli",
    tagline: "Reliable Child Safety Nets & Balcony Netting in Dasarahalli",
    overview: "Dasarahalli is a rapidly growing residential pocket along the North Bangalore Tumkur Road metro line, characterized by new multi-story apartment developments and multi-family residential buildings.",
    apartmentLiving: "With an influx of young families moving into newly built apartment towers, ensuring high-altitude balcony railing safety and window fall protection has become vital.",
    balconySafety: "Annamayya Safety Nets provides on-time doorstep measurements and professional balcony netting across Dasarahalli. We install certified virgin HDPE nets with diamond knots that eliminate fall hazards.",
    birdProblem: "Apartment duct shafts and open balcony edges frequently suffer from pigeon infestations. Our netting seals off gaps securely while maintaining natural airflow.",
    weatherDetails: "We use rustproof stainless steel expansion fasteners and weather-fortified cords designed to endure monsoon rainstorms and scorching summer sun.",
    localities: ["Dasarahalli Metro Vicinity", "MEI Colony", "Chokkasandra", "Bagalagunte", "Prashanth Nagar", "Hesaraghatta Main Road"],
    landmarks: ["Dasarahalli Metro Station", "St. Mary's Convent School", "Tumkur Road Flyover", "Bagalagunte Lake"]
  },

  "nandini-layout": {
    name: "Nandini Layout",
    tagline: "Balcony Safety Nets & Space-Saving Hangers in Nandini Layout",
    overview: "Nandini Layout is an established residential locality perched on undulating terrain in North-West Bangalore, adjoining Mahalakshmi Layout and Rajajinagar near the famous ISKCON temple corridor.",
    apartmentLiving: "Split-level apartments and multi-floor builder homes in Nandini Layout feature steep balcony elevations and open stair banisters that require dependable child protection netting.",
    balconySafety: "Our technician team provides tailored safety netting with small aperture sizes that prevent climbing or slipping through railing gaps. We also install ceiling cloth drying pulleys for compact utility balconies.",
    birdProblem: "Elevated topography attracts birds roosting on upper ledges and parapet walls. Our humane netting keeps balconies clean and droppings-free.",
    weatherDetails: "Elevated positions experience brisk winds throughout the year. Our anchors are drilled deep into structural beams to guarantee maximum wind resistance.",
    localities: ["Nandini Layout 1st Block", "Saraswathipuram", "Kanteerava Nagar", "Ambedkar Nagar", "Mahalakshmi Layout Border"],
    landmarks: ["Nandini Layout Bus Stand", "Sri Prasanna Veeranjaneya Temple", "ISKCON Temple (Nearby)", "Mahalakshmi Metro Station"]
  },

  "rajajinagar": {
    name: "Rajajinagar",
    tagline: "Architectural Invisible Grills & Balcony Nets in Rajajinagar",
    overview: "Rajajinagar is a prestigious residential and commercial powerhouse in West-North Bangalore, home to landmark gated communities like Brigade Gateway as well as established residential blocks.",
    apartmentLiving: "High-rise luxury towers in Rajajinagar offer panoramic city views, requiring safety barriers that maintain unobstructed vistas while providing uncompromising child and pet security.",
    balconySafety: "Annamayya Safety Nets installs high-tensile SS316 marine-grade invisible wire grills and premium balcony safety nets across Rajajinagar. Our sleek cable installations meet the strict architectural standards of premier apartment RWAs.",
    birdProblem: "Urban pigeons congregating around apartment shafts and balconies create hygiene risks. Our fine netting blends into the building facade while barring pests permanently.",
    weatherDetails: "We utilize SS316 marine-grade stainless cables that resist weather corrosion, ensuring decades of reliable, maintenance-free performance.",
    localities: ["Rajajinagar 1st Block", "Rajajinagar 2nd Block", "Rajajinagar 3rd Block", "Dr. Rajkumar Road", "Basaveshwaranagar Border", "Subramanya Nagar"],
    landmarks: ["Brigade Gateway Campus", "World Trade Center Bangalore", "Orion Mall", "Rajajinagar Metro Station"]
  },

  "vidyaranyapura": {
    name: "Vidyaranya Pura",
    tagline: "Balcony Safety Nets & Cloth Drying Hangers in Vidyaranya Pura",
    overview: "Vidyaranya Pura is a sprawling, peaceful family neighborhood in North Bangalore bordered by BEL and MS Palya, characterized by tranquil residential layouts, villas, and mid-rise apartment communities.",
    apartmentLiving: "Families living in Vidyaranya Pura apartments appreciate their quiet green surroundings and wide balconies, making child fall containment and ceiling-mounted cloth hangers popular home additions.",
    balconySafety: "Our technician crew visits Vidyaranya Pura homes with material samples and provides clear, honest measurements. We install tightly-tensioned safety nets that keep children safe without blocking breezes.",
    birdProblem: "Pigeons and garden birds frequently roost on AC outdoor brackets and balcony ledges. Our humane netting keeps your home sanitary without harming birds.",
    weatherDetails: "All nets installed by Annamayya Safety Nets are UV-treated virgin polymer cords that will not become brittle or discolored under Bangalore sunlight.",
    localities: ["Vidyaranyapura Main Road", "BEL Layout", "Thindlu", "HMT Layout", "AMS Layout", "Doddabommasandra"],
    landmarks: ["Vidyaranyapura Post Office", "BEL Hospital", "Doddabommasandra Lake", "Nanjappa Circle"]
  },

  "hebbal": {
    name: "Hebbal",
    tagline: "High-Altitude Balcony Safety Nets & SS316 Invisible Grills in Hebbal",
    overview: "Hebbal is a renowned North Bangalore growth corridor centered around the famous Hebbal Flyover and Outer Ring Road, featuring prominent luxury high-rise apartment towers overlooking Hebbal Lake.",
    apartmentLiving: "Apartment towers in Hebbal regularly rise 15 to 35 floors high, where upper-level balconies experience severe wind currents and high-altitude fall hazards for toddlers and pets.",
    balconySafety: "Annamayya Safety Nets delivers certified SS316 marine invisible grills and heavy-gauge balcony safety nets for Hebbal towers. Precision-tensioned cables withstand immense forces while offering unbroken lake and city views.",
    birdProblem: "Proximity to Hebbal Lake brings active bird populations seeking roosting spots in apartment crevices. Our neat netting seals all entry points effectively.",
    weatherDetails: "Upper-story balconies experience high UV exposure and gale-force monsoon winds. Our installations use heavy-duty stainless anchors and marine-grade components.",
    localities: ["Hebbal Kempapura", "Bellary Road Corridor", "Outer Ring Road Junction", "Bhoopasandra", "Chinnappa Layout", "Geddalahalli"],
    landmarks: ["Hebbal Flyover", "Hebbal Lake & Park", "Manyata Tech Park Gateway", "Columbia Asia / Manipal Hospital Hebbal"]
  },

  "sanjay-nagar": {
    name: "Sanjay Nagar",
    tagline: "Balcony Safety Netting & Pulley Hangers in Sanjay Nagar",
    overview: "Sanjay Nagar is a peaceful residential enclave situated between New BEL Road, RMV 2nd Stage, and Mathikere, known for tree-canopied avenues and well-maintained apartment complexes.",
    apartmentLiving: "Residential apartments and builder homes in Sanjay Nagar feature cozy balconies and utility zones where floor space is at a premium. Residents prioritize safety netting and overhead drying hangers.",
    balconySafety: "Our Mathikere-based technician team provides same-day inspection in Sanjay Nagar. We install neat, tightly-anchored balcony nets and SS316 invisible grills with immaculate drill dust cleanup.",
    birdProblem: "Tree-dwelling birds frequently rest on balcony railings and utility pipes. Our UV-stabilized mesh keeps balconies pristine throughout the year.",
    weatherDetails: "Our copolymer nets and stainless fixtures are engineered to endure heavy Bangalore rainfall without stretching, sagging, or corroding.",
    localities: ["New BEL Road Corridor", "RMV 2nd Stage Border", "AECS Layout", "Nagasetty Halli", "Geddalahalli"],
    landmarks: ["Vaidya Hospital", "Sanjay Nagar Main Road", "Radhakrishna Temple", "CPRI Campus (Nearby)"]
  },

  "yelahanka": {
    name: "Yelahanka",
    tagline: "High-Tensile Safety Nets & SS316 Invisible Grills in Yelahanka",
    overview: "Yelahanka is a major residential and institutional hub in North Bangalore, featuring sprawling township projects, gated villa communities, and high-rise apartments near the International Airport corridor.",
    apartmentLiving: "Spacious multi-floor apartments in Yelahanka New Town and Old Town feature generous balconies and terrace spaces that need reliable fall containment for children and active family pets.",
    balconySafety: "Annamayya Safety Nets installs certified balcony safety nets and architectural invisible grills tailored to Yelahanka apartments. We offer punctual visits, clear estimates, and top-tier craftsmanship.",
    birdProblem: "Open green fields and lake shores in Yelahanka attract pigeons and pest birds to apartment ledges. Our humane netting provides lasting deterrence without harming birds.",
    weatherDetails: "Our virgin HDPE netting cords and marine-grade SS316 cables easily withstand high sun exposure and driving monsoon rain across North Bangalore.",
    localities: ["Yelahanka New Town", "Yelahanka Old Town", "Judicial Layout", "Kogilu Road", "Attur Layout", "Venkatesh Pura"],
    landmarks: ["Yelahanka Railway Station", "Rail Wheel Factory", "Allalasandra Lake", "Nagarjuna College Road"]
  }
};

const secondaryAreasData: Record<string, {
  name: string;
  tagline: string;
  desc: string;
  housingType: string;
  localizedDetail: string;
  localities: string[];
  landmarks: string[];
}> = {
  "whitefield": {
    name: "Whitefield",
    tagline: "Balcony Safety Nets & Invisible Grills in Whitefield",
    desc: "Major East Bangalore IT hub with premium high-rise apartments and villa communities.",
    housingType: "high-rise IT township towers and gated communities",
    localizedDetail: "High-altitude balconies require certified SS316 invisible wire grills and child safety netting.",
    localities: ["ITPL Road", "Hope Farm Junction", "EPIP Zone", "Kadugodi", "Varthur Road"],
    landmarks: ["ITPL", "Phoenix Marketcity", "Nexus Shantiniketan"]
  },
  "koramangala": {
    name: "Koramangala",
    tagline: "Balcony Safety Nets & Invisible Grills in Koramangala",
    desc: "Prime South-East Bangalore cosmopolitan enclave with upscale apartment complexes.",
    housingType: "luxury apartments, penthouses, and builder floors",
    localizedDetail: "Balconies and French windows need sleek invisible grills and child safety netting.",
    localities: ["1st Block", "3rd Block", "4th Block", "5th Block", "6th Block", "7th Block"],
    landmarks: ["Sony World Signal", "Forum Mall", "Jyoti Nivas College"]
  },
  "indiranagar": {
    name: "Indiranagar",
    tagline: "Balcony Safety Nets & Invisible Grills in Indiranagar",
    desc: "Premier East Bangalore residential district with boutique apartments and heritage homes.",
    housingType: "boutique apartments and contemporary builder floors",
    localizedDetail: "Aesthetic invisible grills and ceiling cloth drying hangers maximize balcony utility.",
    localities: ["100 Feet Road", "12th Main Road", "Defence Colony", "HAL 2nd Stage"],
    landmarks: ["Indiranagar Metro Station", "CMH Road", "100 Feet Road"]
  },
  "hsr-layout": {
    name: "HSR Layout",
    tagline: "Balcony Safety Nets & Invisible Grills in HSR Layout",
    desc: "Planned residential corridor connecting South Bangalore and tech hubs.",
    housingType: "family apartment complexes and modern multi-level builder floors",
    localizedDetail: "Open balconies need UV-stabilized child safety nets and overhead drying racks.",
    localities: ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 6", "Sector 7"],
    landmarks: ["Agara Lake", "BDA Complex HSR", "Silk Board Junction"]
  },
  "electronic-city": {
    name: "Electronic City",
    tagline: "Balcony Safety Nets & Invisible Grills in Electronic City",
    desc: "Prominent South Bangalore tech corridor with expansive high-rise residential townships.",
    housingType: "large gated apartment communities and high-rise towers",
    localizedDetail: "High-rise balconies require reinforced child safety netting and pigeon barriers.",
    localities: ["Phase 1", "Phase 2", "Neeladri Nagar", "Doddatoguru", "Bettadasanapura"],
    landmarks: ["Wipro Gate", "Infosys Campus", "Velankani Tech Park"]
  },
  "marathahalli": {
    name: "Marathahalli",
    tagline: "Balcony Safety Nets & Invisible Grills in Marathahalli",
    desc: "High-density residential and commercial junction along Outer Ring Road.",
    housingType: "residential apartment complexes and multi-tenant homes",
    localizedDetail: "Balcony nets and ceiling cloth hangers keep compact balconies safe and organized.",
    localities: ["Outer Ring Road", "Kalamandir Area", "Munnekolala", "Spice Garden"],
    landmarks: ["Marathahalli Bridge", "Innovative Multiplex", "Brand Factory Junction"]
  },
  "bellandur": {
    name: "Bellandur",
    tagline: "Balcony Safety Nets & Invisible Grills in Bellandur",
    desc: "Central IT corridor near Bellandur Lake with extensive high-rise apartment towers.",
    housingType: "modern multi-story apartment communities",
    localizedDetail: "High-rise towers need SS316 invisible grills for child safety and unobstructed views.",
    localities: ["Green Glen Layout", "Outer Ring Road", "Devarabisanahalli", "Kasavanahalli"],
    landmarks: ["EcoSpace Tech Park", "Central Mall Bellandur", "Bellandur Lake"]
  },
  "sarjapur-road": {
    name: "Sarjapur Road",
    tagline: "Balcony Safety Nets & Invisible Grills on Sarjapur Road",
    desc: "Rapidly expanding residential corridor with major gated townships.",
    housingType: "gated community apartment towers and villa projects",
    localizedDetail: "Perimeter child safety netting and stainless ceiling drying hangers are essential.",
    localities: ["Carmelaram", "Doddakannelli", "Kaikondrahalli", "Somapura"],
    landmarks: ["Wipro Corporate Office", "Decathlon Sarjapur", "RGA Tech Park"]
  },
  "jayanagar": {
    name: "Jayanagar",
    tagline: "Balcony Safety Nets & Invisible Grills in Jayanagar",
    desc: "Historic planned residential neighborhood in South Bangalore.",
    housingType: "traditional family residences and modern apartment complexes",
    localizedDetail: "Balconies need neat child safety nets and aesthetic invisible grills.",
    localities: ["3rd Block", "4th Block", "5th Block", "7th Block", "9th Block"],
    landmarks: ["Jayanagar 4th Block Shopping Complex", "South End Circle", "Madhavan Park"]
  },
  "jp-nagar": {
    name: "JP Nagar",
    tagline: "Balcony Safety Nets & Invisible Grills in JP Nagar",
    desc: "Popular residential sector in South Bangalore with apartments and independent houses.",
    housingType: "apartment buildings and residential layouts",
    localizedDetail: "Balcony nets protect children and pets while overhead hangers free up space.",
    localities: ["Phase 1", "Phase 2", "Phase 3", "Phase 5", "Phase 7", "Phase 8"],
    landmarks: ["Ranga Shankara", "Sarakki Lake", "Central Mall JP Nagar"]
  },
  "banashankari": {
    name: "Banashankari",
    tagline: "Balcony Safety Nets & Invisible Grills in Banashankari",
    desc: "Large residential suburb in South-West Bangalore.",
    housingType: "multi-story apartments and independent builder floors",
    localizedDetail: "Balconies benefit from durable UV-stabilized safety netting and ceiling racks.",
    localities: ["BSK 1st Stage", "BSK 2nd Stage", "BSK 3rd Stage", "Girinagar", "Kathriguppe"],
    landmarks: ["Banashankari Amma Temple", "PES University", "BDA Complex BSK"]
  },
  "btm-layout": {
    name: "BTM Layout",
    tagline: "Balcony Safety Nets & Invisible Grills in BTM Layout",
    desc: "Vibrant residential locality connecting Bannerghatta Road and Koramangala.",
    housingType: "residential apartment buildings and rental floors",
    localizedDetail: "Balcony fall protection and ceiling cloth drying systems keep apartments safe.",
    localities: ["BTM 1st Stage", "BTM 2nd Stage", "Udupi Garden Signal", "Tavarekere"],
    landmarks: ["Madiwala Lake", "Udupi Garden", "BTM Water Tank"]
  },
  "kalyan-nagar": {
    name: "Kalyan Nagar",
    tagline: "Balcony Safety Nets & Invisible Grills in Kalyan Nagar",
    desc: "Popular North-East Bangalore residential district near Outer Ring Road.",
    housingType: "modern residential flats and boutique builder homes",
    localizedDetail: "Balconies need child fall safety nets and stainless invisible grills.",
    localities: ["HRBR Layout 1st Block", "HRBR Layout 2nd Block", "Kammanahalli Main Road", "Babusapalya"],
    landmarks: ["Jaluram Temple", "Kammanahalli High Street", "Kalyan Nagar Bus Stand"]
  },
  "sahakar-nagar": {
    name: "Sahakar Nagar",
    tagline: "Balcony Safety Nets & Invisible Grills in Sahakar Nagar",
    desc: "Established North Bangalore locality adjacent to Hebbal.",
    housingType: "peaceful residential apartments and family homes",
    localizedDetail: "Balconies require child protection nets and ceiling-mounted drying pulleys.",
    localities: ["Sector A", "Sector B", "Sector C", "Sector D", "Sector E", "Sector F"],
    landmarks: ["Sahakar Nagar Main Road", "Hebbal Lake Vicinity", "Chairman's Club"]
  }
};

export const areasData: Record<string, AreaDetail> = {};

// Build Primary Cluster Areas (Full Rich Unique Content)
Object.entries(primaryClusterData).forEach(([slug, data]) => {
  const nearby = primaryClusterSlugs.filter((s) => s !== slug).slice(0, 4);
  areasData[slug] = {
    slug,
    name: data.name,
    isPrimaryCluster: true,
    tagline: data.tagline,
    overview: data.overview,
    apartmentLiving: data.apartmentLiving,
    balconySafety: data.balconySafety,
    birdProblem: data.birdProblem,
    weatherDetails: data.weatherDetails,
    localities: data.localities,
    landmarks: data.landmarks,
    customerReviews: [],
    nearbySlugs: nearby
  };
});

// Build Secondary Areas (Clean Shorter Structure)
Object.entries(secondaryAreasData).forEach(([slug, data]) => {
  const nearby = Object.keys(secondaryAreasData).filter((s) => s !== slug).slice(0, 4);
  areasData[slug] = {
    slug,
    name: data.name,
    isPrimaryCluster: false,
    tagline: data.tagline,
    overview: `${data.name} is an active residential locality in Bangalore. Annamayya Safety Nets, based in Mathikere, serves homeowners and apartments across ${data.name} with certified balcony safety netting, SS316 invisible grills, and ceiling cloth drying systems.`,
    apartmentLiving: `In ${data.name}, residential living primarily encompasses ${data.housingType}. ${data.localizedDetail}`,
    balconySafety: `High-rise living in ${data.name} offers great ventilation and views, but open balconies pose serious fall hazards for small children and pets. Annamayya Safety Nets delivers heavy-duty balcony safety nets and architectural invisible grills engineered to provide certified fall prevention.`,
    birdProblem: `Pigeons and urban birds frequently roost in apartment balconies and AC outdoor unit ledges across ${data.name}. Our humane, UV-stabilized netting solutions keep balconies clean without harming wildlife.`,
    weatherDetails: `${data.name} experiences moderate tropical climate, sunny summers, and strong monsoon showers. We exclusively install UV-fortified HDPE copolymer nets and marine-grade SS316 stainless cables that resist weather deterioration for over 10 years.`,
    localities: data.localities,
    landmarks: data.landmarks,
    customerReviews: [],
    nearbySlugs: nearby
  };
});

export const areasList = Object.values(areasData);
export const bangaloreAreasList = Object.keys(areasData);
export const andhraPradeshAreasList = bangaloreAreasList;
