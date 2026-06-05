"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Code, 
  Workflow, 
  Bot, 
  Zap,
  Database,
  Video,
  Image,
  Cpu,
  CheckCircle2
} from "lucide-react";

const skillCategories = [
  {
    title: "LLM & AI",
    icon: Brain,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Построение интеллектуальных систем на базе языковых моделей",
    skills: [
      { name: "GPT-4 / GPT-5", use: "Сложные задачи рассуждения, кодогенерация, анализ" },
      { name: "Claude", use: "Длинные контексты, анализ документов, безопасные ответы" },
      { name: "Gemini", use: "Мультимодальные задачи, интеграция с Google" },
      { name: "Llama / Open Source", use: "On-premise решения, приватность данных" },
    ],
    techniques: [
      { name: "Prompt Engineering", use: "Снижение costs на 40-65%, повышение качества" },
      { name: "RAG", use: "Подключение базы знаний к LLM для точных ответов" },
      { name: "Multi-agent", use: "Цепочки агентов для сложных multi-step задач" },
      { name: "Fine-tuning (LoRA)", use: "Специализация модели под домен" },
    ],
  },
  {
    title: "Automation & Integration",
    icon: Workflow,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "Построение надежных автоматизированных workflow",
    skills: [
      { name: "n8n", use: "Основной инструмент для сложных workflow, self-hosted" },
      { name: "Make (Integromat)", use: "Интеграции с популярными сервисами" },
      { name: "Zapier", use: "Быстрые интеграции для простых задач" },
      { name: "Custom Scripts", use: "Node.js / Python для нестандартных задач" },
    ],
    techniques: [
      { name: "Webhooks", use: "Real-time обработка событий" },
      { name: "Error Handling", use: "Retry logic, fallbacks, уведомления о сбоях" },
      { name: "Rate Limiting", use: "Управление квотами API, очереди" },
      { name: "Monitoring", use: "Логирование, алертинг, дашборды" },
    ],
  },
  {
    title: "Development",
    icon: Code,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description: "AI-first разработка: архитектуру проектирую, код пишет AI",
    skills: [
      { name: "React / Next.js", use: "SPA, SSR, SSG приложения" },
      { name: "TypeScript", use: "Type-safe разработка" },
      { name: "Tailwind CSS", use: "Быстрая вёрстка с дизайн-системой" },
      { name: "Supabase", use: "Backend-as-a-Service, аутентификация, БД" },
    ],
    techniques: [
      { name: "Telegram Mini Apps", use: "Полноценные UI внутри Telegram" },
      { name: "API Development", use: "REST endpoints, webhooks" },
      { name: "PWA", use: "Оффлайн-приложения, push-уведомления" },
      { name: "Deployment", use: "Vercel, Docker, CI/CD" },
    ],
  },
  {
    title: "Data & Vector DBs",
    icon: Database,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    description: "Хранение и поиск в векторных пространствах для RAG",
    skills: [
      { name: "Pinecone", use: "Managed vector DB, production-ready" },
      { name: "Qdrant", use: "Self-hosted vector search, фильтрация" },
      { name: "Weaviate", use: "Гибридный поиск, модульность" },
      { name: "pgvector", use: "Векторный поиск в PostgreSQL" },
    ],
    techniques: [
      { name: "Embeddings", use: "OpenAI, Cohere, local models" },
      { name: "Chunking", use: "Оптимизация размера для контекста" },
      { name: "Hybrid Search", use: "Комбинация векторного + keyword" },
      { name: "Reranking", use: "Улучшение релевантности результатов" },
    ],
  },
  {
    title: "AI Content Generation",
    icon: Video,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    description: "Генерация мультимедийного контента для бизнеса",
    skills: [
      { name: "SUNO / Udio", use: "Генерация музыки, 1200+ треков продакшн" },
      { name: "HeyGen", use: "AI-аватары, автоматизация видео-продакшна" },
      { name: "Kling", use: "Генерация видео из текста" },
      { name: "ElevenLabs", use: "Клонирование голоса, TTS" },
    ],
    techniques: [
      { name: "Batch Processing", use: "Обработка сотен запросов параллельно" },
      { name: "Quality Control", use: "Автоматическая проверка результатов" },
      { name: "Post-processing", use: "FFmpeg, монтаж, оптимизация" },
      { name: "API Integration", use: "Программный доступ к генераторам" },
    ],
  },
  {
    title: "Bots & Conversational AI",
    icon: Bot,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    description: "Интеллектуальные боты с LLM-интеграцией",
    skills: [
      { name: "Telegram Bot API", use: "10+ ботов, Mini Apps, payments" },
      { name: "OpenAI Assistants", use: "Stateful диалоги, file search" },
      { name: "Custom Agents", use: "Автономные агенты с tool use" },
      { name: "Voice Interfaces", use: "Speech-to-text, text-to-speech" },
    ],
    techniques: [
      { name: "Context Management", use: "Сохранение истории диалога" },
      { name: "Intent Recognition", use: "Классификация запросов" },
      { name: "Human Handoff", use: "Передача сложных случаев оператору" },
      { name: "Analytics", use: "Метрики использования, sentiment" },
    ],
  },
];

const additionalCapabilities = [
  { icon: Zap, label: "Быстрый прототипинг (1-3 дня)" },
  { icon: CheckCircle2, label: "Production-ready качество" },
  { icon: Cpu, label: "Русский / English B1" },
  { icon: Database, label: "Документация и передача знаний" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Стек
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Технологии и <span className="gradient-text">компетенции</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Не просто список инструментов — а конкретные сценарии применения. 
            Каждая технология выбрана под задачу.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <div>
                      <div>{category.title}</div>
                      <p className="text-xs font-normal text-muted-foreground mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Core Skills */}
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">ТЕХНОЛОГИИ</div>
                    <div className="space-y-2">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-sm">{skill.name}</span>
                            <span className="text-xs text-muted-foreground ml-1">— {skill.use}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Techniques */}
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">ТЕХНИКИ</div>
                    <div className="flex flex-wrap gap-1.5">
                      {category.techniques.map((tech) => (
                        <Badge key={tech.name} variant="secondary" className="text-xs">
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Capabilities */}
        <div className="flex flex-wrap justify-center gap-3">
          {additionalCapabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm border-border/50 bg-card/50 hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default"
              >
                <Icon className="h-4 w-4 mr-2 text-primary" />
                {item.label}
              </Badge>
            );
          })}
        </div>
      </div>
    </section>
  );
}
