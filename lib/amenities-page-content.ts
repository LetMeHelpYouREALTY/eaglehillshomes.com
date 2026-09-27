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
      "Downtown Summerlin—about a 10–15 minute drive south of Eagle Hills, depending on traffic—clusters full-service restaurants, fast-casual options, and patios along Festival Plaza Drive. Yard House and Brio Italian Grille are anchor sit-down choices in that district. For coffee and quick meetings, Starbucks and other cafes operate inside the same retail core. Closer to the village, Trails Village Center and other Summerlin strip centers offer additional everyday options without crossing town.",
  },
  {
    id: "parks-recreation",
    heading: "Parks, trails & recreation",
    body:
      "Inside the gates, Eagle Hills residents use the community’s private park, tennis courts, and picnic pavilion (HOA amenities—verify access with the association). Just outside the enclave, The Hills Park on Hillpointe Road provides public green space in the village. TPC Summerlin borders the neighborhood along Village Center Circle—a private championship club, not a public course, but a defining landscape feature for the area. Summerlin’s regional trail system connects villages for walking and cycling; Red Rock Canyon National Conservation Area is a short drive west for hiking and scenic drives.",
  },
  {
    id: "golf",
    heading: "Golf",
    body:
      "TPC Summerlin (1700 Village Center Cir) is the headline golf address adjacent to Eagle Hills. Membership is required to play the TPC course; guests typically visit through a member or approved outing. Other Summerlin courses— including public and resort options farther west—expand choices for buyers who want variety beyond the private club next door.",
  },
  {
    id: "healthcare",
    heading: "Healthcare & pharmacies",
    body:
      "Summerlin Hospital Medical Center on North Town Center Drive and Southern Hills Hospital on West Sunset Boulevard are the two full-service hospitals most often referenced for west-Las Vegas care. Urgent care, specialists, and imaging centers line Charleston and the medical corridor toward the Strip. CVS and other chain pharmacies operate along Charleston Boulevard and in nearby shopping centers for prescriptions and over-the-counter needs.",
  },
  {
    id: "shopping-grocery",
    heading: "Shopping & grocery",
    body:
      "Downtown Summerlin is the primary open-air retail district—department stores, specialty shops, and services around Festival Plaza Drive. Whole Foods Market on Lordsburg Drive anchors organic and prepared foods for many Summerlin households. Smith’s Food and Drug on West Charleston Boulevard covers mainstream grocery runs. Costco, Target, and additional big-box options sit along the 215 corridor within a reasonable drive.",
  },
  {
    id: "schools",
    heading: "Schools (verify for your address)",
    body:
      "Clark County School District assignments depend on the exact parcel, not the neighborhood marketing name. Palo Verde High School serves much of west Summerlin; Ernest May Elementary is one of several elementary options families research when moving into The Hills villages. Always confirm current zoning with CCSD and the seller’s disclosure before you rely on a school name in a purchase decision.",
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
        "Whole Foods Market in Downtown Summerlin and Smith’s Food and Drug on West Charleston Boulevard are the most frequently used full-service grocers for west Summerlin, each within a typical 10–20 minute drive of Eagle Hills depending on traffic.",
    },
    {
      question: `How far is ${EAGLE_HILLS_COMMUNITY_NAME} from the Las Vegas Strip?`,
      answer:
        "Most drivers reach the central Strip resort corridor in roughly 20–30 minutes from Eagle Hills via Charleston Boulevard or the 215 Beltway, but evening and event traffic can add time—test your route during the hours you would travel.",
    },
    {
      question: `Are there hospitals near ${EAGLE_HILLS_COMMUNITY_NAME}?`,
      answer:
        "Yes—Summerlin Hospital Medical Center on North Town Center Drive and Southern Hills Hospital on West Sunset Boulevard are the two major hospitals commonly used by Summerlin residents west of the 215.",
    },
    {
      question: `Is ${EAGLE_HILLS_COMMUNITY_NAME} guard-gated?`,
      answer:
        "Eagle Hills is a guard-gated custom-home community in Summerlin; guests and showings are typically cleared at the gate, so plan tours with your agent in advance.",
    },
    {
      question: `What golf is next to ${EAGLE_HILLS_COMMUNITY_NAME}?`,
      answer:
        "TPC Summerlin borders the neighborhood at 1700 Village Center Circle; it is a private club course, so playing privileges require membership or an approved guest arrangement—not a public tee time.",
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
      question: `Who can help me buy or sell in ${EAGLE_HILLS_COMMUNITY_NAME}?`,
      answer:
        "Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties represents buyers and sellers in Eagle Hills and Summerlin—use the phone and email in the site footer to schedule a consultation or private tour.",
    },
  ];
