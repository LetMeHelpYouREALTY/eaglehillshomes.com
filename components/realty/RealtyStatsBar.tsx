import { BarChart2, Clock, Home, TrendingUp, type LucideIcon } from "lucide-react";

export type RealtyStat = {
  icon?: LucideIcon;
  value: string;
  label: string;
  note?: string;
};

const DEFAULT_ICONS: LucideIcon[] = [TrendingUp, Home, Clock, BarChart2];

export function RealtyStatsBar({
  title = "Eagle Hills snapshot",
  stats,
}: {
  title?: string;
  stats: RealtyStat[];
}) {
  return (
    <section aria-label={title} className="w-full border-b border-border bg-stone-50/90">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-sage-700">
          {title}
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon ?? DEFAULT_ICONS[index % DEFAULT_ICONS.length];
            return (
              <div
                key={stat.label}
                className="flex flex-col gap-1 border-l-2 border-sage-600/40 pl-4"
              >
                <div className="flex items-center gap-1.5 text-sage-700">
                  <Icon className="h-4 w-4" aria-hidden />
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
                <p className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                {stat.note ? (
                  <p className="text-xs text-muted-foreground">{stat.note}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
