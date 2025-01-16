"use client"; // Menandai sebagai client component

import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHomepage = typeof window !== "undefined" && window.location.pathname === "/";

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
    <nav className="bg-white shadow-md px-6 py-3 flex items-center">
      {/* Placeholder Logo */}
      <div className="flex-none text-lg font-semibold text-black-300">
        Selfservice-
      </div>
      <div className="flex-none text-lg font-semibold text-orange-600">
        BosstonGym
      </div>

      {/* Links */}
      <div className="flex-grow ml-8 flex items-center gap-4">
        <a
          href={isHomepage ? "/" : "/"}
          className="text-gray-800 hover:text-orange-600 font-medium text-sm"
        >
          Beranda
        </a>
        <a
          href={isHomepage ? "pages/tentangkami" : "/pages/tentangkami"}
          className="text-gray-800 hover:text-orange-600 font-medium text-sm"
        >
          FAQ
        </a>
      </div>

      {/* Tombol Logout */}
      <div className="flex-none">
        <a href={isHomepage ? "pages/login" : "/pages/login"}>
          <button className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-full shadow-lg text-sm transition-all">
            Logout
          </button>
        </a>
      </div>
    </nav>
  );
}
