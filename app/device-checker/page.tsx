'use client';

import { useState } from 'react';
import { Search, Smartphone, Phone, AlertCircle, CheckCircle2 } from 'lucide-react';
import devicesData from '@/data/devices-2026.json';
import Link from 'next/link';

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
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Check Device Compatibility</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ensure your phone supports eSIM before purchasing a plan. Most modern smartphones are compatible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Method 1: Dial Method */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Method 1: The Quick Check</h2>
            <p className="text-gray-600 mb-6">The fastest way to check if your device supports eSIM is to look for an EID number in your settings.</p>
            
            <ol className="space-y-4 mb-6">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">1</span>
                <span className="text-gray-700">Open your phone app and dial <strong className="text-gray-900 bg-gray-100 px-2 py-1 rounded">*#06#</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">2</span>
                <span className="text-gray-700">Look for a 32-digit number labeled <strong>EID</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">3</span>
                <span className="text-gray-700">If you see an EID, your device supports eSIM!</span>
              </li>
            </ol>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> Your device must also be carrier-unlocked to use Roaming Maldives eSIMs.
              </p>
            </div>
          </div>

          {/* Method 2: Lookup */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Method 2: Search Device</h2>
            <p className="text-gray-600 mb-6">Search our database of known eSIM-compatible devices for 2026.</p>
            
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                  placeholder="e.g. iPhone 15, Galaxy S24"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2">
                <button 
                  onClick={() => setSelectedBrand('All')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedBrand === 'All' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  All
                </button>
                {devicesData.map(brand => (
                  <button 
                    key={brand.brand}
                    onClick={() => setSelectedBrand(brand.brand)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedBrand === brand.brand ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {brand.brand}
                  </button>
                ))}
              </div>

              <div className="mt-4 border border-gray-200 rounded-xl overflow-hidden h-64 overflow-y-auto bg-gray-50">
                {filteredModels.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {filteredModels.map((item, idx) => (
                      <li key={idx} className="px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <Smartphone className="w-5 h-5 text-gray-400" />
                          <span className="font-medium text-gray-900">{item.model}</span>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                    <AlertCircle className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-gray-600 font-medium">Device not found</p>
                    <p className="text-sm text-gray-500 mt-1">Try checking via Method 1 or contact support.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Device not supported?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Leave your email with us and we&apos;ll notify you when new devices are added or if we launch alternative connectivity options.
          </p>
          <form className="max-w-md mx-auto flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button type="submit" className="bg-gray-900 hover:bg-black px-6 py-3 rounded-xl font-semibold transition-colors">
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
