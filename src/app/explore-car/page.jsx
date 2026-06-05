import AllCarsCard from '@/components/AllCarsCard';
import { getAllProductsCar } from '@/lib/product/data';
import React from 'react';
import SearchBar from '@/components/SearchBar';


const AllCarsDetails = async ({ searchParams }) => {
  const params = await searchParams;
  const searchQuery = params?.search || ""; 

  // backend function
  const CarItems = await getAllProductsCar(searchQuery);

  return (
    <div className='max-w-7xl mx-auto mt-8 px-4'>
      <div className="text-center mt-16 mb-10">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Explore Our <span className="text-blue-600">Fleet</span>
        </h1>
        <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          সেরা মানের গাড়িগুলো থেকে আপনার পছন্দেরটি বেছে নিন। আমরা দিচ্ছি সাশ্রয়ী মূল্যে প্রিমিয়াম সার্ভিস।
        </p>
      </div>

      
      <SearchBar defaultValue={searchQuery} />
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {CarItems.length > 0 ? (
          CarItems.map(car => (
            <div key={car._id}>
              <AllCarsCard car={car} />
            </div>
          ))
        ) : (
          <p className="text-center text-slate-500 col-span-full py-10">কোনো গাড়ি পাওয়া যায়নি।</p>
        )}
      </div>
    </div>
  );
};

export default AllCarsDetails;