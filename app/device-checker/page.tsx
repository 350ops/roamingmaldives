'use client';

import { useState } from 'react';
import { Search, Smartphone, Phone, AlertCircle, CheckCircle2 } from 'lucide-react';
import devicesData from '@/data/devices-2026.json';

export default function DeviceChecker() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  
  const allModels = devicesData.flatMap(brand => 
    brand.models.map(model => ({ brand: brand.brand, model }))
  );

  const filteredModels = allModels.filter(item => {
    const matchesSearch = item.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === 'All' || item.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <div className="section-shell min-h-screen">
      <div className="page-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Before purchase</span>
          <h1 className="display-title mt-6">Check whether your phone is ready for eSIM.</h1>
          <p className="body-large mt-6 max-w-2xl">
            Most recent iPhone, Pixel, and Galaxy models are supported. Use the quick dial method
            first, then search our device list if you want to confirm a specific model.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <div className="surface-muted p-7 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
              <Phone className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-2xl">Quick check</h2>
            <p className="body-copy mt-3">
              The fastest way to confirm support is to look for an EID number directly on the
              device.
            </p>

            <ol className="mt-8 space-y-4">
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-sm font-semibold text-[color:var(--accent-strong)]">1</span>
                <span className="body-copy">Open your phone app and dial <strong className="rounded bg-white/80 px-2 py-1 text-[color:var(--foreground)]">*#06#</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-sm font-semibold text-[color:var(--accent-strong)]">2</span>
                <span className="body-copy">Look for a 32-digit number labeled <strong className="text-[color:var(--foreground)]">EID</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-sm font-semibold text-[color:var(--accent-strong)]">3</span>
                <span className="body-copy">If it appears, your device supports eSIM.</span>
              </li>
            </ol>

            <div className="mt-8 flex gap-3 rounded-2xl border border-[rgba(145,112,36,0.18)] bg-[rgba(201,184,157,0.18)] p-4">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[color:#8a6e34]" />
              <p className="text-sm leading-6 text-[color:#6f5829]">
                Your phone also needs to be carrier-unlocked before it can use a travel eSIM.
              </p>
            </div>
          </div>

          <div className="surface-panel p-7 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="muted-label">Database search</p>
                <h2 className="mt-3 text-2xl">Search by model</h2>
                <p className="body-copy mt-3 max-w-2xl">
                  Use the search and brand filter if you want a second check against our current
                  device list.
                </p>
              </div>
              <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)] sm:flex">
                <Search className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search className="h-5 w-5 text-[color:var(--foreground-muted)]" />
                </div>
                <input
                  type="text"
                  className="field-input pl-11"
                  placeholder="e.g. iPhone 15, Galaxy S24"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2">
                <button
                  onClick={() => setSelectedBrand('All')}
                  className={`rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                    selectedBrand === 'All'
                      ? 'bg-[color:var(--foreground)] text-white'
                      : 'border border-[color:var(--line)] bg-white/70 text-[color:var(--foreground-soft)] hover:bg-white'
                  }`}
                >
                  All
                </button>
                {devicesData.map(brand => (
                  <button
                    key={brand.brand}
                    onClick={() => setSelectedBrand(brand.brand)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                      selectedBrand === brand.brand
                        ? 'bg-[color:var(--foreground)] text-white'
                        : 'border border-[color:var(--line)] bg-white/70 text-[color:var(--foreground-soft)] hover:bg-white'
                    }`}
                  >
                    {brand.brand}
                  </button>
                ))}
              </div>

              <div className="mt-4 h-72 overflow-y-auto rounded-[1.1rem] border border-[color:var(--line)] bg-[rgba(255,253,249,0.7)]">
                {filteredModels.length > 0 ? (
                  <ul className="divide-y divide-[color:var(--line)]">
                    {filteredModels.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between gap-4 px-5 py-4">
                        <div className="flex items-center gap-3">
                          <Smartphone className="h-5 w-5 text-[color:var(--foreground-muted)]" />
                          <div>
                            <span className="block font-semibold text-[color:var(--foreground)]">{item.model}</span>
                            <span className="text-sm text-[color:var(--foreground-muted)]">{item.brand}</span>
                          </div>
                        </div>
                        <CheckCircle2 className="h-5 w-5 text-[color:var(--success)]" />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                    <AlertCircle className="mb-3 h-8 w-8 text-[color:var(--foreground-muted)]" />
                    <p className="font-semibold text-[color:var(--foreground)]">Device not found</p>
                    <p className="mt-1 text-sm text-[color:var(--foreground-muted)]">
                      Try the quick check above or contact support before you buy.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="surface-card mt-12 grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-end sm:p-8">
          <div className="max-w-2xl">
            <p className="muted-label">Still unsure</p>
            <h2 className="mt-3 text-2xl">Leave your email and we&apos;ll review compatibility.</h2>
            <p className="body-copy mt-3">
              If your model is not listed yet, we can let you know when support is confirmed or
              suggest another option.
            </p>
          </div>
          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="field-input sm:min-w-[18rem]" required />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
