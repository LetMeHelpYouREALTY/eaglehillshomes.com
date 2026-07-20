import Link from "next/link";
import { PageEngagement } from "@/components/engagement/PageEngagement";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-display text-4xl tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          That URL is not on {site.brand}. Browse Eagle Hills homes or book a
          consult below.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-sage-800 px-5 py-3 text-sm font-semibold text-white hover:bg-sage-900"
        >
          Back to home
        </Link>
      </section>
      <PageEngagement />
    </>
  );
}
