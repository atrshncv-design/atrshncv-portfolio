"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Calendar,
  Briefcase,
  Rocket,
  HelpCircle,
  CheckCircle2,
  Loader2,
  Clock,
  Globe,
  Zap
} from "lucide-react";

const contactInfo = [
  {
    icon: Send,
    label: "Telegram",
    value: "@a_trshncv",
    href: "https://t.me/a_trshncv",
    preferred: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "alexander.trishencov@gmail.com",
    href: "mailto:alexander.trishencov@gmail.com",
    preferred: false,
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (912) 468-76-70",
    href: "tel:+79124687670",
    preferred: false,
  },
  {
    icon: MapPin,
    label: "Локация",
    value: "Ижевск, Россия",
    href: null,
    preferred: false,
  },
];

const requestTypes = [
  { icon: Calendar, label: "Discovery Call", value: "call", description: "Бесплатная 30-мин консультация" },
  { icon: Rocket, label: "Новый проект", value: "project", description: "AI-автоматизация под ключ" },
  { icon: Briefcase, label: "Вакансия", value: "job", description: "Работа в команде" },
  { icon: HelpCircle, label: "Вопрос", value: "consultation", description: "Технические вопросы" },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      type: selectedType || "consultation",
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Ошибка отправки");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка отправки. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Контакты
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Автоматизируем <span className="gradient-text">рутину вместе</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Расскажите о вашей задаче — предложу решение и оценю сроки. 
            Первая консультация бесплатно.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MessageSquare className="h-5 w-5 text-primary" />
                Отправить запрос
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Сообщение отправлено!</h3>
                  <p className="text-muted-foreground text-sm">
                    Отвечу в течение 24 часов. Если срочно — напишите в Telegram.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" name="name" placeholder="Как вас зовут?" required />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="email@example.com" required />
                  </div>

                  {/* Company / Website */}
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания / Сайт</Label>
                    <Input id="company" name="company" placeholder="Название или URL" />
                  </div>

                  {/* Request Type */}
                  <div className="space-y-2">
                    <Label>Тип запроса</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {requestTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setSelectedType(type.value)}
                            className={`flex flex-col items-start gap-1 p-3 rounded-lg border transition-colors text-left ${
                              selectedType === type.value
                                ? "border-primary bg-primary/10"
                                : "border-border/50 hover:border-border bg-card/50"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Icon className={`h-4 w-4 ${selectedType === type.value ? 'text-primary' : 'text-muted-foreground'}`} />
                              <span className="text-sm font-medium">{type.label}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{type.description}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Опишите задачу</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Какую проблему нужно решить? Есть ли дедлайны? Бюджет?"
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Отправить запрос
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm gradient-border">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">Быстрые действия</h3>
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full justify-start bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a href="https://t.me/a_trshncv" target="_blank" rel="noopener noreferrer">
                      <Send className="h-4 w-4 mr-3" />
                      Написать в Telegram
                      <Badge variant="secondary" className="ml-auto text-xs">Рекомендую</Badge>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <a href="mailto:alexander.trishencov@gmail.com">
                      <Mail className="h-4 w-4 mr-3" />
                      Отправить Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">Контактная информация</h3>
                <div className="space-y-2">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">{item.label}</span>
                            {item.preferred && (
                              <Badge variant="secondary" className="text-xs py-0">
                                <Zap className="h-3 w-3 mr-1" />
                                Быстро
                              </Badge>
                            )}
                          </div>
                          <div className="font-medium truncate">{item.value}</div>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Response Time & Timezone */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Время ответа</div>
                      <div className="text-xs text-muted-foreground">Обычно &lt;24 часа</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Часовой пояс</div>
                      <div className="text-xs text-muted-foreground">UTC+3 (Москва)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Availability */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm">Открыт для новых проектов</span>
                  </div>
                  <Badge variant="outline" className="text-green-500 border-green-500/30">
                    Available
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
