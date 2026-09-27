import {
  AGENT_NAME,
  BROKERAGE,
  EMAIL,
  LICENSE_ID,
  PHONE_DISPLAY,
  PHONE_E164,
} from "@/lib/site-contact";
import { EAGLE_HILLS_COMMUNITY_NAME } from "@/lib/eagle-hills-geo";

export function AmenitiesAgentCta() {
  const telHref = `tel:${PHONE_E164}`;
  const mailHref = `mailto:${EMAIL}`;

  return (
    <section
      className="mt-14 rounded-xl border border-slate-200 bg-slate-50/90 p-6 md:p-8"
      aria-labelledby="amenities-agent-cta"
    >
      <h2 id="amenities-agent-cta" className="text-xl font-semibold text-slate-900">
        Your Eagle Hills local REALTOR®
      </h2>
      <p className="mt-3 text-slate-600">
        {AGENT_NAME} ({LICENSE_ID}) with {BROKERAGE} helps buyers and sellers navigate{" "}
        {EAGLE_HILLS_COMMUNITY_NAME}, HOA access, and Summerlin comparables—with the same phone
        and email published in this site&apos;s footer and structured data.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          className="inline-flex items-center justify-center rounded-md bg-[#0e64c8] px-4 py-2 text-sm font-medium text-white hover:bg-[#0c549e]"
          href={telHref}
        >
          Call {PHONE_DISPLAY}
        </a>
        <a
          className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
          href={mailHref}
        >
          Email {AGENT_NAME}
        </a>
      </div>
    </section>
  );
}
