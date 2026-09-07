import { Season } from '@/lib/types/anime';
import { cn } from '@/lib/utils';

interface SeasonSelectorProps {
  seasons: Season[];
  currentSeason: Season;
  onSeasonChange: (season: Season) => void;
}

export function SeasonSelector({
  seasons,
  currentSeason,
  onSeasonChange,
}: SeasonSelectorProps) {
  if (!seasons || seasons.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {seasons.map((season) => (
        <button
          key={season.id}
          onClick={() => onSeasonChange(season)}
          className={cn(
            'px-4 py-2 rounded-md font-medium whitespace-nowrap transition-all',
            currentSeason.id === season.id
              ? 'bg-brand-accent text-brand-900'
              : 'bg-brand-800 text-brand-100 hover:bg-brand-700'
          )}
        >
          Season {season.number}
        </button>
      ))}
    </div>
  );
}
