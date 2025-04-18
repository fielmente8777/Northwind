import type { Metadata } from "next";
import { Gilda_Display, Barlow } from "next/font/google";
import "./styles/globals.scss";
import "./styles/nav&button.scss";
import { Call, Footer, Navbar } from "@/components";
import Whatsapp from '../components/ContactButton/WhatsApp';

const geistSans = Gilda_Display({
  variable: "--font-geist-sans",
  weight: ["400"],
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "North Wind 57",
  description: "North Wind 57",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${barlow.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Call callNumber="918091172065" />
        <Whatsapp whatsAppNumber="8091172065"/>
        <Footer />
      </body>
    </html>
  );
}
