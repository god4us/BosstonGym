"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-lg font-semibold text-black-700">
        Selfservice-<span className="text-orange-600">BosstonGym</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link href="/" className="text-gray-800 hover:text-orange-600 font-medium text-sm">
          Beranda
        </Link>
        <Link href="/pages/tentangkami" className="text-gray-800 hover:text-orange-600 font-medium text-sm">
          Tentang Kami
        </Link>
        <Link href="/pages/faq" className="text-gray-800 hover:text-orange-600 font-medium text-sm">
          FAQ
        </Link>

        {/* Dropdown Menu (Optional) */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-gray-800 hover:text-orange-600 font-medium text-sm"
          >
            Menu
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2 w-48 z-50">
              <Link href="/pages/profile" className="block px-4 py-2 text-gray-800 hover:bg-orange-100 rounded">
                Profil
              </Link>
              <Link href="/pages/settings" className="block px-4 py-2 text-gray-800 hover:bg-orange-100 rounded">
                Pengaturan
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Logout Button */}
      <div>
        <Link href="/pages/login" aria-label="Logout">
          <button className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-full shadow-lg text-sm transition-all">
            Logout
          </button>
        </Link>
      </div>
    </nav>
  );
}
