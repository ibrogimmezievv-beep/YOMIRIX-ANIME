import Image from 'next/image';
import { Episode } from '@/lib/types/anime';
import { Badge } from './ui/Badge';
import { PlayCircle, CheckCircle } from 'lucide-react';

interface EpisodeListProps {
  episodes: Episode[];
  onEpisodeClick: (episode: Episode) => void;
  watched?: string[];
}

export function EpisodeList({
  episodes,
  onEpisodeClick,
  watched = [],
}: EpisodeListProps) {
  return (
    <div className="space-y-3">
      {episodes.map((episode) => {
        const isWatched = watched.includes(episode.id);

        return (
          <button
            key={episode.id}
            onClick={() => onEpisodeClick(episode)}
            className="w-full group flex items-start gap-4 p-3 bg-brand-800 hover:bg-brand-700 border border-brand-700 hover:border-brand-accent rounded-lg transition-all"
          >
            {/* Thumbnail */}
            <div className="relative w-24 h-14 rounded flex-shrink-0 overflow-hidden bg-brand-900">
              {episode.thumbnail ? (
                <Image
                  src={episode.thumbnail}
                  alt={`Episode ${episode.number}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center">
                  <span className="text-xs text-brand-400">
                    Ep. {episode.number}
                  </span>
                </div>
              )}
              {isWatched ? (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              ) : (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-5 h-5 text-brand-accent" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 text-left">
              <div className="flex items-start justify-between mb-1">
                <h4 className="font-medium text-brand-100 group-hover:text-brand-accent transition-colors">
                  Episode {episode.number}: {episode.title}
                </h4>
                {isWatched && (
                  <Badge variant="accent">Watched</Badge>
                )}
              </div>
              {episode.description && (
                <p className="text-sm text-brand-400 line-clamp-2 mb-2">
                  {episode.description}
                </p>
              )}
              <div className="flex items-center gap-4 text-xs text-brand-500">
                <span>{episode.duration} min</span>
                {episode.airDate && <span>{episode.airDate}</span>}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
