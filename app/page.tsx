'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';
import { AnimeGrid } from '@/components/AnimeGrid';
import { Badge } from '@/components/ui/Badge';
import {
  getPopularAnime,
  getFeaturedAnime,
  getNewReleases,
  genres,
  animeDatabase,
} from '@/lib/anime-data';
import Link from 'next/link';

const mockViewHistory = [
  {
    id: '1',
    progress: 35,
  },
  {
    id: '4',
    progress: 67,
  },
];

export default function Home() {
  const featured = getFeaturedAnime();
  const popular = getPopularAnime();
  const newReleases = getNewReleases();

  const continueWatching = animeDatabase.filter((anime) =>
    mockViewHistory.some((item) => item.id === anime.id)
  );

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      {featured[0] && <Hero anime={featured[0]} />}

      {/* Continue Watching */}
      {continueWatching.length > 0 && (
        <section>
          <SectionHeader
            title="Continue Watching"
            actionLabel="View All"
            actionHref="/continue-watching"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {continueWatching.map((anime) => {
              const history = mockViewHistory.find(
                (h) => h.id === anime.id
              );
              return (
                <div key={anime.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-brand-800 aspect-[2/3] mb-3">
                    <img
                      src={anime.poster}
                      alt={anime.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {history && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 h-1">
                        <div
                          className="h-full bg-brand-accent transition-all duration-300"
                          style={{ width: `${history.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-brand-100 group-hover:text-brand-accent transition-colors line-clamp-2">
                    {anime.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Popular */}
      <section>
        <SectionHeader
          title="Popular Now"
          actionLabel="View All"
          actionHref="/popular"
        />
        <AnimeGrid anime={popular} />
      </section>

      {/* New Releases */}
      <section>
        <SectionHeader
          title="Latest Episodes"
          actionLabel="Browse"
          actionHref="/latest"
        />
        <AnimeGrid anime={newReleases} />
      </section>

      {/* Genres */}
      <section>
        <SectionHeader title="Browse by Genre" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {genres.map((genre) => (
            <Link key={genre} href={`/catalog?genre=${genre}`}>
              <div className="p-4 bg-brand-800 hover:bg-brand-700 border border-brand-700 hover:border-brand-accent rounded-lg transition-all cursor-pointer group">
                <h3 className="font-medium text-brand-100 group-hover:text-brand-accent transition-colors">
                  {genre}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
