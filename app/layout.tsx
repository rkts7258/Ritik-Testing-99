import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AUREL | Modern Timepieces',
  description: 'A curated collection of exceptional watches.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
