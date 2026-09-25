import { Nav } from "@/components/nav";
import { Hero } from "@/components/section-hero";
import { Problem } from "@/components/section-problem";
import { SpecPanel } from "@/components/section-spec";
import { Products } from "@/components/section-products";
import { WhyDifferent } from "@/components/section-why";
import { People } from "@/components/section-people";
import { WaitlistBand } from "@/components/section-waitlist-band";
import { Contact } from "@/components/section-contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div id="top">
      <a
        href="#products"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-green focus:px-5 focus:py-2 focus:font-bold focus:text-cream"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <SpecPanel />
        <Products />
        <WhyDifferent />
        <People />
        <WaitlistBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
