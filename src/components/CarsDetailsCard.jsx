"use client"
import { 
  MapPin, 
  Users, 
  CarFront, 
  BadgeCheck, 
  ArrowRight, 
  Fuel,
  ShieldCheck
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from '@heroui/react';
import EnrollmentButton from './EnrollmentButton';

const CarsDetailsCard = ({ carData }) => {
  
  const { 
    carName, 
    dailyRentPrice, 
    carType, 
    imageUrl, 
    pickupLocation, 
    seatCapacity, 
    description, 
    availabilityStatus 
  } = carData || {};

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 p-4 md:p-8 mt-10"
    >
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Image Section */}
<div className="lg:w-1/2">
  <div className="relative h-[350px] md:h-[450px] w-full rounded-[2rem] overflow-hidden shadow-lg group">
    <Image 
      // এখানে রিমোট লিঙ্কের বদলে একটি লোকাল ইমেজ পাথ অথবা খালি স্ট্রিং চেক ব্যবহার করতে পারেন
      src={imageUrl || "/placeholder.jpg"}  // আপনার public/ ফোল্ডারে একটি placeholder.jpg রেখে দিলে সবচেয়ে ভালো হয়
      alt={carName || "Car"} 
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
      priority
    />
    {/* Availability Status Badge */}
    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
      <BadgeCheck className={`w-4 h-4 ${availabilityStatus === 'Available' ? 'text-green-500' : 'text-orange-500'}`} />
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-800">
        {availabilityStatus || "Premium"}
      </span>
    </div>
  </div>
</div>

        {/* Info Section */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1">
                  {carType || "Luxury Vehicle"}
                </p>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  {carName}
                </h1>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center min-w-[100px]">
                <span className="text-3xl font-black text-gray-900">${dailyRentPrice}</span>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">per day</p>
              </div>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              {description}
            </p>

            {/* Feature Grid based on your JSON */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                  <Users className="w-5 h-5" />
                </div>
               <div>
  <p className="text-[10px] text-gray-400 font-bold uppercase">Capacity</p>
  {/* carData.capacity ব্যবহার করুন যা ডাটাবেজ থেকে আপডেট হয়ে আসবে */}
  <p className="text-sm font-bold text-gray-800">
    {carData?.capacity || seatCapacity} Seats
  </p>
</div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Condition</p>
                  <p className="text-sm font-bold text-gray-800">Verified</p>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="flex items-start gap-3 text-gray-600 bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
              <div>
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-tight">Pickup Location</p>
                <p className="font-semibold text-sm leading-tight">{pickupLocation}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-10">
          
            <EnrollmentButton carData={carData} />

            <button className="flex-1 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors flex items-center justify-center">
              <CarFront className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default CarsDetailsCard;