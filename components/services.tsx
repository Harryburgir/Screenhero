"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, Tv, Smartphone, Wrench, RefreshCcw, Search, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Naprawa Monitorów",
    description: "Naprawa uszkodzonych matryc LCD, LED. Wymiana podświetlenia, naprawa zasilacza i płyty głównej.",
    features: ["Wszystkie marki", "Diagnostyka gratis", "Realizacja 24-48h"],
    color: "primary",
    image: "/images/service-monitor.jpg",
  },
  {
    icon: Tv,
    title: "Naprawa Telewizorów",
    description: "Kompleksowa naprawa TV LCD, LED, QLED. Smart TV wszystkich producentów.",
    features: ["Samsung, LG, Sony", "Naprawa u klienta", "Gwarancja 24 msc"],
    color: "secondary",
    image: "/images/service-tv.jpg",
  },
  {
    icon: RefreshCcw,
    title: "Wymiana Matrycy",
    description: "Profesjonalna wymiana uszkodzonych ekranów na nowe, oryginalne części zamienne.",
    features: ["Oryginalne części", "Szybka wymiana", "Test jakości"],
    color: "accent",
    image: "/images/service-matrix.jpg",
  },
  {
    icon: Search,
    title: "Diagnostyka",
    description: "Dokładna diagnostyka usterki z wykorzystaniem profesjonalnego sprzętu pomiarowego.",
    features: ["Bezpłatna wycena", "Raport usterek", "Konsultacja"],
    color: "primary",
    image: "/images/service-diagnostics.jpg",
  },
  {
    icon: Smartphone,
    title: "Ekrany Dotykowe",
    description: "Naprawa i wymiana ekranów dotykowych, digitizerów, paneli sterowania.",
    features: ["Kalibracja touch", "Wymiana digitizera", "Naprawa złącz"],
    color: "secondary",
    image: "/images/service-touch.jpg",
  },
  {
    icon: Wrench,
    title: "Serwis Pogwarancyjny",
    description: "Kompleksowy serwis urządzeń po gwarancji producenta. Naprawa każdego modelu.",
    features: ["Każdy producent", "Części zamienne", "Konkurencyjne ceny"],
    color: "accent",
    image: "/images/service-warranty.jpg",
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
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-4 py-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-secondary">
              Nasze usługi
            </span>
          </motion.div>
          <motion.h2 
            className="mb-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            KOMPLEKSOWA <span className="text-primary animate-glow">NAPRAWA</span>
          </motion.h2>
          <motion.p 
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Oferujemy pełen zakres usług związanych z naprawą i wymianą ekranów.
            Profesjonalnie, szybko i z gwarancją.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            const Icon = service.icon;
            
            return (
              <motion.div
                key={index}
                className={`group relative overflow-hidden rounded border ${colors.border} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Card Image */}
                <div className="relative h-28 overflow-hidden md:h-36">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" />
                  {/* Icon badge over image */}
                  <div className={`absolute bottom-2 left-3 inline-flex h-9 w-9 items-center justify-center rounded border border-white/20 bg-background/70 backdrop-blur-sm`}>
                    <Icon className={`h-4 w-4 ${colors.icon}`} />
                  </div>
                </div>

                {/* Content */}
                <div className={`${colors.bg} p-4 md:p-5`}>
                  {/* Glow Effect */}
                  <div className={`absolute -right-8 top-0 h-32 w-32 rounded-full ${colors.glow} blur-3xl opacity-0 transition-opacity group-hover:opacity-100`} />

                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg md:text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mb-3 text-xs md:text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-3 flex flex-wrap gap-1 md:gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className={`rounded px-2 py-0.5 text-xs font-medium ${colors.badge}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <button className={`inline-flex items-center gap-1 text-xs md:text-sm font-medium ${colors.icon} transition-all group-hover:gap-2`}>
                    Więcej
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
