"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ExternalLink, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Wrench, 
  TrendingUp, 
  AlertCircle,
  Workflow,
  MessageSquare,
  Video,
  Target,
  Brain,
  Database,
  Search
} from "lucide-react";

// Featured AI Cases - главные кейсы
const featuredProjects = [
  {
    title: "BTC Sarria — Агентная AI-система для крипто-обменника",
    subtitle: "Автономная мультиагентная система на базе локальной LLM. Автоматизация 80% рутинных процессов",
    image: "/projects/btc-sarria.png",
    context: {
      problem: "Ручная обработка клиентских запросов, парсинг данных с криптобирж и поиск информации занимали до 80% времени операторов. Масштабирование невозможно без найма. Конфиденциальность данных требовала локального решения — облачные API исключены.",
      solution: "Разработал автономную агентную систему на базе локальной LLM (Llama/Mistral). Система парсит данные с 10+ источников, анализирует Excel/CSV отчёты, автономно ищет информацию в интернете через браузерного агента и ведёт диалоги с клиентами 24/7.",
      architecture: ["Local LLM (Llama/Mistral)", "LangChain/LangGraph", "Playwright (browser agent)", "RAG + pgvector", "Python/FastAPI", "PostgreSQL", "OpenClaw"],
    },
    workflow: [
      { icon: Database, label: "Парсинг", desc: "10+ источников" },
      { icon: Brain, label: "Local LLM", desc: "Конфиденциально" },
      { icon: Search, label: "RAG", desc: "База знаний" },
      { icon: Bot, label: "Чат-бот", desc: "24/7 поддержка" },
    ],
    metrics: [
      { value: "80%", label: "автоматизация запросов" },
      { value: "<2 сек", label: "среднее время ответа" },
      { value: "1000+", label: "диалогов обработано" },
    ],
    whatLearned: "Локальная LLM — правильный выбор для конфиденциальных данных, но требует тщательного мониторинга latency и памяти. В v2 — интеграция с внутренней CRM и предиктивная аналитика транзакций.",
    tags: ["Local LLM", "LangChain", "RAG", "Python", "Playwright", "PostgreSQL", "AI Agents"],
    links: {
      demo: "https://gbtcfinance.com/ru/bitcoin-atm-store/gbtc-sarria/",
    },
  },
  {
    title: "AI Music Generator — АРТ-РЕКОРД",
    subtitle: "End-to-end автоматизация производства персонализированных песен",
    image: "/projects/ai-record.png",
    context: {
      problem: "Ручное производство персонализированных песен занимало 20-30 минут менеджера на каждый заказ. Масштабирование невозможно без увеличения штата. Высокий риск человеческих ошибок при обработке заказов.",
      solution: "Построил полностью автоматизированный pipeline: Telegram-бот принимает заказ → GPT генерирует текст → SUNO создаёт трек → постобработка → отправка клиенту. Участие человека: 0 минут на рутинные заказы.",
      architecture: ["n8n (orchestration)", "OpenAI GPT-4 (lyrics)", "SUNO API (music generation)", "Telegram Bot API", "FFmpeg (post-processing)"],
    },
    workflow: [
      { icon: MessageSquare, label: "Telegram Bot", desc: "Приём заказа" },
      { icon: Workflow, label: "n8n", desc: "Оркестрация" },
      { icon: Target, label: "GPT-4", desc: "Генерация текста" },
      { icon: Video, label: "SUNO", desc: "Создание трека" },
    ],
    metrics: [
      { value: "1000+", label: "треков сгенерировано" },
      { value: "0 мин", label: "участие менеджера" },
      { value: "30-60 сек", label: "время генерации" },
    ],
    whatLearned: "В v2 добавлю систему рекомендаций на основе предпочтений пользователя и интеграцию с платежными системами для полностью автономного бизнеса.",
    tags: ["n8n", "OpenAI", "SUNO", "Telegram Bot", "Automation"],
    links: {
      demo: "https://ai-record.ru/",
      telegram: "https://t.me/art_record_24_songs_bot",
    },
  },
  {
    title: "Content Factory — AI Video Pipeline",
    subtitle: "Автоматизация видео-продакшна: от 4 часов до 10 минут",
    image: "/projects/content-factory.png",
    context: {
      problem: "Производство одного видео занимало 4 часа: брифинг, написание сценария, съёмка, монтаж, постпродакшн. Команда из 3 человек справлялась с 2 видео в день. Высокие затраты на персонал и оборудование.",
      solution: "End-to-end автоматизация: Google Sheets с брифами → Claude пишет сценарий → HeyGen генерирует видео с AI-аватаром → автоматический монтаж → загрузка в облако. Команда: 1 человек для контроля качества.",
      architecture: ["n8n", "Claude API", "HeyGen API", "Google Sheets", "Cloud Storage", "Webhooks", "Error Handling"],
    },
    workflow: [
      { icon: MessageSquare, label: "Google Sheets", desc: "Брифы" },
      { icon: Target, label: "Claude", desc: "Сценарий" },
      { icon: Video, label: "HeyGen", desc: "AI-аватар" },
      { icon: Workflow, label: "n8n", desc: "Автоматизация" },
    ],
    metrics: [
      { value: "-96%", label: "сокращение времени" },
      { value: "10 мин", label: "на одно видео" },
      { value: "3→1", label: "команда сокращена" },
    ],
    whatLearned: "Критически важно предусмотреть fallback на случай недоступности HeyGen API. Добавил очередь с ретраями, экспоненциальным backoff и уведомления о сбоях в Telegram.",
    tags: ["n8n", "HeyGen", "Claude", "Video Automation", "Workflow"],
    links: {
      demo: "https://ai-record.ru/",
    },
  },
];

// Other Projects - остальные проекты
const otherProjects = [
  {
    title: "VK Video — Арт-объект «Смотрим в одной стороне»",
    description: "Разработал и оптимизировал промпт для AI-генерации изображений на масштабном арт-объекте VK Video. 5000+ изображений с 100% успешных генераций, 50+ итераций оптимизации.",
    image: "/projects/vk-video.png",
    tags: ["Prompt Engineering", "Nanobanana", "A/B Testing", "AI Image Gen"],
    metrics: ["100% успех", "5000+ изображений", "50+ итераций"],
    link: "https://smotrim-v-odny-storony.ru/",
  },
  {
    title: "Naidoo AI — Обновление AI-ассистента",
    description: "Провёл масштабное обновление AI-бота: расширил базу знаний (200+ записей), добавил новые сценарии, улучшил UX/UI. Результат: 15% рост конверсии, 99.9% uptime в продакшене.",
    image: "/projects/naidoo-ai.png",
    tags: ["Python", "LangGraph", "PostgreSQL", "Redis", "React", "Next.js"],
    metrics: ["200+ записей", "15% конверсия", "99.9% uptime"],
    link: "https://naidoo.ai",
  },
  {
    title: "Трекер привычек",
    description: "Минималистичное PWA для формирования привычек с прогресс-трекингом и статистикой",
    image: "/projects/habits.png",
    tags: ["React", "TypeScript", "PWA"],
    metrics: ["2 недели dev", "100% Lighthouse"],
    link: "https://trakerprivichek1.space.z.ai",
  },
  {
    title: "Карта ПФО — Промышленность",
    description: "Интерактивная аналитическая карта лёгкой промышленности Приволжского федерального округа",
    image: "/projects/legprom.png",
    tags: ["Data Viz", "React", "Maps"],
    metrics: ["14 регионов", "50+ показателей"],
    link: "https://legprompfov3.space.z.ai/",
  },
  {
    title: "Редактор гидроизогипс",
    description: "Профессиональный GIS-инструмент для редактирования карт подземных вод",
    image: "/projects/hydroeditor.png",
    tags: ["GIS", "Canvas", "Geology"],
    metrics: ["5x быстрее", "DXF/PDF экспорт"],
    link: "https://g13m52swxxh1-d1.space.z.ai/",
  },
  {
    title: "Карты и анализ стран",
    description: "Серия интерактивных карт и аналитических дашбордов для США, Франции и других стран",
    image: "/projects/maps.png",
    tags: ["Maps", "Dashboard", "Analytics"],
    metrics: ["Мультиязычность", "Интерактив"],
    link: "https://trishencovusa.space.z.ai/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Кейсы
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Избранные <span className="gradient-text">AI-кейсы</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Каждый кейс — это реальная бизнес-проблема, решённая с помощью AI-автоматизации.
            Конкретные метрики, архитектура, production-подход.
          </p>
        </div>

        {/* Featured Projects - stacked layout */}
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden case-card"
            >
              {/* Project Image - on top */}
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Главный кейс</Badge>
                </div>
              </div>

              {/* Content - below image */}
              <div className="flex flex-col">
                <CardHeader className="pb-2">
                  <div>
                    <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                    <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {/* Workflow Visual */}
                  <div className="mb-4 p-4 rounded-xl bg-muted/50 border border-border/30">
                    <div className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Pipeline</div>
                    <div className="flex items-center justify-center overflow-x-auto gap-2">
                      {project.workflow.map((step, i) => {
                        const Icon = step.icon;
                        return (
                          <div key={i} className="flex items-center gap-2">
                            <div className="flex flex-col items-center text-center min-w-[60px]">
                              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-1">
                                <Icon className="h-4 w-4 text-primary" />
                              </div>
                              <div className="text-xs font-medium">{step.label}</div>
                              <div className="text-[10px] text-muted-foreground">{step.desc}</div>
                            </div>
                            {i < project.workflow.length - 1 && (
                              <ArrowRight className="h-4 w-4 text-muted-foreground/30 flex-shrink-0" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap justify-center gap-4 mb-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center flex-1 min-w-[80px]">
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Context */}
                  <div className="space-y-3 mb-4 flex-1">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <AlertCircle className="h-4 w-4 text-red-400" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Проблема</span>
                      </div>
                      <p className="text-sm text-muted-foreground pl-6">{project.context.problem}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Решение</span>
                      </div>
                      <p className="text-sm text-muted-foreground pl-6">{project.context.solution}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Wrench className="h-4 w-4 text-blue-400" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Стек</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pl-6">
                        {project.context.architecture.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-border/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-purple-400" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">V2 улучшения</span>
                      </div>
                      <p className="text-sm text-muted-foreground pl-6 italic">{project.whatLearned}</p>
                    </div>
                  </div>

                  {/* Tags & Links */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/50 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.links.demo && (
                        <Button size="sm" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.links.telegram && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.links.telegram} target="_blank" rel="noopener noreferrer">
                            <Bot className="h-4 w-4 mr-1" />
                            Try Bot
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Другие проекты</h3>
            <p className="text-muted-foreground">
              Веб-приложения, дашборды и инструменты для различных отраслей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="pt-4">
                  <h4 className="font-semibold mb-1">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.metrics.map((metric, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-primary/30 text-primary">
                        {metric}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/atrshncv-design" target="_blank" rel="noopener noreferrer">
              Все проекты на GitHub
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
