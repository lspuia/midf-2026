import type { Metadata } from "next";
import { Archivo, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bodoni",
});

export const metadata: Metadata = {
  title: {
    default: "MIDF - Mizoram Interior Designers Forum",
    template: "%s | MIDF",
  },
  description: "Mizoram chhunga Interior Designer te insuihkhawmna pawl — mumal zawka designing hna thawh a, mi tinte chhawrtu tha tak siam chhuah nan.",
  keywords: ["interior design", "Mizoram", "MIDF", "interior designers", "Aizawl", "home design", "interior decoration", "Mizoram designers"],
  authors: [{ name: "Mizoram Interior Designers Forum" }],
  creator: "MIDF",
  publisher: "Mizoram Interior Designers Forum",
  metadataBase: new URL("https://midf.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://midf.vercel.app",
    siteName: "MIDF - Mizoram Interior Designers Forum",
    title: "MIDF - Mizoram Interior Designers Forum",
    description: "Mizoram chhunga Interior Designer te insuihkhawmna pawl — mumal zawka designing hna thawh a, mi tinte chhawrtu tha tak siam chhuah nan.",
    images: [
      {
        url: "/assets/New-LOGO.png",
        width: 200,
        height: 95,
        alt: "MIDF Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIDF - Mizoram Interior Designers Forum",
    description: "Mizoram chhunga Interior Designer te insuihkhawmna pawl — mumal zawka designing hna thawh a, mi tinte chhawrtu tha tak siam chhuah nan.",
    images: ["/assets/New-LOGO.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mizoram Interior Designers Forum",
  alternateName: "MIDF",
  url: "https://midf.vercel.app",
  logo: "https://midf.vercel.app/assets/New-LOGO.png",
  description: "Mizoram chhunga Interior Designer te insuihkhawmna pawl — mumal zawka designing hna thawh a, mi tinte chhawrtu tha tak siam chhuah nan.",
  foundingDate: "2022",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aizawl",
    addressRegion: "Mizoram",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "midf.mizoram@gmail.com",
    telephone: "+91-87943-15532",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mzn" className={`${archivo.variable} ${bodoniModa.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
