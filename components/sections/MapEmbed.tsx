import { getOfficeMapEmbedUrl, site } from "@/lib/site";

type MapEmbedProps = {
  title?: string;
  className?: string;
  embedUrl?: string;
};

export function MapEmbed({
  title = "Office location",
  className = "",
  embedUrl,
}: MapEmbedProps) {
  const src = embedUrl || getOfficeMapEmbedUrl();

  return (
    <iframe
      title={title}
      src={src}
      className={`min-h-[320px] w-full rounded-lg border-0 ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}

export function OfficeAddressFallback() {
  return (
    <p className="text-sm text-muted-foreground">
      {site.address.streetAddress}
      <br />
      {site.address.addressLocality}, {site.address.addressRegion}{" "}
      {site.address.postalCode}
    </p>
  );
}
