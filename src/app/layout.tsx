import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Александр Трищенков | AI Automation Specialist — n8n, Make, RAG, LLM Integrations",
  description:
    "AI Automation Specialist с 3+ годами опыта. Помогаю бизнесу автоматизировать процессы с помощью LLM, API и no-code (n8n, Make, Zapier). Сэкономлено 1000+ часов. RAG-системы, AI-агенты, интеграции. Book a free discovery call.",
  keywords: [
    "AI Automation",
    "AI Automation Specialist",
    "LLM Integration",
    "n8n Expert",
    "Make Automation",
    "Zapier",
    "OpenAI",
    "Claude API",
    "RAG Systems",
    "Prompt Engineering",
    "Telegram Bot Development",
    "API Integration",
    "No-code Automation",
    "Low-code",
    "Process Automation",
    "AI Agent Development",
    "Workflow Automation",
    "Александр Трищенков",
    "Trishencov",
  ],
  authors: [{ name: "Александр Трищенков", url: "https://trishencov.space" }],
  creator: "Александр Трищенков",
  publisher: "Александр Трищенков",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Александр Трищенков | AI Automation Specialist — n8n, Make, RAG",
    description:
      "AI Automation Specialist. Автоматизация бизнес-процессов с помощью LLM, n8n, Make. RAG-системы, AI-агенты, интеграции. 1000+ часов сэкономлено для бизнеса.",
    url: "https://trishencov.space",
    siteName: "Александр Трищенков — AI Automation",
    type: "profile",
    locale: "ru_RU",
    firstName: "Александр",
    lastName: "Трищенков",
    username: "atrshncv",
  },
  twitter: {
    card: "summary_large_image",
    title: "Александр Трищенков | AI Automation Specialist",
    description:
      "AI Automation Specialist. n8n, Make, LLM интеграции. Сэкономлено 1000+ часов ручной работы.",
    creator: "@a_trshncv",
  },
  alternates: {
    canonical: "https://trishencov.space",
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://trishencov.space/#person",
  name: "Александр Трищенков",
  alternateName: "Alexander Trishencov",
  jobTitle: "AI Automation Specialist",
  description:
    "AI Automation Specialist с 3+ годами опыта. Специализируюсь на LLM интеграциях, RAG-системах и автоматизации бизнес-процессов с помощью n8n, Make, Zapier.",
  url: "https://trishencov.space",
  email: "alexander.trishencov@gmail.com",
  telephone: "+7-912-468-76-70",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ижевск",
    addressCountry: "Russia",
  },
  sameAs: [
    "https://t.me/a_trshncv",
    "https://github.com/atrshncv-design",
    "https://vk.ru/a_trshncv",
  ],
  knowsAbout: [
    "AI Automation",
    "LLM Integration",
    "n8n",
    "Make",
    "Zapier",
    "OpenAI API",
    "Claude API",
    "RAG Systems",
    "Prompt Engineering",
    "Telegram Bot Development",
    "React",
    "Next.js",
    "TypeScript",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "AI Automation Specialist",
    occupationalCategory: "15-1212.00",
    skills: [
      "LLM Integration",
      "n8n Workflow Design",
      "RAG Architecture",
      "API Integration",
      "Process Automation",
    ],
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AI Automation Services by Alexander Trishencov",
  description:
    "AI-автоматизация бизнес-процессов: LLM интеграции, RAG-системы, автоматизация workflow с помощью n8n, Make, Zapier.",
  provider: {
    "@type": "Person",
    name: "Александр Трищенков",
    url: "https://trishencov.space",
  },
  areaServed: "Worldwide",
  serviceType: ["AI Automation", "LLM Integration", "Process Automation", "Bot Development"],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning className="dark">
      <head>
        <link rel="canonical" href="https://trishencov.space" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
