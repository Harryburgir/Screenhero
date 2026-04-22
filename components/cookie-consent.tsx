"use client";

import { useEffect, useState } from "react";
import { Cookie, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { LegalModal, type LegalDocumentType } from "./legal-modal";

const CONSENT_KEY = "screenhero_cookie_consent";
const CONSENT_VERSION = "1"; // increment when policy changes to re-prompt users

type ConsentState = "pending" | "accepted" | "customized";

interface ConsentPreferences {
  version: string;
  state: ConsentState;
  analytics: boolean;
  functional: boolean;
  timestamp: string;
}

function loadConsent(): ConsentPreferences | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed: ConsentPreferences = JSON.parse(raw);
    // Re-show banner if policy version has changed
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveConsent(prefs: Omit<ConsentPreferences, "version" | "timestamp">) {
  const full: ConsentPreferences = {
    ...prefs,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(full));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [functional, setFunctional] = useState(true);
  const [legalDoc, setLegalDoc] = useState<LegalDocumentType | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = loadConsent();
    if (!saved) {
      // Slight delay so the page renders first
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    saveConsent({ state: "accepted", analytics: true, functional: true });
    setVisible(false);
  };

  const acceptSelected = () => {
    saveConsent({ state: "customized", analytics, functional });
    setVisible(false);
  };

  const rejectOptional = () => {
    saveConsent({ state: "customized", analytics: false, functional: false });
    setVisible(false);
  };

  const openDoc = (doc: LegalDocumentType) => {
    setLegalDoc(doc);
  };

  if (!mounted || !visible) {
    return (
      <>
        {legalDoc && (
          <LegalModal
            open={!!legalDoc}
            document={legalDoc}
            onClose={() => setLegalDoc(null)}
          />
        )}
      </>
    );
  }

  return (
    <>
      {/* Overlay — subtle, doesn't block the page */}
      <div className="pointer-events-none fixed inset-0 z-[100] bg-background/40" aria-hidden="true" />

      {/* Banner */}
      <div
        role="dialog"
        aria-modal="false"
        aria-label="Ustawienia prywatności i cookies"
        className="fixed bottom-0 left-0 right-0 z-[110] border-t border-border bg-card shadow-2xl shadow-black/60"
      >
        {/* Neon top accent line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 py-5 lg:px-8">
          {/* Main row */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            {/* Icon + text */}
            <div className="flex flex-1 items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded border border-primary/40 bg-primary/10">
                <Cookie className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-foreground">
                  Twoja prywatność ma znaczenie
                </p>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Używamy plików cookies, aby zapewnić prawidłowe działanie serwisu oraz analizować
                  ruch. Zapoznaj się z naszą{" "}
                  <button
                    onClick={() => openDoc("prywatnosc")}
                    className="inline-flex items-center gap-0.5 text-primary underline-offset-2 hover:underline"
                  >
                    Polityką Prywatności
                    <ExternalLink className="h-3 w-3" />
                  </button>
                  ,{" "}
                  <button
                    onClick={() => openDoc("cookies")}
                    className="inline-flex items-center gap-0.5 text-primary underline-offset-2 hover:underline"
                  >
                    Polityką Cookies
                    <ExternalLink className="h-3 w-3" />
                  </button>{" "}
                  oraz{" "}
                  <button
                    onClick={() => openDoc("regulamin")}
                    className="inline-flex items-center gap-0.5 text-primary underline-offset-2 hover:underline"
                  >
                    Regulaminem
                    <ExternalLink className="h-3 w-3" />
                  </button>
                  .
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-shrink-0 flex-wrap items-center gap-2 md:flex-nowrap">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="flex items-center gap-1.5 rounded border border-border/70 px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                aria-expanded={expanded}
                aria-controls="cookie-settings-panel"
              >
                Ustawienia
                {expanded ? (
                  <ChevronUp className="h-3.5 w-3.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </button>
              <button
                onClick={rejectOptional}
                className="rounded border border-border/70 px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-border hover:text-foreground"
              >
                Tylko niezbędne
              </button>
              <button
                onClick={acceptAll}
                className="rounded border border-primary bg-primary px-5 py-2 font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Akceptuj wszystkie
              </button>
            </div>
          </div>

          {/* Expanded settings panel */}
          {expanded && (
            <div
              id="cookie-settings-panel"
              className="mt-4 rounded border border-border/50 bg-background/60 p-4"
            >
              <p className="mb-4 font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-wider text-foreground">
                Zarządzaj preferencjami cookies
              </p>

              <div className="space-y-3">
                {/* Necessary - always on */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      Niezbędne{" "}
                      <span className="ml-1 rounded bg-primary/20 px-1.5 py-0.5 text-xs font-normal text-primary">
                        zawsze aktywne
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Wymagane do prawidłowego działania strony. Nie można ich wyłączyć.
                    </p>
                  </div>
                  <div
                    className="h-5 w-9 rounded-full border border-primary/50 bg-primary/30 cursor-not-allowed opacity-60"
                    aria-label="Zawsze włączone"
                    role="switch"
                    aria-checked="true"
                  >
                    <div className="ml-auto mr-0.5 mt-0.5 h-4 w-4 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">Analityczne</p>
                    <p className="text-xs text-muted-foreground">
                      Pomagają nam zrozumieć, jak korzystasz z serwisu (np. Vercel Analytics).
                    </p>
                  </div>
                  <button
                    role="switch"
                    aria-checked={analytics}
                    onClick={() => setAnalytics((v) => !v)}
                    className={`relative h-5 w-9 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      analytics
                        ? "border-primary/50 bg-primary/30"
                        : "border-border bg-muted"
                    }`}
                    aria-label="Cookies analityczne"
                  >
                    <span
                      className={`absolute top-0.5 h-4 w-4 rounded-full transition-all ${
                        analytics
                          ? "left-auto right-0.5 bg-primary"
                          : "left-0.5 bg-muted-foreground"
                      }`}
                    />
                  </button>
                </div>

                {/* Functional */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">Funkcjonalne</p>
                    <p className="text-xs text-muted-foreground">
                      Zapamiętują Twoje preferencje i ulepszają komfort użytkowania.
                    </p>
                  </div>
                  <button
                    role="switch"
                    aria-checked={functional}
                    onClick={() => setFunctional((v) => !v)}
                    className={`relative h-5 w-9 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      functional
                        ? "border-primary/50 bg-primary/30"
                        : "border-border bg-muted"
                    }`}
                    aria-label="Cookies funkcjonalne"
                  >
                    <span
                      className={`absolute top-0.5 h-4 w-4 rounded-full transition-all ${
                        functional
                          ? "left-auto right-0.5 bg-primary"
                          : "left-0.5 bg-muted-foreground"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={acceptSelected}
                  className="rounded border border-primary/50 bg-primary/10 px-5 py-2 font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary/20"
                >
                  Zapisz wybrane
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Legal document modal */}
      <LegalModal
        open={!!legalDoc}
        document={legalDoc}
        onClose={() => setLegalDoc(null)}
      />
    </>
  );
}
