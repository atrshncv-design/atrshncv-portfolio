"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Lightbulb, 
  Rocket, 
  Settings, 
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const processSteps = [
  {
    step: 1,
    title: "Диагностика процессов",
    description: "Анализирую текущие бизнес-процессы, выявляю узкие места и точки для автоматизации. Оцениваю ROI и приоритизирую задачи.",
    icon: Search,
    tools: ["Discovery Call", "Process Mapping", "ROI Analysis"],
    deliverable: "Отчёт с рекомендациями и оценкой экономии",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    step: 2,
    title: "Проектирование архитектуры",
    description: "Разрабатываю схему автоматизации: какие сервисы подключить, как будут взаимодействовать компоненты, как обрабатывать ошибки.",
    icon: Lightbulb,
    tools: ["n8n/Make", "LLM Selection", "API Design"],
    deliverable: "Архитектурная схема и техническое задание",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    step: 3,
    title: "MVP и тестирование",
    description: "Создаю работающий прототип за 1-3 дня. Тестирую на реальных данных, собираю обратную связь, вношу корректировки.",
    icon: Rocket,
    tools: ["Rapid Prototyping", "Testing", "Iteration"],
    deliverable: "Работающий MVP автоматизации",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    step: 4,
    title: "Production и надёжность",
    description: "Настраиваю мониторинг, обработку ошибок, логирование. Делаю систему устойчивой к сбоям внешних сервисов.",
    icon: Settings,
    tools: ["Error Handling", "Monitoring", "Logging"],
    deliverable: "Стабильная production-система",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    step: 5,
    title: "Масштабирование",
    description: "Оптимизирую производительность, добавляю новые функции, интегрирую дополнительные сервисы по мере роста потребностей.",
    icon: TrendingUp,
    tools: ["Optimization", "New Features", "Scaling"],
    deliverable: "План развития и улучшений",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

const guarantees = [
  "Прозрачное ценообразование — оплата по этапам",
  "Документация и обучение команды",
  "Поддержка после запуска 30 дней",
  "Передача всех исходников и доступов",
];

export function Process() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Процесс
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Как я <span className="gradient-text">работаю</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            От диагностики до production за 7 дней. Прозрачный процесс с понятными результатами на каждом этапе.
          </p>
        </div>

        {/* Process Steps - Horizontal Timeline */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/50 via-primary/50 to-green-500/50" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative">
                  {/* Step number circle */}
                  <div className="hidden lg:flex absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-border items-center justify-center text-sm font-bold z-10">
                    {step.step}
                  </div>

                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardContent className="pt-8 pb-6 px-5">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 ${step.color}`} />
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4">
                        {step.description}
                      </p>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {step.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>

                      {/* Deliverable */}
                      <div className="pt-3 border-t border-border/50">
                        <div className="text-xs text-muted-foreground mb-1">Результат:</div>
                        <div className="text-sm font-medium">{step.deliverable}</div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Arrow for desktop */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                      <ArrowRight className="h-5 w-5 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Guarantees */}
        <div className="mt-16 p-6 rounded-2xl bg-muted/30 border border-border/50">
          <h3 className="font-semibold text-lg mb-4 text-center">Гарантии сотрудничества</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
