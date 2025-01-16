"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-gray-700 text-white w-64 h-full px-4 py-6 fixed">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/panel/admin/members">
            <a className="hover:text-orange-500">Daftar Member</a>
          </Link>
        </li>
        <li>
          <Link href="/panel/admin/blogspot">
            <a className="hover:text-orange-500">Upload Blogspot</a>
          </Link>
        </li>
        <li>
          <Link href="/panel/member/profile">
            <a className="hover:text-orange-500">Profile Member</a>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
