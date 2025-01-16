// src/app/layout.tsx

import '../../styles/globals.css';  // Update jalur ke folder styles
import { ReactNode } from 'react';

export const metadata = {
  title: 'BosstonGym',
  description: 'Temukan kekuatan Anda di BosstonGym',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
