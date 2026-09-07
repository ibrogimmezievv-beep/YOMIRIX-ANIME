import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { MobileNav } from '@/components/MobileNav';

export const metadata: Metadata = {
  title: 'YOMIRIX - Premium Anime Streaming',
  description: 'Watch your favorite anime on YOMIRIX, the premium anime streaming platform.',
  keywords: 'anime, streaming, watch, series',
  openGraph: {
    title: 'YOMIRIX - Premium Anime Streaming',
    description: 'Watch your favorite anime on YOMIRIX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YOMIRIX',
    description: 'Premium Anime Streaming',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-brand-900 text-brand-100">
        <Header />
        <main className="min-h-screen pb-20 md:pb-0">
          <div className="container mx-auto px-4 py-8">{children}</div>
        </main>
        <MobileNav />
      </body>
    </html>
  );
}
