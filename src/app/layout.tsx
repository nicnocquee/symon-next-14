import type { Metadata } from 'next';
import { GeistSans } from 'geist/font';
import './globals.css';

export const metadata: Metadata = {
  title: 'Neosense',
  description: 'Synthetic monitoring by Hyperjump'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="min-h-screen bg-background antialiased">{children}</body>
    </html>
  );
}
