import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tectonika - See What Moves You Beneath the Surface",
  description: "A personal system for understanding your inner tectonics – the deep processes inside your body and mind that shape how you feel, think and behave.",
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
