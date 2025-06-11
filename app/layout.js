import { headers } from "next/headers";
import Navigation from "../components/nav";
import CookieConsentBanner from "../components/cookieConsentBanner";
import Footer from "../components/footer";
import ImagePreloader from "../components/ImagePreloader";
import { CriticalCSS } from "./critical-css";
import { Analytics } from "@vercel/analytics/next";
import BackToTop from "../components/BackToTop";
import CallButton from "../components/CallButton";
import NextTopLoader from "nextjs-toploader";
import "../styles/globals.css";
import { Roboto } from "next/font/google";
import {
  LocalBusinessSchema,
  WebsiteSchema,
  OrganizationSchema,
} from "../components/StructuredData";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

export async function generateMetadata() {
  const host = (await headers()).get("host"); // Get the current domain
  const protocol = host?.includes("localhost") ? "http" : "https"; // Adjust for local dev

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: "Допълнително здравно осигуряване (ДЗО) - За фирми и физически лица",
    description:
      "Допълнително здравно осигуряване (ДЗО) - Пакетни оферти за фирми и физически лица от отвърдени застрахователни застрахователни компании. Изпратете ни запитване.",
    openGraph: {
      title:
        "Допълнително здравно осигуряване (ДЗО) - За фирми и физически лица",
      description:
        "Допълнително здравно осигуряване (ДЗО) - Пакетни оферти за фирми и физически лица от отвърдени застрахователни застрахователни компании. Изпратете ни запитване.",
      images: [
        {
          url: "/dobrovolno-zdravno-osiguriavane.jpg",
          width: 1200,
          height: 630,
          alt: "Допълнително здравно осигуряване",
        },
      ],
      locale: "bg_BG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Допълнително здравно осигуряване (ДЗО) - За фирми и физически лица",
      description:
        "Допълнително здравно осигуряване (ДЗО) - Пакетни оферти за фирми и физически лица от отвърдени застрахователни застрахователни компании. Изпратете ни запитване.",
      images: ["/dobrovolno-zdravno-osiguriavane.jpg"],
    },
    alternates: {
      canonical: "/",
      languages: {
        bg: "/",
      },
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <head>
        <CriticalCSS />
        {/* Основни структурирани данни за всички страници */}
        <LocalBusinessSchema />
        <WebsiteSchema />
        <OrganizationSchema />

        <link
          rel="preconnect"
          href="https://dzo.polirane.net"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://dzo.polirane.net" />

        {/* Директно използване на preload тагове с правилния синтаксис */}
        <link
          rel="preload"
          as="image"
          href="/hero-image-mobile.jpg"
          type="image/jpg"
          media="(max-width: 640px)"
        />

        <link
          rel="preload"
          as="image"
          href="/hero-image-desktop.jpg"
          type="image/jpg"
          media="(min-width: 641px)"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={roboto.className}>
        <NextTopLoader color="#129160" showSpinner={false} />
        <CallButton />
        <BackToTop />
        <ImagePreloader />
        <Navigation />
        {children}
        <Analytics />
        <CookieConsentBanner />
        <Footer />
      </body>
    </html>
  );
}
