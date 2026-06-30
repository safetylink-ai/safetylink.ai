import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "@/i18n/dictionaries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgramMgmtContent from "@/components/program-mgmt/ProgramMgmtContent";

export default async function ProgramMgmtPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  return (
    <>
      <Header lang={lang as Locale} dict={dict.nav} />
      <main className="flex-1"><ProgramMgmtContent data={dict.program_mgmt} /></main>
      <Footer dict={dict.footer} nav={dict.nav} lang={lang} />
    </>
  );
}
