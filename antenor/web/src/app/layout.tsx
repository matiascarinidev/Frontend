import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "@/styles/globals.css";

const bodoniSans = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antenor",
  description:
    "Restaurante de campo con parrilla libre en la ciudad de Mercedes, Buenos Aires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${bodoniSans.variable} antialiased w-full`}>
        {children}
      </body>
    </html>
  );
}
