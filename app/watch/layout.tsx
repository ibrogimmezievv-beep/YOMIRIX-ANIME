import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Watch - YOMIRIX',
  description: 'Watch your favorite anime on YOMIRIX',
};

export default function WatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
