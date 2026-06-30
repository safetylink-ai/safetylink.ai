import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "@/i18n/dictionaries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactContent from "@/components/contact/ContactContent";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  return (
    <>
      <Header lang={lang as Locale} dict={dict.nav} />
      <main className="flex-1"><ContactContent data={dict.contact} /></main>
      <Footer dict={dict.footer} nav={dict.nav} lang={lang} />
    </>
  );
}
