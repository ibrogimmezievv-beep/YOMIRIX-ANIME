import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted';
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variant === 'default' && 'bg-brand-700 text-brand-100',
        variant === 'accent' &&
          'bg-brand-accent bg-opacity-20 text-brand-accent',
        variant === 'muted' && 'bg-brand-600 text-brand-300',
        className
      )}
    >
      {children}
    </span>
  );
}
