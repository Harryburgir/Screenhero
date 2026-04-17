"use client";

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
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded border border-border/50 bg-background p-8">
              {/* Tech Grid Background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(252, 224, 30, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(252, 224, 30, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                }}
              />
              
              {/* Central Display */}
              <div className="relative flex h-full flex-col items-center justify-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-4 rounded-full bg-primary/30 blur-2xl" />
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-primary">SH</span>
                  </div>
                </div>
                
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
                  SCREEN<span className="text-secondary">HERO</span>
                </h3>
                <p className="text-center text-sm text-muted-foreground">
                  Twój zaufany partner w naprawie ekranów
                </p>

                {/* Stats Row */}
                <div className="mt-8 grid w-full grid-cols-3 gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <Icon className="mx-auto mb-2 h-6 w-6 text-secondary" />
                        <div className="font-[family-name:var(--font-display)] text-xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-primary" />
              <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-secondary" />
              <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-secondary" />
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-primary" />
            </div>

            {/* Floating Elements */}
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
