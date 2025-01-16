"use client"; // Menandai sebagai client component

import { useState, useRef, useEffect } from "react";
import Image from "next/image"; // Import Image dari Next.js

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHomepage =
    typeof window !== "undefined" && window.location.pathname === "/";

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md px-4 py-2 flex items-center font-body">
      {/* Logo */}
      <div className="flex-none">
        <a href={isHomepage ? "/" : "/"} className="cursor-pointer">
          <Image
            src="/img/logo.png" // Path menuju logo Anda di folder public
            alt="Logo BosstonGym"
            width={40} // Sesuaikan ukuran logo
            height={40} // Sesuaikan ukuran logo
            className="cursor-pointer"
          />
        </a>
      </div>

      {/* Links */}
      <div className="flex-grow ml-6 flex items-center gap-4">
        <a
          href="/"
          className="text-black hover:text-orange-600 text-base font-normal"
        >
          Beranda
        </a>
        <a
          href="/pages/faqpage"
          className="text-black hover:text-orange-600 text-base font-normal"
        >
          FAQ
        </a>
        <a
          href="/pages/membership"
          className="text-black hover:text-orange-600 text-base font-normal"
        >
          Membership
        </a>
        <div className="relative" ref={dropdownRef}>
          {/* Tombol Dropdown */}
          <button
            className="text-black hover:text-orange-600 text-lg font-normal"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            ☰
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2 w-48 z-50 font-body">
              <a
                href={isHomepage ? "pages/blog" : "/pages/blog"}
                className="block px-3 py-2 text-black hover:text-white hover:bg-orange-600 rounded transition text-base font-normal"
              >
                Blog
              </a>
              <a
                href={isHomepage ? "pages/promosi" : "/pages/promosi"}
                className="block px-3 py-2 text-black hover:text-white hover:bg-orange-600 rounded transition text-base font-normal"
              >
                Promosi
              </a>
              <a
                href={isHomepage ? "pages/personaltrainer" : "/pages/personaltrainer"}
                className="block px-3 py-2 text-black hover:text-white hover:bg-orange-600 rounded transition text-base font-normal"
              >
                Personal Trainer
              </a>
              <a
                href={isHomepage ? "pages/kalkulator" : "/pages/kalkulator"}
                className="block px-3 py-2 text-black hover:text-white hover:bg-orange-600 rounded transition text-base font-normal"
              >
                Kalkulator
              </a>
              <a
                href={isHomepage ? "pages/jamoprasional" : "/pages/jamoprasional"}
                className="block px-3 py-2 text-black hover:text-white hover:bg-orange-600 rounded transition text-base font-normal"
              >
                Jam Operasional
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Tombol Login */}
      <div className="flex-none">
        <a href="/pages/login">
          <button className="bg-orange-600 hover:bg-orange-500 text-white py-1 px-3 rounded-full shadow-md text-base font-body font-normal transition-all">
            Login
          </button>
        </a>
      </div>
    </nav>
  );
}
