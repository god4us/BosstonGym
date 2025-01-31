"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaBirthdayCake } from "react-icons/fa";
import Stepper from "./Stepper"; // ✅ Import Stepper

export default function StepOne({ onNext, step }: { onNext: (data: any) => void; step: number }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    email: "",
    isStudent: false,
    whatsapp: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [agree, setAgree] = useState(false);

  const validate = () => {
    let newErrors: { [key: string]: string } = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^08\d{8,11}$/; 
    const nameRegex = /^[A-Za-z\s]+$/; 
    const birthYear = new Date(data.birthDate).getFullYear();

    if (!nameRegex.test(data.firstName.trim()) || data.firstName.length < 2)
      newErrors.firstName = "Nama depan hanya boleh huruf dan minimal 2 karakter";
    if (!nameRegex.test(data.lastName.trim()) || data.lastName.length < 2)
      newErrors.lastName = "Nama belakang hanya boleh huruf dan minimal 2 karakter";
    if (!data.birthDate) {
      newErrors.birthDate = "Tanggal lahir wajib diisi";
    } else if (birthYear > 2011) {
      newErrors.birthDate = "Anda harus berusia minimal 13 tahun (lahir sebelum 2011)";
    }
    if (!data.gender) newErrors.gender = "Jenis kelamin wajib dipilih";
    if (!emailRegex.test(data.email)) newErrors.email = "Format email tidak valid";
    if (!phoneRegex.test(data.whatsapp)) newErrors.whatsapp = "Nomor WhatsApp harus diawali 08 dan memiliki 10-13 digit";
    if (!agree) newErrors.agree = "Anda harus menyetujui sebelum melanjutkan";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onNext(data);
    }
  };

  const maxBirthDate = "2011-12-31";

  return (
    <div className="flex flex-col bg-white min-h-screen">
        <div className="max-w-md mx-auto py-12 px-8 bg-white rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Informasi Personal</h2>

          <form>
            {[
              { label: "Nama Depan", name: "firstName", type: "text", icon: <FaUser /> },
              { label: "Nama Belakang", name: "lastName", type: "text", icon: <FaUser /> },
              { label: "Tanggal Lahir", name: "birthDate", type: "date", icon: <FaBirthdayCake />, max: maxBirthDate },
              { label: "Email", name: "email", type: "email", icon: <FaEnvelope /> },
              { label: "Nomor WhatsApp", name: "whatsapp", type: "tel", icon: <FaPhone /> },
            ].map(({ label, name, type, icon, max }) => (
              <div className="mb-6" key={name}>
                <label className="block text-sm text-gray-700 font-medium mb-2">{label}</label>
                <div className="relative flex items-center gap-4">
                  <div className="text-gray-500 text-lg">{icon}</div>
                  <input
                    type={type}
                    value={(data as any)[name]}
                    onChange={(e) => setData({ ...data, [name]: e.target.value })}
                    max={max}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 text-gray-800 shadow-sm ${
                      errors[name] ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder={`Masukkan ${label.toLowerCase()}`}
                  />
                </div>
                {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
              </div>
            ))}

            <div className="mb-6">
              <label className="block text-sm text-gray-700 font-medium mb-2">Jenis Kelamin</label>
              <div className="flex gap-6">
                {["Pria", "Wanita"].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={option}
                      checked={data.gender === option}
                      onChange={() => setData({ ...data, gender: option })}
                      className="form-radio text-orange-500"
                    />
                    {option}
                  </label>
                ))}
              </div>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>

            <div className="mb-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={data.isStudent}
                  onChange={(e) => setData({ ...data, isStudent: e.target.checked })}
                  className="form-checkbox text-orange-500"
                />
                Saya seorang pelajar
              </label>
            </div>

            <div className="mb-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="form-checkbox text-orange-500"
                />
                Saya menyetujui bahwa informasi yang saya isi sudah benar
              </label>
              {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}
            </div>

            <div className="text-center mb-6">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-orange-500 text-white py-3 px-8 rounded-xl shadow-md hover:bg-orange-600 transition-all"
              >
                Lanjut
              </button>
            </div>
          </form>
        </div>
      </div>      

  );
}
