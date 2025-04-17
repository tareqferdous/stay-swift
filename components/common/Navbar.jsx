"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHotel } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";

const Navbar = ({ handleShowNav }) => {
  const [navBg, setNavBg] = useState(false);
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const isHomeOrHotels = pathname === "/" || pathname === "/hotels";

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={` transition-all duration-200 h-[12vh] z-[1000] w-full fixed top-0 left-0 right-0 ${
        navBg ? "bg-white shadow-md" : "fixed"
      }`}
    >
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="inline-flex items-center gap-2">
            <div className="bg-rose-600 p-2 rounded-md shadow-sm">
              <FaHotel className="text-white text-xl" />
            </div>
            <h1
              className={`${
                navBg || !isHomeOrHotels
                  ? "bg-gradient-to-r from-black via-black to-rose-600"
                  : "bg-gradient-to-r from-white via-white to-rose-600"
              } text-lg md:text-2xl font-semibold tracking-tight bg-clip-text text-transparent `}
            >
              Stay Swift
            </h1>
          </div>
        </Link>

        {/* NavLinks */}
        <div
          className={`hidden lg:flex items-center space-x-10 ${
            navBg || !isHomeOrHotels ? "text-gray-800" : "text-white"
          }`}
        >
          <Link href="">
            <p className="relative  text-base font-medium w-fit block after:block after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
              Recommended Places
            </p>
          </Link>

          <Link href="">
            <p className="relative  text-base font-medium w-fit block after:block after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
              About Us
            </p>
          </Link>

          <Link href="">
            <p className="relative  text-base font-medium w-fit block after:block after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
              Contact Us
            </p>
          </Link>

          <Link href="">
            <p className="relative  text-base font-medium w-fit block after:block after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
              Bookings
            </p>
          </Link>
        </div>

        {/* buttons */}
        <div className="flex items-center space-x-4">
          {session?.user ? (
            <button onClick={() => signOut()}>Sign Out</button>
          ) : (
            <Link
              href="/login"
              className="hidden md:block md:px-10 md:py-2.5 px-5 py-2 text-white font-semibold text-base bg-rose-600 hover:bg-rose-700 transition-all duration-200 rounded-lg"
            >
              Login
            </Link>
          )}

          {/* Burger Menu */}
          <HiBars3BottomLeft
            onClick={handleShowNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
