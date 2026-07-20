import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function AgentCard() {
  return (
    <div className="rounded-2xl border border-border bg-white/90 p-5 shadow-[0_18px_40px_-28px_rgba(45,60,48,0.45)]">
      <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-[3px] border-sage-700">
        <Image
          src={site.agentPhotoSrc}
          alt={site.agentPhotoAlt}
          fill
          sizes="112px"
          className="object-cover"
          priority
        />
      </div>
      <div className="mt-3 text-center">
        <p className="text-base font-semibold text-foreground">
          {site.shortName}
        </p>
        <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
          {site.agentTitle}
        </p>
      </div>
      <div className="my-4 h-px w-full bg-border" />
      <a
        href={site.phone.href}
        className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-sage-800"
      >
        <Phone className="h-4 w-4 shrink-0 text-sage-700" aria-hidden />
        {site.phone.display}
      </a>
      <a
        href={site.calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
      >
        Book Calendly
      </a>
      <a
        href={site.phone.href}
        className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-sage-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sage-900"
      >
        Call {site.shortName.split(" ").slice(-1)[0]}
      </a>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Eagle Hills tours · Free consult
      </p>
    </div>
  );
}
