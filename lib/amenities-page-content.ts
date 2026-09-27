import {
  EAGLE_HILLS_CITY,
  EAGLE_HILLS_COMMUNITY_NAME,
  EAGLE_HILLS_VILLAGE,
} from "@/lib/eagle-hills-geo";

export type AmenityContentSection = {
  id: string;
  heading: string;
  body: string;
};

export const AMENITIES_PAGE_INTRO = `${EAGLE_HILLS_COMMUNITY_NAME} is a guard-gated custom-home enclave in ${EAGLE_HILLS_VILLAGE} village within master-planned Summerlin, ${EAGLE_HILLS_CITY}. Daily errands, dining, medical care, and recreation are concentrated along Charleston Boulevard, Downtown Summerlin, and the village centers that ring the 215 Beltway—while Red Rock Canyon and trail networks sit to the west. Use the map to explore categories; confirm school boundaries, HOA rules, and commute times for the specific address you are considering.`;

export const AMENITY_CONTENT_SECTIONS: AmenityContentSection[] = [
  {
    id: "dining",
    heading: "Dining near Eagle Hills",
    body:
      "Downtown Summerlin—about a 10–15 minute drive south of Eagle Hills, depending on traffic—clusters full-service restaurants, fast-casual options, and patios along Festival Plaza Drive. Yard House is one anchor sit-down option in that district. For coffee and quick meetings, Starbucks and other cafes operate in the Downtown Summerlin and Town Center Drive area. Closer to the village, Trails Village Center and other Summerlin strip centers offer additional everyday options without crossing town.",
  },
  {
    id: "parks-recreation",
    heading: "Parks, trails & recreation",
    body:
      "Inside the gates, Eagle Hills residents use the community’s private park, tennis courts, and picnic pavilion (HOA amenities—verify access with the association). Just outside the enclave, The Hills Park on Hillpointe Road provides public green space in the village. TPC Summerlin (private club along Village Center Circle) borders the area as a landscape feature; public tee times are available at nearby courses such as TPC Las Vegas on Canyon Run Drive and Angel Park on Rampart Boulevard. Summerlin’s regional trail system connects villages for walking and cycling; Red Rock Canyon National Conservation Area is a short drive west for hiking and scenic drives.",
  },
  {
    id: "golf",
    heading: "Golf",
    body:
      "TPC Las Vegas (9851 Canyon Run Dr) is a public PGA TOUR course in Summerlin, a common choice for buyers who want resort-style golf without a private membership. Angel Park Golf Club on Rampart Boulevard offers additional public layouts. TPC Summerlin at Village Center Circle is a private championship club adjacent to Eagle Hills; playing privileges require membership or an approved guest arrangement—not a walk-up public tee time.",
  },
  {
    id: "healthcare",
    heading: "Healthcare & pharmacies",
    body:
      "Summerlin Hospital Medical Center on North Town Center Drive and Southern Hills Hospital on West Sunset Road are the two full-service hospitals most often referenced for west-Las Vegas care. Urgent care, specialists, and imaging centers line Charleston and the medical corridor toward the Strip. CVS and other chain pharmacies operate along Charleston Boulevard and in nearby shopping centers for prescriptions and over-the-counter needs.",
  },
  {
    id: "shopping-grocery",
    heading: "Shopping & grocery",
    body:
      "Downtown Summerlin is the primary open-air retail district—department stores, specialty shops, and services around Festival Plaza Drive. Whole Foods Market on South Town Center Drive anchors organic and prepared foods for many Summerlin households. Smith’s Food and Drug on West Charleston Boulevard covers mainstream grocery runs. Costco, Target, and additional big-box options sit along the 215 corridor within a reasonable drive.",
  },
  {
    id: "schools",
    heading: "Schools (verify for your address)",
    body:
      "Clark County School District assignments depend on the exact parcel, not the neighborhood marketing name. Which CCSD schools are assigned to Eagle Hills addresses? Verify with the CCSD Zoning Search before you rely on a school name in a purchase decision. Palo Verde High School is one high school many west Summerlin buyers research; elementary and middle assignments vary by street. Always confirm current zoning with CCSD and the seller’s disclosure.",
  },
  {
    id: "commute",
    heading: "Commute & key destinations",
    body:
      "Eagle Hills sits west of the 215 Beltway with access via Charleston Boulevard and Summerlin Parkway. Approximate drive times vary with traffic: Downtown Summerlin is often 10–15 minutes; Harry Reid International Airport is commonly 25–35 minutes; the Las Vegas Strip resort corridor is often 20–30 minutes; Red Rock Canyon visitor areas are often under 20 minutes. These are estimates—use the map Directions links and test your typical travel times during the hours you would commute.",
  },
];

export const AMENITIES_FAQ: ReadonlyArray<{ question: string; answer: string }> =
  [
    {
      question: `What grocery stores are near ${EAGLE_HILLS_COMMUNITY_NAME}?`,
      answer:
        "Whole Foods Market on South Town Center Drive in Downtown Summerlin and Smith’s Food and Drug on West Charleston Boulevard are frequently used full-service grocers for west Summerlin, each within a typical 10–20 minute drive of Eagle Hills depending on traffic.",
    },
    {
      question: `How far is ${EAGLE_HILLS_COMMUNITY_NAME} from the Las Vegas Strip?`,
      answer:
        "Most drivers reach the central Strip resort corridor in roughly 20–30 minutes from Eagle Hills via Charleston Boulevard or the 215 Beltway, but evening and event traffic can add time—test your route during the hours you would travel.",
    },
    {
      question: `Are there hospitals near ${EAGLE_HILLS_COMMUNITY_NAME}?`,
      answer:
        "Yes—Summerlin Hospital Medical Center on North Town Center Drive and Southern Hills Hospital on West Sunset Road are the two major hospitals commonly used by Summerlin residents west of the 215.",
    },
    {
      question: `Is ${EAGLE_HILLS_COMMUNITY_NAME} guard-gated?`,
      answer:
        "Eagle Hills is a guard-gated custom-home community in Summerlin; guests and showings are typically cleared at the gate, so plan tours with your agent in advance.",
    },
    {
      question: `What golf is next to ${EAGLE_HILLS_COMMUNITY_NAME}?`,
      answer:
        "TPC Summerlin (private club at Village Center Circle) borders the neighborhood. For public golf, TPC Las Vegas on Canyon Run Drive and Angel Park on Rampart Boulevard are nearby options—confirm tee times and access on each course’s official site.",
    },
    {
      question: `How do I get to Downtown Summerlin from ${EAGLE_HILLS_COMMUNITY_NAME}?`,
      answer:
        "Head south toward Sahara Avenue and Festival Plaza Drive; Downtown Summerlin’s shops and restaurants usually take about 10–15 minutes by car outside peak congestion.",
    },
    {
      question: `What parks can ${EAGLE_HILLS_COMMUNITY_NAME} residents use?`,
      answer:
        "Residents enjoy Eagle Hills’ private HOA park, tennis, and pavilion inside the gates, plus public space at The Hills Park on Hillpointe Road and Summerlin’s regional trails that connect villages.",
    },
    {
      question: `Which schools serve ${EAGLE_HILLS_COMMUNITY_NAME} addresses?`,
      answer:
        "CCSD zoning is address-specific. Use the CCSD Zoning Search to see which elementary, middle, and high schools are assigned to the parcel you are considering—do not rely on neighborhood marketing names alone.",
    },
    {
      question: `Who can help me buy or sell in ${EAGLE_HILLS_COMMUNITY_NAME}?`,
      answer:
        "Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties represents buyers and sellers in Eagle Hills and Summerlin—use the phone and email in the site footer to schedule a consultation or private tour.",
    },
  ];
