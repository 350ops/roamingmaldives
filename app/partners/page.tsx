'use client';

import { useState } from 'react';
import { Building, Users, TrendingUp, Handshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export default function Partners() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <section className="section-shell-lg">
        <div className="page-shell">
          <div className="grid gap-10 rounded-[2rem] bg-[#172327] px-6 py-10 text-[#f5efe4] sm:px-10 sm:py-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="eyebrow border-[rgba(245,239,228,0.16)] bg-transparent text-[rgba(245,239,228,0.72)] before:bg-[#8bc3bf]">
                Hospitality partnerships
              </span>
              <h1 className="display-title mt-6 text-[#f5efe4]">
                Connectivity that fits the guest journey before arrival.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(245,239,228,0.78)]">
                We work with resorts, yacht charters, and travel advisors who want a cleaner arrival
                experience for their guests and a practical add-on for their booking flow.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#partner-form" className="btn-primary">
                  Become a Partner
                </a>
                <a href={siteConfig.partnersMailto} className="btn-secondary border-[rgba(245,239,228,0.16)] bg-[rgba(255,255,255,0.05)] text-[#f5efe4] hover:bg-[rgba(255,255,255,0.12)]">
                  Contact Partnerships
                </a>
              </div>
            </div>

            <div className="surface-card bg-[rgba(255,255,255,0.07)] p-7 text-[#f5efe4] shadow-none">
              <p className="muted-label text-[rgba(245,239,228,0.48)]">Best fit</p>
              <div className="divider-list mt-6 border-[rgba(245,239,228,0.12)]">
                <div className="py-4">
                  <h2 className="text-2xl text-[#f5efe4]">Resorts and hotels</h2>
                  <p className="mt-2 text-sm leading-6 text-[rgba(245,239,228,0.72)]">
                    Add pre-arrival connectivity to confirmation emails and concierge planning.
                  </p>
                </div>
                <div className="py-4">
                  <h2 className="text-2xl text-[#f5efe4]">Yachts and liveaboards</h2>
                  <p className="mt-2 text-sm leading-6 text-[rgba(245,239,228,0.72)]">
                    Help guests board with data already set up for itineraries, crew contact, and
                    tethering.
                  </p>
                </div>
                <div className="py-4">
                  <h2 className="text-2xl text-[#f5efe4]">Travel advisors</h2>
                  <p className="mt-2 text-sm leading-6 text-[rgba(245,239,228,0.72)]">
                    Offer one more useful step in the booking process without sending travellers to
                    airport kiosks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="max-w-md">
              <span className="eyebrow">Why it works</span>
              <h2 className="section-title mt-6">Useful to guests. Practical for operators.</h2>
              <p className="body-large mt-6">
                This should feel like a well-run hospitality add-on, not another marketing widget.
              </p>
            </div>

            <div className="divider-list">
              <div className="grid gap-6 py-6 md:grid-cols-[auto_1fr]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl">A smoother arrival for guests</h3>
                  <p className="body-copy mt-3">
                    Guests can sort data before they fly instead of queuing after a long journey or
                    relying on inconsistent airport Wi-Fi.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 py-6 md:grid-cols-[auto_1fr]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl">Revenue that fits the booking flow</h3>
                  <p className="body-copy mt-3">
                    Partnerships can be structured around referral links, pre-arrival messaging, or
                    concierge workflows depending on how your team already operates.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 py-6 md:grid-cols-[auto_1fr]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                  <Handshake className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl">Direct operational support</h3>
                  <p className="body-copy mt-3">
                    Your team gets a contact point for setup questions, guest guidance, and rollout
                    details instead of managing eSIM troubleshooting alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partner-form" className="section-shell section-border">
        <div className="page-shell max-w-4xl">
          <div className="max-w-2xl">
            <span className="eyebrow">Partner inquiry</span>
            <h2 className="section-title mt-6">Tell us how your guest journey is structured.</h2>
            <p className="body-large mt-6">
              Share a few basics below and the partnerships team will follow up with the right setup
              for your operation.
            </p>
          </div>

          {isSubmitted ? (
            <div className="surface-card mt-10 p-10 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(64,96,76,0.12)] text-[color:var(--success)]">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-3xl">Inquiry received</h3>
              <p className="body-large mt-4 max-w-2xl mx-auto">
                Thank you for getting in touch. We&apos;ll review your inquiry and respond with the next
                steps shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="surface-panel mt-10 space-y-6 p-7 sm:p-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="field-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="field-input"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="field-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="field-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="field-label">Work Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="field-input"
                />
              </div>

              <div>
                <label htmlFor="company" className="field-label">Company or Organization</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Building className="h-5 w-5 text-[color:var(--foreground-muted)]" />
                  </div>
                  <input
                    type="text"
                    id="company"
                    required
                    className="field-input pl-11"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="businessType" className="field-label">Business Type</label>
                  <select
                    id="businessType"
                    required
                    className="field-select"
                  >
                    <option value="">Select type</option>
                    <option value="resort">Resort / Hotel</option>
                    <option value="yacht">Yacht Charter</option>
                    <option value="agency">Travel Agency</option>
                    <option value="airline">Airline</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="field-label">Monthly Guests or Clients</label>
                  <select
                    id="guests"
                    required
                    className="field-select"
                  >
                    <option value="">Select volume</option>
                    <option value="1-50">1 - 50</option>
                    <option value="51-200">51 - 200</option>
                    <option value="201-500">201 - 500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="field-label">How can we help?</label>
                <textarea
                  id="message"
                  rows={4}
                  className="field-textarea"
                  placeholder="Tell us about your guest profile, arrival flow, or preferred setup."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
