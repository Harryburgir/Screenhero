"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, Tv, ChevronDown, Cable, Zap, Phone, Mail } from "lucide-react";
import { useState } from "react";

type Product = {
  icon: React.ElementType;
  title: string;
  category: "monitor" | "tv";
  sizes: ProductSize[];
  color: string;
};

type ProductSize = {
  inches: number;
  cm: number;
  description: string;
  commonUses: string[];
};

type CableType = {
  name: string;
  description: string;
  maxResolution: string;
  features: string[];
  compatibleWith: string[];
};

type PowerSupply = {
  voltage: string;
  powerRange: string;
  description: string;
  typicalUses: string[];
};

const cables: CableType[] = [
  {
    name: "HDMI",
    description: "Najpopularniejszy standard do przesyłu obrazu i dźwięku cyfrowego. Obsługuje rozdzielczości do 8K i HDR.",
    maxResolution: "8K@60Hz / 4K@120Hz",
    features: ["Audio i wideo", "HDR", "CEC", "ARC/eARC"],
    compatibleWith: ["Telewizory", "Monitory", "Konsole", "Dekodery"],
  },
  {
    name: "DisplayPort",
    description: "Profesjonalny standard dla monitorów komputerowych. Idealny do wielomonitorowych zestawów i wysokich częstotliwości odświeżania.",
    maxResolution: "8K@60Hz / 4K@240Hz",
    features: ["Daisy Chain", "G-Sync/FreeSync", "DSC", "MST"],
    compatibleWith: ["Monitory", "Karty graficzne", "Stacje dokujące"],
  },
  {
    name: "USB-C / Thunderbolt",
    description: "Nowoczesny, uniwersalny standard łączący przesył obrazu, danych i zasilania w jednym kablu.",
    maxResolution: "8K@60Hz / 5K@60Hz",
    features: ["Power Delivery", "Dane + obraz", "Jeden kabel", "Dwukierunkowy"],
    compatibleWith: ["Monitory USB-C", "Laptopy", "Tablety", "Smartfony"],
  },
  {
    name: "DVI",
    description: "Starszy standard cyfrowy, nadal używany w wielu monitorach biurowych i przemysłowych.",
    maxResolution: "2560x1600@60Hz",
    features: ["Tylko obraz", "Dual-Link", "Stabilny sygnał", "Bez kompresji"],
    compatibleWith: ["Starsze monitory", "Projektory", "Urządzenia przemysłowe"],
  },
  {
    name: "VGA",
    description: "Analogowy standard, wciąż spotykany w starszych urządzeniach i zastosowaniach przemysłowych.",
    maxResolution: "1920x1080@60Hz",
    features: ["Analogowy", "Szeroka kompatybilność", "Prosty w użyciu"],
    compatibleWith: ["Starsze monitory", "Projektory", "Urządzenia legacy"],
  },
  {
    name: "Component / Komponentowy",
    description: "Analogowy kabel wideo (YPbPr) dla starszych telewizorów i odtwarzaczy DVD/Blu-ray.",
    maxResolution: "1080p@60Hz",
    features: ["Rozdzielony sygnał RGB", "HD Ready", "Analogowy"],
    compatibleWith: ["Starsze telewizory", "DVD/Blu-ray", "Konsole retro"],
  },
];

const powerSupplies: PowerSupply[] = [
  {
    voltage: "5V",
    powerRange: "1A - 3A (5W - 15W)",
    description: "Zasilacze do małych urządzeń elektronicznych, dekoderów, mini PC i akcesoriów.",
    typicalUses: ["Dekodery TV", "Mini PC", "Raspberry Pi", "Ładowarki USB"],
  },
  {
    voltage: "9V",
    powerRange: "1A - 2A (9W - 18W)",
    description: "Uniwersalne zasilacze do urządzeń audio, routerów i małych monitorów.",
    typicalUses: ["Routery", "Urządzenia audio", "Klawiatury MIDI"],
  },
  {
    voltage: "12V",
    powerRange: "1A - 10A (12W - 120W)",
    description: "Najpopularniejszy standard dla monitorów, telewizorów LED i urządzeń sieciowych.",
    typicalUses: ["Monitory LED", "Telewizory", "Taśmy LED", "Kamery"],
  },
  {
    voltage: "15V",
    powerRange: "2A - 5A (30W - 75W)",
    description: "Zasilacze do laptopów, większych monitorów i urządzeń profesjonalnych.",
    typicalUses: ["Laptopy", "Monitory 24-27\"", "Urządzenia profesjonalne"],
  },
  {
    voltage: "19V",
    powerRange: "2A - 6A (38W - 114W)",
    description: "Standard laptopowy, również stosowany w monitorach i all-in-one PC.",
    typicalUses: ["Laptopy", "Monitory", "Komputery AIO", "Projektory"],
  },
  {
    voltage: "24V",
    powerRange: "2A - 10A (48W - 240W)",
    description: "Zasilacze przemysłowe i do dużych telewizorów, monitorów profesjonalnych.",
    typicalUses: ["Duże telewizory", "Monitory 32\"+", "Urządzenia przemysłowe"],
  },
  {
    voltage: "48V i więcej",
    powerRange: "2A - 5A (96W - 240W+)",
    description: "Specjalistyczne zasilacze do profesjonalnych urządzeń wyświetlających i systemów PoE.",
    typicalUses: ["Monitory medyczne", "Digital signage", "Systemy PoE"],
  },
];

const products: Product[] = [
  {
    icon: Monitor,
    title: "Monitory",
    category: "monitor",
    color: "from-blue-400/20 to-blue-500/20",
    sizes: [
      {
        inches: 21,
        cm: 53,
        description: "Idealny rozmiar dla stanowiska pracy lub gier kasynowych. Kompaktowy format zajmuje mało miejsca na biurku.",
        commonUses: ["Biuro", "Grafika komputerowa", "Gry", "Kasyno"],
      },
      {
        inches: 24,
        cm: 61,
        description: "Najpopularniejszy rozmiar do pracy biurowej i gier. Oferuje idealną równowagę między rozmiarem a odległością patrzenia.",
        commonUses: ["Biuro", "Gry", "Edycja wideo", "Projektowanie"],
      },
      {
        inches: 27,
        cm: 69,
        description: "Idealny do pracy z wieloma oknami jednocześnie. Doskonały do obróbki grafiki i programowania.",
        commonUses: ["Programowanie", "Obróbka grafiki", "Edycja multimediów", "Edytor tekstu"],
      },
      {
        inches: 32,
        cm: 81,
        description: "Duży monitor do profesjonalnej obróbki obrazu i wideo. Wymaga odpowiedniej odległości patrzenia.",
        commonUses: ["Edycja wideo", "Fotografia cyfrowa", "Projektowanie 3D", "Montaż"],
      },
      {
        inches: 34,
        cm: 86,
        description: "Monitor ultraszeroki zapewniający niesamowitą przestrzeń roboczą. Idealny dla profesjonalistów kreatywnych.",
        commonUses: ["Edycja wideo", "Wytwarzanie muzyki", "Projektowanie", "Inżynieria"],
      },
      {
        inches: 49,
        cm: 124,
        description: "Monitor ultrapanoramiczny, wręcz spektakularny! Dwóch monitorów 27\" w jednym, nieskończona rzeczywistość i produktywność.",
        commonUses: ["Profesjonalna edycja", "Montaż filmów", "Projektowanie", "Streaming"],
      },
    ],
  },
  {
    icon: Tv,
    title: "Telewizory",
    category: "tv",
    color: "from-red-400/20 to-orange-500/20",
    sizes: [
      {
        inches: 32,
        cm: 81,
        description: "Popularny rozmiar do małych pomieszczeń i sypialni. Idealny dla mieszkań z ograniczoną przestrzenią.",
        commonUses: ["Sypialnia", "Kuchnia", "Pokój dziecka", "Mały salon"],
      },
      {
        inches: 43,
        cm: 109,
        description: "Uniwersalny rozmiar do salonu średniej wielkości. Doskonały kompromis między rozmiarem a ceną.",
        commonUses: ["Salon", "Pokój rodziny", "Kino domowe", "Gry"],
      },
      {
        inches: 50,
        cm: 127,
        description: "Duży telewizor do dużych pomieszczeń. Zapewnia immersyjne doświadczenie filmowe i gier.",
        commonUses: ["Duży salon", "Kino domowe", "Gry konsolowe", "Sport"],
      },
      {
        inches: 55,
        cm: 140,
        description: "Premium rozmiar dla kina domowego. Idealna odlegość patrzenia to około 2-3 metry.",
        commonUses: ["Kino domowe", "Sport", "Gry", "Filmy 4K"],
      },
      {
        inches: 65,
        cm: 165,
        description: "Telewizor kinowy dla ambitnych kinomanów. Zapewnia niezapomniane wrażenia z filmów i gier.",
        commonUses: ["Profesjonalne kino domowe", "Gry 4K", "Filmy", "Sport"],
      },
      {
        inches: 75,
        cm: 191,
        description: "Gigant na mały ekran! Spektakularna rozrywka dla tych, którzy chcą wszystko widzieć z każdego kąta.",
        commonUses: ["Ekstremalnie duży salon", "Profesjonalne kino", "Gry", "Szeroki ogląd"],
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Products() {
  const [expandedCategory, setExpandedCategory] = useState<"monitor" | "tv" | null>(null);

  return (
    <section className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-background via-background/95 to-background py-16 md:py-24">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Nasze Produkty
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Odkryj kompletną gamę monitorów i telewizorów dostępnych w różnych rozmiarach
          </p>
        </motion.div>

        {/* Product Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid gap-8 md:grid-cols-2"
        >
          {products.map((product) => (
            <motion.div
              key={product.category}
              variants={itemVariants}
              className={`overflow-hidden rounded-lg border border-border/40 bg-gradient-to-br ${product.color} backdrop-blur-sm transition-all hover:border-border/80 hover:shadow-lg`}
            >
              {/* Product Header */}
              <button
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === product.category ? null : product.category
                  )
                }
                className="w-full"
              >
                <div className="flex items-center justify-between border-b border-border/20 bg-background/40 p-6 transition-colors hover:bg-background/60">
                  <div className="flex items-center gap-4">
                    <div className={`rounded-lg bg-gradient-to-br ${product.color} p-3`}>
                      <product.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide text-foreground">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {product.sizes.length} różnych rozmiarów dostępnych
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      expandedCategory === product.category ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Expanded Content */}
              {expandedCategory === product.category && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="divide-y divide-border/20 p-6">
                    {product.sizes.map((size) => (
                      <motion.div
                        key={`${product.category}-${size.inches}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="py-4 first:pt-0 last:pb-0"
                      >
                        <div className="mb-2 flex items-baseline gap-3">
                          <h4 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
                            {size.inches}"
                          </h4>
                          <span className="text-sm text-muted-foreground">
                            ({size.cm} cm)
                          </span>
                        </div>
                        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                          {size.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {size.commonUses.map((use) => (
                            <span
                              key={use}
                              className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary"
                            >
                              {use}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Cables Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-lg bg-gradient-to-br from-green-400/20 to-emerald-500/20 p-3">
              <Cable className="h-6 w-6 text-foreground" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                Kable sygnałowe
              </h3>
              <p className="text-sm text-muted-foreground">
                Pełna gama kabli do podłączenia monitorów i telewizorów
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cables.map((cable, index) => (
              <motion.div
                key={cable.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-lg border border-border/40 bg-gradient-to-br from-green-400/10 to-emerald-500/10 p-5 transition-all hover:border-border/80 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
                    {cable.name}
                  </h4>
                  <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400">
                    {cable.maxResolution}
                  </span>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  {cable.description}
                </p>
                <div className="mb-3 flex flex-wrap gap-1">
                  {cable.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded bg-background/50 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="border-t border-border/20 pt-3">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Kompatybilność:</span>{" "}
                    {cable.compatibleWith.join(", ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Power Supplies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-500/20 p-3">
              <Zap className="h-6 w-6 text-foreground" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                Zasilacze
              </h3>
              <p className="text-sm text-muted-foreground">
                Szeroki wybor zasilaczy od 5V wzwyż dla urządzeń wyświetlających
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {powerSupplies.map((psu, index) => (
              <motion.div
                key={psu.voltage}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-lg border border-border/40 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-5 transition-all hover:border-border/80 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/20">
                    <span className="font-[family-name:var(--font-display)] text-lg font-bold text-yellow-400">
                      {psu.voltage}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Zakres mocy</p>
                    <p className="text-sm font-semibold text-foreground">{psu.powerRange}</p>
                  </div>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  {psu.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {psu.typicalUses.map((use) => (
                    <span
                      key={use}
                      className="rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-medium text-yellow-500"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Individual consultation note for power supplies */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 rounded-lg border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6"
          >
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-yellow-500/20">
                <Zap className="h-7 w-7 text-yellow-400" />
              </div>
              <div className="flex-1">
                <h4 className="mb-1 font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
                  Nie wiesz, jaki zasilacz wybrać?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Dobierzemy odpowiedni zasilacz indywidualnie do Twojego urządzenia. Skontaktuj się z nami mailowo lub telefonicznie — pomożemy dobrać właściwe napięcie i moc.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href="tel:+48509273694"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-yellow-500/40 bg-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-400 transition-all hover:bg-yellow-500/30"
                >
                  <Phone className="h-4 w-4" />
                  +48 509 273 694
                </a>
                <a
                  href="mailto:screenhero@proton.me"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-yellow-500/40 bg-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-400 transition-all hover:bg-yellow-500/30"
                >
                  <Mail className="h-4 w-4" />
                  screenhero@proton.me
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-lg border border-border/30 bg-muted/20 p-6 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Nie znalazłeś poszukiwanego produktu? Skontaktuj się z nami — pracujemy z szeroką gamą producentów monitorów, telewizorów, kabli i zasilaczy.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+48509273694"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <Phone className="h-4 w-4" />
              +48 509 273 694
            </a>
            <a
              href="mailto:screenhero@proton.me"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <Mail className="h-4 w-4" />
              screenhero@proton.me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
