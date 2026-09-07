import { Anime } from '@/lib/types/anime';
import { AnimeCard } from './AnimeCard';

interface AnimeGridProps {
  anime: Anime[];
  columns?: 2 | 3 | 4;
}

export function AnimeGrid({ anime, columns = 4 }: AnimeGridProps) {
  const gridClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-4 md:gap-6`}>
      {anime.map((item) => (
        <AnimeCard key={item.id} anime={item} />
      ))}
    </div>
  );
}
