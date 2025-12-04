import { Github, MessageCircle, Mail } from "lucide-react";

const SKIN_UUID = "5a47a71e-7c93-468b-a15f-ccea235c467f";

export function HeroSection() {
  const skinUrl = `https://crafatar.com/renders/body/${SKIN_UUID}?scale=10&overlay=true`;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 grid-pattern">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="opacity-0 animate-slide-up">
              <span className="inline-block px-4 py-2 rounded bg-primary/10 text-primary text-xs font-medium mb-6">
                ⛏️ Minecraft Developer
              </span>
            </div>

            <h1 className="opacity-0 animate-slide-up delay-100 font-pixel text-3xl md:text-4xl lg:text-5xl mb-6 leading-relaxed">
              Ciao, sono{" "}
              <span className="text-gradient">Essenza</span>
            </h1>

            <p className="opacity-0 animate-slide-up delay-200 text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              Sviluppatore appassionato di Minecraft e programmazione.
              Creo plugin, mod e applicazioni web moderne.
            </p>

            <div className="opacity-0 animate-slide-up delay-300 flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-emerald transition-colors glow-emerald"
              >
                Contattami
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded hover:bg-muted transition-colors border border-border"
              >
                Vedi Progetti
              </a>
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-slide-up delay-400 flex gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="p-3 rounded bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded bg-secondary hover:bg-[#5865F2] hover:text-foreground transition-all"
                aria-label="Discord"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded bg-secondary hover:bg-redstone hover:text-foreground transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Minecraft Skin */}
          <div className="opacity-0 animate-fade-in delay-300 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-diamond/20 blur-3xl scale-110" />
            <div className="relative animate-float">
              <img
                src={skinUrl}
                alt="Essenza Minecraft Skin"
                className="w-48 md:w-64 drop-shadow-2xl"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
