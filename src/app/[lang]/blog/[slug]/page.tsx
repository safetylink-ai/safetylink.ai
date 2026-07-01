import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale, locales } from "@/i18n/dictionaries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogPostContent from "@/components/blog/BlogPostContent";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    const dict = await getDictionary(lang);
    for (const post of dict.blog.posts) {
      params.push({ lang, slug: post.slug });
    }
  }
  return params;
}

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
