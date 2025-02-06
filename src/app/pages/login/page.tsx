"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Indikator loading

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Mulai loading
    setError(""); // Reset pesan error

    try {
      if (!email || !password) {
        throw new Error("Email dan password wajib diisi.");
      }

      const mockResponse = {
        ok: true,
        json: async () => {
          if (email === "admin@bosstongym.com" && password === "admin123") {
            return { role: "admin" };
          } else if (email === "rifkyfrds@gmail.com" && password === "rifky123") {
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
        throw new Error("Peran tidak dikenali.");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false); // Selesai loading
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-6">
        <a
          href="/"
          className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold text-lg"
        >
          ← Back to Landing Page
        </a>
      </div>

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <div className="flex justify-center mb-6">
          <img src="/img/logo.png" alt="Logo" className="w-20 h-20 object-contain" />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

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

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-md shadow-md transition-all ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          {isLoading ? "Memproses..." : "Login"}
        </button>

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
