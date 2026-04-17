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
          {/* Left Column - Stats Cards */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="rounded border border-border/50 bg-background/50 p-6 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(252, 224, 30, 0.5)" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Icon className="mb-3 h-8 w-8 text-primary" />
                    <motion.div 
                      className="font-[family-name:var(--font-display)] text-3xl font-bold text-primary"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating glow */}
            <motion.div 
              className="absolute -left-4 -top-4 h-24 w-24 rounded bg-primary/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 h-24 w-24 rounded bg-secondary/20 blur-3xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                O nas
              </span>
            </motion.div>

            <motion.h2 
              className="mb-6 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-foreground md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              EKSPERCI W <span className="text-secondary animate-glowCyan">NAPRAWIE</span> EKRANÓW
            </motion.h2>

            <motion.p 
              className="mb-6 text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="text-primary font-semibold animate-glow">ScreenHero</span> to zespół pasjonatów 
              technologii z wieloletnim doświadczeniem w naprawie monitorów i telewizorów. 
              Specjalizujemy się w kompleksowej diagnostyce i naprawie wszelkich usterek 
              związanych z ekranami.
            </motion.p>

            <motion.p 
              className="mb-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Naszą misją jest przywracanie życia uszkodzonym urządzeniom. Działamy szybko, 
              profesjonalnie i zawsze z myślą o satysfakcji klienta. Każda naprawa objęta 
              jest gwarancją, a bezpłatna diagnostyka pozwala poznać koszt naprawy przed 
              podjęciem decyzji.
            </motion.p>

            {/* Features List */}
            <motion.div 
              className="grid gap-3 sm:grid-cols-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Grid on Mobile */}
            <motion.div 
              className="mt-8 grid gap-4 sm:grid-cols-3 lg:hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="rounded border border-border/50 bg-background/50 p-4 text-center backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Icon className="mx-auto mb-2 h-6 w-6 text-secondary" />
                    <div className="font-[family-name:var(--font-display)] text-xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
