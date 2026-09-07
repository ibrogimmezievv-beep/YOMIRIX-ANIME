'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getAnimeBySlug } from '@/lib/anime-data';
import { Button } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const mockEpisodes = [
  {
    id: '1',
    number: 1,
    title: 'The Beginning',
    description: 'The story begins...',
    duration: 24,
  },
  {
    id: '2',
    number: 2,
    title: 'Rising Action',
    description: 'Things get interesting...',
    duration: 24,
  },
  {
    id: '3',
    number: 3,
    title: 'Climax',
    description: 'The turning point...',
    duration: 24,
  },
];

interface WatchPageProps {
  params: {
    slug: string;
  };
  searchParams: {
    ep?: string;
  };
}

export default function WatchPage({ params, searchParams }: WatchPageProps) {
  const anime = getAnimeBySlug(params.slug);
  const currentEpisodeNumber = searchParams.ep ? parseInt(searchParams.ep) : 1;
  const currentEpisode = mockEpisodes.find(
    (e) => e.number === currentEpisodeNumber
  ) || mockEpisodes[0];

  if (!anime) {
    return (
      <EmptyState
        title="Anime not found"
        description="The anime you're looking for doesn't exist"
        action={
          <Link href="/catalog">
            <Button>Back to Catalog</Button>
          </Link>
        }
      />
    );
  }

  const nextEpisode =
    currentEpisodeNumber < mockEpisodes.length
      ? mockEpisodes[currentEpisodeNumber]
      : null;
  const prevEpisode =
    currentEpisodeNumber > 1
      ? mockEpisodes[currentEpisodeNumber - 2]
      : null;

  return (
    <div className="space-y-8">
      {/* Video Player */}
      <div className="bg-black rounded-lg overflow-hidden aspect-video flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">▶</div>
          <p className="text-brand-300">
            {anime.title} - Episode {currentEpisode.number}
          </p>
          <p className="text-brand-500 text-sm mt-2">Video player placeholder</p>
        </div>
      </div>

      {/* Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-brand-100 mb-2">
              {anime.title}
            </h1>
            <p className="text-brand-400">
              Episode {currentEpisode.number}: {currentEpisode.title}
            </p>
          </div>

          {currentEpisode.description && (
            <div>
              <h3 className="text-lg font-semibold text-brand-100 mb-2">
                Description
              </h3>
              <p className="text-brand-300">{currentEpisode.description}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3">
            {prevEpisode && (
              <Link
                href={`/watch/${anime.slug}?ep=${prevEpisode.number}`}
              >
                <Button variant="secondary" className="flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
              </Link>
            )}
            {nextEpisode && (
              <Link
                href={`/watch/${anime.slug}?ep=${nextEpisode.number}`}
              >
                <Button className="flex items-center gap-2">
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Episodes Sidebar */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-brand-100 mb-4">
            Episodes
          </h3>
          <div className="space-y-2">
            {mockEpisodes.map((ep) => (
              <Link key={ep.id} href={`/watch/${anime.slug}?ep=${ep.number}`}>
                <div
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    ep.number === currentEpisode.number
                      ? 'bg-brand-accent text-brand-900'
                      : 'bg-brand-800 text-brand-100 hover:bg-brand-700'
                  }`}
                >
                  <p className="font-medium">Episode {ep.number}</p>
                  <p className="text-sm opacity-75">{ep.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
