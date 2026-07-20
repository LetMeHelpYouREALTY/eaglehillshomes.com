export const site = {
  name: "Eagle Hills Homes by Dr. Jan Duffy",
  shortName: "Dr. Jan Duffy",
  agentTitle: "REALTOR® | Eagle Hills & Summerlin Specialist",
  brand: "Eagle Hills Homes",
  tagline:
    "Guard-gated Eagle Hills homes in Summerlin — buyer and seller representation with live MLS search",
  domain: "eaglehillshomes.com",
  url: "https://www.eaglehillshomes.com",
  email: "drduffy@bhhsnv.com",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  realscoutPortal: "https://drjanduffy.realscout.com/",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ||
    "https://calendly.com/drjanduffy/showing",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dr+Jan+Duffy+Berkshire+Hathaway+HomeServices+Las+Vegas",
  agentPhotoSrc: "/realty/dr-jan-duffy.jpg",
  agentPhotoAlt:
    "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties",
  city: "Las Vegas",
  state: "NV",
  region: "Eagle Hills, The Hills South, Summerlin",
  community: "Eagle Hills",
  village: "The Hills South",
  zip: "89134",

  phone: {
    display: "(702) 222-1964",
    tel: "+17022221964",
    href: "tel:+17022221964",
  },

  address: {
    streetAddress: "9406 W Lake Mead Blvd, Suite 100",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    addressCountry: "US",
  },

  hours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "10:00-16:00",
    sunday: "By Appointment",
  },

  hoursCustomerCopy:
    "Mon–Fri 9:00am–6:00pm · Sat 10:00am–4:00pm · Sun by appointment",

  geo: {
    latitude: 36.1941,
    longitude: -115.2678,
  },

  /** Eagle Hills approximate map pin (Summerlin North / 89134). */
  communityGeo: {
    latitude: 36.2045,
    longitude: -115.2925,
  },

  serviceAreas: [
    "Eagle Hills, Summerlin, NV",
    "The Hills South, Summerlin, NV",
    "Summerlin, NV",
    "Las Vegas, NV 89134",
    "Greater Las Vegas Valley",
  ],

  rating: {
    value: "4.9",
    count: "200",
  },
} as const;

export const navLinks = [
  { label: "Homes for Sale", href: "/homes-for-sale" },
  { label: "Community", href: "/community" },
  { label: "Buyers", href: "/buyers" },
  { label: "Sellers", href: "/sellers" },
  { label: "Valuation", href: "/home-valuation" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function getRealscoutAgentId(): string {
  return (
    process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID?.trim() || "QWdlbnQtMjI1MDUw"
  );
}

export function getGoogleBusinessProfileUrl(): string | undefined {
  const u = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL?.trim();
  return u || undefined;
}

export function getAgentSameAsUrls(): string[] {
  const urls = [
    "https://www.bhhsnv.com/real-estate-agent/4986/dr-jan-duffy",
  ];
  const gbp = getGoogleBusinessProfileUrl();
  if (gbp) urls.push(gbp);
  return [...new Set(urls)];
}

export function getDirectionsUrl(): string {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    site.address;
  const query = encodeURIComponent(
    `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`,
  );
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
}

export function getOfficeMapEmbedUrl(): string {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    site.address;
  const query = encodeURIComponent(
    `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`,
  );
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getCommunityMapEmbedUrl(): string {
  const query = encodeURIComponent(
    `Eagle Hills Summerlin Las Vegas NV ${site.zip}`,
  );
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function formatFullAddress(): string {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    site.address;
  return `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`;
}

export const FALLBACK_HERO_IMAGE = "/realty/heroes/hero-homes-for-sale.jpg";
