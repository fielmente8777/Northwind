import type { Metadata } from "next";
import { Geist, Nunito } from "next/font/google";
import "./globals.scss";
import RenderChatBot from "@/components/chatbot/RenderChatBot";
import DiscountPopup from "@/components/discountPopup/DiscountPopup";
import { Call, Whatsapp } from "@/components";
import Script from "next/script";

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
      <head>
        {/* <!-- Google Tag Manager --> */}
        {/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TLQD7HNC');</script> */}
        <Script
          strategy="afterInteractive"
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TLQD7HNC');`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body
        className={`${geistSans.variable} ${nunito.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLQD7HNC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <RenderChatBot />
        <DiscountPopup {...data} />
        {children}
        <Whatsapp />
        <Call callNumber="tel:+ 918091172065" />
      </body>
    </html>
  );
}
