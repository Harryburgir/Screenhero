"use client";

import { Monitor, Tv, Smartphone, Wrench, RefreshCcw, Search, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Naprawa Monitorów",
    description: "Naprawa uszkodzonych matryc LCD, LED. Wymiana podświetlenia, naprawa zasilacza i płyty głównej.",
    features: ["Wszystkie marki", "Diagnostyka gratis", "Realizacja 24-48h"],
    color: "primary",
  },
  {
    icon: Tv,
    title: "Naprawa Telewizorów",
    description: "Kompleksowa naprawa TV LCD, LED, QLED. Smart TV wszystkich producentów.",
    features: ["Samsung, LG, Sony", "Naprawa u klienta", "Gwarancja 24 msc"],
    color: "secondary",
  },
  {
    icon: RefreshCcw,
    title: "Wymiana Matrycy",
    description: "Profesjonalna wymiana uszkodzonych ekranów na nowe, oryginalne części zamienne.",
    features: ["Oryginalne części", "Szybka wymiana", "Test jakości"],
    color: "accent",
  },
  {
    icon: Search,
    title: "Diagnostyka",
    description: "Dokładna diagnostyka usterki z wykorzystaniem profesjonalnego sprzętu pomiarowego.",
    features: ["Bezpłatna wycena", "Raport usterek", "Konsultacja"],
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "Ekrany Dotykowe",
    description: "Naprawa i wymiana ekranów dotykowych, digitizerów, paneli sterowania.",
    features: ["Kalibracja touch", "Wymiana digitizera", "Naprawa złącz"],
    color: "secondary",
  },
  {
    icon: Wrench,
    title: "Serwis Pogwarancyjny",
    description: "Kompleksowy serwis urządzeń po gwarancji producenta. Naprawa każdego modelu.",
    features: ["Każdy producent", "Części zamienne", "Konkurencyjne ceny"],
    color: "accent",
  },
];

const colorMap = {
  primary: {
    border: "border-primary/30 hover:border-primary",
    bg: "bg-primary/5",
    glow: "bg-primary/20",
    icon: "text-primary",
    badge: "bg-primary/10 text-primary",
  },
  secondary: {
    border: "border-secondary/30 hover:border-secondary",
    bg: "bg-secondary/5",
    glow: "bg-secondary/20",
    icon: "text-secondary",
    badge: "bg-secondary/10 text-secondary",
  },
  accent: {
    border: "border-accent/30 hover:border-accent",
    bg: "bg-accent/5",
    glow: "bg-accent/20",
    icon: "text-accent",
    badge: "bg-accent/10 text-accent",
  },
};

export function Services() {
  return (
    <section id="uslugi" className="relative bg-background py-24">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-4 py-2">
            <span className="text-sm font-medium uppercase tracking-wider text-secondary">
              Nasze usługi
            </span>
          </div>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            KOMPLEKSOWA <span className="text-primary">NAPRAWA</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Oferujemy pełen zakres usług związanych z naprawą i wymianą ekranów.
            Profesjonalnie, szybko i z gwarancją.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded border ${colors.border} ${colors.bg} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}
              >
                {/* Glow Effect */}
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${colors.glow} blur-3xl opacity-0 transition-opacity group-hover:opacity-100`} />
                
                {/* Icon */}
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded border border-current/20 ${colors.bg}`}>
                  <Icon className={`h-7 w-7 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className={`rounded px-2 py-1 text-xs font-medium ${colors.badge}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <button className={`inline-flex items-center gap-1 text-sm font-medium ${colors.icon} transition-all group-hover:gap-2`}>
                  Dowiedz się więcej
                  <ArrowRight className="h-4 w-4" />
                </button>

                {/* Corner Accent */}
                <div className={`absolute bottom-0 right-0 h-16 w-16 ${colors.glow} blur-2xl`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
