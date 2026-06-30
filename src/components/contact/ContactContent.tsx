import Button from "@/components/ui/Button";

export default function ContactContent({ data }: { data: any }) {
  const d = data;
  return (
    <>
      <section className="bg-navy text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{d.hero.title}</h1>
          <p className="text-gray-300 text-lg">{d.hero.subtitle}</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* What you'll get */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">{d.what_you_get.heading}</h2>
            <ul className="space-y-3">
              {d.what_you_get.items.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-[#666]">
                  <span className="text-primary mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 bg-[#f9fafb] rounded-xl">
              <p className="font-semibold text-navy mb-2">{d.spanish_note.text}</p>
              <p className="text-[#666] text-sm">{d.spanish_note.subtext}</p>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-[#666] text-sm">{d.form_note}</p>
              <a href={`mailto:${d.contact_info.email}`} className="text-primary font-semibold text-sm mt-2 inline-block">{d.contact_info.email}</a>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">{d.contact_info.heading}</h2>
            <div className="space-y-6 text-[#666]">
              <div>
                <p className="text-sm text-[#686868] uppercase mb-1">Call Us</p>
                <p className="font-bold text-navy text-lg">{d.contact_info.phone1}</p>
                <p className="font-bold text-navy text-lg">{d.contact_info.phone2}</p>
                <p className="text-xs text-[#686868] mt-1">{d.contact_info.hours}</p>
              </div>
              <div>
                <p className="text-sm text-[#686868] uppercase mb-1">Email Us</p>
                <a href={`mailto:${d.contact_info.email}`} className="font-bold text-navy hover:text-primary transition-colors">{d.contact_info.email}</a>
                <p className="text-xs text-[#686868] mt-1">{d.contact_info.response}</p>
              </div>
              <div>
                <p className="text-sm text-[#686868] uppercase mb-1">Office</p>
                <p className="font-bold text-navy">{d.contact_info.office}</p>
                <p>{d.contact_info.address}</p>
              </div>
            </div>
            <div className="mt-8">
              <Button href={`mailto:${d.contact_info.email}`} variant="primary">Email Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
