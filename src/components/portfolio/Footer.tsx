"use client";

import { Badge } from "@/components/ui/badge";
import { Send, Github, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Обо мне", href: "#about" },
  { label: "Процесс", href: "#process" },
  { label: "Навыки", href: "#skills" },
  { label: "Кейсы", href: "#projects" },
  { label: "Опыт", href: "#experience" },
  { label: "Контакты", href: "#contact" },
];

const socialLinks = [
  { icon: Send, label: "Telegram", href: "https://t.me/a_trshncv" },
  { icon: Github, label: "GitHub", href: "https://github.com/atrshncv-design" },
  { icon: Mail, label: "Email", href: "mailto:alexander.trishencov@gmail.com" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <a
                href="#hero"
                className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
              >
                AT
              </a>
              <div>
                <div className="font-semibold">Александр Трищенков</div>
                <div className="text-xs text-muted-foreground">AI Automation Specialist</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Помогаю бизнесу автоматизировать процессы с помощью LLM, API и no-code. 
              n8n, Make, RAG-системы, интеграции.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Ижевск, Россия (удалённо)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Навигация</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Tech */}
          <div className="space-y-4">
            <h3 className="font-semibold">Связаться</h3>
            <div className="flex gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <div className="pt-4">
              <div className="text-xs text-muted-foreground mb-2">Технологии:</div>
              <div className="flex flex-wrap gap-1">
                {["n8n", "OpenAI", "Claude", "React", "TypeScript"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Александр Трищенков. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <span className="text-primary font-medium">AI-first подход</span>
            {" "}• Next.js • Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
