'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getAnimeBySlug, animeDatabase } from '@/lib/anime-data';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Button } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';
import { EpisodeList } from '@/components/EpisodeList';
import { CommentList } from '@/components/CommentList';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mockEpisodes = [
  {
    id: '1',
    number: 1,
    title: 'The Jujutsu High',
    description: 'Yuji encounters a cursed finger and swallows it, becoming the vessel of Sukuna.',
    duration: 24,
  },
  {
    id: '2',
    number: 2,
    title: 'For the Ungrateful Dead',
    description: 'Yuji is taken to Jujutsu High school where he meets Megumi and Nobara.',
    duration: 24,
  },
  {
    id: '3',
    number: 3,
    title: 'Girl of my Dreams',
    description: 'The trio goes on their first mission together.',
    duration: 24,
  },
];

const mockComments = [
  {
    id: '1',
    avatar: 'https://images.unsplash.com/photo-1535713806e5c96f6a66b2a9e80b5fc56b6c5b5c?w=40&h=40&fit=crop',
    username: 'AnimeWatcher',
    date: '2 days ago',
    text: 'This anime is absolutely incredible! The animation quality is top-notch.',
    likes: 234,
  },
  {
    id: '2',
    avatar: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=40&h=40&fit=crop',
    username: 'MangaFan',
    date: '1 day ago',
    text: 'Can\'t wait for the next season! This episode was amazing.',
    likes: 156,
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

  const [watchedEpisodes, setWatchedEpisodes] = useState<string[]>([]);

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
      <VideoPlayer
        title={anime.title}
        episodeNumber={currentEpisode.number}
      />

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
                  Previous Episode
                </Button>
              </Link>
            )}
            {nextEpisode && (
              <Link
                href={`/watch/${anime.slug}?ep=${nextEpisode.number}`}
              >
                <Button className="flex items-center gap-2">
                  Next Episode
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>

          {/* Comments */}
          <div>
            <h3 className="text-lg font-semibold text-brand-100 mb-4">
              Comments
            </h3>
            <CommentList comments={mockComments} />
          </div>
        </div>

        {/* Sidebar - Episode List */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-brand-100 mb-4">
            Episodes
          </h3>
          <EpisodeList
            episodes={mockEpisodes}
            onEpisodeClick={(episode) => {
              if (!watchedEpisodes.includes(episode.id)) {
                setWatchedEpisodes([...watchedEpisodes, episode.id]);
              }
            }}
            watched={watchedEpisodes}
          />
        </div>
      </div>
    </div>
  );
}
