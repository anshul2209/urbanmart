import React from "react";

export function OrganizationJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UrbanMart",
    url: "https://urbanmart.com",
    logo: "https://urbanmart.com/logo.png",
    description: "UrbanMart is your premier destination for beauty products, fragrances, furniture, and groceries. Shop with confidence and enjoy fast delivery.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Commerce Street",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-URBAN-MART",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://facebook.com/urbanmart",
      "https://twitter.com/urbanmart",
      "https://instagram.com/urbanmart",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://urbanmart.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return React.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(structuredData),
    },
  });
}
