'use client';

import { useState } from 'react';
import { Mail, User, Calendar, Smartphone, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Signup() {
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

  if (isSubmitted) {
    return (
      <div className="section-shell min-h-screen flex items-center justify-center">
        <div className="page-shell">
          <div className="surface-panel mx-auto max-w-xl p-10 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(64,96,76,0.12)] text-[color:var(--success)]">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h2 className="mt-6 text-4xl">You&apos;re on the list</h2>
            <p className="body-large mt-4">
              Thank you for signing up. We&apos;ll send launch updates, pricing, and setup guidance to
              your inbox when plans are ready.
            </p>
            <button onClick={() => window.location.href = '/'} className="btn-primary mt-8 w-full">
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-shell min-h-screen flex items-center justify-center">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-lg lg:pr-10">
            <span className="eyebrow">Early access</span>
            <h1 className="display-title mt-6">
              Leave your details and we&apos;ll send the launch information before you travel.
            </h1>
            <p className="body-large mt-6">
              This is for travellers who want pricing, compatibility reminders, and purchase
              instructions in place before the trip begins.
            </p>

            <div className="surface-muted mt-10 p-7">
              <p className="muted-label">What we&apos;ll send</p>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/75 text-[color:var(--accent)]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl">Launch pricing</h2>
                    <p className="body-copy mt-2">Plan details and early access pricing once bookings open.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/75 text-[color:var(--accent)]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl">Setup reminders</h2>
                    <p className="body-copy mt-2">A quick checklist so you can install before departure.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/75 text-[color:var(--accent)]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl">Practical guidance</h2>
                    <p className="body-copy mt-2">Compatibility checks, coverage notes, and what to do on arrival day.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="surface-panel p-7 sm:p-9">
            <h2 className="text-3xl">Request early access</h2>
            <p className="body-copy mt-3 max-w-2xl">
              Share your details below and we&apos;ll contact you when Maldives plans are ready to
              purchase.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="field-label">Full Name</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <User className="h-5 w-5 text-[color:var(--foreground-muted)]" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    required
                    className="field-input pl-11"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="field-label">Email Address</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Mail className="h-5 w-5 text-[color:var(--foreground-muted)]" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    className="field-input pl-11"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="travelDate" className="field-label">Approximate Travel Date</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                      <Calendar className="h-5 w-5 text-[color:var(--foreground-muted)]" />
                    </div>
                    <input type="month" id="travelDate" className="field-input pl-11" />
                  </div>
                </div>
                <div>
                  <label htmlFor="device" className="field-label">Device Type</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                      <Smartphone className="h-5 w-5 text-[color:var(--foreground-muted)]" />
                    </div>
                    <select id="device" className="field-select pl-11">
                      <option value="">Select device</option>
                      <option value="iphone">iPhone</option>
                      <option value="samsung">Samsung Galaxy</option>
                      <option value="google">Google Pixel</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="whatsapp" className="field-label">WhatsApp Number (Optional)</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <MessageCircle className="h-5 w-5 text-[color:var(--foreground-muted)]" />
                  </div>
                  <input
                    type="tel"
                    id="whatsapp"
                    className="field-input pl-11"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <p className="mt-2 text-sm text-[color:var(--foreground-muted)]">
                  Optional. We may use this for a launch reminder if you prefer WhatsApp.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-[color:var(--line)] bg-[rgba(255,253,249,0.72)] p-4">
                <div className="flex h-5 items-center">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-[color:var(--line-strong)] text-[color:var(--accent)]"
                  />
                </div>
                <div className="text-sm leading-6 text-[color:var(--foreground-soft)]">
                  <label htmlFor="consent">
                    I agree to receive launch updates, plan availability, and related messages from
                    Roaming Maldives.
                  </label>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center">
                {isSubmitting ? 'Submitting...' : 'Get Early Access'}
                {!isSubmitting && <ArrowRight className="h-5 w-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
