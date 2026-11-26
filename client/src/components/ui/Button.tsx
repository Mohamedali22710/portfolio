import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent-soft';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'h-8 px-3 text-xs gap-1.5',
      md: 'h-10 px-4 text-sm gap-2',
      lg: 'h-12 px-6 text-base gap-2.5',
    }[size];

    const variantClasses = {
      primary:
        'bg-accent hover:bg-accent-hover text-white shadow-sm hover:shadow-accent border border-transparent font-medium active:translate-y-[1px]',
      secondary:
        'bg-surface-elevated hover:bg-surface-bright text-text-primary border border-border-strong hover:border-border font-medium active:translate-y-[1px]',
      outline:
        'bg-transparent hover:bg-accent-soft text-text-primary hover:text-accent border border-border-strong hover:border-accent font-medium active:translate-y-[1px]',
      ghost:
        'bg-transparent hover:bg-surface-elevated text-text-secondary hover:text-text-primary border border-transparent font-medium',
      'accent-soft':
        'bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 hover:border-accent/30 font-mono text-xs uppercase tracking-wider',
    }[variant];

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center rounded-btn font-sans transition-all duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none',
          sizeClasses,
          variantClasses,
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

