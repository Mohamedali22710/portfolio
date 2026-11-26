import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

export interface StatCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  prefix = '',
  suffix = '',
  description,
  className,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const startTime = performance.now();
          const duration = 1400; // ms

          const step = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease-out cubic: 1 - pow(1 - progress, 3)
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = value % 1 === 0 
              ? Math.floor(eased * value) 
              : parseFloat((eased * value).toFixed(1));

            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={cardRef}
      className={cn(
        'group relative p-6 rounded-card bg-surface border border-border',
        'hover:border-border-strong hover:bg-surface-elevated/70 transition-all duration-200',
        'flex flex-col justify-between',
        className
      )}
    >
      <div className="flex items-baseline gap-1 mb-2">
        <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">
          {prefix}
          {displayValue}
          {suffix}
        </span>
      </div>
      <div>
        <h4 className="font-mono text-xs uppercase tracking-wider text-text-secondary font-medium mb-1">
          {label}
        </h4>
        <p className="text-xs text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

