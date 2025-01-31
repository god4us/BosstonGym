"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulasi respons login sementara
    try {
      const mockResponse = {
        ok: true,
        json: async () => {
          if (email === "admin@bosstongym.com") {
            return { role: "admin" };
          } else if (email === "member@bosstongym.com") {
            return { role: "member" };
          } else if (email === "rifkyfrds@gmail.com") {
            return { role: "member" };
          } else if (email === "daus@gmail.com") {
            return { role: "member" };
          } else {
            throw new Error("Email atau password salah.");
          }
        },
      };

      if (!mockResponse.ok) {
        throw new Error("Login gagal. Periksa kredensial Anda.");
      }

      const data = await mockResponse.json();

      // Arahkan ke halaman berdasarkan peran
      if (data.role === "admin") {
        window.location.href = "/panel/admin";
      } else if (data.role === "member") {
        window.location.href = "/panel/member";
      } else {
        throw new Error("Peran tidak dikenal.");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Tombol kembali ke halaman utama */}
      <div className="mb-6">
        <a
          href="/"
          className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold text-lg"
        >
          ← Back to Landing Page
        </a>
      </div>

      {/* Kontainer Form */}
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/img/logo.png" alt="Logo" className="w-20 h-20 object-contain" />
        </div>

        {/* Judul Form */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            placeholder="Masukkan email Anda"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            placeholder="Masukkan password Anda"
            required
          />
        </div>

        {/* Tombol Login */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 shadow-md"
        >
          Login
        </button>

        {/* Lupa Password / Belum Punya Akun */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            <a
              href="/pages/hubungikami"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              Lupa Password
            </a>{" "}
            atau{" "}
            <a
              href="/pages/membership"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              Belum Punya Akun?
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
