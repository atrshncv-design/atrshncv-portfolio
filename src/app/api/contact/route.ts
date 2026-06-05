import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  type: string;
  message: string;
}

// Отправка email через Resend API
async function sendEmail(data: ContactFormData) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.TO_EMAIL || "alexander.trishencov@gmail.com";
  const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@trishencov.space";

  if (!RESEND_API_KEY) {
    console.log("RESEND_API_KEY not set, skipping email");
    return { success: false, error: "RESEND_API_KEY not configured" };
  }

  const typeLabels: Record<string, string> = {
    call: "Discovery Call",
    project: "Новый проект",
    job: "Вакансия",
    consultation: "Вопрос",
  };

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0a0a; color: #fff; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #7ED321; margin: 0;">🚀 Новый запрос с портфолио</h1>
      </div>

      <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #888;">Имя:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #333; font-weight: bold;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #888;">Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #333;">
              <a href="mailto:${data.email}" style="color: #7ED321; text-decoration: none;">${data.email}</a>
            </td>
          </tr>
          ${data.company ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #888;">Компания:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #333;">${data.company}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #888;">Тип запроса:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #333;">
              <span style="background: #7ED321; color: #000; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">
                ${typeLabels[data.type] || data.type}
              </span>
            </td>
          </tr>
        </table>
      </div>

      <div style="background: #1a1a1a; padding: 20px; border-radius: 8px;">
        <h3 style="margin: 0 0 15px 0; color: #7ED321;">💬 Сообщение:</h3>
        <p style="white-space: pre-wrap; line-height: 1.6; margin: 0; color: #ccc;">${data.message}</p>
      </div>

      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
        <p style="color: #666; font-size: 12px; margin: 0;">
          Отправлено с формы на trishencov.space
        </p>
      </div>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `🚀 Новый запрос: ${data.name} - ${typeLabels[data.type] || data.type}`,
        html: emailHtml,
        reply_to: data.email,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", result);
      return { success: false, error: result };
    }

    return { success: true, id: result.id };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error };
  }
}

// Отправка уведомления в Telegram
async function sendTelegramNotification(data: ContactFormData) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log("Telegram credentials not set, skipping notification");
    return { success: false, error: "Telegram not configured" };
  }

  const typeLabels: Record<string, string> = {
    call: "📞 Discovery Call",
    project: "🚀 Новый проект",
    job: "💼 Вакансия",
    consultation: "❓ Вопрос",
  };

  const emoji = data.type === "call" ? "📞" : data.type === "project" ? "🚀" : data.type === "job" ? "💼" : "❓";

  const text = `
${emoji} *НОВЫЙ ЗАПРОС С ПОРТФОЛИО*

👤 *Имя:* ${data.name}
📧 *Email:* ${data.email}
${data.company ? `🏢 *Компания:* ${data.company}` : ''}
📋 *Тип:* ${typeLabels[data.type] || data.type}

💬 *Сообщение:*
${data.message}

⏰ ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: "Markdown",
          disable_web_page_preview: true,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Telegram API error:", result);
      return { success: false, error: result };
    }

    return { success: true, messageId: result.result?.message_id };
  } catch (error) {
    console.error("Telegram send error:", error);
    return { success: false, error };
  }
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Валидация
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Заполните обязательные поля" },
        { status: 400 }
      );
    }

    // Email валидация
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Некорректный email" },
        { status: 400 }
      );
    }

    // Отправляем уведомление в Telegram (email опционально)
    const telegramResult = await sendTelegramNotification(body);

    // Пробуем отправить email если настроен (опционально)
    const emailResult = await sendEmail(body);

    console.log("Telegram result:", telegramResult);
    console.log("Email result:", emailResult);

    // Считаем успешным, если Telegram отправился
    if (!telegramResult.success) {
      return NextResponse.json(
        { error: "Ошибка отправки. Попробуйте связаться через Telegram." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Сообщение отправлено!",
      telegram: telegramResult.success,
      email: emailResult.success,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
