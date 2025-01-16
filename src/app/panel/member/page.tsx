import Layout from "../componentp/Layout";

const memberData = {
  id: "12345",
  name: "Rifky Firdaus",
  email: "rifky@example.com",
  joinedDate: "1 Januari 2024",
  membershipDuration: "12 Bulan",
};

export default function MemberPage() {
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm border border-gray-200">
          <h2 className="text-lg font-heading font-semibold text-gray-800 mb-6 text-center">
            Informasi Member
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col">
              <p className="text-xs text-gray-500">ID Member</p>
              <p className="text-sm text-gray-800">{memberData.id}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-gray-500">Nama Lengkap</p>
              <p className="text-sm text-gray-800">{memberData.name}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm text-gray-800">{memberData.email}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-gray-500">Pertama Kali Gabung</p>
              <p className="text-sm text-gray-800">{memberData.joinedDate}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-gray-500">Sisa Durasi Membership</p>
              <p className="text-sm text-gray-800">{memberData.membershipDuration}</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="px-6 py-2 bg-orange-500 text-white text-sm font-medium rounded hover:bg-orange-600 transition">
              Ubah Informasi
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
