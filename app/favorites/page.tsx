'use client';

import { animeDatabase } from '@/lib/anime-data';
import { AnimeGrid } from '@/components/AnimeGrid';
import { SectionHeader } from '@/components/SectionHeader';

export default function FavoritesPage() {
  const mockFavorites = animeDatabase.slice(0, 4);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-brand-100">My Favorites</h1>
        <p className="text-brand-400 mt-2">
          {mockFavorites.length} anime in your favorites
        </p>
      </div>

      {mockFavorites.length > 0 ? (
        <AnimeGrid anime={mockFavorites} />
      ) : (
        <div className="text-center py-12">
          <p className="text-brand-400">No favorites yet</p>
        </div>
      )}
    </div>
  );
}
