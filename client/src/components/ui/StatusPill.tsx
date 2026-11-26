import React from 'react';
import { cn } from '../../lib/utils';

export interface StatusPillProps {
  statusText?: string;
  className?: string;
  status?: 'operational' | 'busy' | 'offline';
}

export const StatusPill: React.FC<StatusPillProps> = ({
  statusText = 'Operational // Available for Backend Roles',
  className,
  status = 'operational',
}) => {
  const dotColor = {
    operational: 'bg-success shadow-[0_0_8px_rgba(52,211,153,0.5)]',
    busy: 'bg-warning shadow-[0_0_8px_rgba(251,191,36,0.5)]',
    offline: 'bg-error shadow-[0_0_8px_rgba(248,113,113,0.5)]',
  }[status];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full',
        'border border-border bg-surface/90 backdrop-blur-sm',
        'font-mono text-xs text-text-secondary select-none tracking-tight',
        className
      )}
      role="status"
      aria-label={statusText}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
            dotColor
          )}
        />
        <span className={cn('relative inline-flex rounded-full h-2 w-2', dotColor)} />
      </span>
      <span className="font-medium text-text-primary/90">{statusText}</span>
    </div>
  );
};

