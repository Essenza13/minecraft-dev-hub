const skills = [
  {
    name: "HTML",
    icon: "🌐",
    level: 90,
    color: "bg-gold",
    description: "Struttura semantica e accessibile",
  },
  {
    name: "CSS",
    icon: "🎨",
    level: 85,
    color: "bg-diamond",
    description: "Design responsive e animazioni",
  },
  {
    name: "Python",
    icon: "🐍",
    level: 80,
    color: "bg-emerald",
    description: "Automazione e scripting",
  },
  {
    name: "React",
    icon: "⚛️",
    level: 75,
    color: "bg-diamond",
    description: "Interfacce moderne e dinamiche",
  },
  {
    name: "Java",
    icon: "☕",
    level: 90,
    color: "bg-gold",
    description: "Plugin Minecraft e backend",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-xl md:text-2xl text-foreground mb-4">
            Le Mie <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Tecnologie e linguaggi che uso quotidianamente per creare progetti
          </p>
        </div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="opacity-0 animate-slide-up bg-card rounded p-5 border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-2xl">{skill.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-foreground">{skill.name}</h3>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </div>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
