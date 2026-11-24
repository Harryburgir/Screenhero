"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#uslugi", label: "Usługi" },
    { href: "#o-nas", label: "O nas" },
    { href: "#wycena", label: "Wycena" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group relative flex items-center">
          <div className="absolute inset-0 rounded-lg bg-primary/10 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="relative flex flex-col font-[family-name:var(--font-display)] font-black uppercase leading-none tracking-wider text-foreground transition-all group-hover:drop-shadow-[0_0_16px_rgba(252,224,30,0.5)]">
            <span className="text-base text-primary sm:text-lg">Electro</span>
            <span className="text-[0.65rem] tracking-[0.18em] text-foreground/80 sm:text-xs">Best Partner</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-4 md:flex">
          <Button 
            className="relative overflow-hidden border border-primary bg-primary/10 px-6 font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <span className="relative z-10">Umów wizytę</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-foreground md:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-20 border-b border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-border/50 py-4 text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="mt-4 w-full border border-primary bg-primary/10 font-semibold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Umów wizytę
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
