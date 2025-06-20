import type { Metadata } from "next";
import { Geist, Nunito } from "next/font/google";
import "./globals.scss";
import RenderChatBot from "@/components/chatbot/RenderChatBot";
import DiscountPopup from "@/components/discountPopup/DiscountPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Northwind",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, inventore.",
};

const data = {
  contact: {
    href: "tel:+919317207373",
    label: "Call Us",
    bgColor: "#D4B01C",
    textColor: "#fff",
  },
  content: {
    // discount: 10,
    _html: `<p class="content-para">On same day <span class="purple-purse">booking</span></p>`,
    // subTitle: "On same day booking",
    title: "RESERVE TODAY",
    borderColor: "#fff",
  },
  logo: {
    alt: "Luxury Vibe Stay",
    src: "/favicon.ico",
  },
  image: {
    alt: "Luxury Vibe Stay",
    src: "/contact.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${nunito.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <RenderChatBot />
        <DiscountPopup {...data} />
        {children}
      </body>
    </html>
  );
}
