"use client";

import { useEffect, useState } from 'react';

//  Definisikan tipe data untuk Member
interface Member {
  id: number;
  name: string;
  email: string;
  member_active_until?: string; // Opsional
}

const AdminPanel = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch('/api/admin/members');
        if (!res.ok) {
          throw new Error('Gagal mengambil data member');
        }
        const data = await res.json();
        setMembers(data);
      } catch (err) {
        console.error(err);
        setError('Terjadi kesalahan saat memuat data.');
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">📋 Admin Panel - Daftar Member</h1>

      {loading && <p className="text-center text-gray-600">Memuat data...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-md border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left py-2 px-4 border-b">ID</th>
                <th className="text-left py-2 px-4 border-b">Nama</th>
                <th className="text-left py-2 px-4 border-b">Email</th>
                <th className="text-left py-2 px-4 border-b">Aktif Hingga</th>
              </tr>
            </thead>
            <tbody>
              {members.length > 0 ? (
                members.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{member.id}</td>
                    <td className="py-2 px-4 border-b">{member.name}</td>
                    <td className="py-2 px-4 border-b">{member.email}</td>
                    <td className="py-2 px-4 border-b">
                      {member.member_active_until || (
                        <span className="text-red-500">Tidak Aktif</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    Tidak ada data member tersedia.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
