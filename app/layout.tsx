import type { Metadata } from "next";
import { Barlow, Gilda_Display, Montserrat } from "next/font/google";
import "./globals.css";
import "./style.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Script from "next/script";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import { contact } from "@/utils/constent";
import Call from "@/components/ContactButton/Call";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const gildaDisplay = Gilda_Display({
  variable: "--font-gilda",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Northwind57 Bir Billing | Luxury Glamping Stay in Himachal Pradesh",
  description:
    "Experience luxury glamping in Bir, Himachal Pradesh at Northwind57. Premium dome stays with mountain views, paragliding, trekking, bonfire nights & exclusive offers.",
  alternates: {
    canonical: "https://www.northwind57bir.com/",
  },
  keywords: [
    "Northwind57 Bir",
    "luxury glamping in Bir",
    "Bir Billing glamping",
    "glamping in Himachal Pradesh",
    "luxury camps in Bir",
    "paragliding stay Bir Billing",
  ],
  openGraph: {
    title: "Luxury Glamping in Bir Billing | Northwind57",
    description:
      "Premium dome glamping stays in Bir with mountain views, adventure activities & luxury comfort.",
    type: "website",
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
        <Script
          strategy="afterInteractive"
          id="gtm-script"
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
      <Script id="chatbot-config" strategy="afterInteractive">
        {`
        window.eazbotConfig = {
          ndid: "ae33a698-1945-4713-bf00-df0c9640ac0f",
          hid: "17917506",
        };
      `}
      </Script>
      <Script
        src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
        strategy="afterInteractive"
      />
      <body
        className={`${barlow.variable} ${gildaDisplay.variable} ${montserrat.variable} antialiased`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLQD7HNC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {/* <Navbar /> */}
        {children}
        <Footer />
        <Whatsapp whatsAppNumber={contact.phone[0]} />
        <Call callNumber={contact.phone[0]} />
      </body>
    </html>
  );
}
