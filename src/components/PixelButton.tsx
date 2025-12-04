import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PixelButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "diamond";
  onClick?: () => void;
  className?: string;
}

const variantClasses = {
  primary: "bg-grass hover:bg-emerald text-primary-foreground",
  secondary: "bg-dirt hover:bg-secondary text-secondary-foreground",
  diamond: "bg-diamond hover:bg-accent text-accent-foreground animate-pixel-pulse",
};

export function PixelButton({ 
  children, 
  variant = "primary", 
  onClick,
  className 
}: PixelButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "font-pixel text-xs md:text-sm px-6 py-4 pixel-border transition-all duration-200",
        "hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
