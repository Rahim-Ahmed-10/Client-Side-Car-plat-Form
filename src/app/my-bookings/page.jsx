import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import DeleteBookingButton from '@/components/DeleteBookingButton'; // বাটনটি ইম্পোর্ট করুন

const MyBookingsPage = async () => {
  const sessionHeaders = await headers();
  const tokenData = await auth.api.getToken({ headers: sessionHeaders });
  const session = await auth.api.getSession({ headers: sessionHeaders });

  if (!session?.user) {
    return <div className="text-center py-20 px-4">Please login to view your bookings.</div>;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments/${session.user.email}`, {
    headers: {
      authorization: `Bearer ${tokenData?.token}`,
    },
    cache: 'no-store' 
  });
  
  const rawData = res.ok ? await res.json() : [];

  const enrollments = rawData.map((booking) => ({
    _id: booking._id,
    carName: booking.carTitle || "Unknown Car",
    lastEnrolledAt: booking.enrolledAt || null,
    dailyRentPrice: booking.price || 0,
    capacity: booking.capacity || 4, 
    imageUrl: booking.imageUrl || booking.image || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=200", 
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 min-h-screen">
      <div className="mb-6 md:mb-10 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">
          My <span className="text-blue-600">Bookings</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-1 md:mt-2">
          Manage your car rentals and track your upcoming trips.
        </p>
      </div>

      {!enrollments || enrollments.length === 0 ? (
        <div className="text-center py-16 md:py-20 bg-gray-50 rounded-2xl md:rounded-3xl border-2 border-dashed border-gray-200 px-4">
          <p className="text-lg md:text-xl text-gray-400 font-medium italic">No active bookings found.</p>
        </div>
      ) : (
        <div className="overflow-hidden bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-xl border border-gray-100">
          <div className="overflow-x-auto w-full block whitespace-nowrap">
            <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 md:px-6 py-4 md:py-5 font-bold uppercase text-[10px] md:text-xs tracking-widest">Car Details</th>
                  <th className="px-4 md:px-6 py-4 md:py-5 font-bold uppercase text-[10px] md:text-xs tracking-widest">Booking Date</th>
                  <th className="px-4 md:px-6 py-4 md:py-5 font-bold uppercase text-[10px] md:text-xs tracking-widest">Total Price</th>
                  <th className="px-4 md:px-6 py-4 md:py-5 font-bold uppercase text-[10px] md:text-xs tracking-widest">Capacity</th>
                  <th className="px-4 md:px-6 py-4 md:py-5 font-bold uppercase text-[10px] md:text-xs tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {enrollments.map((booking) => (
                  <tr key={booking._id} className="hover:bg-blue-50/40 transition-all duration-200 group">
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center gap-3 md:gap-4">
                        <img 
                          src={booking.imageUrl} 
                          alt={booking.carName} 
                          className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-lg shadow-sm bg-gray-100 flex-shrink-0" 
                        />
                        <span className="font-bold text-gray-800 text-base md:text-lg whitespace-normal line-clamp-1">
                          {booking.carName}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-600 font-medium">
                      {booking.lastEnrolledAt ? new Date(booking.lastEnrolledAt).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <span className="text-blue-600 font-black text-base md:text-lg">${booking.dailyRentPrice}</span>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <span className="px-2.5 md:px-3 py-0.5 md:py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] md:text-xs font-bold">
                         {booking.capacity} Seats
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-right">
                      {/* পুরোনো বাটনের জায়গায় নতুন ডিলিট বাটন কম্পোনেন্ট যোগ করা হলো */}
                      <DeleteBookingButton 
                        bookingId={booking._id} 
                        token={tokenData?.token} 
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;