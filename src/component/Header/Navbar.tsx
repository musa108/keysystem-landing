"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCaretDown, FaPhoneAlt } from "react-icons/fa";
import logo from "@/../public/image/logo.png";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className=" text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={200}
                height={50}
                className="h-8 w-32"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/">
              <p className="hover:text-gray-300">Home</p>
            </Link>
            <Link href="/about">
              <p className="hover:text-gray-300">About</p>
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-gray-300 focus:outline-none flex items-center gap-1"
              >
                Service
                <FaCaretDown />
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 bg-white text-black rounded shadow-lg">
                  <Link href="/service/web-development">
                    <p className="block px-4 py-2 hover:bg-gray-200">
                      Application management services
                    </p>
                  </Link>
                  <Link href="/service/mobile-development">
                    <p className="block px-4 py-2 hover:bg-gray-200">
                      Digital Banking & financial inclusion
                    </p>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact">
              <p className="hover:text-gray-300">Contact</p>
            </Link>
          </div>
          <div className="">
            <Link
              href="/contact"
              className="flex items-center space-x-2 bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] p-2 rounded-full max-md:hidden"
            >
              <FaPhoneAlt className="text-xl text-white" />
              <span className="text-base text-white">+234 818 444 1404</span>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <p className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                About
              </p>
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 focus:outline-none"
              >
                Service
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-white text-black rounded shadow-lg">
                  <Link href="/service/web-development">
                    <p className="block px-4 py-2 hover:bg-gray-200">
                      Web Development
                    </p>
                  </Link>
                  <Link href="/service/mobile-development">
                    <p className="block px-4 py-2 hover:bg-gray-200">
                      Mobile Development
                    </p>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact">
              <p className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                Contact
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
