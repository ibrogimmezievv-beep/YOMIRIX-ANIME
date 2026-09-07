'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold text-brand-100">
          Something went wrong
        </h1>
        <p className="text-brand-400">
          An error occurred while loading this page. Please try again.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-brand-accent text-brand-900 font-medium rounded-md hover:bg-opacity-90 transition-all"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-6 py-2 bg-brand-700 text-brand-100 font-medium rounded-md hover:bg-brand-600 transition-all"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
