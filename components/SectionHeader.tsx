interface SectionHeaderProps {
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}

export function SectionHeader({
  title,
  description,
  actionLabel,
  actionHref,
}: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-brand-100">{title}</h2>
        {description && (
          <p className="text-brand-400 text-sm mt-1">{description}</p>
        )}
      </div>
      {actionLabel && actionHref && (
        <a
          href={actionHref}
          className="text-sm font-medium text-brand-accent hover:text-brand-100 transition-colors whitespace-nowrap"
        >
          {actionLabel}
        </a>
      )}
    </div>
  );
}
