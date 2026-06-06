'use server';

import { revalidatePath } from 'next/cache';

export async function addCarProduct(formData, token) {
  const carData = {
    carName: formData.get("carName"),
    carType: formData.get("carType"),
    dailyRentPrice: Number(formData.get("dailyRentPrice")),
    capacity: Number(formData.get("capacity")),
    imageUrl: formData.get("imageUrl"),
    pickupLocation: formData.get("pickupLocation"),
    description: formData.get("description"),
    availabilityStatus: "Available"
  };

  // 🛠️ ডাইনামিক ইউআরএল ট্রিক (লোকালহোস্ট ও লাইভের ঝামেলার স্থায়ী সমাধান)
  const isLocal = process.env.NODE_ENV === 'development';
  const baseUrl = isLocal 
    ? 'http://localhost:8085' 
    : 'https://car-rental-sirver.vercel.app';

  try {
    const res = await fetch(`${baseUrl}/carProducts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`, 
      },
      body: JSON.stringify(carData)
    });

    // রেসপন্স ঠিকঠাক না আসলে এরর থ্রো করবে
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `Server responded with status ${res.status}`);
    }

    const data = await res.json();
    
    // ডেটা সাকসেসফুলি অ্যাড হলে পেজ রিফ্রেশ করার জন্য
    revalidatePath('/all-cars'); 
    
    return data;
  } catch (error) {
    console.error("Add Car Error in Action:", error);
    return { success: false, error: error.message };
  }
}