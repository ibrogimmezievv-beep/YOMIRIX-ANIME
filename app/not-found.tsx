import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Not Found',
  description: 'Page not found',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center space-y-6">
        <div className="text-8xl font-bold text-brand-accent">404</div>
        <h1 className="text-4xl font-bold text-brand-100">Page Not Found</h1>
        <p className="text-brand-400 text-lg max-w-md">
          The page you're looking for doesn't exist. Please check the URL and try again.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-brand-accent text-brand-900 font-medium rounded-md hover:bg-opacity-90 transition-all"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
