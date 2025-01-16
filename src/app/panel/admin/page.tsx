"use client";

import { useState } from "react";
import Layout from "../componentp/Layout";
import CekMember from "./cekmember";
import UploadBlog from "./uploadblog";
import UploadPromosi from "./uploadpromosi";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <Layout>
      <div className="min-h-screen  p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Panel Admin
        </h1>

        {/* Tombol Menu Admin */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => setActiveTab(activeTab === "members" ? null : "members")}
            className={`p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition ${
              activeTab === "members" ? "border-2 border-blue-500" : ""
            }`}
          >
            <h2 className="text-lg font-medium text-gray-800 text-center">Cek Daftar Member</h2>
          </button>
          <button
            onClick={() => setActiveTab(activeTab === "blog" ? null : "blog")}
            className={`p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition ${
              activeTab === "blog" ? "border-2 border-green-500" : ""
            }`}
          >
            <h2 className="text-lg font-medium text-gray-800 text-center">Upload Blog</h2>
          </button>
          <button
            onClick={() => setActiveTab(activeTab === "promosi" ? null : "promosi")}
            className={`p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition ${
              activeTab === "promosi" ? "border-2 border-orange-500" : ""
            }`}
          >
            <h2 className="text-lg font-medium text-gray-800 text-center">Upload Promosi</h2>
          </button>
        </div>

        {/* Konten Aktif */}
        <div>
          {activeTab === "members" && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CekMember />
            </div>
          )}
          {activeTab === "blog" && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <UploadBlog />
            </div>
          )}
          {activeTab === "promosi" && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <UploadPromosi />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
