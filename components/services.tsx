"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, Tv, Smartphone, Wrench, RefreshCcw, Search, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
  image: string;
  modalDescription: string;
  modalSteps: string[];
  modalFacts: { label: string; value: string }[];
};

const services: Service[] = [
  {
    icon: Monitor,
    title: "Naprawa Monitorów",
    description: "Naprawa uszkodzonych matryc LCD, LED. Wymiana podświetlenia, naprawa zasilacza i płyty głównej.",
    features: ["Wszystkie marki", "Diagnostyka gratis", "Realizacja 24-48h"],
    color: "primary",
    image: "/images/service-monitor.jpg",
    modalDescription:
      "Specjalizujemy się w kompleksowej naprawie monitorów komputerowych każdej marki i rozmiaru — od małych 21\" po wielkoformatowe 49\" ultrapanoramy. Naprawiamy uszkodzone matryce IPS, VA, TN oraz OLED, wymieniamy podświetlenie LED i paski, regenerujemy zasilacze oraz płyty główne. Każda naprawa poprzedzona jest bezpłatną diagnostyką i szczegółowym kosztorysem.",
    modalSteps: [
      "Bezpłatna diagnostyka i pomiar parametrów elektrycznych",
      "Identyfikacja uszkodzonego podzespołu — matryca, zasilacz lub PCB",
      "Zamówienie oryginalnych lub kompatybilnych części zamiennych",
      "Profesjonalna wymiana z zachowaniem warunków ESD",
      "Testy wizualne, pomiar jasności i kalibracja kolorów",
      "12-miesięczna gwarancja na wykonaną naprawę",
    ],
    modalFacts: [
      { label: "Czas realizacji", value: "24–48 h" },
      { label: "Gwarancja", value: "12 miesięcy" },
      { label: "Obsługiwane marki", value: "Dell, LG, Samsung, AOC, BenQ i inne" },
    ],
  },
  {
    icon: Tv,
    title: "Naprawa Telewizorów",
    description: "Kompleksowa naprawa TV LCD, LED, QLED. Smart TV wszystkich producentów.",
    features: ["Samsung, LG, Sony", "Naprawa u klienta", "Gwarancja 24 msc"],
    color: "secondary",
    image: "/images/service-tv.jpg",
    modalDescription:
      "Naprawiamy telewizory wszystkich czołowych producentów — Samsung, LG, Sony, Philips, Panasonic, Hisense i wielu innych. Obsługujemy technologie LCD, LED, QLED, NanoCell, OLED oraz AMOLED. Oferujemy wyjazd do klienta na terenie całego miasta — nie musisz transportować dużego TV do naszego serwisu. Naprawiamy zarówno usterki sprzętowe, jak i oprogramowanie (firmware, Smart TV).",
    modalSteps: [
      "Diagnoza na miejscu lub w serwisie — do wyboru klienta",
      "Naprawa matrycy, panelu podświetlenia lub modułu T-CON",
      "Naprawa / wymiana zasilacza i płyty głównej (Main Board)",
      "Aktualizacja oprogramowania i przywracanie systemu Smart TV",
      "Test w warunkach normalnego użytkowania przez min. 2 godziny",
      "24-miesięczna gwarancja na wszystkie naprawy TV",
    ],
    modalFacts: [
      { label: "Czas realizacji", value: "48–72 h" },
      { label: "Gwarancja", value: "24 miesiące" },
      { label: "Dojazd do klienta", value: "Bydgoszcz i okolice" },
    ],
  },
  {
    icon: RefreshCcw,
    title: "Wymiana Matrycy",
    description: "Profesjonalna wymiana uszkodzonych ekranów na nowe, oryginalne części zamienne.",
    features: ["Oryginalne części", "Szybka wymiana", "Test jakości"],
    color: "accent",
    image: "/images/service-matrix.jpg",
    modalDescription:
      "Uszkodzona matryca to jeden z najczęstszych problemów monitorów i telewizorów. Oferujemy wymianę matrycy na nowe, oryginalne panele lub sprawdzone zamienniki OEM — o identycznych parametrach jak oryginał. Dysponujemy obszernym magazynem popularnych matryc, co pozwala nam realizować wiele zleceń nawet w ciągu jednego dnia roboczego.",
    modalSteps: [
      "Ocena stopnia uszkodzenia matrycy (pęknięcia, martwice, linie)",
      "Dobór odpowiedniej matrycy — oryginalna lub certyfikowany zamiennik OEM",
      "Demontaż w warunkach antystatycznych i czystym środowisku",
      "Montaż nowej matrycy z pełną kalibracją kolorów i kontrastu",
      "Kontrola jakości obrazu w punktach roboczych i narożnikach",
      "Pakowanie i odbiór — lub dostawa kurierska",
    ],
    modalFacts: [
      { label: "Czas realizacji", value: "1–3 dni robocze" },
      { label: "Gwarancja na matrycę", value: "12 miesięcy" },
      { label: "Typ matryc", value: "IPS, VA, TN, OLED, QLED" },
    ],
  },
  {
    icon: Search,
    title: "Diagnostyka",
    description: "Dokładna diagnostyka usterki z wykorzystaniem profesjonalnego sprzętu pomiarowego.",
    features: ["Bezpłatna wycena", "Raport usterek", "Konsultacja"],
    color: "primary",
    image: "/images/service-diagnostics.jpg",
    modalDescription:
      "Profesjonalna diagnostyka to fundament każdej skutecznej naprawy. Korzystamy z oscyloskopów cyfrowych, mierników ESR, testerów matryc oraz autorskiego oprogramowania diagnostycznego. Każdy klient otrzymuje szczegółowy raport z opisem usterki, wykazem uszkodzonych podzespołów oraz jasnym kosztorysem naprawy — bez ukrytych opłat. Diagnostyka jest w pełni bezpłatna, niezależnie od wyniku.",
    modalSteps: [
      "Wstępna ocena wizualna obudowy i złącz sygnałowych",
      "Pomiary napięć zasilających i testowanie zasilacza",
      "Analiza sygnału matrycy i weryfikacja płyty T-CON",
      "Testy płyty głównej i modułów komunikacyjnych (Wi-Fi, HDMI)",
      "Sporządzenie raportu z usterek i kosztorysu naprawy",
      "Konsultacja z technikiem i odpowiedź na pytania klienta",
    ],
    modalFacts: [
      { label: "Koszt diagnostyki", value: "Bezpłatna" },
      { label: "Czas diagnostyki", value: "Do 24 h" },
      { label: "Raport pisemny", value: "Tak, w każdym przypadku" },
    ],
  },
  {
    icon: Smartphone,
    title: "Ekrany Dotykowe",
    description: "Naprawa i wymiana ekranów dotykowych, digitizerów, paneli sterowania.",
    features: ["Kalibracja touch", "Wymiana digitizera", "Naprawa złącz"],
    color: "secondary",
    image: "/images/service-touch.jpg",
    modalDescription:
      "Ekrany dotykowe to coraz popularniejszy element monitorów interaktywnych, kiosków informacyjnych i paneli sterowania przemysłowego. Naprawiamy i wymieniamy digitizery pojemnościowe i rezystancyjne, przeprowadzamy kalibrację punktów dotyku oraz naprawiamy uszkodzone złącza i taśmy FFC. Posiadamy doświadczenie w serwisowaniu urządzeń zarówno konsumenckich, jak i przemysłowych.",
    modalSteps: [
      "Test cyfrowy warstwy dotykowej — odczyt nieaktywnych stref",
      "Demontaż digitizera z zabezpieczeniem szkła ochronnego",
      "Wymiana warstwy dotykowej na nową (pojemnościowa / rezystancyjna)",
      "Kalibracja wielopunktowa — do 20 punktów dotykowych",
      "Test precyzji i czułości na całej powierzchni ekranu",
      "Montaż końcowy i weryfikacja w warunkach pracy",
    ],
    modalFacts: [
      { label: "Czas realizacji", value: "2–4 dni robocze" },
      { label: "Gwarancja", value: "12 miesięcy" },
      { label: "Typ ekranów", value: "Pojemnościowe, rezystancyjne, IR" },
    ],
  },
  {
    icon: Wrench,
    title: "Serwis Pogwarancyjny",
    description: "Kompleksowy serwis urządzeń po gwarancji producenta. Naprawa każdego modelu.",
    features: ["Każdy producent", "Części zamienne", "Konkurencyjne ceny"],
    color: "accent",
    image: "/images/service-warranty.jpg",
    modalDescription:
      "Wygasła gwarancja producenta nie oznacza końca życia Twojego urządzenia. Nasz serwis pogwarancyjny obejmuje pełen zakres napraw dla urządzeń po terminie gwarancji — w często znacznie niższej cenie niż autoryzowany serwis. Dysponujemy szerokim magazynem części zamiennych do popularnych modeli oraz dostępem do baz schematów serwisowych, co pozwala nam naprawiać nawet rzadsze modele.",
    modalSteps: [
      "Przegląd stanu technicznego i ocena opłacalności naprawy",
      "Porównanie kosztu naprawy z ceną nowego urządzenia",
      "Naprawa lub wymiana uszkodzonego podzespołu",
      "Aktualizacja oprogramowania do najnowszej wersji",
      "Test kompleksowy — obraz, dźwięk, łączność, złącza",
      "6-miesięczna gwarancja na serwis pogwarancyjny",
    ],
    modalFacts: [
      { label: "Czas realizacji", value: "2–5 dni roboczych" },
      { label: "Gwarancja serwisowa", value: "6 miesięcy" },
      { label: "Obsługiwane modele", value: "Wszystkie dostępne na rynku" },
    ],
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
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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
                  <button
                    onClick={() => setSelectedService(service)}
                    className={`inline-flex items-center gap-1 text-xs md:text-sm font-medium ${colors.icon} transition-all group-hover:gap-2`}
                  >
                    Więcej
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={(open) => { if (!open) setSelectedService(null); }}>
        <DialogContent className="max-w-lg border-border/60 bg-background p-0 overflow-hidden">
          {selectedService && (() => {
            const colors = colorMap[selectedService.color as keyof typeof colorMap];
            const Icon = selectedService.icon;
            return (
              <>
                {/* Top image strip */}
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
                  <div className={`absolute bottom-3 left-5 inline-flex h-10 w-10 items-center justify-center rounded border border-white/20 bg-background/70 backdrop-blur-sm`}>
                    <Icon className={`h-5 w-5 ${colors.icon}`} />
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 pb-6 pt-2">
                  <DialogHeader className="mb-4">
                    <DialogTitle className={`font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight ${colors.icon}`}>
                      {selectedService.title}
                    </DialogTitle>
                    <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                      {selectedService.modalDescription}
                    </DialogDescription>
                  </DialogHeader>

                  {/* Steps */}
                  <div className="mb-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Jak przebiega usługa
                    </p>
                    <ul className="space-y-2">
                      {selectedService.modalSteps.map((step, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: i * 0.06 }}
                        >
                          <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${colors.badge}`}>
                            {i + 1}
                          </span>
                          <span className="text-sm text-foreground/80">{step}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Facts bar */}
                  <div className={`grid grid-cols-3 gap-2 rounded border ${colors.border} ${colors.bg} p-3`}>
                    {selectedService.modalFacts.map((fact, i) => (
                      <div key={i} className="text-center">
                        <div className={`font-[family-name:var(--font-display)] text-sm font-bold ${colors.icon}`}>
                          {fact.value}
                        </div>
                        <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                          {fact.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      document.getElementById("wycena")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`mt-4 w-full rounded border ${colors.border} ${colors.bg} py-3 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider ${colors.icon} transition-all hover:opacity-80`}
                  >
                    Zgłoś usterkę — bezpłatna wycena
                  </button>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </section>
  );
}
