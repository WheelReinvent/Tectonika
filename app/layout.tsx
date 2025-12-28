import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tectonika - Building the Foundation for Modern Development",
  description: "A powerful platform designed to streamline your development workflow",
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
