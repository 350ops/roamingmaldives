'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

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
    <div className="section-shell min-h-screen">
      <div className="page-shell max-w-4xl">
        <div className="max-w-2xl">
          <span className="eyebrow">Common questions</span>
          <h1 className="display-title mt-6">What travellers usually ask before they install a Maldives eSIM.</h1>
          <p className="body-large mt-6">
            Straight answers on compatibility, timing, coverage, hotspot use, and what to expect
            once you arrive.
          </p>
        </div>

        <div className="divider-list mt-12 rounded-[1.5rem] border border-[color:var(--line)] bg-[rgba(255,253,249,0.78)] px-6 sm:px-8">
          {faqs.map((faq, index) => (
            <div key={index} className="py-2">
              <button
                className="flex w-full items-start justify-between gap-6 py-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="pr-8 text-xl leading-8 text-[color:var(--foreground)]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="mt-1 h-5 w-5 shrink-0 text-[color:var(--accent)]" />
                ) : (
                  <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-[color:var(--foreground-muted)]" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="body-copy max-w-3xl pr-8">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="surface-card mt-16 grid gap-6 p-7 sm:grid-cols-[1fr_auto] sm:items-end sm:p-8">
          <div className="max-w-2xl">
            <p className="muted-label">Need a direct answer</p>
            <h2 className="mt-3 text-2xl">Send the support team your question before you travel.</h2>
            <p className="body-copy mt-3">
              If you are unsure about device setup, timing, or network coverage for your itinerary,
              we can point you in the right direction.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.supportMailto} className="btn-primary">
              Email Support
            </a>
            <Link href="/device-checker" className="btn-secondary">
              Recheck My Device
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
