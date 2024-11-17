import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sandro Luz Tattoo Shop",
  description: "Pagina oficial de Sandro Luz Tattoo Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
