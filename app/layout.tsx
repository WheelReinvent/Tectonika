import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tectonika - Building Tomorrow's Digital Infrastructure",
  description: "Tectonika is a revolutionary platform that reimagines how we build and deploy modern applications with robust, scalable infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
