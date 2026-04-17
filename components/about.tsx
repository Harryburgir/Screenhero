"use client";

import { motion } from "framer-motion";
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
          {/* Left Column - Stats Cards - optimized with CSS transitions */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="rounded border border-border/50 bg-background/50 p-6 transition-all duration-200 hover:scale-105 hover:border-primary/50"
                  >
                    <Icon className="mb-3 h-8 w-8 text-primary" />
                    <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Static glow - no animation for performance */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded bg-primary/15 blur-xl" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded bg-secondary/15 blur-xl" />
          </motion.div>

          {/* Right Column - Content - simplified animations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                O nas
              </span>
            </div>

            <h2 className="mb-6 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              EKSPERCI W <span className="text-secondary animate-glowCyan">NAPRAWIE</span> EKRANÓW
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              <span className="text-primary font-semibold animate-glow">ScreenHero</span> to zespół pasjonatów 
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

            {/* Features List - simplified, single container animation */}
            <motion.div 
              className="grid gap-3 sm:grid-cols-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats Grid on Mobile - CSS hover only */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:hidden">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="rounded border border-border/50 bg-background/50 p-4 text-center transition-transform duration-200 hover:scale-105"
                  >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
