import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit as the primary font
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aula Virtual AESIA",
  description: "Curso de formación sobre las Guías AESIA para la Regulación y Uso de la IA",
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { LanguageProvider } from "@/components/LanguageProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased min-h-screen bg-slate-950 text-slate-100`}
      >
        <LanguageProvider>
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 via-slate-950 to-slate-950 pointer-events-none -z-10" />
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
