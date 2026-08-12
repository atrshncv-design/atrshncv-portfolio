# atrshncv-portfolio

Personal showcase site of Alexander Trishencov — AI Automation Specialist (LLM integrations, n8n/Make automation, RAG, AI agents). A dark, single-page Next.js app with case studies, skills, experience and a built-in LLM chat assistant.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![React](https://img.shields.io/badge/React-19-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000) ![Prisma](https://img.shields.io/badge/Prisma-SQLite-2d3748)

## Overview

A single-page portfolio built for an AI-automation consultancy. It presents the owner's positioning (AI Automation Specialist), a skills matrix, three featured case studies with concrete metrics and architecture, six smaller projects, work experience, and a contact path — all in Russian, dark-themed, responsive.

The site doubles as a live demo of the author's own work: a floating AI chat assistant answers visitor questions about the owner's experience, skills and projects.

## Problem

A consultant's credibility rests on demonstrated results. A static resume or PDF cannot show how an automation pipeline was built, what stack it used, or what it achieved. Generic website builders are a poor fit for an AI-automation audience that expects technical depth and concrete numbers.

## Solution

A custom single-page site where each featured case study is structured as **problem → solution → pipeline → metrics → stack**, so a visitor can evaluate fit in minutes. Supporting sections cover skills by domain, the client engagement process, experience, and direct contact channels (Telegram, email, phone, contact form).

The embedded LLM chat assistant ("Куруш") answers questions about the owner — an honest, working example of the LLM-integration work the site advertises.

## Key capabilities

- **9 case studies**, of which 3 featured:
  - *BTC Sarria* — multi-agent system on a local LLM (Llama/Mistral) for a crypto exchange: parsing, RAG, browser agent, 24/7 client dialog.
  - *AI Music Generator* — end-to-end pipeline: Telegram bot order → GPT lyrics → SUNO track → delivery to client.
  - *Content Factory* — video production automation: Sheets briefs → Claude script → HeyGen AI avatar → assembly.
  - Plus: VK Video art-object prompt work, Naidoo AI assistant update, habit tracker (PWA), PFO light-industry map, groundwater map editor, country maps & dashboards.
- **Skills matrix**: LLM & AI (GPT/Claude/Gemini, prompt engineering, RAG, multi-agent, fine-tuning), Automation & Integration (n8n, Make, Zapier, webhooks, error handling), Development (Next.js, Python, Telegram bots, GIS).
- **Engagement process**: diagnostics → architecture → implementation → support, with deliverables per stage.
- **Contact system**: form routed through the API to email (Resend) with Telegram fallback, plus direct channels.
- **AI chat widget** with suggested questions.

## Architecture

Next.js 16 App Router single-page app (`src/app`), server API routes:

- `POST /api/chat` — LLM chat via `z-ai-web-dev-sdk`, system prompt covers the owner's profile and projects; widget sends last 6 messages as context.
- `POST /api/contact` — contact form → transactional email (Resend); Telegram notification fallback.
- `GET /api` — simple health/hello endpoint.

UI: React 19, Tailwind CSS 4, shadcn/ui components (Radix primitives), framer-motion animations, dark theme by default. Site content is authored in components — no CMS.

Data layer: Prisma is configured (SQLite) with `db:push`/`db:generate` scripts, but the showcase content itself lives in component data.

Deployment: `output: "standalone"` in `next.config.ts`; a `Caddyfile` reverse-proxies port 81 → localhost:3000; `.zscripts/` contains build/start scripts (`bun install` → `next build` → tar.gz bundle with standalone output, static assets and Caddy config).

## Demo

Demo available on request.

## Tech stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript 5
- **UI**: Tailwind CSS 4, shadcn/ui (Radix), framer-motion, lucide-react, recharts
- **Backend/API**: Next.js route handlers, `z-ai-web-dev-sdk` (LLM chat), Resend (email)
- **Data**: Prisma + SQLite
- **Ops**: standalone output, bun (production runtime), Caddy (reverse proxy), `.zscripts` build pipeline

## Project status

**Active showcase** — the site is maintained and regularly extended with new case studies.

## My contribution

- Designed and built the showcase site end-to-end: visual design (dark, shadcn/ui-based), information architecture, Russian copy and the case-study format.
- Implemented the AI chat assistant and its API route, the contact form + email/Telegram integration, and the deployment setup (standalone build, Caddy, build/start scripts).

## Quick start

Commands verified against `package.json`:

```bash
npm install
npm run dev        # next dev -p 3000  →  http://localhost:3000
npm run build      # next build + copies static/public into standalone output
npm run start      # requires bun: NODE_ENV=production bun .next/standalone/server.js
```

Prisma (SQLite) is optional for the showcase content: `npm run db:push` / `npm run db:generate`.

## Configuration

No `.env.example` is committed. Environment variables referenced by the code:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key for contact-form email (optional — without it email is skipped) |
| `TO_EMAIL` | Contact-form recipient (default: `alexander.trishencov@gmail.com`) |
| `FROM_EMAIL` | Sender address for contact-form email (default: `noreply@trishencov.space`) |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | Optional Telegram fallback notifications for the contact form |
| LLM provider key | For `/api/chat` — configured per `z-ai-web-dev-sdk` setup |

## Limitations

- Content is single-language (Russian); no i18n UI yet.
- `/api/chat` requires LLM provider credentials at runtime; otherwise the widget shows a connection error and suggests Telegram.
- Contact-form email depends on `RESEND_API_KEY`; without it submissions are not queued.
- No public deployment URL yet — demo available on request.

## Roadmap

Tracked per showcased case (as stated on the site): BTC Sarria v2 — CRM integration and predictive transaction analytics; AI Music Generator v2 — recommendation system and payments; Content Factory — API fallback hardening.

## License

No license file in the repository — all rights reserved.

---

# atrshncv-portfolio

Персональный сайт-витрина Александра Трищенкова — специалиста по AI-автоматизации (LLM-интеграции, автоматизация на n8n/Make, RAG, AI-агенты). Тёмный одностраничный сайт на Next.js: кейсы, навыки, опыт и встроенный LLM-чат-ассистент.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![React](https://img.shields.io/badge/React-19-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000) ![Prisma](https://img.shields.io/badge/Prisma-SQLite-2d3748)

## Обзор

Одностраничный сайт-портфолио для AI-автоматизации. Показывает позиционирование (AI Automation Specialist), матрицу навыков, три главных кейса с конкретными метриками и архитектурой, шесть дополнительных проектов, опыт и контакты. Контент на русском, тёмная тема, адаптивная вёрстка.

Сайт заодно служит живой демонстрацией собственной работы автора: плавающий AI-чат-ассистент отвечает посетителям на вопросы об опыте, навыках и проектах.

## Проблема

Репутация консультанта строится на показанных результатах. Статичное резюме или PDF не показывает, как устроен пайплайн автоматизации, какой стек использовался и чего удалось достичь. Типовые конструкторы сайтов плохо подходят аудитории, которая ждёт технической глубины и конкретных цифр.

## Решение

Кастомный одностраничный сайт, где каждый главный кейс описан по схеме **проблема → решение → пайплайн → метрики → стек** — посетитель оценивает релевантность за несколько минут. Дополнительные секции: навыки по доменам, процесс работы с клиентом, опыт и прямые каналы связи (Telegram, email, телефон, форма).

Встроенный LLM-чат-ассистент («Куруш») отвечает на вопросы об авторе — честный, работающий пример той самой LLM-интеграции, которую сайт рекламирует.

## Возможности

- **9 кейсов**, из них 3 главных:
  - *BTC Sarria* — мультиагентная система на локальной LLM (Llama/Mistral) для криптообменника: парсинг, RAG, браузерный агент, диалоги с клиентами 24/7.
  - *AI Music Generator* — сквозной пайплайн: заказ в Telegram-боте → текст от GPT → трек в SUNO → отправка клиенту.
  - *Content Factory* — автоматизация видеопродакшна: брифы в Google Sheets → сценарий от Claude → AI-аватар HeyGen → сборка.
  - Плюс: промпт-инжиниринг для арт-объекта VK Video, обновление AI-ассистента Naidoo, трекер привычек (PWA), карта лёгкой промышленности ПФО, редактор карт подземных вод, карты и дашборды стран.
- **Матрица навыков**: LLM & AI (GPT/Claude/Gemini, промпт-инжиниринг, RAG, мультиагентность, fine-tuning), Автоматизация и интеграции (n8n, Make, Zapier, вебхуки, обработка ошибок), Разработка (Next.js, Python, Telegram-боты, GIS).
- **Процесс работы**: диагностика → проектирование архитектуры → внедрение → поддержка, с результатом на каждом этапе.
- **Контакты**: форма через API → email (Resend) с фолбэком в Telegram, плюс прямые каналы.
- **AI-чат-виджет** с подсказками вопросов.

## Архитектура

Одностраничное приложение Next.js 16 (App Router, `src/app`), серверные API-роуты:

- `POST /api/chat` — LLM-чат через `z-ai-web-dev-sdk`, системный промпт описывает профиль и проекты владельца; виджет передаёт последние 6 сообщений как контекст.
- `POST /api/contact` — форма контактов → email (Resend); фолбэк — уведомление в Telegram.
- `GET /api` — простой health/hello-эндпоинт.

UI: React 19, Tailwind CSS 4, компоненты shadcn/ui (примитивы Radix), анимации framer-motion, тёмная тема по умолчанию. Контент сайта описан в компонентах — без CMS.

Данные: Prisma настроена (SQLite) со скриптами `db:push`/`db:generate`, но контент витрины хранится в данных компонентов.

Деплой: `output: "standalone"` в `next.config.ts`; `Caddyfile` — reverse proxy порт 81 → localhost:3000; в `.zscripts/` — скрипты сборки и запуска (`bun install` → `next build` → tar.gz-бандл с standalone-выводом, статикой и конфигом Caddy).

## Демо

Демо доступно по запросу (demo available on request).

## Технологии

- **Фреймворк**: Next.js 16 (App Router), React 19, TypeScript 5
- **UI**: Tailwind CSS 4, shadcn/ui (Radix), framer-motion, lucide-react, recharts
- **Бэкенд/API**: route handlers Next.js, `z-ai-web-dev-sdk` (LLM-чат), Resend (email)
- **Данные**: Prisma + SQLite
- **Ops**: standalone-сборка, bun (продакшн-рантайм), Caddy (reverse proxy), пайплайн сборки в `.zscripts`

## Статус проекта

**Активная витрина (active showcase)** — сайт поддерживается и регулярно дополняется новыми кейсами.

## Мой вклад

- Спроектировал и разработал сайт-витрину целиком: визуальный дизайн (тёмная тема на shadcn/ui), информационная архитектура, русскоязычные тексты и формат кейсов.
- Реализовал AI-чат-ассистента и его API-роут, форму контактов с интеграцией email/Telegram и настройку деплоя (standalone-сборка, Caddy, скрипты сборки/запуска).

## Быстрый старт

Команды сверены с `package.json`:

```bash
npm install
npm run dev        # next dev -p 3000  →  http://localhost:3000
npm run build      # next build + копирование static/public в standalone-вывод
npm run start      # требует bun: NODE_ENV=production bun .next/standalone/server.js
```

Prisma (SQLite) для контента витрины не обязательна: `npm run db:push` / `npm run db:generate`.

## Конфигурация

Файла `.env.example` в репозитории нет. Переменные окружения, используемые кодом:

| Переменная | Назначение |
| --- | --- |
| `RESEND_API_KEY` | API-ключ для email из формы контактов (опционально — без него письмо пропускается) |
| `TO_EMAIL` | Получатель писем формы (по умолчанию: `alexander.trishencov@gmail.com`) |
| `FROM_EMAIL` | Адрес отправителя (по умолчанию: `noreply@trishencov.space`) |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | Опциональные Telegram-уведомления как фолбэк формы |
| Ключ LLM-провайдера | Для `/api/chat` — настраивается по документации `z-ai-web-dev-sdk` |

## Ограничения

- Контент только на русском; UI-локализации пока нет.
- `/api/chat` требует креды LLM-провайдера в рантайме; иначе виджет показывает ошибку соединения и предлагает Telegram.
- Email из формы зависит от `RESEND_API_KEY`; без него заявки не ставятся в очередь.
- Публичного URL нет — демо доступно по запросу.

## План развития

Ведётся по каждому показанному кейсу (как указано на сайте): BTC Sarria v2 — интеграция с CRM и предиктивная аналитика транзакций; AI Music Generator v2 — система рекомендаций и оплаты; Content Factory — усиление фолбэков при недоступности API.

## Лицензия

Лицензионного файла в репозитории нет — все права защищены.
