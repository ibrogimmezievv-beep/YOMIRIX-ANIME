import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catalog - YOMIRIX',
  description: 'Browse and discover anime on YOMIRIX',
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
