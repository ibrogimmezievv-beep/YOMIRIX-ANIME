'use client';

import { getNewReleases } from '@/lib/anime-data';
import { AnimeGrid } from '@/components/AnimeGrid';
import { SectionHeader } from '@/components/SectionHeader';

export default function LatestPage() {
  const newReleases = getNewReleases();

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Latest Episodes"
        description="Newly released episodes and ongoing anime"
      />
      <AnimeGrid anime={newReleases} />
    </div>
  );
}
