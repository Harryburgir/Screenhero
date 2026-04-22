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
        <p className="text-xs text-muted-foreground">Ostatnia aktualizacja: 22 kwietnia 2026 r.</p>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §1. Postanowienia ogólne
          </h3>
          <p>
            1.1. Niniejszy Regulamin określa zasady korzystania z serwisu internetowego ScreenHero,
            dostępnego pod adresem screenhero.pl (dalej: &quot;Serwis&quot;).
          </p>
          <p>
            1.2. Serwis prowadzony jest przez osobę fizyczną nieprowadzącą zarejestrowanej
            działalności gospodarczej, działającą jako podwykonawca w ramach współpracy
            z innymi podmiotami (dalej: &quot;Usługodawca&quot;).
          </p>
          <p>
            1.3. Usługodawca świadczy usługi w zakresie naprawy i wymiany ekranów monitorów
            oraz telewizorów jako osoba prywatna na podstawie umowy cywilnoprawnej
            (umowy o dzieło lub umowy zlecenia).
          </p>
          <p>
            1.4. Korzystanie z Serwisu jest równoznaczne z akceptacją niniejszego Regulaminu.
            Użytkownik zobowiązany jest do zapoznania się z Regulaminem, Polityką Prywatności
            oraz Polityką Cookies przed rozpoczęciem korzystania z usług.
          </p>
          <p>
            1.5. Akceptacja Regulaminu jest warunkiem koniecznym do korzystania z Serwisu
            i zlecania usług. Brak akceptacji uniemożliwia korzystanie z funkcjonalności Serwisu.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §2. Definicje
          </h3>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li><strong className="text-foreground">Serwis</strong> — strona internetowa screenhero.pl wraz z wszelkimi podstronami i funkcjonalnościami.</li>
            <li><strong className="text-foreground">Usługodawca</strong> — osoba fizyczna nieprowadząca zarejestrowanej działalności gospodarczej, właściciel i administrator Serwisu, działająca jako podwykonawca.</li>
            <li><strong className="text-foreground">Użytkownik</strong> — osoba fizyczna lub prawna korzystająca z Serwisu.</li>
            <li><strong className="text-foreground">Zleceniodawca</strong> — podmiot (osoba fizyczna lub prawna), który zleca wykonanie usługi Usługodawcy.</li>
            <li><strong className="text-foreground">Usługa</strong> — naprawa, wymiana lub diagnostyka ekranów monitorów i telewizorów.</li>
            <li><strong className="text-foreground">Podwykonawca</strong> — osoba fizyczna wykonująca usługi na rzecz innego podmiotu w ramach umowy cywilnoprawnej.</li>
            <li><strong className="text-foreground">Umowa cywilnoprawna</strong> — umowa o dzieło lub umowa zlecenia zawierana między Usługodawcą a Zleceniodawcą.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §3. Status prawny Usługodawcy
          </h3>
          <p>
            3.1. Usługodawca jest osobą fizyczną nieprowadzącą zarejestrowanej działalności
            gospodarczej w rozumieniu ustawy z dnia 6 marca 2018 r. — Prawo przedsiębiorców.
          </p>
          <p>
            3.2. Usługodawca działa jako podwykonawca, świadcząc usługi w ramach współpracy
            z innymi podmiotami gospodarczymi na podstawie umów cywilnoprawnych.
          </p>
          <p>
            3.3. Usługodawca nie jest płatnikiem podatku VAT i nie wystawia faktur VAT.
            Rozliczenia z tytułu wykonanych usług odbywają się na podstawie rachunków
            wystawianych przez osobę fizyczną lub poprzez podmiot zlecający (w przypadku
            działania jako podwykonawca).
          </p>
          <p>
            3.4. Przychody Usługodawcy z tytułu świadczonych usług podlegają opodatkowaniu
            podatkiem dochodowym od osób fizycznych (PIT) na zasadach ogólnych, zgodnie
            z obowiązującymi przepisami prawa podatkowego.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §4. Zakres usług
          </h3>
          <p>
            4.1. Usługodawca świadczy usługi w zakresie naprawy i wymiany ekranów monitorów
            oraz telewizorów. Szczegółowy zakres i orientacyjny cennik usług dostępny jest
            na stronie w sekcji Wycena.
          </p>
          <p>
            4.2. Usługodawca zastrzega sobie prawo do odmowy realizacji usługi w przypadku, gdy:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-4">
            <li>naprawa jest technicznie niemożliwa,</li>
            <li>naprawa jest ekonomicznie nieuzasadniona względem wartości urządzenia,</li>
            <li>Użytkownik nie zaakceptował niniejszego Regulaminu,</li>
            <li>istnieją inne uzasadnione przesłanki uniemożliwiające realizację usługi.</li>
          </ul>
          <p>
            4.3. Usługi mogą być realizowane bezpośrednio przez Usługodawcę lub we współpracy
            z podmiotem, na rzecz którego Usługodawca działa jako podwykonawca.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §5. Zamówienie usługi
          </h3>
          <p>
            5.1. Zamówienie usługi odbywa się poprzez:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-4">
            <li>formularz kontaktowy dostępny w Serwisie,</li>
            <li>kontakt telefoniczny lub mailowy,</li>
            <li>osobiste dostarczenie urządzenia.</li>
          </ul>
          <p>
            5.2. Warunkiem przyjęcia zlecenia jest uprzednia akceptacja niniejszego Regulaminu
            przez Użytkownika.
          </p>
          <p>
            5.3. Cena usługi ustalana jest indywidualnie po bezpłatnej diagnostyce urządzenia
            i wymaga akceptacji Użytkownika przed rozpoczęciem naprawy.
          </p>
          <p>
            5.4. Zlecenie usługi stanowi zawarcie umowy cywilnoprawnej między Użytkownikiem
            a Usługodawcą (lub podmiotem, na rzecz którego Usługodawca działa jako podwykonawca).
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §6. Płatności i rozliczenia
          </h3>
          <p>
            6.1. Płatności za wykonane usługi akceptowane są:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-4">
            <li>gotówką przy odbiorze urządzenia,</li>
            <li>przelewem bankowym na wskazany rachunek.</li>
          </ul>
          <p>
            6.2. Usługodawca, jako osoba fizyczna nieprowadząca działalności gospodarczej,
            nie wystawia faktur VAT. Na życzenie Użytkownika wystawiany jest rachunek
            potwierdzający wykonanie usługi.
          </p>
          <p>
            6.3. W przypadku usług realizowanych w ramach współpracy podwykonawczej,
            dokumenty rozliczeniowe (faktury VAT) mogą być wystawiane przez podmiot
            zlecający, na rzecz którego Usługodawca działa jako podwykonawca.
          </p>
          <p>
            6.4. Ceny podane w Serwisie są cenami brutto i zawierają wszystkie należne
            daniny publiczne (z wyłączeniem VAT, którego Usługodawca nie jest płatnikiem).
          </p>
          <p>
            6.5. Termin płatności wynosi 7 dni od daty wykonania usługi, chyba że strony
            ustalą inaczej.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §7. Obowiązki Użytkownika
          </h3>
          <p>
            7.1. Użytkownik zobowiązuje się do:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-4">
            <li>podania prawdziwych i aktualnych danych kontaktowych,</li>
            <li>zapoznania się z Regulaminem, Polityką Prywatności i Polityką Cookies przed korzystaniem z Serwisu,</li>
            <li>terminowej zapłaty za wykonane usługi,</li>
            <li>rzetelnego opisu usterki urządzenia,</li>
            <li>wykonania kopii zapasowej danych przed przekazaniem urządzenia do naprawy,</li>
            <li>odbioru urządzenia w ustalonym terminie.</li>
          </ul>
          <p>
            7.2. Użytkownik ponosi odpowiedzialność za skutki podania nieprawdziwych
            lub niekompletnych danych.
          </p>
          <p>
            7.3. Użytkownik nie może korzystać z Serwisu w sposób naruszający przepisy prawa,
            dobre obyczaje lub prawa osób trzecich.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §8. Obowiązki Usługodawcy
          </h3>
          <p>
            8.1. Usługodawca zobowiązuje się do:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-4">
            <li>rzetelnego wykonania zleconej usługi z należytą starannością,</li>
            <li>informowania Użytkownika o przebiegu naprawy i ewentualnych komplikacjach,</li>
            <li>zachowania poufności danych Użytkownika zgodnie z Polityką Prywatności,</li>
            <li>przestrzegania przepisów prawa, w szczególności RODO,</li>
            <li>zapewnienia bezpieczeństwa powierzonego urządzenia.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §9. Gwarancja i reklamacje
          </h3>
          <p>
            9.1. Na wszystkie wykonane usługi udzielana jest gwarancja na okres 12 miesięcy
            od daty odbioru urządzenia.
          </p>
          <p>
            9.2. Gwarancja nie obejmuje:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-4">
            <li>uszkodzeń mechanicznych powstałych po odbiorze urządzenia,</li>
            <li>uszkodzeń wynikających z nieprawidłowego użytkowania,</li>
            <li>uszkodzeń spowodowanych działaniem osób trzecich,</li>
            <li>naturalnego zużycia eksploatacyjnego.</li>
          </ul>
          <p>
            9.3. Reklamacje należy zgłaszać drogą elektroniczną na adres kontakt@screenhero.pl
            lub osobiście.
          </p>
          <p>
            9.4. Usługodawca zobowiązuje się do rozpatrzenia reklamacji w terminie 14 dni
            roboczych od daty jej otrzymania.
          </p>
          <p>
            9.5. W przypadku uznania reklamacji, Usługodawca według własnego wyboru:
            naprawi urządzenie nieodpłatnie, wymieni wadliwy element lub zwróci
            proporcjonalną część wynagrodzenia.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §10. Odpowiedzialność
          </h3>
          <p>
            10.1. Usługodawca nie ponosi odpowiedzialności za:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-4">
            <li>dane przechowywane na naprawianym urządzeniu — Użytkownik powinien wykonać kopię zapasową przed przekazaniem urządzenia,</li>
            <li>oprogramowanie zainstalowane na urządzeniu,</li>
            <li>usterki inne niż zgłoszone, które ujawnią się podczas naprawy,</li>
            <li>opóźnienia wynikające z przyczyn niezależnych od Usługodawcy (np. opóźnienia w dostawie części).</li>
          </ul>
          <p>
            10.2. Odpowiedzialność Usługodawcy ograniczona jest do wartości zleconej usługi,
            z wyłączeniem szkód pośrednich i utraconych korzyści.
          </p>
          <p>
            10.3. Użytkownik ponosi pełną odpowiedzialność za korzystanie z Serwisu
            niezgodnie z prawem lub niniejszym Regulaminem.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §11. Działanie jako podwykonawca
          </h3>
          <p>
            11.1. Usługodawca może realizować usługi jako podwykonawca innych podmiotów
            gospodarczych na podstawie odrębnych umów cywilnoprawnych.
          </p>
          <p>
            11.2. W przypadku realizacji usługi jako podwykonawca:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-4">
            <li>stroną umowy z Użytkownikiem może być podmiot zlecający,</li>
            <li>dokumenty rozliczeniowe wystawiane są przez podmiot zlecający,</li>
            <li>gwarancja może być udzielana przez podmiot zlecający na warunkach określonych w jego regulaminie.</li>
          </ul>
          <p>
            11.3. Usługodawca informuje Użytkownika o fakcie działania jako podwykonawca
            przed przyjęciem zlecenia, jeśli ma to wpływ na warunki realizacji usługi.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §12. Ochrona danych osobowych
          </h3>
          <p>
            12.1. Administratorem danych osobowych Użytkowników jest Usługodawca.
          </p>
          <p>
            12.2. Dane osobowe przetwarzane są zgodnie z Rozporządzeniem Parlamentu
            Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO)
            oraz ustawą o ochronie danych osobowych.
          </p>
          <p>
            12.3. Szczegółowe informacje dotyczące przetwarzania danych osobowych zawarte
            są w Polityce Prywatności dostępnej w Serwisie.
          </p>
          <p>
            12.4. Akceptacja niniejszego Regulaminu oznacza zapoznanie się z Polityką
            Prywatności i wyrażenie zgody na przetwarzanie danych osobowych w zakresie
            niezbędnym do realizacji usług.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §13. Akceptacja Regulaminu
          </h3>
          <p>
            13.1. Akceptacja niniejszego Regulaminu jest warunkiem koniecznym do:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-4">
            <li>korzystania z funkcjonalności Serwisu,</li>
            <li>składania zapytań poprzez formularz kontaktowy,</li>
            <li>zlecania usług naprawy lub wymiany ekranów.</li>
          </ul>
          <p>
            13.2. Użytkownik potwierdza akceptację Regulaminu poprzez:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-4">
            <li>kliknięcie przycisku &quot;Akceptuję&quot; w oknie zgody wyświetlanym przy pierwszym wejściu na stronę,</li>
            <li>kontynuowanie korzystania z Serwisu po wyświetleniu informacji o Regulaminie.</li>
          </ul>
          <p>
            13.3. Decyzja o akceptacji Regulaminu jest zapisywana w pamięci przeglądarki
            Użytkownika w celu uniknięcia ponownego wyświetlania okna zgody.
          </p>
          <p>
            13.4. Użytkownik może w każdej chwili wycofać akceptację poprzez usunięcie
            danych zapisanych w przeglądarce (localStorage), co spowoduje ponowne
            wyświetlenie okna zgody przy kolejnej wizycie.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §14. Prawa własności intelektualnej
          </h3>
          <p>
            14.1. Wszelkie treści zamieszczone w Serwisie, w tym teksty, grafiki, zdjęcia,
            logotypy i układ strony, stanowią własność Usługodawcy lub są wykorzystywane
            na podstawie odpowiednich licencji.
          </p>
          <p>
            14.2. Kopiowanie, rozpowszechnianie lub wykorzystywanie treści Serwisu
            bez pisemnej zgody Usługodawcy jest zabronione.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §15. Postanowienia końcowe
          </h3>
          <p>
            15.1. Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O wszelkich
            zmianach Użytkownicy będą informowani poprzez Serwis z 14-dniowym wyprzedzeniem.
          </p>
          <p>
            15.2. Zmiany Regulaminu wchodzą w życie z chwilą opublikowania na stronie,
            z zastrzeżeniem pkt 15.1.
          </p>
          <p>
            15.3. Dla usług zleconych przed zmianą Regulaminu zastosowanie mają
            postanowienia obowiązujące w chwili złożenia zlecenia.
          </p>
          <p>
            15.4. W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają
            przepisy prawa polskiego, w szczególności:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-4">
            <li>Kodeks Cywilny (ustawa z dnia 23 kwietnia 1964 r.),</li>
            <li>Ustawa o prawach konsumenta (ustawa z dnia 30 maja 2014 r.),</li>
            <li>RODO (Rozporządzenie UE 2016/679),</li>
            <li>Ustawa o ochronie danych osobowych (ustawa z dnia 10 maja 2018 r.).</li>
          </ul>
          <p>
            15.5. Wszelkie spory wynikające z korzystania z Serwisu lub realizacji usług
            będą rozstrzygane przez sąd właściwy miejscowo dla siedziby Usługodawcy,
            z zastrzeżeniem uprawnień konsumentów do wyboru sądu właściwego.
          </p>
          <p>
            15.6. Jeżeli którekolwiek z postanowień niniejszego Regulaminu zostanie uznane
            za nieważne lub nieskuteczne, pozostałe postanowienia pozostają w mocy.
          </p>
          <p>
            15.7. Regulamin wchodzi w życie z dniem 22 kwietnia 2026 r.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary">
            §16. Kontakt
          </h3>
          <p>
            W sprawach związanych z Regulaminem oraz korzystaniem z Serwisu prosimy
            o kontakt pod adresem e-mail: kontakt@screenhero.pl
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
