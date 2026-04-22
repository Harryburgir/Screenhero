"use client";

import { useEffect, useRef } from "react";
import { X, ScrollText, Shield, Cookie } from "lucide-react";

export type LegalDocumentType = "regulamin" | "prywatnosc" | "cookies";

interface LegalModalProps {
  open: boolean;
  document: LegalDocumentType | null;
  onClose: () => void;
}

const documents: Record<
  LegalDocumentType,
  { title: string; icon: React.ElementType; content: React.ReactNode }
> = {
  regulamin: {
    title: "Regulamin Serwisu",
    icon: ScrollText,
    content: (
      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p className="text-xs text-muted-foreground">Ostatnia aktualizacja: 22 kwietnia 2025 r.</p>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §1. Postanowienia ogólne
          </h3>
          <p>
            Niniejszy Regulamin określa zasady korzystania z serwisu internetowego ScreenHero,
            dostępnego pod adresem screenhero.pl, prowadzonego przez firmę ScreenHero z siedzibą
            w Polsce.
          </p>
          <p>
            Korzystanie z serwisu jest równoznaczne z akceptacją niniejszego Regulaminu.
            Użytkownik zobowiązany jest do zapoznania się z Regulaminem przed rozpoczęciem
            korzystania z usług.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §2. Definicje
          </h3>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li><strong className="text-foreground">Serwis</strong> — strona internetowa screenhero.pl wraz z wszelkimi podstronami.</li>
            <li><strong className="text-foreground">Usługodawca</strong> — firma ScreenHero, właściciel i administrator serwisu.</li>
            <li><strong className="text-foreground">Użytkownik</strong> — osoba fizyczna lub prawna korzystająca z serwisu.</li>
            <li><strong className="text-foreground">Usługa</strong> — naprawa, wymiana lub diagnostyka ekranów monitorów i telewizorów.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §3. Zakres usług
          </h3>
          <p>
            ScreenHero świadczy usługi w zakresie naprawy i wymiany ekranów monitorów oraz
            telewizorów. Szczegółowy zakres i cennik usług dostępny jest na stronie w sekcji
            Wycena.
          </p>
          <p>
            Usługodawca zastrzega sobie prawo do odmowy realizacji usługi w przypadku, gdy
            naprawa jest technicznie niemożliwa lub ekonomicznie nieuzasadniona.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §4. Zamówienie usługi i płatności
          </h3>
          <p>
            Zamówienie usługi odbywa się poprzez formularz kontaktowy dostępny na stronie lub
            bezpośrednio w siedzibie firmy. Cena usługi ustalana jest indywidualnie po
            bezpłatnej diagnostyce urządzenia.
          </p>
          <p>
            Płatności akceptowane są gotówką oraz przelewem bankowym. Wystawiana jest faktura
            VAT lub paragon fiskalny.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §5. Gwarancja i reklamacje
          </h3>
          <p>
            Na wszystkie wykonane usługi udzielana jest gwarancja na okres 12 miesięcy od daty
            odbioru urządzenia. Gwarancja nie obejmuje uszkodzeń mechanicznych powstałych po
            odbiorze.
          </p>
          <p>
            Reklamacje należy zgłaszać drogą elektroniczną lub osobiście. Usługodawca zobowiązuje
            się do rozpatrzenia reklamacji w terminie 14 dni roboczych.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §6. Odpowiedzialność
          </h3>
          <p>
            Usługodawca nie ponosi odpowiedzialności za dane przechowywane na naprawianym
            urządzeniu. Użytkownik powinien wykonać kopię zapasową danych przed przekazaniem
            urządzenia do serwisu.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §7. Postanowienia końcowe
          </h3>
          <p>
            Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O wszelkich zmianach
            Użytkownicy będą informowani poprzez serwis. Zmiany wchodzą w życie z chwilą
            opublikowania na stronie.
          </p>
          <p>
            W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa
            polskiego, w szczególności Kodeksu Cywilnego.
          </p>
        </section>
      </div>
    ),
  },

  prywatnosc: {
    title: "Polityka Prywatności",
    icon: Shield,
    content: (
      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p className="text-xs text-muted-foreground">Ostatnia aktualizacja: 22 kwietnia 2025 r.</p>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            1. Administrator danych osobowych
          </h3>
          <p>
            Administratorem Twoich danych osobowych jest firma ScreenHero z siedzibą w Polsce.
            W sprawach związanych z ochroną danych osobowych możesz skontaktować się z nami
            pod adresem e-mail: kontakt@screenhero.pl.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            2. Jakie dane zbieramy
          </h3>
          <p>Przetwarzamy następujące kategorie danych osobowych:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Dane identyfikacyjne: imię, nazwisko, firma</li>
            <li>Dane kontaktowe: adres e-mail, numer telefonu</li>
            <li>Dane techniczne: adres IP, typ przeglądarki, dane cookies</li>
            <li>Dane dotyczące usługi: opis urządzenia, zakres naprawy</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            3. Podstawa prawna i cel przetwarzania
          </h3>
          <p>Twoje dane przetwarzamy w następujących celach i na podstawach:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li><strong className="text-foreground">Realizacja usługi</strong> — art. 6 ust. 1 lit. b RODO (wykonanie umowy)</li>
            <li><strong className="text-foreground">Obsługa zapytań</strong> — art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes)</li>
            <li><strong className="text-foreground">Marketing</strong> — art. 6 ust. 1 lit. a RODO (zgoda)</li>
            <li><strong className="text-foreground">Obowiązki podatkowe</strong> — art. 6 ust. 1 lit. c RODO (obowiązek prawny)</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            4. Okres przechowywania danych
          </h3>
          <p>
            Dane osobowe przechowujemy przez okres niezbędny do realizacji celów, dla których
            zostały zebrane — nie dłużej jednak niż przez 5 lat od zakończenia świadczenia usługi,
            lub do czasu wycofania zgody (w przypadku przetwarzania na podstawie zgody).
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            5. Twoje prawa
          </h3>
          <p>Przysługuje Ci prawo do:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Dostępu do swoich danych osobowych</li>
            <li>Sprostowania nieprawidłowych danych</li>
            <li>Usunięcia danych (tzw. "prawo do bycia zapomnianym")</li>
            <li>Ograniczenia przetwarzania</li>
            <li>Przeniesienia danych</li>
            <li>Wniesienia sprzeciwu wobec przetwarzania</li>
            <li>Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            6. Odbiorcy danych
          </h3>
          <p>
            Twoje dane mogą być przekazywane podmiotom świadczącym usługi na naszą rzecz:
            dostawcom usług IT, firmom kurierskim, biurom rachunkowym. Nie sprzedajemy ani
            nie udostępniamy Twoich danych podmiotom trzecim w celach marketingowych.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            7. Bezpieczeństwo danych
          </h3>
          <p>
            Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić Twoje dane
            przed nieautoryzowanym dostępem, utratą lub zniszczeniem, zgodnie z wymogami RODO.
          </p>
        </section>
      </div>
    ),
  },

  cookies: {
    title: "Polityka Cookies",
    icon: Cookie,
    content: (
      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p className="text-xs text-muted-foreground">Ostatnia aktualizacja: 22 kwietnia 2025 r.</p>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            1. Czym są pliki cookies?
          </h3>
          <p>
            Pliki cookies (ciasteczka) to małe pliki tekstowe zapisywane na Twoim urządzeniu
            przez odwiedzane strony internetowe. Służą do zapamiętywania preferencji, stanu
            sesji oraz umożliwiają poprawne funkcjonowanie serwisu.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            2. Jakich cookies używamy?
          </h3>

          <div className="space-y-3">
            <div className="rounded border border-border/50 bg-card/50 p-3">
              <p className="mb-1 font-semibold text-foreground">Niezbędne (wymagane)</p>
              <p>
                Konieczne do prawidłowego funkcjonowania serwisu. Umożliwiają nawigację
                i korzystanie z podstawowych funkcji. Nie mogą być wyłączone.
              </p>
              <p className="mt-1 text-xs">Przykłady: preferencje zgody cookies, sesja użytkownika</p>
            </div>

            <div className="rounded border border-border/50 bg-card/50 p-3">
              <p className="mb-1 font-semibold text-foreground">Analityczne (za zgodą)</p>
              <p>
                Pozwalają nam analizować ruch na stronie i mierzyć skuteczność naszych działań.
                Dane zbierane są w sposób anonimowy i zagregowany.
              </p>
              <p className="mt-1 text-xs">Przykłady: Vercel Analytics, Google Analytics</p>
            </div>

            <div className="rounded border border-border/50 bg-card/50 p-3">
              <p className="mb-1 font-semibold text-foreground">Funkcjonalne (za zgodą)</p>
              <p>
                Zapamiętują Twoje preferencje i ustawienia, aby zapewnić lepsze
                i bardziej spersonalizowane korzystanie z serwisu.
              </p>
              <p className="mt-1 text-xs">Przykłady: motyw kolorystyczny, język interfejsu</p>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            3. Jak zarządzać cookies?
          </h3>
          <p>
            Możesz w każdej chwili zmienić ustawienia cookies za pomocą ustawień przeglądarki
            internetowej. Pamiętaj jednak, że wyłączenie niektórych cookies może wpłynąć na
            funkcjonalność serwisu.
          </p>
          <p>Instrukcje dla popularnych przeglądarek:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Google Chrome: Ustawienia &rarr; Prywatność i bezpieczeństwo &rarr; Pliki cookie</li>
            <li>Mozilla Firefox: Opcje &rarr; Prywatność i bezpieczeństwo</li>
            <li>Safari: Preferencje &rarr; Prywatność</li>
            <li>Microsoft Edge: Ustawienia &rarr; Prywatność, wyszukiwanie i usługi</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            4. Okres przechowywania cookies
          </h3>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li><strong className="text-foreground">Sesyjne</strong> — usuwane po zamknięciu przeglądarki</li>
            <li><strong className="text-foreground">Trwałe</strong> — przechowywane do 12 miesięcy lub do momentu ręcznego usunięcia</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            5. Wycofanie zgody
          </h3>
          <p>
            Możesz w każdej chwili wycofać zgodę na używanie cookies analitycznych i funkcjonalnych,
            klikając link &quot;Ustawienia cookies&quot; dostępny w stopce strony lub czyszcząc
            pamięć lokalną przeglądarki. Wycofanie zgody nie wpływa na zgodność z prawem
            przetwarzania, które miało miejsce przed jej wycofaniem.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            6. Kontakt
          </h3>
          <p>
            W przypadku pytań dotyczących polityki cookies prosimy o kontakt:
            kontakt@screenhero.pl
          </p>
        </section>
      </div>
    ),
  },
};

export function LegalModal({ open, document, onClose }: LegalModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [open, document]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document && window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, document, onClose]);

  if (!open || !document) return null;

  const doc = documents[document];
  const Icon = doc.icon;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative flex max-h-[85vh] w-full max-w-2xl flex-col rounded border border-border bg-card shadow-2xl shadow-black/50">
        {/* Neon top accent */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-border/50 px-6 py-4">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded border border-primary/40 bg-primary/10">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <h2
            id="legal-modal-title"
            className="flex-1 font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wider text-foreground"
          >
            {doc.title}
          </h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded border border-border/50 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Zamknij"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable content */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-5">
          {doc.content}
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-border/50 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded border border-primary/50 bg-primary/10 px-5 py-2 font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary/20"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
}
