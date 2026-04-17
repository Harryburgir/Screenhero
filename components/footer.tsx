"use client";

import Link from "next/link";
import { Monitor, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Usługi",
    links: [
      { label: "Naprawa monitorów", href: "#" },
      { label: "Naprawa telewizorów", href: "#" },
      { label: "Wymiana matrycy", href: "#" },
      { label: "Diagnostyka", href: "#" },
    ],
  },
  {
    title: "Firma",
    links: [
      { label: "O nas", href: "#o-nas" },
      { label: "Wycena", href: "#wycena" },
      { label: "Kontakt", href: "#kontakt" },
      { label: "Kariera", href: "#" },
    ],
  },
  {
    title: "Pomoc",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Gwarancja", href: "#" },
      { label: "Regulamin", href: "#" },
      { label: "Polityka prywatności", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background">
      {/* Top Glow Line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="group mb-6 inline-flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center">
                <div className="absolute inset-0 rounded bg-primary/20 blur-lg transition-all group-hover:bg-primary/40" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded border border-primary bg-background">
                  <Monitor className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-wider text-primary">
                  SCREEN<span className="text-secondary">HERO</span>
                </span>
              </div>
            </Link>

            <p className="mb-6 max-w-sm text-muted-foreground">
              Profesjonalna naprawa i wymiana ekranów monitorów oraz telewizorów. 
              Szybko, skutecznie, z gwarancją.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded border border-border/50 bg-card/50 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="mb-4 font-[family-name:var(--font-display)] font-bold uppercase tracking-wider text-foreground">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ScreenHero. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Zaprojektowane z</span>
            <span className="text-accent">&hearts;</span>
            <span>w Polsce</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
