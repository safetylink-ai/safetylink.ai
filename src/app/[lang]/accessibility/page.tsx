import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "@/i18n/dictionaries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalContent from "@/components/legal/LegalContent";

export default async function AccessibilityPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  return (
    <>
      <Header lang={lang as Locale} dict={dict.nav} />
      <main className="flex-1"><LegalContent {...dict.legal.accessibility} /></main>
      <Footer dict={dict.footer} nav={dict.nav} lang={lang} />
    </>
  );
}
