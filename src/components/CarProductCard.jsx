'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { IoLocationSharp } from 'react-icons/io5';
import Link from 'next/link';
import { Button } from '@heroui/react';

const CarsCard = ({ car }) => {
  const {
    _id,
    imageUrl,
    CarName,
    dailyRentPrice,
    availabilityStatus,
    carType,
    location,
    seatCapacity,
  } = car;

  const infoVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col h-full"
      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} // Lift on hover
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* 1. Image Section with Subtle Zoom on Hover */}
      <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
        <motion.img
          src={imageUrl}
          alt={CarName}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }} // Subtle zoom
          transition={{ duration: 0.5 }}
        />
        {/* Availability Badge with Pulse Animation */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          {availabilityStatus === 'Available' && (
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          )}
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              availabilityStatus === 'Available'
                ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                : 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
            }`}
          >
            {availabilityStatus}
          </span>
        </div>
      </div>

      <motion.div
        className="p-5 flex flex-col flex-grow z-10"
        variants={infoVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-between gap-2 mb-2">
          {/* Animated Car Name */}
          <motion.h3
            className="text-xl font-bold text-white line-clamp-1 m-0"
            whileHover={{ color: '#60a5fa' }} // Light blue color on hover
            transition={{ duration: 0.2 }}
          >
            {CarName}
          </motion.h3>
          <span className="text-xs font-medium px-2 py-0.5 bg-blue-600/10 text-slate-300 border border-blue-500/20 rounded-md">
            {carType}
          </span>
        </div>

        <p className="text-sm text-slate-400 flex items-center gap-1.5 mb-4 font-normal">
          <span className="text-rose-400">
            <IoLocationSharp />
          </span>
          <span>{location}</span>
        </p>

        {/* Improved Micro Specs Styling */}
        <div className="flex items-center gap-3 mb-6 text-xs text-slate-300">
          <div className="bg-slate-800 border border-slate-700/60 px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-inner">
            <span className="text-blue-400">👥</span>
            <span>{seatCapacity} Seats</span>
          </div>
          <div className="bg-slate-800 border border-slate-700/60 px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-inner">
            <span className="text-indigo-400">⚡</span>
            <span>Manual/Auto</span>
          </div>
        </div>

        {/* 3. Advanced Price & Button Line */}
        <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold">
              Daily Rent
            </p>
            <p className="text-2xl font-extrabold text-blue-500 tracking-tighter m-0">
              <span className="text-lg font-bold text-white/90 mr-0.5">$</span>
              {dailyRentPrice}
            </p>
          </div>

          <Link href={`/explore-car/${_id}`}>
            <motion.button
              className="group/btn flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-blue-900/40"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View Details
              <motion.span
                className="inline-block transition-transform duration-300"
                variants={{
                  hover: { x: 5 },
                }}
              >
                →
              </motion.span>
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3)_0%,rgba(0,0,0,0)_70%)]" />
    </motion.div>
  );
};

export default CarsCard;