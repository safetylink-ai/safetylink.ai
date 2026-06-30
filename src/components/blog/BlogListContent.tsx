import Link from "next/link";

export default function BlogListContent({ data, lang }: { data: any; lang: string }) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">{data.title}</h1>
        <p className="text-[#666] mb-10">Insights, guides, and case studies from our OSHA-authorized experts.</p>
        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-10">
          {data.categories.map((cat: any) => (
            <Link key={cat.slug} href={`/${lang}/blog/category/${cat.slug}`} className="bg-[#eef3ff] text-navy text-sm font-medium px-4 py-2 rounded-full hover:bg-navy hover:text-white transition-all">{cat.name}</Link>
          ))}
        </div>
        {/* Posts */}
        <div className="space-y-8">
          {data.posts.map((post: any) => (
            <Link key={post.slug} href={`/${lang}/blog/${post.slug}`} className="block bg-[#f9fafb] rounded-2xl p-6 hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.08)] transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-[#686868]">{post.date}</span>
                <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">{data.categories.find((c: any) => c.slug === post.category)?.name || post.category}</span>
              </div>
              <h2 className="text-xl font-bold text-navy mb-2 hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-[#666] text-sm mb-3">{post.excerpt}</p>
              <div className="flex gap-2">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="text-xs text-[#686868]">#{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
