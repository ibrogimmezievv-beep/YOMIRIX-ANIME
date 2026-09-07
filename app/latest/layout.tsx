import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latest Episodes - YOMIRIX',
  description: 'Latest episodes on YOMIRIX',
};

export default function LatestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
