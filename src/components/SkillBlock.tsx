import { cn } from "@/lib/utils";

interface SkillBlockProps {
  name: string;
  icon: string;
  color: "diamond" | "emerald" | "gold" | "grass" | "stone";
  delay?: number;
}

const colorClasses = {
  diamond: "bg-diamond text-accent-foreground",
  emerald: "bg-emerald text-primary-foreground",
  gold: "bg-gold text-accent-foreground",
  grass: "bg-grass text-primary-foreground",
  stone: "bg-stone text-primary-foreground",
};

export function SkillBlock({ name, icon, color, delay = 0 }: SkillBlockProps) {
  return (
    <div
      className={cn(
        "opacity-0 animate-block-appear pixel-border p-4 md:p-6 flex flex-col items-center gap-3 transition-transform hover:scale-110 hover:-translate-y-2 cursor-pointer",
        colorClasses[color]
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="text-2xl md:text-4xl">{icon}</span>
      <span className="text-[8px] md:text-xs text-center leading-relaxed">{name}</span>
    </div>
  );
}
