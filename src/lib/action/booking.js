'use server';

import { revalidatePath } from 'next/cache';

export async function deleteBooking(bookingId, token) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments/${bookingId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error('Could not delete the booking');
    }

    // ডিলিট হওয়ার পর পেজের ডাটা ইনস্ট্যান্ট আপডেট করার জন্য ক্যাশ ক্লিয়ার করবে
    revalidatePath('/my-bookings'); 
    return { success: true };
  } catch (error) {
    console.error("Delete Error:", error);
    return { success: false, error: error.message };
  }
}