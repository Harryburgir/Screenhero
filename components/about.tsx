"use client";

import Image from "next/image";
import { CheckCircle2, Users, Award, Cpu } from "lucide-react";

const features = [
  "Certyfikowani technicy z wieloletnim doświadczeniem",
  "Tylko oryginalne części zamienne",
  "Bezpłatna diagnostyka i wycena",
  "Gwarancja na wszystkie naprawy",
  "Ekspresowa realizacja 24-48h",
  "Dojazd do klienta w całym mieście",
];

const stats = [
  { icon: Users, value: "10 000+", label: "Zadowolonych klientów" },
  { icon: Award, value: "15+", label: "Lat doświadczenia" },
  { icon: Cpu, value: "98%", label: "Skuteczność napraw" },
];

export function About() {
  return (
    <section id="o-nas" className="relative overflow-hidden bg-card py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(252, 224, 30, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(0, 236, 255, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded border border-border/50">
              <Image
                src="/images/about-team.jpg"
                alt="Technik ScreenHero przy pracy nad naprawą ekranu"
                width={600}
                height={600}
                className="w-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Stats overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-px bg-border/30 backdrop-blur-sm">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-background/70 p-4 text-center backdrop-blur-sm">
                      <Icon className="mx-auto mb-1 h-5 w-5 text-secondary" />
                      <div className="font-[family-name:var(--font-display)] text-lg font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Corner Accents */}
              <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-primary" />
              <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-secondary" />
            </div>

            {/* Floating glow */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded bg-secondary/20 blur-3xl" />
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                O nas
              </span>
            </div>

            <h2 className="mb-6 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              EKSPERCI W <span className="text-secondary">NAPRAWIE</span> EKRANÓW
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              <span className="text-primary font-semibold">ScreenHero</span> to zespół pasjonatów 
              technologii z wieloletnim doświadczeniem w naprawie monitorów i telewizorów. 
              Specjalizujemy się w kompleksowej diagnostyce i naprawie wszelkich usterek 
              związanych z ekranami.
            </p>

            <p className="mb-8 text-muted-foreground">
              Naszą misją jest przywracanie życia uszkodzonym urządzeniom. Działamy szybko, 
              profesjonalnie i zawsze z myślą o satysfakcji klienta. Każda naprawa objęta 
              jest gwarancją, a bezpłatna diagnostyka pozwala poznać koszt naprawy przed 
              podjęciem decyzji.
            </p>

            {/* Features List */}
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
