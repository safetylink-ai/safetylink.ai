import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-navy text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            {dict.home.title}
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-10 text-gray-300">
            {dict.home.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/contact"
              className="bg-primary text-white px-10 py-4 rounded-full font-semibold text-sm hover:bg-[#009c2f] transition-colors"
            >
              {dict.home.cta}
            </a>
            <a
              href="/contact"
              className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-[10px] font-semibold text-sm hover:bg-white hover:text-navy transition-colors"
            >
              {dict.home.consult}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center text-gray-500">
        <p>Site migration in progress. Full content coming in Phase 2.</p>
      </section>
    </main>
  );
}
