"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MembershipTabs from "./MembershipTabs";
import StepOne from "./registration/StepOne";
import StepTwo from "./registration/StepTwo";
import StepThree from "./registration/StepThree";
import StepFour from "./registration/StepFour";
import StepFive from "./registration/StepFive";
import Stepper from "./registration/Stepper";

export default function MembershipPage() {
  const [step, setStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    email: "",
    isStudent: false,
    whatsapp: "",
    membershipType: "",
    duration: "",
    price: 0, //  Harga default 0, akan diperbarui di StepTwo
    paymentMethod: "",
    total: 0, //  Tambahkan total harga agar bisa diteruskan ke StepFour dan StepFive
  });

  const handleNextStep = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handleNextPayment = (method: string) => {
    setPaymentMethod(method);
    setStep(4);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleStartRegistration = () => {
    setStep(1);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center w-full flex-grow">
        {step === 0 && <MembershipTabs onJoinClick={handleStartRegistration} />}

        {step > 0 && (
          <div className="w-full flex justify-center mt-10">
            <div className="w-full max-w-md">
              <Stepper step={step} />
            </div>
          </div>
        )}

        <div className="w-full max-w-md mt-10">
          {step === 1 && <StepOne onNext={handleNextStep} step={1} />}
          {step === 2 && <StepTwo data={formData} onNext={handleNextStep} onBack={handlePrevStep} step={2} />}
          {step === 3 && <StepThree data={formData} onBack={handlePrevStep} onNext={handleNextPayment} step={3} />}
          {step === 4 && (
            <StepFour
              paymentMethod={paymentMethod} //  Pastikan metode pembayaran diteruskan
              total={formData.total} //  Kirim total harga ke StepFour
              onBack={handlePrevStep}
              onNext={() => setStep(5)}
              step={4}
            />
          )}
          {step === 5 && <StepFive data={formData} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
