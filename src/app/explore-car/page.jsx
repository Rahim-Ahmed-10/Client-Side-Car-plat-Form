import AllCarsCard from '@/components/AllCarsCard';

import { getAllProductsCar } from '@/lib/product/data';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const AllCarsDetails =async () => {
    const CarItems = await getAllProductsCar();
    return (
        <div className='max-w-7xl mx-auto mt-8 px-4'>
            <div className="text-center mt-16 mb-10">
  <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
    Explore Our <span className="text-blue-600">Fleet</span>
  </h1>
  <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
    সেরা মানের গাড়িগুলো থেকে আপনার পছন্দেরটি বেছে নিন। আমরা দিচ্ছি সাশ্রয়ী মূল্যে প্রিমিয়াম সার্ভিস।
  </p>
</div>

<div className="max-w-3xl mx-auto px-4">
  <div className="relative mb-16 flex items-center bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-2 transition-all focus-within:shadow-[0_8px_30px_rgb(0,0,0,0.08)] focus-within:border-blue-200">
    
    {/* Search Icon */}
    <div className="pl-4 text-slate-400">
      <FaSearch size={20} />
    </div>

    {/* Input Field */}
    <input
      type="text"
      placeholder="গাড়ির ব্র্যান্ড বা মডেল দিয়ে খুঁজুন..."
      className="w-full px-4 py-3 text-slate-700 bg-transparent outline-none placeholder:text-slate-400 text-lg"
    />

    {/* Professional Search Button */}
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-200">
      Search
                </button>
                </div>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    CarItems.map(car => <div key={car._id}>
                        <AllCarsCard car={car} />
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllCarsDetails   ;