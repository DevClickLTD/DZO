import HeroSection from "../components/hero";
import { WebVitals } from "./web-vitals";
import dynamic from "next/dynamic";

// Динамично зареждане на компоненти с lazy loading
const Incentives = dynamic(() => import("../components/incentives"), {
  ssr: true,
});
const CTA = dynamic(() => import("../components/cta"), { ssr: true });
const Clients = dynamic(() => import("../components/clients"), { ssr: true });
const Newsletter = dynamic(() => import("../components/newsletter"), {
  ssr: true,
});
const Coverage = dynamic(() => import("../components/Coverage"), {
  ssr: true,
});
const Lastestposts = dynamic(() => import("../components/latestposts"), {
  ssr: true,
});

// Добавяне на ISR ревалидиране на всеки час
export const revalidate = 3600;

// Добавяне на метаданни за главната страница
export const metadata = {
  title: "Допълнително здравно осигуряване (ДЗО) - За фирми и физически лица",
  description:
    "Допълнително здравно осигуряване (ДЗО) - Пакетни оферти за фирми и физически лица от отвърдени застрахователни застрахователни компании. Изпратете ни запитване.",
  keywords: [
    "допълнително здравно осигуряване",
  ],
  openGraph: {
    title: "Допълнително здравно осигуряване (ДЗО) - За фирми и физически лица",
    description: "Допълнително здравно осигуряване (ДЗО) - Пакетни оферти за фирми и физически лица от отвърдени застрахователни застрахователни компании. Изпратете ни запитване.",
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
    title: "Допълнително здравно осигуряване (ДЗО) - За фирми и физически лица",
    description: "Допълнително здравно осигуряване (ДЗО) - Пакетни оферти за фирми и физически лица от отвърдени застрахователни застрахователни компании. Изпратете ни запитване.",
    images: ["/dobrovolno-zdravno-osiguriavane.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <WebVitals />
      <HeroSection />
      <Incentives />
      <Clients />
      <CTA />
      {/* <Newsletter /> */}
      <Coverage />
      <Lastestposts />
    </>
  );
}
