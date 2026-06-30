"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  heading: string;
  items: FAQItem[];
}

export default function FAQ({ heading, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-14">
          {heading}
        </h2>
        <div className="space-y-4">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-navy text-sm pr-4">
                    {item.q}
                  </span>
                  <span className="text-primary text-xl flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-[#666] text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
