"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Calendar, Zap, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "1000+",
    label: "часов сэкономлено",
    description: "для бизнеса",
  },
  {
    icon: Zap,
    value: "96%",
    label: "сокращение времени",
    description: "на рутинные задачи",
  },
  {
    icon: TrendingUp,
    value: "3+",
    label: "года опыта",
    description: "в AI-автоматизации",
  },
];

const techStack = ["n8n", "OpenAI", "Claude", "Make", "RAG", "API"];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/8 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 border-primary/30 text-primary bg-primary/5"
            >
              <Zap className="h-3.5 w-3.5 mr-1.5" />
              AI Automation Specialist
            </Badge>

            {/* H1 - Продающий заголовок */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Помогаю бизнесу{" "}
              <span className="gradient-text">автоматизировать процессы</span>{" "}
              с помощью AI
            </h1>

            {/* H2 - Подзаголовок со стеком */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl">
              LLM, API & no-code автоматизация: n8n, Make, Zapier
            </p>

            {/* Value proposition */}
            <p className="text-base text-muted-foreground/80 mb-8 max-w-2xl">
              Превращаю рутинные операции в автоматизированные workflow.
              RAG-системы, AI-агенты, интеграции — от идеи до production за дни, не месяцы.
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-3 py-1 text-sm bg-secondary/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
              >
                <a href="#contact">
                  <Calendar className="h-5 w-5 mr-2" />
                  Записаться на консультацию
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">
                  Смотреть кейсы
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a
                  href="https://github.com/atrshncv-design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Stats with metrics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 pt-8 border-t border-border/50">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                      <Icon className="h-4 w-4 text-primary" />
                      <div className="text-2xl sm:text-3xl font-bold text-primary">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground/60 hidden sm:block">
                      {stat.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Photo & Visual */}
          <div className="relative flex-shrink-0">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-primary/50 to-accent opacity-20 blur-sm scale-105" />
              
              {/* Photo container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/photo.jpg"
                  alt="Александр Трищенков — AI Automation Specialist"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badges - tech stack */}
              <div className="absolute -top-2 -right-2 animate-float">
                <Badge className="bg-primary text-primary-foreground shadow-lg px-3 py-1.5 text-sm font-medium">
                  n8n Expert
                </Badge>
              </div>
              <div className="absolute -bottom-2 -left-2 animate-float" style={{ animationDelay: "1s" }}>
                <Badge className="bg-card text-card-foreground shadow-lg border px-3 py-1.5 text-sm">
                  RAG Systems
                </Badge>
              </div>
              <div className="absolute top-1/2 -right-4 animate-float" style={{ animationDelay: "0.5s" }}>
                <Badge className="bg-secondary text-secondary-foreground shadow-lg border px-3 py-1.5 text-sm">
                  LLM Integration
                </Badge>
              </div>
              <div className="absolute bottom-1/4 -left-6 animate-float" style={{ animationDelay: "1.5s" }}>
                <Badge className="bg-blue-500/90 text-white shadow-lg px-3 py-1.5 text-sm">
                  API & Webhooks
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
