import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "@/i18n/dictionaries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Differentiators from "@/components/home/Differentiators";
import ImpactStats from "@/components/home/ImpactStats";
import Offerings from "@/components/home/Offerings";
import Process from "@/components/home/Process";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Header lang={lang as Locale} dict={dict.nav} />
      <main className="flex-1">
        <Hero {...dict.home.hero} />
        <Differentiators {...dict.home.differentiators} />
        <ImpactStats {...dict.home.impact} />
        <Offerings {...dict.home.offerings} />
        <Process {...dict.home.process} />
        <Industries {...dict.home.industries} />
        <Testimonials {...dict.home.testimonials} />
        <FAQ {...dict.home.faq} />
        <CTASection {...dict.home.cta_final} />
      </main>
      <Footer dict={dict.footer} nav={dict.nav} lang={lang} />
    </>
  );
}
