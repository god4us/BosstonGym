"use client";

import Navbarp from "./Navbarp";
import Footerp from "./Footerp";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbarp />
      <main className="flex-grow p-4">{children}</main>
      <Footerp />
    </div>
  );
}
