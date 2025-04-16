"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          {/* Accordion Header (Button to toggle) */}
          <button
            className="w-full flex justify-between items-center p-4 text-left font-medium bg-gray-50 hover:bg-gray-100"
            onClick={() => toggleAccordion(index)}
          >
            <span>{faq.question}</span>
            {/* Toggle Chevron Icon */}
            {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
          </button>

          {/* Accordion Content (Answer) */}
          {activeIndex === index && (
            <div className="p-4 bg-white">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default FAQAccordion; 