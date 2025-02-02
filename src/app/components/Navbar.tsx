"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Gunakan Link untuk navigasi Next.js

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="Logo BosstonGym"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Links */}
      <div className="flex-grow ml-6 flex items-center gap-4">
        <Link href="/" className="text-black hover:text-orange-600 text-base font-normal">
          Beranda
        </Link>
        <Link href="/pages/faqpage" className="text-black hover:text-orange-600 text-base font-normal">
          FAQ
        </Link>
        <Link href="/pages/membership" className="text-black hover:text-orange-600 text-base font-normal">
          Membership
        </Link>

        {/* Dropdown Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="text-black hover:text-orange-600 text-lg font-normal"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            ☰
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2 w-48 z-50 font-body">
              {[
                { href: "/pages/blog", label: "Blog" },
                { href: "/pages/promosi", label: "Promosi" },
                { href: "/pages/personaltrainer", label: "Personal Trainer" },
                { href: "/pages/kalkulator", label: "Kalkulator" },
                { href: "/pages/jamoprasional", label: "Jam Operasional" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-3 py-2 text-black hover:text-white hover:bg-orange-600 rounded transition text-base font-normal"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tombol Login */}
      <div className="flex-none">
        <Link href="/pages/login">
          <button className="bg-orange-600 hover:bg-orange-500 text-white py-1 px-3 rounded-full shadow-md text-base font-body font-normal transition-all">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}
