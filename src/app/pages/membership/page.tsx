"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MembershipTabs from "./MembershipTabs";
import RegisMember from "./RegistrationMembership";

export default function MembershipPage() {
  // State untuk mengontrol apakah kita sedang melihat MembershipTabs atau RegistrationMembership
  const [showRegisMember, setShowRegisMember] = useState(false);

  // Fungsi untuk menampilkan RegisMember
  const handleJoinClick = () => {
    setShowRegisMember(true);
  };

  // Fungsi untuk kembali ke MembershipTabs
  const handleBackToTabs = () => {
    setShowRegisMember(false);
  };

  return (
    <div>
      <Navbar />
      <main>
        {showRegisMember ? (
          <RegisMember onBack={handleBackToTabs} />
        ) : (
          <MembershipTabs onJoinClick={handleJoinClick} />
        )}
      </main>
      <Footer />
    </div>
  );
}
