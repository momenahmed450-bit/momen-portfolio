import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// التعديل هنا لرفع كفاءة الـ SEO الخاص بك
export const metadata = {
  title: 'Momen Ahmed | Junior Full-Stack Web Developer',
  description: 'Professional Portfolio of Momen Ahmed, a Junior Full-Stack Web Developer in Alexandria, Egypt. Specialized in React.js, Next.js, and Laravel 12.',
  keywords: 'Momen Ahmed, Full Stack Developer, Alexandria, Egypt, React, Laravel, Next.js, Web Development',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}