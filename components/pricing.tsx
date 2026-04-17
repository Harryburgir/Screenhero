"use client";

import { useState } from "react";
import { Monitor, Tv, Send, ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const deviceTypes = [
  { value: "monitor", label: "Monitor", icon: Monitor },
  { value: "telewizor", label: "Telewizor", icon: Tv },
];

const faultCategories = [
  "Brak obrazu / martwy ekran",
  "Uszkodzona matryca / pęknięty ekran",
  "Paski / linie na ekranie",
  "Problemy z podświetleniem",
  "Uszkodzony zasilacz",
  "Uszkodzona płyta główna",
  "Problemy z wejściami (HDMI, VGA, DP)",
  "Problemy z dźwiękiem",
  "Inny problem",
];

export function Pricing() {
  const [selectedDevice, setSelectedDevice] = useState<string>("");
  const [formData, setFormData] = useState({
    model: "",
    fault: "",
    faultDescription: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="wycena" className="relative overflow-hidden bg-card py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(252, 224, 30, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(252, 224, 30, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-2">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Bezpłatna wycena
            </span>
          </div>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            ZGŁOŚ <span className="text-primary">USTERKĘ</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Wypełnij formularz, a nasz technik skontaktuje się z Tobą w ciągu{" "}
            <span className="font-semibold text-primary">1 godziny</span> z bezpłatną wyceną.
          </p>
        </div>

        {submitted ? (
          /* Success State */
          <div className="relative overflow-hidden rounded border border-primary/50 bg-primary/5 p-12 text-center">
            <div className="absolute inset-0 bg-primary/5" />
            <div className="relative">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-display)] text-2xl font-bold text-primary">
                ZGŁOSZENIE PRZYJĘTE
              </h3>
              <p className="mb-6 text-muted-foreground">
                Otrzymaliśmy Twoje zgłoszenie. Nasz technik skontaktuje się z Tobą
                w ciągu <span className="font-semibold text-foreground">1 godziny</span>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setSelectedDevice("");
                  setFormData({ model: "", fault: "", faultDescription: "", name: "", phone: "", email: "" });
                }}
                className="text-sm font-medium uppercase tracking-wider text-secondary hover:text-secondary/80 underline underline-offset-4"
              >
                Wyślij nowe zgłoszenie
              </button>
            </div>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded border border-border/50 bg-background/60 p-8 backdrop-blur-sm"
          >
            {/* Step 1: Device Type */}
            <div>
              <label className="mb-3 block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                <span className="mr-2 text-primary">01.</span> Rodzaj urządzenia
              </label>
              <div className="grid grid-cols-2 gap-3">
                {deviceTypes.map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setSelectedDevice(value)}
                    className={`flex items-center justify-center gap-3 rounded border p-4 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider transition-all ${
                      selectedDevice === value
                        ? "border-primary bg-primary/10 text-primary shadow-[0_0_20px_rgba(252,224,30,0.15)]"
                        : "border-border/50 bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Model */}
            <div>
              <label className="mb-3 block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                <span className="mr-2 text-primary">02.</span> Model urządzenia
              </label>
              <Input
                type="text"
                required
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                placeholder='np. Samsung UE55TU8002, LG 43UK6300, Dell U2722D...'
                className="border-border/50 bg-card/50 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus-visible:ring-primary/30"
              />
            </div>

            {/* Step 3: Fault Category */}
            <div>
              <label className="mb-3 block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                <span className="mr-2 text-primary">03.</span> Rodzaj usterki
              </label>
              <div className="relative">
                <select
                  required
                  value={formData.fault}
                  onChange={(e) => setFormData({ ...formData, fault: e.target.value })}
                  className="w-full appearance-none rounded border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="" disabled className="bg-card text-muted-foreground">
                    Wybierz rodzaj usterki...
                  </option>
                  {faultCategories.map((fault) => (
                    <option key={fault} value={fault} className="bg-card text-foreground">
                      {fault}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            {/* Step 4: Fault Description */}
            <div>
              <label className="mb-3 block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                <span className="mr-2 text-primary">04.</span> Opis usterki
              </label>
              <Textarea
                required
                value={formData.faultDescription}
                onChange={(e) => setFormData({ ...formData, faultDescription: e.target.value })}
                placeholder="Opisz dokładnie objawy usterki, jak długo występuje problem, czy było wcześniej uderzenie lub zalanie..."
                rows={4}
                className="border-border/50 bg-card/50 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus-visible:ring-primary/30"
              />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border/50" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Twoje dane kontaktowe
              </span>
              <div className="h-px flex-1 bg-border/50" />
            </div>

            {/* Contact Data */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Imię i nazwisko
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jan Kowalski"
                  className="border-border/50 bg-card/50 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus-visible:ring-primary/30"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Telefon
                </label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+48 123 456 789"
                  className="border-border/50 bg-card/50 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus-visible:ring-primary/30"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jan@example.com"
                className="border-border/50 bg-card/50 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus-visible:ring-primary/30"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(252,224,30,0.3)]"
            >
              <Send className="mr-2 h-5 w-5" />
              Wyślij zgłoszenie — bezpłatna wycena
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Diagnostyka i wycena zawsze bezpłatna. Naprawę realizujemy tylko po Twojej akceptacji.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
