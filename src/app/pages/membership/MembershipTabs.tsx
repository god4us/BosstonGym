"use client";

import { useState } from "react";
import Link from "next/link";
import BenefitMember from "./BenefitMember";

interface MembershipItem {
  price: string;
  duration: string;
  originalPrice?: string;
  discount?: string;
  mostPopular?: boolean;
  bestValue?: boolean;
}

interface MembershipData {
  [key: string]: {
    [key: string]: MembershipItem[];
  };
}

const MembershipTabs = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const [selectedGender, setSelectedGender] = useState<"Pria" | "Wanita" | "Couple">("Pria");
  const [selectedType, setSelectedType] = useState<"Umum" | "Pelajar">("Umum");
  const [showBenefit, setShowBenefit] = useState(false);

  const membershipData: MembershipData = {
    Pria: {
      Umum: [
        { price: "Rp 295.000", duration: "1 Bulan" },
        { price: "Rp 725.000", duration: "3 Bulan", originalPrice: "Rp 900.000", discount: "20%", mostPopular: true },
        { price: "Rp 1.170.000", duration: "6 Bulan", originalPrice: "Rp 1.500.000", discount: "22%", bestValue: true },
        { price: "Rp 1.740.000", duration: "1 Tahun", originalPrice: "Rp 2.400.000", discount: "28%", bestValue: true },
      ],
      Pelajar: [
        { price: "Rp 235.000", duration: "1 Bulan" },
        { price: "Rp 555.000", duration: "3 Bulan", originalPrice: "Rp 700.000", discount: "21%", mostPopular: true },
        { price: "Rp 810.000", duration: "6 Bulan", originalPrice: "Rp 1.020.000", discount: "20%", bestValue: true },
        { price: "Rp 1.020.000", duration: "1 Tahun", originalPrice: "Rp 1.500.000", discount: "32%", bestValue: true },
      ],
    },
    Wanita: {
      Umum: [
        { price: "Rp 245.000", duration: "1 Bulan" },
        { price: "Rp 585.000", duration: "3 Bulan", originalPrice: "Rp 750.000", discount: "22%", mostPopular: true },
        { price: "Rp 870.000", duration: "6 Bulan", originalPrice: "Rp 1.200.000", discount: "27%", bestValue: true },
        { price: "Rp 1.140.000", duration: "1 Tahun", originalPrice: "Rp 1.800.000", discount: "37%", bestValue: true },
      ],
      Pelajar: [
        { price: "Rp 225.000", duration: "1 Bulan" },
        { price: "Rp 525.000", duration: "3 Bulan", originalPrice: "Rp 700.000", discount: "25%", mostPopular: true },
        { price: "Rp 750.000", duration: "6 Bulan", originalPrice: "Rp 1.000.000", discount: "25%", bestValue: true },
        { price: "Rp 950.000", duration: "1 Tahun", originalPrice: "Rp 1.500.000", discount: "36%", bestValue: true },
      ],
    },
    Couple: {
      Umum: [
        { price: "Rp 500.000", duration: "1 Bulan" },
        { price: "Rp 1.200.000", duration: "3 Bulan", originalPrice: "Rp 1.500.000", discount: "20%", mostPopular: true },
        { price: "Rp 1.800.000", duration: "6 Bulan", originalPrice: "Rp 2.400.000", discount: "25%", bestValue: true },
        { price: "Rp 2.400.000", duration: "1 Tahun", originalPrice: "Rp 3.000.000", discount: "33%", bestValue: true },
      ],
    },
  };

  const isCouple = selectedGender === "Couple";

  const handleBenefitToggle = () => {
    setShowBenefit((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-50 to-gray-100">
      <div className="flex-grow max-w-screen-xl mx-auto py-12 px-6">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800">
            <span className="block text-orange-500 stroke-text">Harga</span>
            <span className="block">Membership</span>
            <span className="block text-orange-500 stroke-text">BosstonGym</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Pilih membership yang sesuai dengan kebutuhan Anda.
          </p>
          <p
            onClick={handleBenefitToggle}
            className="text-blue-500 cursor-pointer underline mt-2"
          >
            Lihat Benefit Member
          </p>
        </header>

        {showBenefit && <BenefitMember />}

        <div className="flex justify-center gap-6 mb-6">
          {["Pria", "Wanita", "Couple"].map((gender) => (
            <button
              key={gender}
              onClick={() => setSelectedGender(gender as "Pria" | "Wanita" | "Couple")}
              className={`px-6 py-3 border-2 rounded-lg font-medium ${
                selectedGender === gender
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              {gender}
            </button>
          ))}
        </div>

        {!isCouple && (
          <div className="flex justify-center gap-6 mb-6">
            {["Umum", "Pelajar"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as "Umum" | "Pelajar")}
                className={`px-6 py-3 border-2 rounded-lg font-medium ${
                  selectedType === type
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {membershipData[selectedGender][isCouple ? "Umum" : selectedType].map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 text-center shadow-lg bg-white hover:shadow-xl"
            >
              {item.mostPopular && (
                <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-3 py-1 rounded-br-lg">
                  MOST POPULAR
                </div>
              )}
              {item.bestValue && (
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-3 py-1 rounded-bl-lg">
                  BEST VALUE
                </div>
              )}

              <h3 className="text-xl font-medium">{selectedGender}</h3>
              <p className="text-3xl text-orange-600">{item.price}</p>
              {item.originalPrice && (
                <p className="line-through text-gray-500">{item.originalPrice}</p>
              )}
              {item.discount && (
                <p className="text-red-500">Diskon {item.discount}</p>
              )}
              <p>{item.duration}</p>

              <button
                onClick={onJoinClick}
                className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
              >
                Gabung
              </button>
              {isCouple && <p className="text-sm text-red-500 mt-2">*Wajib pasangan suami istri</p>}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px black;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default MembershipTabs;
