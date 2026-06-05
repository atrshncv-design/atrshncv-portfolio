"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Briefcase, Target, Lightbulb, Users } from "lucide-react";

const domains = [
  { icon: Briefcase, label: "IT-компании и стартапы", description: "Автоматизация процессов, обработка заявок, поддержка клиентов" },
  { icon: Users, label: "Интернет-магазины", description: "Обработка заказов, ответы клиентам, генерация описаний товаров" },
  { icon: Target, label: "Маркетинговые агентства", description: "Создание контента, отчёты для клиентов, интеграции с CRM" },
  { icon: Lightbulb, label: "Медиа и контент", description: "Генерация видео, аудио, текстов с помощью AI" },
];

const highlights = [
  {
    title: "Снижение затрат на 40-65%",
    description: "Через оптимизацию промптов и выбор правильных моделей для каждой задачи",
  },
  {
    title: "96% сокращение времени",
    description: "Автоматизация видео-продакшна: с 4 часов до 10 минут на ролик",
  },
  {
    title: "0 → 1000+ AI-треков",
    description: "Построил систему генерации персонализированных песен с нуля",
  },
  {
    title: "20+ веб-проектов",
    description: "Сайты и SaaS-приложения с интеграцией AI-инструментов",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Обо мне
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            AI Automation <span className="gradient-text">Architect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Проектирую и внедряю интеллектуальные системы автоматизации. 
            Мой подход — не просто "подключить ChatGPT", а построить надёжную архитектуру.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Main description */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Философия работы</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Я — AI Automation Specialist с практикой более 3 лет. Моя роль — архитектор: 
                    проектирую логику, структуру данных и пользовательский опыт, а AI помогает 
                    писать код и генерировать контент.
                  </p>
                  <p>
                    <strong className="text-foreground">Подход к автоматизации:</strong> не просто 
                    "LLM + no-code", а полноценная архитектура с RAG-системами, агентами, обработкой 
                    ошибок и мониторингом. Это не "магия AI" — это инженерная дисциплина.
                  </p>
                  <p>
                    <strong className="text-foreground">Безопасность и надёжность:</strong> каждый 
                    workflow проектирую с учётом сбоев внешних сервисов, rate limits, и необходимости 
                    human-in-the-loop на критичных этапах.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Domains */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">С кем я работаю</h3>
                <div className="grid grid-cols-2 gap-4">
                  {domains.map((domain, index) => {
                    const Icon = domain.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{domain.label}</div>
                          <div className="text-xs text-muted-foreground">{domain.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Key achievements */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Ключевые результаты</h3>
            
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="border-border/50 bg-card/50 backdrop-blur-sm metric-glow hover:bg-card/80 transition-colors"
              >
                <CardContent className="py-4 px-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
