'use client';

import { getPopularAnime } from '@/lib/anime-data';
import { AnimeGrid } from '@/components/AnimeGrid';
import { SectionHeader } from '@/components/SectionHeader';

export default function PopularPage() {
  const popular = getPopularAnime();

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Popular Anime"
        description="The most watched and trending anime on YOMIRIX"
      />
      <AnimeGrid anime={popular} />
    </div>
  );
}
