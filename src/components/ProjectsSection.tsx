import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Custom Plugin",
    description: "Plugin Minecraft personalizzato per gestione server con features avanzate",
    tags: ["Java", "Spigot API", "MySQL"],
    color: "border-l-gold",
    icon: "⚔️",
  },
  {
    title: "Web Dashboard",
    description: "Dashboard moderna per monitoraggio server Minecraft in tempo reale",
    tags: ["React", "TypeScript", "Tailwind"],
    color: "border-l-diamond",
    icon: "📊",
  },
  {
    title: "Discord Bot",
    description: "Bot Discord integrato con server Minecraft per gestione community",
    tags: ["Python", "Discord.py", "API"],
    color: "border-l-emerald",
    icon: "🤖",
  },
  {
    title: "Resource Pack",
    description: "Pack di texture e modelli custom per un'esperienza unica",
    tags: ["JSON", "Design", "3D"],
    color: "border-l-amethyst",
    icon: "🎨",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-xl md:text-2xl text-foreground mb-4">
            I Miei <span className="text-primary">Progetti</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Una selezione dei miei lavori più recenti
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`opacity-0 animate-slide-up bg-card rounded border border-border ${project.color} border-l-4 p-6 card-hover group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{project.icon}</span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded bg-secondary hover:bg-muted transition-colors">
                    <Github size={16} />
                  </button>
                  <button className="p-2 rounded bg-secondary hover:bg-muted transition-colors">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              <h3 className="font-medium text-lg text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
