import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
}

interface ToastContextType {
  toast: (message: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, type, title, description }]);

      // Auto dismiss after 4.5 seconds
      setTimeout(() => {
        removeToast(id);
      }, 4500);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      {/* Toast viewport */}
      <div
        className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
        aria-live="polite"
      >
        {toasts.map((item) => (
          <div
            key={item.id}
            className={cn(
              'pointer-events-auto flex items-start gap-3 p-4 rounded-card border shadow-lg transition-all animate-in fade-in slide-in-from-bottom-2 duration-200',
              item.type === 'success' && 'bg-surface-elevated border-success/30 text-text-primary',
              item.type === 'error' && 'bg-surface-elevated border-error/40 text-text-primary',
              item.type === 'info' && 'bg-surface-elevated border-accent/40 text-text-primary'
            )}
          >
            <span className="shrink-0 mt-0.5">
              {item.type === 'success' && <CheckCircle2 className="w-4 h-4 text-success" />}
              {item.type === 'error' && <AlertCircle className="w-4 h-4 text-error" />}
              {item.type === 'info' && <Info className="w-4 h-4 text-accent" />}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-text-primary">{item.title}</p>
              {item.description && (
                <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
            <button
              onClick={() => removeToast(item.id)}
              className="shrink-0 text-text-muted hover:text-text-primary p-0.5 rounded transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

