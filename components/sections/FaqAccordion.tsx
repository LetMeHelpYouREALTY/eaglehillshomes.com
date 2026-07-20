import type { FaqItem } from "@/lib/faqs";

type FaqAccordionProps = {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
};

export function FaqAccordion({
  title = "Frequently Asked Questions",
  subtitle = "Eagle Hills FAQ",
  faqs,
}: FaqAccordionProps) {
  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full border-b border-border bg-stone-50/80"
    >
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-sage-700">
            {subtitle}
          </p>
          <h2
            id="faq-heading"
            className="font-display text-balance text-3xl tracking-tight text-foreground sm:text-4xl"
          >
            {title}
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-border bg-transparent px-1"
            >
              <summary className="cursor-pointer list-none py-4 text-left text-sm font-medium leading-snug text-foreground marker:content-none hover:text-sage-800">
                <span className="flex items-center justify-between gap-3">
                  {faq.question}
                  <span className="text-sage-700 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
