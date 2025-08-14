import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dana Merino | Portafolio",
  description: "Portafolio de Desarrollo de Software y Análisis de Datos",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body className={`flex flex-col min-h-dvh ${geistSans.variable} ${geistSans.variable} antialiased`}>
        <div className="sticky top-0 right-0">
          <Navbar/>
        </div>
        <main className="min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
