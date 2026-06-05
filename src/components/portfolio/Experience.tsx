"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, CheckCircle2, Users, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "AI Automation Consultant",
    company: "Фриланс",
    location: "Удалённо",
    period: "Март 2025 — настоящее время",
    duration: "текущее",
    description:
      "Консультирую бизнесы по AI-автоматизации. Беру проекты от диагностики до production. Специализация: LLM-интеграции, content automation, Telegram-боты.",
    achievements: [
      {
        title: "Контент-завод для криптообменника",
        description:
          "End-to-end автоматизация генерации контента: от новостей до соцсетей. n8n + GPT-4 + автоматическая публикация. Результат: 10x рост контента при том же штате.",
        metrics: ["10x контента", "0 ручной работы", "авто-публикация"],
      },
      {
        title: "AI-видео для застройщика (Испания)",
        description:
          "Генерация презентационных видео для инвестиционных проектов. HeyGen + GPT + автоматизация пайплайна. Языки: русский, испанский, английский.",
        metrics: ["3 языка", "аватары", "автоматизация"],
      },
      {
        title: "Telegram Mini Apps & боты",
        description:
          "Разработка внутренних инструментов и клиентских ботов с LLM-интеграцией. От заказа пиццы до AI-ассистентов поддержки.",
        metrics: ["5+ ботов", "LLM интеграция", "Mini Apps"],
      },
    ],
    technologies: ["n8n", "OpenAI", "Claude", "HeyGen", "SUNO", "Next.js", "Telegram Bot API"],
    current: true,
  },
  {
    title: "Партнёр | AI Automation Architect",
    company: "ART RECORD",
    location: "Санкт-Петербург",
    period: "Декабрь 2024 — настоящее время",
    duration: "доля в компании",
    description:
      "Имею долю в компании. Спроектировал и внедрил AI-автоматизации, которые позволили масштабировать бизнес без увеличения штата.",
    achievements: [
      {
        title: "Content Factory (n8n + GPT + HeyGen)",
        description:
          "Автоматизация видео-продакшна: бриф → сценарий → генерация видео → постпродакшн → публикация. Время производства: с 4 часов до 10 минут (-96%).",
        metrics: ["-96% времени", "автоматизация", "scale без найма"],
      },
      {
        title: "Self-Service Order Bot",
        description:
          "Telegram-бот для заказа персонализированных песен. Полная автоматизация: приём заказа → генерация текста → SUNO → постобработка → отправка клиенту. Участие менеджера: 0 минут.",
        metrics: ["0 мин менеджера", "1000+ треков", "автономность"],
      },
      {
        title: "Lead Processing Pipeline",
        description:
          "Автоматическая квалификация лидов через AI-чат, запись на консультации, follow-up последовательности. Конверсия выросла на 35%.",
        metrics: ["+35% конверсия", "авто-квалификация", "follow-up"],
      },
    ],
    technologies: ["n8n", "OpenAI API", "Claude API", "HeyGen", "SUNO", "Telegram Bot API", "JavaScript"],
    current: false,
    isPartner: true,
  },
  {
    title: "AI Developer & Solutions Architect",
    company: "TNC CLUB",
    location: "Ижевск",
    period: "Ноябрь 2022 — Декабрь 2024",
    duration: "2 года 2 месяца",
    description:
      "Разработал и внедрил 20+ веб-сайтов и 10+ веб-приложений для малого бизнеса. Интеграция AI-инструментов для автоматизации контента и поддержки.",
    achievements: [
      {
        title: "Веб-приложения с AI-интеграцией",
        description:
          "20+ сайтов и 10+ веб-приложений с AI-инструментами. Сокращение времени обновления контента на 60-80% за счёт автоматизации.",
        metrics: ["30+ проектов", "-60-80% времени", "AI-интеграции"],
      },
      {
        title: "Telegram-боты с LLM",
        description:
          "10+ ботов с ChatGPT для автоматизации поддержки и продаж. Среднее время ответа: с 5-10 минут до <40 секунд. Конверсия в диалог: +35-50%.",
        metrics: ["10+ ботов", "<40 сек ответ", "+35-50% конверсия"],
      },
      {
        title: "Prompt Engineering & Cost Optimization",
        description:
          "Chain-of-thought, few-shot, self-critique подходы. Снижение расхода токенов: 40-65%, рост релевантности ответов: 25-40%.",
        metrics: ["-40-65% costs", "+25-40% качество", "optimization"],
      },
    ],
    technologies: ["React", "JavaScript", "ChatGPT", "n8n", "Telegram Bot API", "CSS"],
    current: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Опыт
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Профессиональный <span className="gradient-text">путь</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Более 3 лет в AI-автоматизации. От разработчика до партнёра в AI-продукте.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className="md:w-1/2 md:px-8 pl-12 md:pl-0">
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          {exp.current && (
                            <Badge className="mb-2 bg-primary text-primary-foreground animate-pulse-glow">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Текущее место
                            </Badge>
                          )}
                          {exp.isPartner && (
                            <Badge className="mb-2 bg-blue-500 text-white">
                              <Users className="h-3 w-3 mr-1" />
                              Доля в компании
                            </Badge>
                          )}
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <div className="flex items-center gap-2 text-primary font-medium mt-1">
                            <Briefcase className="h-4 w-4" />
                            {exp.company}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-muted-foreground">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <div className="font-medium text-sm">
                                {achievement.title}
                              </div>
                              <div className="text-xs text-muted-foreground mb-2">
                                {achievement.description}
                              </div>
                              {achievement.metrics && (
                                <div className="flex flex-wrap gap-1">
                                  {achievement.metrics.map((metric, j) => (
                                    <Badge key={j} variant="outline" className="text-xs border-primary/30 text-primary">
                                      {metric}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
