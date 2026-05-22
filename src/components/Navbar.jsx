'use client';
import { useState } from 'react';
import { Link, Button, Avatar } from '@heroui/react';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
// import { authClient } from '@/lib/auth-client';



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const { data: session, } = authClient.useSession()
  // console.log(session);
   const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/login";
        },
      },
    });
  };
 

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            {/* <Logo /> */}
           Car Plaform
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href="/explore-car"
              className="font-medium"
              aria-current="page"
            >
              Explore Car
            </Link>
          </li>
          <li>
            <Link href="/add-car">Add Car</Link>
          </li>
          <li>
            <Link href="/my-bookings">My Bookings</Link>
          </li>
        </ul>
        <div className="hidden items-center gap-4 md:flex">


          <Link href="/login" className="block py-2">
            Login
          </Link>

          <Link href="/signup">
            <Button className="w-full" variant="secondary">
              Sign Up
            </Button>
          </Link>


              {user && (
        <div className="relative group">
          {/* প্রোফাইল বাটন/আইকন */}
          <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
             <span>{user.name || "Profile"}</span>
          </button>

          {/* ড্রপডাউন মেনু (Hover করলে দেখা যাবে) */}
          <div className="absolute right-0 hidden group-hover:block bg-white border shadow-lg rounded-md w-40 p-2 z-50">
            
            {/* Settings অপশন */}
            <Link 
              href="/settings" 
              className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
            >
              Settings
            </Link>

            <hr className="my-1" />

            {/* Logout অপশন */}
            <button 
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      )}

        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/explore-car" className="block py-2 font-medium">
                Explore Car
              </Link>
            </li>
            <li>
              <Link href="/add-car" className="block py-2">
                Add Car
              </Link>
            </li>
            <li>
              <Link href="/my-bookings" className="block py-2">
                My Bookings
              </Link>
            </li>

            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
            
              <Link href="/login" className="block py-2">
                Login
              </Link>

              <Link href="/signup">
                <Button className="w-full" variant="secondary">
                  Sign Up
                </Button>
              </Link>

              {user && (
        <div className="relative group">
          {/* প্রোফাইল বাটন/আইকন */}
          <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
             <span>{user.name || "Profile"}</span>
          </button>

          {/* ড্রপডাউন মেনু (Hover করলে দেখা যাবে) */}
          <div className="absolute right-0 hidden group-hover:block bg-white border shadow-lg rounded-md w-40 p-2 z-50">
            
            {/* Settings অপশন */}
            <Link 
              href="/settings" 
              className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
            >
              Settings
            </Link>

            <hr className="my-1" />

            {/* Logout অপশন */}
            <button 
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
