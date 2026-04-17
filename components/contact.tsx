"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 123 456 789",
    href: "tel:+48123456789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kontakt@screenhero.pl",
    href: "mailto:kontakt@screenhero.pl",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "ul. Techniczna 42, 00-001 Warszawa",
    href: "#",
  },
  {
    icon: Clock,
    label: "Godziny otwarcia",
    value: "Pon-Pt: 8:00-18:00, Sob: 9:00-14:00",
    href: "#",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="kontakt" className="relative overflow-hidden bg-card py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(252, 224, 30, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(252, 224, 30, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Kontakt
            </span>
          </div>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            SKONTAKTUJ SIĘ <span className="text-secondary">Z NAMI</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Masz pytanie? Potrzebujesz wyceny? Napisz lub zadzwoń - odpowiemy najszybciej jak to możliwe.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
              DANE <span className="text-primary">KONTAKTOWE</span>
            </h3>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-start gap-4 rounded border border-border/50 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="text-foreground group-hover:text-primary">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 aspect-video overflow-hidden rounded border border-border/50 bg-background/50">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-12 w-12 text-primary/50" />
                  <p className="text-sm text-muted-foreground">Lokalizacja na mapie</p>
                  <p className="font-[family-name:var(--font-display)] text-xs text-primary">
                    ul. Techniczna 42, Warszawa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
              WYŚLIJ <span className="text-secondary">WIADOMOŚĆ</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Imię i nazwisko
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jan Kowalski"
                    className="border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Telefon
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+48 123 456 789"
                    className="border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jan@example.com"
                  className="border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Wiadomość
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Opisz swój problem lub zadaj pytanie..."
                  rows={5}
                  className="border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]"
              >
                <Send className="mr-2 h-5 w-5" />
                Wyślij wiadomość
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
