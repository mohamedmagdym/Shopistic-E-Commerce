import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_componantes/NavBar/Nav";
import { Toaster } from "react-hot-toast";
import MySessionProvider from "@/SessionProvider/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShopSphere",
  description: "ُE-Commerce shop on;ine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-200">
        <MySessionProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              success: {
                style: {
                  background: "#f0fdf4",
                  color: "#166534",
                  border: "1px solid #bbf7d0",
                  fontSize: "13px",
                  fontWeight: "500",
                },
              },
              error: {
                style: {
                  background: "#fff1f2",
                  color: "#9f1239",
                  border: "1px solid #fecdd3",
                  fontSize: "13px",
                  fontWeight: "500",
                },
              },
            }}
          />
          <Navbar />
          {children}
        </MySessionProvider>
      </body>
    </html>
  );
}
