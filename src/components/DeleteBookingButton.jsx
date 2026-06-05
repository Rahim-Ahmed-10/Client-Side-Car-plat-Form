'use client';

import React, { useTransition } from 'react';
import { deleteBooking } from '@/lib/action/booking';
import toast from 'react-hot-toast';

export default function DeleteBookingButton({ bookingId, token }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Delete this booking? This action cannot be undone.");
    
    if (confirmDelete) {
      startTransition(async () => {
        const result = await deleteBooking(bookingId, token);
        if (result?.success) {
          toast.success("Booking deleted successfully.");
        } else {
          toast.error("Failed to delete booking. Please try again.");
        }
      });
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={isPending}
      className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-bold border transition-all ${
        isPending 
          ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
          : 'bg-red-50 text-red-600 border-red-100 hover:bg-red-600 hover:text-white'
      }`}
    >
      {isPending ? 'DELETING...' : 'DELETE'}
    </button>
  );
}