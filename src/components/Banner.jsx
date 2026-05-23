'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Banner = () => {
  const slides = [
    {
      id: 1,
      bgImage:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920', 
      titleTop: 'DOMINATE',
      titleBottom: 'THE ROAD',
      subTitle: 'Attract, Engage, & Convert',
      highlightText: 'more',
      desc: 'qualified vehicle shoppers with premium fleet choices.',
      btnText: 'Explore Cars',
    },
    {
      id: 2,
      bgImage:
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1920', 
      titleTop: 'DRIVE THE',
      titleBottom: 'FUTURE',
      subTitle: 'Experience Next-Gen',
      highlightText: 'smart',
      desc: 'electric vehicles tailored for your long sustainable journeys.',
      btnText: 'Book Rental Now',
    },
    {
      id: 3,
      bgImage:
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1920',
      titleTop: 'PREMIUM',
      titleBottom: 'COMFORT',
      subTitle: 'Uncompromising Class &',
      highlightText: 'luxury',
      desc: 'at the most competitive daily rental prices in the market.',
      btnText: 'View Luxury Fleet',
    },
    {
    id: 4,
    bgImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1920',
    titleTop: 'ADVENTURE',
    titleBottom: 'OFF-ROAD',
    subTitle: 'Explore The Wild With',
    highlightText: 'unlimited',
    desc: 'capabilities and power of our premium 4x4 SUV collection.',
    btnText: 'View SUV Fleet',
  },
  {
    id: 5,
    bgImage: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1920',
    titleTop: 'FUTURE',
    titleBottom: 'ELECTRIC',
    subTitle: 'Sustainable Drive With',
    highlightText: 'zero',
    desc: 'emissions and cutting-edge technology for a smarter journey.',
    btnText: 'View Electric Fleet',
  },
  {
    id: 6,
    bgImage: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1920',
    titleTop: 'SMART',
    titleBottom: 'ECONOMY',
    subTitle: 'Efficiency Meets New',
    highlightText: 'standards',
    desc: 'providing the best fuel-efficient cars for your daily city commute.',
    btnText: 'View Economy Fleet',
  },
  {
    id: 7,
    bgImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920',
    titleTop: 'ULTIMATE',
    titleBottom: 'SPEED',
    subTitle: 'Feel The Thrill Of',
    highlightText: 'performance',
    desc: 'with our high-end sports car collection designed for speed lovers.',
    btnText: 'View Sports Fleet',
  },
  {
    id: 8,
    bgImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1920',
    titleTop: 'FAMILY',
    titleBottom: 'VOYAGE',
    subTitle: 'Perfect Space For Your',
    highlightText: 'loved ones',
    desc: 'with our spacious 7-seater vans and family-friendly SUVs.',
    btnText: 'View Family Fleet',
  },
  {
    id: 9,
    bgImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920',
    titleTop: 'TIMELESS',
    titleBottom: 'CLASSIC',
    subTitle: 'Ride In Style With',
    highlightText: 'vintage',
    desc: 'restored classic cars that bring back the golden era of driving.',
    btnText: 'View Classic Fleet',
  },
  {
    id: 10,
    bgImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1920',
    titleTop: 'ELITE',
    titleBottom: 'BUSINESS',
    subTitle: 'Make A Professional',
    highlightText: 'impression',
    desc: 'with executive sedans tailored for your high-profile business meetings.',
    btnText: 'View Executive Fleet',
  },
  {
    id: 11,
    bgImage: 'https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&q=80&w=1920',
    titleTop: 'WEEKEND',
    titleBottom: 'GETAWAY',
    subTitle: 'Start Your Dream',
    highlightText: 'vacation',
    desc: 'with our reliable hatchbacks perfect for short city escapes.',
    btnText: 'View Compact Fleet',
  }
  ];

  // Framer Motion Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <div className="relative w-full h-[650px] md:h-[750px] lg:h-[850px] bg-gray-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 z-30" />

      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect={'fade'}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass:
            'swiper-pagination-bullet bg-white/40 w-3 h-3 mx-1.5 rounded-full inline-block cursor-pointer transition-all duration-300',
          bulletActiveClass: 'bg-blue-500 w-8 !rounded-full',
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        className="w-full h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {({ isActive }) => (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-out"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.85) 40%, rgba(15, 23, 42, 0.4) 100%), url(${slide.bgImage})`,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  }}
                />

                <div className="absolute inset-0 flex items-center z-10 px-6 sm:px-12 md:px-20 lg:px-32">
                  {isActive && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="max-w-2xl text-center md:text-left mx-auto md:mx-0"
                    >
                      <motion.h1
                        variants={textVariants}
                        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white m-0 font-sans"
                      >
                        {slide.titleTop}
                      </motion.h1>

                      <motion.h2
                        variants={textVariants}
                        className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-widest text-slate-300 mt-1 mb-6 border-b border-white/20 pb-4"
                      >
                        {slide.titleBottom}
                      </motion.h2>

                      <motion.div
                        variants={textVariants}
                        className="text-lg sm:text-xl md:text-2xl font-medium text-slate-200 mb-8 tracking-wide"
                      >
                        {slide.subTitle}{' '}
                        <span className="italic font-serif text-blue-400 font-bold lowercase border-b-2 border-blue-400/60 pb-1">
                          {slide.highlightText}
                        </span>{' '}
                        {slide.desc}
                      </motion.div>

                      <motion.button
                        variants={textVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-8 py-3.5 rounded-lg shadow-xl shadow-blue-900/40 transition-all duration-300 uppercase tracking-wider text-sm"
                      >
                        {slide.btnText}
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  )}
                </div>
              </>
            )}
          </SwiperSlide>
        ))}

        <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300 border border-white/10 hidden sm:flex">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300 border border-white/10 hidden sm:flex">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:px-32 gap-4">
          <div className="custom-pagination flex items-center" />

          <div className="flex items-center gap-2 sm:hidden">
            <button className="custom-prev w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white active:bg-blue-600">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="custom-next w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white active:bg-blue-600">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
