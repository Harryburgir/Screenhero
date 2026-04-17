"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

export function Hero() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 120);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(252, 224, 30, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(252, 224, 30, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Neon Glow Effects */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-secondary/20 blur-[120px]" />
      <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-accent/15 blur-[100px]" />

      {/* Background logo watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <Image
          src="/logo.png"
          alt=""
          width={900}
          height={720}
          className="h-auto w-[70vw] max-w-3xl select-none opacity-[0.04]"
          aria-hidden="true"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left: Text content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Dostępni 24/7 • Ekspresowa realizacja
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl xl:text-6xl">
              <span
                className={`block text-primary transition-all duration-75 ${glitchActive ? "opacity-50 blur-[2px]" : "opacity-100"}`}
              >
                NAPRAWA
              </span>
              <span className="block text-foreground">&amp; WYMIANA</span>
              <span className="block text-secondary">EKRANÓW</span>
            </h1>

            {/* Subheading */}
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Profesjonalna naprawa monitorów i telewizorów.
              <span className="text-secondary"> Szybka diagnostyka</span>,{" "}
              <span className="text-primary">ekspresowa realizacja</span>,{" "}
              <span className="text-accent">gwarancja jakości</span>.
            </p>

            {/* CTA Buttons */}
            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary px-8 py-6 font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-105"
                onClick={() => document.getElementById("wycena")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Bezpłatna wycena
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary/50 bg-secondary/5 px-8 py-6 font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wider text-secondary transition-all hover:border-secondary hover:bg-secondary/10"
                onClick={() => document.getElementById("uslugi")?.scrollIntoView({ behavior: "smooth" })}
              >
                Zobacz usługi
              </Button>
            </div>

            {/* Stats */}
            <div className="grid w-full grid-cols-3 gap-3">
              <div className="group relative overflow-hidden rounded border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/50">
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/10 blur-xl transition-all group-hover:bg-primary/20" />
                <Zap className="mb-2 h-5 w-5 text-primary" />
                <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary">24h</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Naprawa</div>
              </div>
              <div className="group relative overflow-hidden rounded border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-secondary/50">
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-secondary/10 blur-xl transition-all group-hover:bg-secondary/20" />
                <Shield className="mb-2 h-5 w-5 text-secondary" />
                <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-secondary">2 lata</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Gwarancja</div>
              </div>
              <div className="group relative overflow-hidden rounded border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-accent/50">
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-accent/10 blur-xl transition-all group-hover:bg-accent/20" />
                <Clock className="mb-2 h-5 w-5 text-accent" />
                <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-accent">5000+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Ekranów</div>
              </div>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative flex items-center justify-center">
            {/* Ambient glow behind the image */}
            <div className="absolute h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]" />
            <div className="absolute h-[350px] w-[350px] rounded-full bg-secondary/10 blur-[90px]" />
            <div className="absolute h-[250px] w-[250px] rounded-full bg-accent/10 blur-[70px]" />

            <Image
              src="/hero-image.png"
              alt="ScreenHero - cyberpunkowy bohater naprawy ekranów"
              width={700}
              height={560}
              className="relative z-10 h-auto w-full max-w-sm select-none md:max-w-md lg:max-w-full"
              style={{ mixBlendMode: "screen" }}
              priority
            />
          </div>

        </div>
      </div>

      {/* Scan Line Effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div 
          className="absolute left-0 right-0 h-px animate-pulse bg-primary/30"
          style={{
            top: '50%',
            boxShadow: '0 0 20px 5px rgba(252, 224, 30, 0.3)',
          }}
        />
      </div>
    </section>
  );
}
