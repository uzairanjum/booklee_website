import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "BOOKLEE AI - AI-Powered Booking Automation",
  description:
    "Never miss a booking again. Your AI receptionist captures every lead, books appointments 24/7, and grows your revenue by 20-30%.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ fontFamily: "Inter, Arial, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
