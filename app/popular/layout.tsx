import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Popular Anime - YOMIRIX',
  description: 'Popular anime on YOMIRIX',
};

export default function PopularLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
