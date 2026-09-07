import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Rating({ rating, size = 'md', showText = true }: RatingProps) {
  const sizeClass = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }[size];

  return (
    <div className="flex items-center gap-1">
      <Star className={`${sizeClass} fill-brand-accent text-brand-accent`} />
      {showText && (
        <span className="text-sm font-medium text-brand-100">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
