import { Metadata } from "next";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/utils/schema";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Customer Reviews & Google Ratings | Annamayya Safety Nets Bangalore",
  description:
    "Read 32 verified 5.0-star customer reviews for Annamayya Safety Nets based in Mathikere, serving all of Bangalore with certified safety nets, invisible grills, and cloth hangers.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Customer Reviews & Google Ratings | Annamayya Safety Nets Bangalore",
    description:
      "Read 32 verified 5.0-star customer reviews for Annamayya Safety Nets based in Mathikere, serving all of Bangalore with certified safety nets, invisible grills, and cloth hangers.",
    url: "https://annamayyasafetynets.in/testimonials",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Annamayya Safety Nets Customer Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews & Google Ratings | Annamayya Safety Nets Bangalore",
    description:
      "Read 32 verified 5.0-star customer reviews for Annamayya Safety Nets based in Mathikere, serving all of Bangalore.",
    images: ["/images/og-image.webp"],
  },
};

export default function TestimonialsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Testimonials", item: "/testimonials" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
      />
      <TestimonialsClient />
    </>
  );
}
