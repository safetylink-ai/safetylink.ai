export default function LegalContent({ title, updated, body }: { title: string; updated: string; body: string }) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">{title}</h1>
        <p className="text-[#686868] text-sm mb-10">{updated}</p>
        <div className="prose prose-sm max-w-none text-[#666] leading-relaxed space-y-4">
          {body.split("\n\n").map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
          ))}
        </div>
      </div>
    </section>
  );
}
