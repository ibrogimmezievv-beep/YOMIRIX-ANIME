'use client';

import { useState } from 'react';
import { Anime } from '@/lib/types/anime';
import { AnimeGrid } from '@/components/AnimeGrid';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Heart } from 'lucide-react';

// Mock favorites data
const mockFavorites: Anime[] = [
  {
    id: '1',
    slug: 'jujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    alternativeTitle: 'JJK',
    description: 'A boy swallows a cursed talisman—the finger of a demon—and becomes the host of the demon.',
    poster: 'https://images.unsplash.com/photo-1578375872862-cb049228cc4a?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1578375872862-cb049228cc4a?w=1200&h=400&fit=crop',
    rating: 8.7,
    year: 2020,
    status: 'ongoing',
    type: 'TV',
    episodes: 47,
    genres: ['Action', 'Supernatural', 'School'],
    views: 2500000,
  },
  {
    id: '3',
    slug: 'attack-on-titan',
    title: 'Attack on Titan',
    alternativeTitle: 'Shingeki no Kyojin',
    description: 'In a world where giant humanoid creatures called Titans prey on humans.',
    poster: 'https://images.unsplash.com/photo-1545069131-2f3f8e8b5a1e?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1545069131-2f3f8e8b5a1e?w=1200&h=400&fit=crop',
    rating: 9.0,
    year: 2013,
    status: 'completed',
    type: 'TV',
    episodes: 139,
    genres: ['Action', 'Dark Fantasy', 'Psychological'],
    views: 5000000,
  },
];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Anime[]>(mockFavorites);

  const handleRemove = (id: string) => {
    setFavorites((prev) => prev.filter((anime) => anime.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brand-100 flex items-center gap-2">
            <Heart className="w-8 h-8 text-brand-accent" />
            My Favorites
          </h1>
          <p className="text-brand-400 mt-2">
            {favorites.length} anime in your favorites
          </p>
        </div>
      </div>

      {favorites.length > 0 ? (
        <div className="space-y-6">
          <AnimeGrid anime={favorites} />
          <div className="flex justify-center">
            <button
              onClick={() => setFavorites([])}
              className="px-6 py-2 bg-brand-700 text-brand-100 rounded-md hover:bg-brand-600 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      ) : (
        <EmptyState
          title="No favorites yet"
          description="Add your favorite anime to keep track of them"
          action=(
            <Link href="/catalog">
              <Button>Browse Anime</Button>
            </Link>
          }
        />
      )}
    </div>
  );
}
