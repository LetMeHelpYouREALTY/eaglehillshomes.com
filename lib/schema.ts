import { formatFullAddress, getAgentSameAsUrls, site } from "@/lib/site";

export function realEstateAgentSchema(pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.name,
    alternateName: site.brand,
    url: pageUrl || site.url,
    telephone: site.phone.tel,
    email: site.email,
    image: `${site.url}${site.agentPhotoSrc}`,
    priceRange: "$$$$",
    sameAs: getAgentSameAsUrls(),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    areaServed: site.serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    },
    identifier: site.license,
    description: `${site.shortName}, ${site.brokerage}. ${site.tagline}. Office at ${formatFullAddress()}.`,
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function localBusinessSchema() {
  return {
    ...realEstateAgentSchema(),
    "@type": ["RealEstateAgent", "LocalBusiness"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand,
    alternateName: site.name,
    url: site.url,
    description: site.tagline,
    publisher: {
      "@type": "RealEstateAgent",
      name: site.name,
      telephone: site.phone.tel,
      url: site.url,
    },
    inLanguage: "en-US",
  };
}
