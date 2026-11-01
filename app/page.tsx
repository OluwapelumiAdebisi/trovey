import type { Metadata } from "next";
import { About } from "@/components/About";
import { Audiences } from "@/components/Audiences";
import { Categories } from "@/components/Categories";
import { EarlyAccess } from "@/components/EarlyAccess";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Problem } from "@/components/Problem";
import { WhyTrovey } from "@/components/WhyTrovey";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <Problem />
      <HowItWorks />
      <Categories />
      <WhyTrovey />
      <Audiences />
      <About />
      <EarlyAccess />
    </main>
  );
}
