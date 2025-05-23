import type { Metadata } from "next";
import { Gilda_Display, Barlow } from "next/font/google";
import "./styles/globals.scss";
import "./styles/nav&button.scss";
import { Call, Footer, Navbar } from "@/components";
import Whatsapp from "../components/ContactButton/WhatsApp";
import RenderChatBot from "@/components/chatbot/RenderChatBot";
import Script from "next/script";

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
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${barlow.variable} antialiased`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLQD7HNC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <RenderChatBot />
        <Navbar />
        {children}
        <Call callNumber="918091172065" />
        <Whatsapp whatsAppNumber="8091172065" />

        <Footer />
      </body>
    </html>
  );
}
