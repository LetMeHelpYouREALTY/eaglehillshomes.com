export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20" aria-busy="true">
      <div className="h-10 w-1/3 animate-pulse rounded bg-stone-200" />
      <div className="mt-6 h-4 w-2/3 animate-pulse rounded bg-stone-200" />
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="h-24 animate-pulse rounded bg-stone-200" />
        <div className="h-24 animate-pulse rounded bg-stone-200" />
        <div className="h-24 animate-pulse rounded bg-stone-200" />
      </div>
    </div>
  );
}
