import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogPostContent({ data, lang, slug }: { data: any; lang: string; slug: string }) {
  const post = data.posts.find((p: any) => p.slug === slug);
  if (!post) notFound();
  const cat = data.categories.find((c: any) => c.slug === post.category);
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <Link href={`/${lang}/blog`} className="text-primary text-sm font-semibold hover:underline mb-6 inline-block">← Back to Blog</Link>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-[#686868]">{post.date}</span>
          <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">{cat?.name || post.category}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">{post.title}</h1>
        <p className="text-[#666] text-lg leading-relaxed mb-8">{post.excerpt}</p>
        <div className="flex gap-2 mb-10">
          {post.tags.map((tag: string) => (
            <Link key={tag} href={`/${lang}/blog/tag/${tag}`} className="text-xs text-[#686868] hover:text-primary transition-colors">#{tag}</Link>
          ))}
        </div>
        <div className="prose max-w-none text-[#666]">
          <p>Full article content will be available soon. For more information about this topic, please <Link href={`/${lang}/contact`} className="text-primary font-semibold">contact our team</Link>.</p>
        </div>
      </div>
    </section>
  );
}
