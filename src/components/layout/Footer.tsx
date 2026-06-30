import Link from "next/link";

interface FooterProps {
  dict: {
    tagline: string;
    disclaimer: string;
    company: string;
    address: string;
    city: string;
    phone1: string;
    phone2: string;
    email: string;
    quickLinks: string;
    compliance: string;
    copyright: string;
    privacy: string;
    terms: string;
    accessibility: string;
  };
  nav: {
    home: string;
    solutions: string;
    services: string;
    about: string;
    contact: string;
    login: string;
  };
  lang: string;
}

export default function Footer({ dict, nav, lang }: FooterProps) {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">SafetyLink</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {dict.tagline}
          </p>
          <p className="text-xs text-gray-400 italic">{dict.disclaimer}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4">
            {dict.quickLinks}
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href={`/${lang}/solutions`} className="hover:text-white transition-colors">{nav.solutions}</Link></li>
            <li><Link href={`/${lang}/services`} className="hover:text-white transition-colors">{nav.services}</Link></li>
            <li><Link href={`/${lang}/contact`} className="hover:text-white transition-colors">{nav.contact}</Link></li>
            <li><Link href={`/${lang}/privacy-policy`} className="hover:text-white transition-colors">{dict.privacy}</Link></li>
            <li><Link href="https://app.safetylink.ai" className="hover:text-white transition-colors">{nav.login}</Link></li>
          </ul>
        </div>

        {/* Contact & Compliance */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4">
            {dict.compliance}
          </h4>
          <div className="text-sm text-gray-300 space-y-2">
            <p>{dict.company}</p>
            <p>{dict.address}</p>
            <p>{dict.city}</p>
            <p className="pt-2">{dict.phone1}</p>
            <p>{dict.phone2}</p>
            <p>{dict.email}</p>
            <div className="flex gap-1 items-center pt-2 text-xs text-primary">
              <span>✓</span> OSHA Authorized Trainers
            </div>
            <div className="flex gap-1 items-center text-xs text-primary">
              <span>✓</span> SOC 2 Compliant
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.1)] px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>{dict.copyright}</p>
          <div className="flex gap-6">
            <Link href={`/${lang}/privacy-policy`} className="hover:text-white transition-colors">{dict.privacy}</Link>
            <Link href={`/${lang}/terms-of-service`} className="hover:text-white transition-colors">{dict.terms}</Link>
            <Link href={`/${lang}/accessibility`} className="hover:text-white transition-colors">{dict.accessibility}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
