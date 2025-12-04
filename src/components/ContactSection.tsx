import { Mail, MessageCircle, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-xl md:text-2xl text-foreground mb-4">
            <span className="text-primary">Contattami</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Hai un progetto in mente? Scrivimi e parliamone insieme
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="opacity-0 animate-slide-up bg-card border border-border rounded p-5 card-hover">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">essenza@example.com</p>
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-slide-up delay-100 bg-card border border-border rounded p-5 card-hover">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded bg-[#5865F2]/10 text-[#5865F2]">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Discord</h3>
                  <p className="text-sm text-muted-foreground">Essenza#0000</p>
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-slide-up delay-200 p-5 bg-gradient-to-br from-primary/10 to-diamond/10 rounded border border-primary/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                💡 <span className="text-foreground">Disponibile</span> per progetti freelance, 
                collaborazioni su plugin Minecraft e sviluppo web.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="opacity-0 animate-slide-up delay-200 space-y-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Nome</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-secondary border border-border rounded focus:outline-none focus:border-primary transition-colors"
                placeholder="Il tuo nome"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-secondary border border-border rounded focus:outline-none focus:border-primary transition-colors"
                placeholder="La tua email"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Messaggio</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-secondary border border-border rounded focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Descrivi il tuo progetto..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-emerald transition-colors flex items-center justify-center gap-2 glow-emerald"
            >
              <Send size={18} />
              Invia Messaggio
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
