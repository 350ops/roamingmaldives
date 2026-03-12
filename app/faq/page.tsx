'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: "What is an eSIM and how does it work?",
    answer: "An eSIM (embedded SIM) is a digital SIM card built directly into your smartphone. It works just like a physical SIM card, but you don't need to insert anything into your phone. You simply scan a QR code or enter a code to download your data plan and connect to a local network instantly."
  },
  {
    question: "How do I know if my phone supports eSIM?",
    answer: "Most modern smartphones released after 2018 support eSIM technology. You can check your device's compatibility by dialing *#06# and looking for an EID number, or by using our Device Compatibility Checker tool on this website."
  },
  {
    question: "When should I buy and install my Maldives eSIM?",
    answer: "We recommend purchasing your eSIM before you travel. You can install it on your device while you still have a stable Wi-Fi connection at home or at the airport. The plan will only activate and start counting down days when it connects to a supported network in the Maldives."
  },
  {
    question: "Can I use WhatsApp, iMessage, and other apps?",
    answer: "Yes! Your eSIM provides a data connection, so all your internet-based apps like WhatsApp, iMessage, FaceTime, Skype, and social media will work exactly as they do at home. You will keep your existing phone number for these services."
  },
  {
    question: "Can I share my data (tethering/hotspot)?",
    answer: "Absolutely. All our Maldives eSIM plans support data tethering (mobile hotspot), allowing you to share your connection with your laptop, tablet, or travel companions."
  },
  {
    question: "What is the coverage like across the islands?",
    answer: "We partner with the leading local networks (Ooredoo and Dhiraagu) to provide the best possible coverage. You'll enjoy strong 4G/5G signals in Male, the airport, and at the vast majority of resorts and inhabited islands. Coverage on remote uninhabited islands or far out at sea may vary."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 100% money-back guarantee if your eSIM cannot be activated or if you experience persistent connectivity issues that our support team cannot resolve. Please contact our support team within 14 days of purchase for assistance."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about using an eSIM in the Maldives.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-blue-300 shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">Our support team is ready to help you get connected.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/1234567890?text=I'm%20interested%20in%20a%20Maldives%20eSIM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-sm"
            >
              Chat on WhatsApp
            </a>
            <a 
              href="mailto:support@roamingmaldives.com"
              className="bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 px-6 py-3 rounded-xl font-semibold transition-colors shadow-sm"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
