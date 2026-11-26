import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeaderProps {
  eyebrow?: string;
  tag?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  tag,
  title,
  description,
  align = 'left',
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 mb-10 md:mb-14',
        align === 'center' ? 'items-center text-center max-w-2xl mx-auto' : 'items-start text-left max-w-3xl',
        className
      )}
    >
      {(eyebrow || tag) && (
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
          {tag && (
            <span className="px-1.5 py-0.5 rounded-sm bg-accent/10 border border-accent/25 text-accent">
              {tag}
            </span>
          )}
          {eyebrow && <span>// {eyebrow}</span>}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary font-sans leading-tight">
        {title}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

