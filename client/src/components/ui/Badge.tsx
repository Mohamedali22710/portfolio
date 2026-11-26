import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'muted' | 'outline';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  size = 'sm',
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[11px] font-mono tracking-wider',
    md: 'px-2.5 py-1 text-xs font-mono tracking-wider',
  }[size];

  const variantClasses = {
    default: 'bg-surface-elevated text-text-secondary border border-border',
    accent: 'bg-accent/10 text-accent border border-accent/25',
    success: 'bg-success/10 text-success border border-success/25',
    warning: 'bg-warning/10 text-warning border border-warning/25',
    muted: 'bg-surface-container text-text-muted border border-border/50',
    outline: 'bg-transparent text-text-secondary border border-border-strong',
  }[variant];

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-sm font-medium uppercase select-none transition-colors',
        sizeClasses,
        variantClasses,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

