'use client';
import { useState } from 'react';
import { Link, Button, Avatar } from '@heroui/react';
import Image from 'next/image';
// import { authClient } from '@/lib/auth-client';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const { data: session, } = authClient.useSession()
  // console.log(session);

 

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
          <Link href="/profile">Profile</Link>


          <Link href="/login" className="block py-2">
            Login
          </Link>

          <Link href="/signup">
            <Button className="w-full" variant="secondary">
              Sign Up
            </Button>
          </Link>
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
              <Link href="/profile" className="block py-2">
                Profile
              </Link>
              <Link href="/login" className="block py-2">
                Login
              </Link>

              <Link href="/signup">
                <Button className="w-full" variant="secondary">
                  Sign Up
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
