interface MinecraftSkinProps {
  uuid: string;
  size?: number;
}

export function MinecraftSkin({ uuid, size = 300 }: MinecraftSkinProps) {
  const skinUrl = `https://crafatar.com/renders/body/${uuid}?scale=10&overlay=true`;
  
  return (
    <div className="relative animate-float">
      {/* Glow effect behind skin */}
      <div className="absolute inset-0 bg-diamond/30 blur-3xl scale-75" />
      
      {/* Shadow beneath */}
      <div 
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-bedrock/50 blur-md"
        style={{ borderRadius: "50%" }}
      />
      
      {/* The actual skin */}
      <img
        src={skinUrl}
        alt="Minecraft Skin"
        width={size}
        height={size * 2}
        className="relative z-10 drop-shadow-2xl"
        style={{ imageRendering: "pixelated" }}
      />
      
      {/* Sparkle effects */}
      <div className="absolute top-10 -right-4 w-3 h-3 bg-gold animate-sparkle" />
      <div className="absolute top-1/3 -left-6 w-2 h-2 bg-diamond animate-sparkle delay-300" />
      <div className="absolute bottom-1/4 -right-8 w-2 h-2 bg-emerald animate-sparkle delay-500" />
    </div>
  );
}
