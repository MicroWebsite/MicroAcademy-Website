'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-3 w-full max-w-sm px-4 pointer-events-none">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast }: { toast: Toast }) {
  return (
    <div
      className={`
        pointer-events-auto flex items-center gap-4 px-5 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border backdrop-blur-md
        animate-in fade-in slide-in-from-top-6 duration-500 ease-out
        ${toast.type === 'success' ? 'bg-white/95 border-green-100' : 'bg-white/95 border-red-100'}
      `}
    >
      <div className="shrink-0">
        {toast.type === 'success' ? (
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shadow-sm border border-green-100">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 shadow-sm border border-red-100">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className={`text-sm font-bold ${toast.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
          {toast.type === 'success' ? 'Success' : 'Attention'}
        </p>
        <p className="text-sm font-medium text-gray-600 leading-tight">
          {toast.message}
        </p>
      </div>
      <div className="ml-auto pl-2">
         <div className="h-1 w-12 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-current opacity-20 transition-all duration-[5000ms] ease-linear w-0" style={{ width: '100%' }}></div>
         </div>
      </div>
    </div>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
