import { MinecraftSkin } from "@/components/MinecraftSkin";
import { SkillBlock } from "@/components/SkillBlock";
import { PixelButton } from "@/components/PixelButton";

const SKIN_UUID = "5a47a71e-7c93-468b-a15f-ccea235c467f";

const skills = [
  { name: "HTML", icon: "📄", color: "gold" as const },
  { name: "CSS", icon: "🎨", color: "diamond" as const },
  { name: "PYTHON", icon: "🐍", color: "emerald" as const },
  { name: "REACT", icon: "⚛️", color: "diamond" as const },
  { name: "JAVA", icon: "☕", color: "gold" as const },
];

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Sky gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-grass/20 -z-10" />
      
      {/* Floating blocks decoration */}
      <div className="fixed top-20 left-10 w-8 h-8 bg-stone pixel-border opacity-40 animate-float" />
      <div className="fixed top-40 right-20 w-6 h-6 bg-dirt pixel-border opacity-30 animate-float delay-200" />
      <div className="fixed bottom-40 left-20 w-10 h-10 bg-grass pixel-border opacity-30 animate-float delay-400" />
      <div className="fixed top-60 right-10 w-4 h-4 bg-diamond pixel-border opacity-50 animate-float delay-300" />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-6xl mx-auto">
            {/* Skin */}
            <div className="flex-shrink-0">
              <MinecraftSkin uuid={SKIN_UUID} size={200} />
            </div>
            
            {/* Text content */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-dirt pixel-border px-4 py-2 mb-4">
                <span className="text-[10px] text-card-foreground">⚔️ MINECRAFT DEVELOPER</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-pixel text-foreground mb-4 leading-relaxed">
                <span className="text-diamond">{"< "}</span>
                ESSENZA
                <span className="text-diamond">{" />"}</span>
              </h1>
              
              <p className="text-[10px] md:text-xs text-muted-foreground max-w-md mb-8 leading-loose">
                Creo mondi digitali blocco dopo blocco.
                <br />
                Plugin, mod e soluzioni custom per Minecraft.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <PixelButton variant="diamond">
                  CONTATTAMI
                </PixelButton>
                <PixelButton variant="secondary">
                  I MIEI PROGETTI
                </PixelButton>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[8px] text-muted-foreground">SCORRI</span>
            <div className="w-4 h-6 border-2 border-muted flex justify-center pt-1">
              <div className="w-1 h-2 bg-diamond animate-bounce" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-12">
              <div className="inline-block bg-stone pixel-border px-6 py-3 mb-4">
                <h2 className="text-sm md:text-lg text-primary-foreground">
                  🛠️ LE MIE SKILLS
                </h2>
              </div>
              <p className="text-[8px] md:text-[10px] text-muted-foreground">
                Strumenti nel mio inventario di sviluppatore
              </p>
            </div>
            
            {/* Skills grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <SkillBlock
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card pixel-border p-6 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald pixel-border flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📖</span>
                </div>
                <div>
                  <h2 className="text-sm md:text-lg text-card-foreground mb-2">
                    CHI SONO
                  </h2>
                  <div className="w-20 h-1 bg-diamond" />
                </div>
              </div>
              
              <p className="text-[8px] md:text-[10px] text-card-foreground/80 leading-loose mb-6">
                Ciao! Sono Essenza, uno sviluppatore appassionato di Minecraft e 
                programmazione. Creo plugin, mod e soluzioni personalizzate per 
                server e progetti Minecraft. La mia missione è trasformare le 
                idee in realtà, un blocco di codice alla volta.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="bg-grass/20 px-3 py-2 pixel-border-accent">
                  <span className="text-[8px] text-card-foreground">🎮 Plugin Developer</span>
                </div>
                <div className="bg-diamond/20 px-3 py-2 pixel-border-accent">
                  <span className="text-[8px] text-card-foreground">🌐 Web Developer</span>
                </div>
                <div className="bg-gold/20 px-3 py-2 pixel-border-accent">
                  <span className="text-[8px] text-card-foreground">☕ Java Expert</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-4 border-t-4 border-dirt">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[8px] text-muted-foreground mb-4">
              Crafted with ❤️ by Essenza
            </p>
            <div className="flex justify-center gap-4">
              <div className="w-8 h-8 bg-stone pixel-border flex items-center justify-center hover:bg-diamond transition-colors cursor-pointer">
                <span className="text-xs">🎮</span>
              </div>
              <div className="w-8 h-8 bg-stone pixel-border flex items-center justify-center hover:bg-diamond transition-colors cursor-pointer">
                <span className="text-xs">💬</span>
              </div>
              <div className="w-8 h-8 bg-stone pixel-border flex items-center justify-center hover:bg-diamond transition-colors cursor-pointer">
                <span className="text-xs">📧</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
