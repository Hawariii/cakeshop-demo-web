import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SweetCrumb Cake Shop",
  description: "Website cake shop profesional dengan warna pink, white, dan cyan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
