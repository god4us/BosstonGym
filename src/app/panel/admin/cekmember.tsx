"use client";

import { useState } from "react";

const dummyMembers = [
  {
    id: 1,
    name: "Rifky Firdaus",
    email: "rifky@example.com",
    joinedDate: "1 Januari 2023",
    membershipDuration: "12 Bulan",
  },
  {
    id: 2,
    name: "Siti Rahma",
    email: "siti@example.com",
    joinedDate: "15 Februari 2023",
    membershipDuration: "6 Bulan",
  },
  {
    id: 3,
    name: "Andi Santoso",
    email: "andi@example.com",
    joinedDate: "10 Maret 2023",
    membershipDuration: "3 Bulan",
  },
  {
    id: 4,
    name: "Budi Setiawan",
    email: "budi@example.com",
    joinedDate: "5 April 2023",
    membershipDuration: "12 Bulan",
  },
  {
    id: 5,
    name: "Dewi Kartika",
    email: "dewi@example.com",
    joinedDate: "20 Mei 2023",
    membershipDuration: "1 Bulan",
  },
];

export default function CekMember() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = dummyMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Daftar Member</h2>
      <input
        type="text"
        placeholder="Cari nama atau email..."
        className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-orange-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="overflow-auto max-h-96">
        <table className="w-full table-auto text-left">
          <thead className="bg-gray-200 text-gray-600 text-sm uppercase">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Tanggal Gabung</th>
              <th className="px-4 py-2">Durasi Membership</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredMembers.map((member) => (
              <tr key={member.id} className="hover:bg-gray-100">
                <td className="px-4 py-2">{member.id}</td>
                <td className="px-4 py-2">{member.name}</td>
                <td className="px-4 py-2">{member.email}</td>
                <td className="px-4 py-2">{member.joinedDate}</td>
                <td className="px-4 py-2">{member.membershipDuration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredMembers.length === 0 && (
          <p className="text-gray-600 text-center mt-4">Tidak ada member ditemukan.</p>
        )}
      </div>
    </div>
  );
}
