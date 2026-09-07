import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Favorites - YOMIRIX',
  description: 'Your favorite anime on YOMIRIX',
};

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
