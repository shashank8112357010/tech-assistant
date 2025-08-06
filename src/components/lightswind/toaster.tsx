
import * as React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";
import { X } from "lucide-react";

// Fallback for useToast if ../hooks/use-toast does not exist
function useToast() {
  return { toasts: [] };
}

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      <div className="fixed md:top-4 right-0 md:right-4 z-[100] flex flex-col gap-2 w-auto max-w-sm">
        {toasts.map((toast) => {
          const {
            id,
            title,
            description,
            action,
            type,
            variant,
            duration,
            // Collect remaining properties into a new object
            ...props
          } = toast as Record<string, any>;

          // Map toast type to variant if variant is not provided
          const toastVariant =
            variant ||
            (type === "success"
              ? "success"
              : type === "warning"
              ? "warning"
              : 
            type === "info" ? "info" :
            type === "destructive" ? "destructive" :
            "default"
          );
          
          return (
            <Toast 
              key={id} 
              {...props} 
              variant={toastVariant}
              duration={duration}
            >
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && <ToastDescription>{description}</ToastDescription>}
              </div>
              {action}
              <ToastClose>
                <X className="h-4 w-4" />
              </ToastClose>
            </Toast>
          );
        })}
      </div>
      <ToastViewport />
    </ToastProvider>
  );
}