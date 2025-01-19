import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";
import { Amiri } from 'next/font/google';

const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "موقع الأندلس",
  description: "موقع خدمات مدينة الأندلس",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="light">
      <body className={amiri.className}>
        <header className="bg-slate-800 dark:bg-gray-950 text-white p-4">
          <nav className="max-w-6xl mx-auto">
            <ul className="flex justify-center gap-8">
              <li>
                <Link href="/" className="hover:text-gray-300">الرئيسية</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">الخدمات</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="bg-slate-800 dark:bg-gray-950 text-white p-4 text-center">
          <p>جميع الحقوق محفوظة © 2024 - موقع الأندلس</p>
        </footer>
      </body>
    </html>
  );
}
