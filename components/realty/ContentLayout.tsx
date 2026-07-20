import { AgentCard } from "@/components/realty/AgentCard";
import { site } from "@/lib/site";

export function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <section
      aria-label="Article"
      className="w-full border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
          <article className="min-w-0 flex-1">{children}</article>
          <aside className="w-full shrink-0 lg:w-72 xl:w-80">
            <div className="lg:sticky lg:top-24">
              <AgentCard />
              <div className="mt-4 rounded-2xl border border-border bg-stone-50 p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Licensed in Nevada
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  NV Lic. #{site.license} · Brokered by {site.brokerage}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
