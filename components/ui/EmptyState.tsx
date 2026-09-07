interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-brand-100 mb-2">{title}</h3>
        {description && (
          <p className="text-brand-400 mb-6 max-w-md">{description}</p>
        )}
        {action && <div>{action}</div>}
      </div>
    </div>
  );
}
