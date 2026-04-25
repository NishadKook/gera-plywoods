import { Hero } from "@/components/ui/animated-hero";
import { Navbar } from "@/components/site/navbar";
import { Showcase } from "@/components/site/showcase";
import { Products } from "@/components/site/products";
import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <Navbar />
      <main id="home" className="flex-1">
        <Hero />
        <Showcase />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
