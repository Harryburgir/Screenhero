"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, Tv, ChevronDown } from "lucide-react";
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

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-lg border border-border/30 bg-muted/20 p-6 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Nie znalazłeś poszukiwanego rozmiaru? Skontaktuj się z nami — pracujemy z szeroką gamą producentów.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
