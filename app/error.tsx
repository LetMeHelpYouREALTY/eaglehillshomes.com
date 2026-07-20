"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="font-display text-3xl tracking-tight text-foreground">
        Something went wrong
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-md bg-sage-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sage-900"
      >
        Try again
      </button>
    </div>
  );
}
