"use client";
import React, { useState } from "react";
import { useSession, authClient } from "@/lib/auth-client"; 
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EnrollmentButton({ carData }) {
    const { data: session } = useSession();
    const router = useRouter(); //
    const [showForm, setShowForm] = useState(false); // ফর্ম দেখানোর জন্য স্টেট
    const [loading, setLoading] = useState(false);

    const handleEnrollment = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data: jwtData } = await authClient.token();
            const token = jwtData?.token;

            if (!token) {
                toast.error("Please login first!");
                setLoading(false);
                return;
            }

            const formData = new FormData(e.target);
            const bookingData = {
                carId: carData?._id,
                carImage: carData?.imageUrl,
                carTitle: carData?.carName,
                carCapacity: carData?.capacity,
                price: carData?.dailyRentPrice,
                email: session?.user?.email,
                phone: formData.get("phone"),
                date: formData.get("date"),
                address: formData.get("address")
            };

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments/${carData._id}`, {
                method: "PATCH",
                cache: 'no-store',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(bookingData)
            });
            console.log("Booking response:", res);

            if (res.ok) {
                toast.success("Booking Successful!");
                router.push("/my-bookings"); //
            } else {
                toast.error("Failed to book.");
            }
        } catch (error) {
            toast.error("Network error!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            {/* ১. সাধারণ বুক নাও বাটন */}
            {!showForm && (
                <button 
                    onClick={() => setShowForm(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition-all"
                >
                    BOOK NOW
                </button>
            )}

            {/* ২. সাধারণ ফরম (বাটনে ক্লিক করলে নিচে আসবে) */}
            {showForm && (
                <div className="mt-6 p-6 border-2 border-blue-100 rounded-3xl bg-blue-50/30">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Booking Form</h3>
                    <form onSubmit={handleEnrollment} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-600 mb-1">Phone Number</label>
                            <input 
                                name="phone" 
                                type="text" 
                                placeholder="017xxxxxxxx" 
                                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-blue-500"
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-600 mb-1">Pickup Date</label>
                            <input 
                                name="date" 
                                type="date" 
                                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-blue-500"
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-600 mb-1">Your Address</label>
                            <textarea 
                                name="address" 
                                placeholder="Enter full address" 
                                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-blue-500"
                                rows="2"
                            />
                        </div>

                        <div className="flex gap-2">
                            <button 
                                type="button" 
                                onClick={() => setShowForm(false)}
                                className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 rounded-xl"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl disabled:bg-gray-400"
                            >
                                {loading ? "Processing..." : "Confirm Booking"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}