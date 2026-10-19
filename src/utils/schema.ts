export interface SchemaBreadcrumb {
  name: string;
  item: string;
}

export const CITIES_BANGALORE = [
  "Mathikere",
  "Yeshwanthpur",
  "Malleshwaram",
  "RT Nagar",
  "Sadashivanagar",
  "Jalahalli",
  "Peenya",
  "Dasarahalli",
  "Nandini Layout",
  "Rajajinagar",
  "Vidyaranya Pura",
  "Hebbal",
  "Sanjay Nagar",
  "Yelahanka",
  "Whitefield",
  "Koramangala",
  "Indiranagar",
  "HSR Layout",
  "Electronic City",
  "Marathahalli",
  "Bellandur",
  "Sarjapur Road",
  "Jayanagar",
  "JP Nagar"
];

export const ALL_ACTIVE_SERVICES = [
  "Balcony Safety Nets",
  "Child Safety Nets",
  "Pigeon Safety Nets",
  "Balcony Invisible Grills",
  "Window Invisible Grills",
  "Ceiling Cloth Drying Hangers",
  "Balcony Cloth Drying Hangers",
  "Wall Mounted Cloth Hangers"
];

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Annamayya Safety Nets",
    "url": "https://annamayyasafetynets.in",
    "logo": "https://annamayyasafetynets.in/images/logo/annamayya-safety-nets-logo-light.svg",
    "image": "https://annamayyasafetynets.in/images/og-image.webp",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 62810 48162",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Kannada", "Telugu", "Hindi"]
      }
    ]
  };
}

export function generateLocalBusinessSchema(areaName?: string) {
  const citiesServed = areaName ? [areaName] : CITIES_BANGALORE;

  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `https://annamayyasafetynets.in/#localbusiness${areaName ? `-${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "name": areaName ? `Annamayya Safety Nets - ${areaName}` : "Annamayya Safety Nets",
    "url": areaName
      ? `https://annamayyasafetynets.in/areas/${areaName.toLowerCase().replace(/\s+/g, "-")}`
      : "https://annamayyasafetynets.in",
    "telephone": "+91 62810 48162",
    "email": "info.annamayyasafetynets@gmail.com",
    "image": "https://annamayyasafetynets.in/images/og-image.webp",
    "logo": "https://annamayyasafetynets.in/images/logo/annamayya-safety-nets-logo-light.svg",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "868, 3rd Main Road, MES Road, Sharadamba Nagar, Muthyala Nagar, Gokula Extension, Mathikere",
      "addressLocality": "Mathikere, Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560054",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0426163,
      "longitude": 77.5510764
    },
    "hasMap": "https://maps.google.com/maps?q=13.0426163,77.5510764&hl=en&z=16&output=embed",
    "sameAs": [
      "https://maps.app.goo.gl/tjw2RZBQLBjJY1rE7",
      "https://wa.me/916281048162"
    ],
    "areaServed": citiesServed.map((city) => ({
      "@type": "City",
      "name": `${city}, Bangalore, Karnataka`
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safety Nets, Invisible Grills & Cloth Drying Hangers Installation Services",
      "itemListElement": ALL_ACTIVE_SERVICES.map((srv, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": srv,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Annamayya Safety Nets"
          }
        },
        "position": idx + 1
      }))
    }
  };
}

export function generateServiceProductSchema(serviceName: string, serviceSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${serviceName} Installation in Bangalore`,
    "description": `Professional ${serviceName.toLowerCase()} installation by Annamayya Safety Nets across Mathikere and Bangalore, Karnataka. Punctual visits, neat finish, and honest quotes.`,
    "brand": {
      "@type": "Brand",
      "name": "Annamayya Safety Nets"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "15",
      "highPrice": "180",
      "offerCount": "50+",
      "availability": "https://schema.org/InStock",
      "url": `https://annamayyasafetynets.in/services/${serviceSlug}`
    }
  };
}

export function generateBreadcrumbSchema(items: SchemaBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith("http")
        ? crumb.item
        : `https://annamayyasafetynets.in${crumb.item.startsWith("/") ? crumb.item : `/${crumb.item}`}`
    }))
  };
}

export function generateFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateServiceSchema(
  serviceName: string,
  category: string,
  description: string,
  areaName?: string,
  serviceSlug?: string
) {
  const slug = serviceSlug || serviceName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const serviceArea = areaName ? `${areaName}, Bangalore, Karnataka` : "Bangalore, Karnataka";
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://annamayyasafetynets.in/services/${slug}${areaName ? `/${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}#service`,
    "name": areaName ? `${serviceName} in ${areaName}` : serviceName,
    "serviceType": category,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Annamayya Safety Nets",
      "telephone": "+91 62810 48162",
      "email": "info.annamayyasafetynets@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "868, 3rd Main Road, MES Road, Sharadamba Nagar, Muthyala Nagar, Gokula Extension, Mathikere",
        "addressLocality": "Mathikere, Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560054",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0426163,
        "longitude": 77.5510764
      },
      "hasMap": "https://maps.google.com/maps?q=13.0426163,77.5510764&hl=en&z=16&output=embed",
      "sameAs": [
        "https://maps.app.goo.gl/tjw2RZBQLBjJY1rE7",
        "https://wa.me/916281048162"
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": serviceArea
    },
    "termsOfService": "https://annamayyasafetynets.in/terms-and-conditions"
  };
}

export function generateArticleSchema(
  headline: string,
  description: string,
  image: string,
  datePublished: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image.startsWith("http")
      ? image
      : `https://annamayyasafetynets.in${image.startsWith("/") ? image : `/${image}`}`,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "author": {
      "@type": "Organization",
      "name": "Annamayya Safety Nets",
      "url": "https://annamayyasafetynets.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Annamayya Safety Nets",
      "logo": {
        "@type": "ImageObject",
        "url": "https://annamayyasafetynets.in/images/logo/annamayya-safety-nets-logo-light.svg"
      }
    }
  };
}
