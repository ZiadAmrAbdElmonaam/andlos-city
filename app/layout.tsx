import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-gray-50 dark:bg-gray-900">
        <header className="bg-slate-800 dark:bg-gray-950 text-white p-4">
          <nav className="max-w-6xl mx-auto">
            <ul className="flex justify-center gap-8">
              <li>
                <a href="/" className="hover:text-gray-300">الرئيسية</a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-300">الخدمات</a>
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
