'use client';
import {Input, Label} from "@heroui/react";
import { Button } from '@heroui/react';
import {
  MapPin,
  Users,
  CarFront,
  BadgeCheck,
  ArrowRight,
  Fuel,
} from 'lucide-react';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import { EditModel } from './EditModel';
// import { DeleteCarAlert } from './DeleteCarAlert';
import { FaArrowLeft } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

const CarsDetailsCard = ({ carData }) => {
  const {
    imageUrl,
    carName,
    dailyRentPrice,
    availabilityStatus,
    carType,
    pickupLocation,
    seatCapacity,
    description,
  } = carData;

  return (
    <div className="flex container mx-auto gap-16 lg:card-side">
  <figure>
    <img
      src={imageUrl}
      alt={carName} className="rounded-3xl"/>
  </figure>
  <div className="card-body space-y-2">
    <div className="flex justify-between items-center">
        <p className="font-medium bg-yellow-100 rounded-xl p-3">{carType}</p>
        <p className="bg-black text-white p-1 rounded-full">{availabilityStatus}</p>
    </div>
    <h2 className="text-2xl font-bold">{carName}</h2>
    <p><span className="text-xl font-medium">${dailyRentPrice}</span>/day</p>
    <p className="font-normal">{description}</p>
    
    <p className="font-medium text-2xl flex gap-1 items-center"><FaLocationDot />{pickupLocation}</p>
 
    <div className="">
      <button className="btn bg-blue-600 p-2 w-full  rounded-full text-white font-bold cursor-pointer hover:bg-blue-500">Book Now</button>
    </div>
  </div>
</div>

  );
};

export default CarsDetailsCard;
