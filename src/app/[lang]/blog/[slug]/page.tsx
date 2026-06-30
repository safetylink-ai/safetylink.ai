import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "@/i18n/dictionaries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogPostContent from "@/components/blog/BlogPostContent";

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  return (
    <>
      <Header lang={lang as Locale} dict={dict.nav} />
      <main className="flex-1"><BlogPostContent data={dict.blog} lang={lang} slug={slug} /></main>
      <Footer dict={dict.footer} nav={dict.nav} lang={lang} />
    </>
  );
}
