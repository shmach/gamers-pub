import "./globals.css";
import { HeaderMenu } from "@/components/HeaderMenu";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "@/components/Sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamers Pub",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <main className="w-screen h-screen">
          <HeaderMenu />
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
