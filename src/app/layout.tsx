import Header from "@/components/header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DuyTran | Personal Portfolio",
  description:
    "DuyTran is a full-stack developer with a passion for building web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-950 
        relative pt-28 sm:pt-36
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-100`}
      >
        <div
          className="bg-[#fbe2e3] dark:bg-[#5a3e43] absolute top-[-6rem] right-[20rem] h-[40rem] w-[40rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#dbd7fb] dark:bg-[#4b3f72] absolute top-[-1rem] left-[-35rem] h-[40rem] w-[40rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}