import {
  EAGLE_HILLS_HOME_COUNT,
  formatUsd,
  EAGLE_HILLS_LISTING_STATS,
} from "@/lib/eagle-hills-community";
import { site } from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaqs: FaqItem[] = [
  {
    question: "What is Eagle Hills in Summerlin?",
    answer: `Eagle Hills is a guard-gated enclave of about ${EAGLE_HILLS_HOME_COUNT} custom homes in The Hills South village of Summerlin, Las Vegas (ZIP ${site.zip}). Homes were custom-built primarily in the mid-1990s through early 2000s on landscaped lots near TPC Summerlin.`,
  },
  {
    question: "How do I search Eagle Hills homes for sale?",
    answer: `Use the live RealScout office listings on this site to browse MLS inventory, then call ${site.shortName} at ${site.phone.display} or book a showing on Calendly for private tours inside the gate.`,
  },
  {
    question: "What price range should buyers expect in Eagle Hills?",
    answer: `Active Eagle Hills inventory often clusters in the multi-million range. A recent snapshot showed about ${EAGLE_HILLS_LISTING_STATS.totalListings} listings from ${formatUsd(EAGLE_HILLS_LISTING_STATS.lowestPrice)} to ${formatUsd(EAGLE_HILLS_LISTING_STATS.highestPrice)}. Confirm live pricing on the listings widget — figures change as homes sell.`,
  },
  {
    question: "Who represents buyers and sellers in Eagle Hills?",
    answer: `${site.shortName} (${site.license}) with ${site.brokerage} provides buyer and seller representation focused on Eagle Hills and nearby Summerlin villages. Call ${site.phone.display} or schedule on Calendly.`,
  },
  {
    question: "What are your business hours?",
    answer: `${site.hoursCustomerCopy} Hours should match the Google Business Profile — update GBP if availability changes.`,
  },
  {
    question: "Are listing details guaranteed?",
    answer:
      "Information from listing brokers and public records is deemed reliable but should be independently verified. Square footage, taxes, HOA fees, and status can change. Confirm material facts with your agent before relying on them.",
  },
];

export const buyerFaqs: FaqItem[] = [
  {
    question: "How do gated-community showings work in Eagle Hills?",
    answer: `Eagle Hills is guard-gated. ${site.shortName} coordinates gate access, listing agent appointments, and private tours so you can evaluate floor plans, lot orientation, and condition without wasted trips.`,
  },
  {
    question: "Can relocating buyers tour virtually first?",
    answer:
      "Yes. Out-of-area buyers get video walkthroughs, lot comparisons, and lender introductions familiar with Nevada purchases before flying in for final tours.",
  },
  {
    question: "Do you help with neighboring Summerlin villages too?",
    answer:
      "Yes. Many buyers compare Eagle Hills with nearby Hills South and Summerlin North addresses. Representation covers the search, offer strategy, and closing across those adjacent villages.",
  },
];

export const sellerFaqs: FaqItem[] = [
  {
    question: "How do you price an Eagle Hills home?",
    answer:
      "Pricing starts with recent Eagle Hills comps, active competition inside the gate, days on market, lot size, and condition. You receive a written CMA before listing.",
  },
  {
    question: "What marketing do Eagle Hills sellers receive?",
    answer: `Sellers get MLS exposure, RealScout syndication, photography coordination, and Berkshire Hathaway HomeServices marketing tools aimed at luxury Summerlin buyers. Call ${site.phone.display} for a listing plan.`,
  },
];

export const communityFaqs: FaqItem[] = [
  {
    question: "Where is Eagle Hills located?",
    answer: `Eagle Hills sits in The Hills South village of Summerlin North along the Hillpointe Road / Hills Center Drive area in ZIP ${site.zip}, near the roundabout off Village Center Circle and close to TPC Summerlin.`,
  },
  {
    question: "Is Eagle Hills on a golf course?",
    answer:
      "Eagle Hills is not a golf-course community in the way some Summerlin enclaves are, but residents are near TPC Summerlin for championship golf access. Confirm lot-specific views and proximity for any address you tour.",
  },
  {
    question: "How many homes are in Eagle Hills?",
    answer: `About ${EAGLE_HILLS_HOME_COUNT} custom homes make up this boutique guard-gated neighborhood — small enough to feel intimate, large enough for architectural variety.`,
  },
];
