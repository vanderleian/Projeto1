import { About } from "@/components/about";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
