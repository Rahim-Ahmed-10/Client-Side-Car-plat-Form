import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

import { Sparkles, ArrowRight } from 'lucide-react';
import CarProductCard from './CarProductCard';

const PopularCar = async () => {
const res = await fetch('https://car-rental-sirver.vercel.app/carProducts',{
  cache: 'no-store'
});
const cars = await res.json();


 return (
   <div className="max-w-7xl mx-auto mt-8">
     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
       <div>
         <div className="flex items-center gap-2 mb-3">
           <span className="bg-black text-white px-4 py-1 text-sm font-medium rounded-full flex items-center gap-2">
             <Sparkles size={16} />
             Premium Collection
           </span>
         </div>

         <h1 className="text-4xl md:text-5xl font-black leading-tight">
           Explore Our <span className="text-red-500">Top Cars</span>
         </h1>

         <p className="text-gray-500 mt-3 max-w-2xl text-lg">
           Discover luxury, sports, and electric cars with premium comfort,
           modern technology, and unbeatable performance.
         </p>

         {/* Extra Stats */}
         <div className="flex gap-8 mt-5">
           <div>
             <h2 className="text-2xl font-bold">500+</h2>
             <p className="text-gray-500 text-sm">Cars Available</p>
           </div>

           <div>
             <h2 className="text-2xl font-bold">50+</h2>
             <p className="text-gray-500 text-sm">Brands</p>
           </div>

           <div>
             <h2 className="text-2xl font-bold">24/7</h2>
             <p className="text-gray-500 text-sm">Support</p>
           </div>
         </div>
       </div>

       <div>
         <Link href="/explore-car">
           <Button
             className="
          rounded-full
          px-8
          py-6
          text-lg
          bg-black
          text-white
          hover:scale-105
          transition-all
          duration-300
          flex
          items-center
          gap-2
        "
           >
             Explore All Cars
             <ArrowRight size={20} />
           </Button>
         </Link>
       </div>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
       {cars.slice(0,3).map(car => (
         <CarProductCard key={car._id} car={car} />
       ))}
     </div>
   </div>
 );
};

export default PopularCar;