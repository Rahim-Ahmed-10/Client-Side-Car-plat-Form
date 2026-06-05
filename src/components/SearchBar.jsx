'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ defaultValue }) {
  const [text, setText] = useState(defaultValue);
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = () => {
    if (text) {
      router.push(`${pathname}?search=${encodeURIComponent(text)}`);
    } else {
      router.push(pathname);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="relative mb-16 flex items-center bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-2 transition-all focus-within:shadow-[0_8px_30px_rgb(0,0,0,0.08)] focus-within:border-blue-200">
        
        {/* Search Icon */}
        <div className="pl-4 text-slate-400">
          <FaSearch size={20} />
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Enter চাপলেও সার্চ হবে
          placeholder="গাড়ির ব্র্যান্ড বা মডেল দিয়ে খুঁজুন..."
          className="w-full px-4 py-3 text-slate-700 bg-transparent outline-none placeholder:text-slate-400 text-lg"
        />

        {/* Professional Search Button */}
        <button 
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-200"
        >
          Search
        </button>
      </div>
    </div>
  );
}