import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Products } from "@/components/products";
import { About } from "@/components/about";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Products />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
