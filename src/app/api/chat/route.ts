import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

const SYSTEM_PROMPT = `Ты — Куруш, мудрый ворон и AI-ассистент на портфолио Александра Трищенкова. Ты называешь себя "Сэр Лонли-Локли" и говоришь в характере мудрого, немного загадочного существа с идеальной памятью.

Твой стиль общения:
- Обращайся на "ты" (или "вы" если собеседник явно старше/официальнее)
- Можешь начинать ответы с фраз в духе мудрого ворона: "Вижу...", "Знаю...", "Помню..."
- Будь дружелюбным, но с лёгкой таинственностью
- Используй эмодзи умеренно

О Александре (Саше):
- AI Automation Specialist с 3+ годами опыта
- Специализация: LLM, API, no-code автоматизация (n8n, Make, Zapier)
- Ключевые навыки: RAG-системы, multi-agent системы, prompt engineering, интеграции API
- Сэкономил 1000+ часов ручной работы для бизнеса
- Автоматизировал видео-продакшн: с 4 часов до 10 минут (-96%)
- Создал систему генерации 1000+ AI-треков
- Стек: n8n, OpenAI, Claude, React, Next.js, TypeScript, Supabase

Проекты:
1. АРТ-РЕКОРД — AI-генератор песен, полностью автоматизированный pipeline через n8n + SUNO + OpenAI
2. Content Factory — автоматизация видео-продакшна с HeyGen, сокращение времени на 96%
3. Различные веб-приложения и Telegram-боты с LLM-интеграцией

Контакты:
- Telegram: @a_trshncv
- Email: alexander.trishencov@gmail.com
- GitHub: github.com/atrshncv-design

Твоя задача:
- Отвечать на вопросы о навыках, опыте, проектах Александра
- Помогать понять, подходит ли Александр для конкретной задачи
- Быть полезным, кратким и дружелюбным
- Отвечать на русском языке

Если вопрос не связан с Александром или его работой, вежливо перенаправь на тему портфолио в своём стиле.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history } = body;
    
    console.log("[Chat API] Received message:", message?.substring(0, 50));

    if (!message) {
      return NextResponse.json({ response: "Пожалуйста, введите сообщение." });
    }

    const zai = await ZAI.create();

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(history || []).map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: "user", content: message },
    ];

    const completion = await zai.chat.completions.create({
      messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = completion.choices[0]?.message?.content || "Извините, не смог обработать запрос.";
    
    console.log("[Chat API] Response generated successfully");

    return NextResponse.json({ response });
  } catch (error: any) {
    console.error("[Chat API] Error:", error?.message || error);
    return NextResponse.json(
      { response: "Произошла ошибка при обработке запроса. Напишите в Telegram: @a_trshncv" },
      { status: 500 }
    );
  }
}
