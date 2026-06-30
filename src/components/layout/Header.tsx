"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/dictionaries";

interface HeaderProps {
  lang: Locale;
  dict: {
    home: string;
    solutions: string;
    services: string;
    about: string;
    contact: string;
    login: string;
    demo: string;
  };
}

export default function Header({ lang, dict }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const otherLang = lang === "en" ? "es" : "en";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${lang}`} className="text-navy font-bold text-2xl tracking-tight">
          SafetyLink
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href={`/${lang}`} className="text-[#333] font-medium text-sm hover:text-primary transition-colors">
            {dict.home}
          </Link>
          <Link href={`/${lang}/solutions`} className="text-[#333] font-medium text-sm hover:text-primary transition-colors">
            {dict.solutions}
          </Link>
          <Link href={`/${lang}/services`} className="text-[#333] font-medium text-sm hover:text-primary transition-colors">
            {dict.services}
          </Link>
          <Link href={`/${lang}/about`} className="text-[#333] font-medium text-sm hover:text-primary transition-colors">
            {dict.about}
          </Link>
          <Link href={`/${lang}/contact`} className="text-[#333] font-medium text-sm hover:text-primary transition-colors">
            {dict.contact}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#009c2f] transition-colors"
          >
            {dict.demo}
          </Link>
          <Link
            href="https://app.safetylink.ai"
            className="text-[#686868] font-medium text-sm hover:text-primary transition-colors"
          >
            {dict.login}
          </Link>
          {/* Language Switch */}
          <Link
            href={`/${otherLang}`}
            className="text-xs text-navy font-semibold bg-[#eef3ff] px-3 py-1.5 rounded-full hover:bg-navy hover:text-white transition-all"
          >
            {otherLang.toUpperCase()}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-navy p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-4 space-y-3">
          <Link href={`/${lang}`} className="block text-[#333] font-medium py-2" onClick={() => setMobileOpen(false)}>{dict.home}</Link>
          <Link href={`/${lang}/solutions`} className="block text-[#333] font-medium py-2" onClick={() => setMobileOpen(false)}>{dict.solutions}</Link>
          <Link href={`/${lang}/services`} className="block text-[#333] font-medium py-2" onClick={() => setMobileOpen(false)}>{dict.services}</Link>
          <Link href={`/${lang}/about`} className="block text-[#333] font-medium py-2" onClick={() => setMobileOpen(false)}>{dict.about}</Link>
          <Link href={`/${lang}/contact`} className="block text-[#333] font-medium py-2" onClick={() => setMobileOpen(false)}>{dict.contact}</Link>
          <Link href={`/${lang}/contact`} className="block bg-primary text-white text-center px-6 py-2.5 rounded-full font-semibold text-sm">{dict.demo}</Link>
          <Link href={`/${otherLang}`} className="block text-center text-navy font-semibold text-sm pt-2">{otherLang === "en" ? "English" : "Español"}</Link>
        </div>
      )}
    </header>
  );
}
