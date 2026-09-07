import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anime Details - YOMIRIX',
  description: 'Watch anime and read details on YOMIRIX',
};

export default function AnimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
