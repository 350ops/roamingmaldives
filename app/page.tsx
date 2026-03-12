import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Signal,
  Smartphone,
  Waves,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="section-shell-lg overflow-hidden">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <span className="eyebrow">Pre-arrival mobile setup</span>
              <h1 className="display-hero mt-7 max-w-4xl">
                A quieter, more reliable way to get online before you reach the beach 🏝️
              </h1>
              <p className="body-large mt-7 max-w-2xl">
                Install your eSIM before you travel, then land with local data ready for resort
                check-in, transfers, maps, and the people you need to reach.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/signup" className="btn-primary">
                  Get Early Access
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/device-checker" className="btn-secondary">
                  Check Device Compatibility
                </Link>
              </div>

              <div className="mt-12 grid gap-8 border-t border-[color:var(--line)] pt-8 sm:grid-cols-3">
                <div>
                  <p className="muted-label">Coverage</p>
                  <p className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">
                    Guidance across Ooredoo and Dhiraagu
                  </p>
                </div>
                <div>
                  <p className="muted-label">Use case</p>
                  <p className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">
                    Resort stays, yacht charters, and island transfers
                  </p>
                </div>
                <div>
                  <p className="muted-label">Setup</p>
                  <p className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">
                    Installed before departure, activated on arrival
                  </p>
                </div>
              </div>
            </div>

            <div className="surface-panel p-7 sm:p-9">
              <p className="muted-label">Before you land</p>
              <h2 className="mt-3 text-3xl">
                What the setup should feel like
              </h2>
              <div className="divider-list mt-8">
                <div className="flex gap-4 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                    <Smartphone className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl">Check your phone once</h3>
                    <p className="body-copy mt-2">
                      Confirm eSIM support before purchase instead of working it out at the airport.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                    <Waves className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl">Install while you still have Wi-Fi</h3>
                    <p className="body-copy mt-2">
                      Add the profile before departure so you are not relying on patchy arrival Wi-Fi.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                    <Signal className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl">Arrive ready to connect</h3>
                    <p className="body-copy mt-2">
                      Turn data on when you land and move straight to your transfer or resort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-border">
        <div className="page-shell">
          <div className="grid gap-8 py-8 md:grid-cols-4">
            <div>
              <p className="muted-label">Networks</p>
              <p className="mt-3 text-lg font-semibold">Ooredoo and Dhiraagu guidance</p>
            </div>
            <div>
              <p className="muted-label">Support</p>
              <p className="mt-3 text-lg font-semibold">Direct help before purchase and on arrival</p>
            </div>
            <div>
              <p className="muted-label">Use</p>
              <p className="mt-3 text-lg font-semibold">Data for maps, messaging, tethering, and check-in</p>
            </div>
            <div>
              <p className="muted-label">Compatibility</p>
              <p className="mt-3 text-lg font-semibold">Device checker for current iPhone, Pixel, and Galaxy models</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="max-w-md">
              <span className="eyebrow">How it works</span>
              <h2 className="section-title mt-6">Set it up once. Use it when you need it.</h2>
              <p className="body-large mt-6">
                The process should be clear long before you board. The aim is simple: less airport
                friction, fewer roaming surprises, and a smoother arrival.
              </p>
            </div>

            <div className="divider-list">
              <div className="grid gap-6 py-6 md:grid-cols-[auto_1fr_auto] md:items-start">
                <span className="text-4xl font-[family:var(--font-display)] text-[color:var(--accent)]">01</span>
                <div>
                  <h3 className="text-2xl">Choose the plan that fits your stay</h3>
                  <p className="body-copy mt-3">
                    Pick a bundle based on trip length and how much data you expect to use across
                    the resort, transfers, and time away from Wi-Fi.
                  </p>
                </div>
                <Globe2 className="h-6 w-6 text-[color:var(--foreground-muted)]" />
              </div>

              <div className="grid gap-6 py-6 md:grid-cols-[auto_1fr_auto] md:items-start">
                <span className="text-4xl font-[family:var(--font-display)] text-[color:var(--accent)]">02</span>
                <div>
                  <h3 className="text-2xl">Install the eSIM before departure</h3>
                  <p className="body-copy mt-3">
                    Scan the QR code while you still have a stable connection and keep it ready for
                    arrival day.
                  </p>
                </div>
                <CheckCircle2 className="h-6 w-6 text-[color:var(--foreground-muted)]" />
              </div>

              <div className="grid gap-6 py-6 md:grid-cols-[auto_1fr_auto] md:items-start">
                <span className="text-4xl font-[family:var(--font-display)] text-[color:var(--accent)]">03</span>
                <div>
                  <h3 className="text-2xl">Turn on data when you land</h3>
                  <p className="body-copy mt-3">
                    Connect when you arrive in Male and continue through transfers, check-in, and
                    the first message home.
                  </p>
                </div>
                <ShieldCheck className="h-6 w-6 text-[color:var(--foreground-muted)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell">
          <div className="rounded-[2rem] bg-[#172327] px-6 py-10 text-[#f5efe4] sm:px-10 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <p className="muted-label text-[rgba(245,239,228,0.56)]">Planning ahead</p>
                <h2 className="mt-4 text-[2.5rem] leading-[0.98] text-[#f5efe4] sm:text-[3.2rem]">
                  Sort your connectivity before the airport queue becomes part of the trip.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[rgba(245,239,228,0.78)]">
                  Check compatibility now and leave your details if you want launch updates,
                  pricing, and setup instructions sent before your departure.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/signup" className="btn-primary">
                  Join the Early List
                </Link>
                <Link
                  href="/faq"
                  className="btn-secondary border-[rgba(245,239,228,0.18)] bg-[rgba(255,255,255,0.06)] text-[#f5efe4] hover:bg-[rgba(255,255,255,0.12)]"
                >
                  Read Common Questions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
