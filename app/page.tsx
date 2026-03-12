import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Smartphone, Zap, Shield, Globe2, Wifi } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/maldives/1920/1080"
            alt="Maldives aerial view"
            fill
            className="object-cover object-center"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm border border-white/30">
              Yacht Guests
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm border border-white/30">
              Resort Visitors
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm border border-white/30">
              Gulf Travellers
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            Stay Connected in the <span className="text-blue-400">Maldives</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light drop-shadow-md">
            Premium eSIM data plans for your island getaway. Instant activation, reliable 4G/5G coverage, and zero roaming fees.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              Get Early Access
            </Link>
            <Link
              href="/device-checker"
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:-translate-y-1"
            >
              Check Device Compatibility
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Trusted connectivity powered by leading networks
          </p>
          <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap opacity-60">
            <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><Wifi className="w-6 h-6" /> Ooredoo</div>
            <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><Globe2 className="w-6 h-6" /> Dhiraagu</div>
            <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><Zap className="w-6 h-6" /> 5G Ready</div>
            <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><Shield className="w-6 h-6" /> Secure</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Three Simple Steps</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get connected before your seaplane even lands. It&apos;s that easy.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <Smartphone className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Choose your plan</h3>
              <p className="text-gray-600">Select the data bundle that fits your itinerary, whether you&apos;re here for a weekend or a month.</p>
            </div>
            
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <Zap className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Activate eSIM</h3>
              <p className="text-gray-600">Scan the QR code sent to your email. No physical SIM card needed. Install in seconds.</p>
            </div>
            
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Enjoy your trip</h3>
              <p className="text-gray-600">Arrive in Male and instantly connect to the fastest local networks. Share your moments immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready for your island adventure?</h2>
          <p className="text-xl text-blue-100 mb-10">Don&apos;t waste time queuing for a local SIM at the airport. Get your eSIM sorted today.</p>
          <Link
            href="/signup"
            className="inline-block bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Get Early Access Now
          </Link>
        </div>
      </section>
    </div>
  );
}
