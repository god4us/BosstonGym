"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa"; // Menghapus FaLinkedinIn
import Link from "next/link"; 
import Image from "next/image"; 

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 font-body">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo di pojok kiri */}
        <div className="flex items-center mb-2 md:mb-0">
          <Image
            src="/img/logo.png"
            alt="Logo BosstonGym"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Fitur di tengah */}
        <div className="flex gap-6 text-center mb-2 md:mb-0 font-body">
          <Link href="/pages/blog">
            <div className="text-xs text-gray-700 hover:text-orange-500 cursor-pointer">
              BlogSpot
            </div>
          </Link>
          <Link href="/pages/membership">
            <div className="text-xs text-gray-700 hover:text-orange-500 cursor-pointer">
              Membership
            </div>
          </Link>
          <Link href="/pages/promosi">
            <div className="text-xs text-gray-700 hover:text-orange-500 cursor-pointer">
              Promosi
            </div>
          </Link>
          <Link href="/pages/lokasi">
            <div className="text-xs text-gray-700 hover:text-orange-500 cursor-pointer">
              Lokasi
            </div>
          </Link>
          <Link href="/pages/hubungikami">
            <div className="text-xs text-gray-700 hover:text-orange-500 cursor-pointer">
              Hubungi Kami
            </div>
          </Link>
        </div>

        {/* Social Media di pojok kanan */}
        <div className="flex gap-3">
          <Link href="https://www.facebook.com/bosstongym" target="_blank">
            <FaFacebookF className="text-gray-600 hover:text-orange-500 cursor-pointer text-sm" />
          </Link>
          <Link href="https://www.instagram.com/bosstongym" target="_blank">
            <FaInstagram className="text-gray-600 hover:text-orange-500 cursor-pointer text-sm" />
          </Link>
          <Link href="https://www.youtube.com/bosstongym" target="_blank">
            <FaYoutube className="text-gray-600 hover:text-orange-500 cursor-pointer text-sm" />
          </Link>
          <Link href="" target="_blank">
            <FaTwitter className="text-gray-600 hover:text-orange-500 cursor-pointer text-sm" />
          </Link>
        </div>
      </div>

      {/* Footer Text */}
      <div className="w-full border-t border-gray-300 pt-2 mt-2 text-center text-xs text-gray-500 font-body">
        <p>© 2024 BosstonGym. Semua hak dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
