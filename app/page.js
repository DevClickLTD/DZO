import HeroSection from "../components/hero";
import { WebVitals } from "./web-vitals";
import dynamic from "next/dynamic";
import {
  HomePageSchema,
  BreadcrumbSchema,
  FAQSchema,
  FinancialServiceSchema,
} from "../components/StructuredData";

// Динамично зареждане на компоненти с lazy loading
const Incentives = dynamic(() => import("../components/incentives"), {
  ssr: true,
});
const ImportanceCta = dynamic(() => import("../components/importanceCta"), {
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
  keywords: ["допълнително здравно осигуряване"],
  openGraph: {
    title: "Допълнително здравно осигуряване (ДЗО) - За фирми и физически лица",
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
    title: "Допълнително здравно осигуряване (ДЗО) - За фирми и физически лица",
    description:
      "Допълнително здравно осигуряване (ДЗО) - Пакетни оферти за фирми и физически лица от отвърдени застрахователни застрахователни компании. Изпратете ни запитване.",
    images: ["/dobrovolno-zdravno-osiguriavane.jpg"],
  },
};

export default function Home() {
  // Breadcrumb данни за главната страница
  const breadcrumbItems = [{ name: "Начало", url: "https://dzo.bg" }];

  // FAQ данни за главната страница
  const faqData = [
    {
      question: "Какво е допълнително здравно осигуряване (ДЗО)?",
      answer:
        "Допълнителното здравно осигуряване (ДЗО) е вид застраховка, която покрива медицински разходи, които не са включени в задължителното здравно осигуряване. То осигурява достъп до по-качествени медицински услуги и по-бързо лечение.",
    },
    {
      question: "Какви са предимствата на ДЗО за компаниите?",
      answer:
        "ДЗО за компаниите осигурява по-здрави и мотивирани служители, намалява отсъствията по болест, подобрява имиджа на работодателя и може да се използва като данъчна облекчение.",
    },
    {
      question: "Колко струва индивидуална здравна застраховка?",
      answer:
        "Цената на индивидуалната здравна застраховка варира в зависимост от възрастта, здравословното състояние и избрания пакет. Средната цена започва от 50 лв. месечно за основно покритие.",
    },
    {
      question: "Какво покрива медицинската застраховка при пътуване?",
      answer:
        "Медицинската застраховка при пътуване покрива спешни медицински грижи, хоспитализация, лекарства, транспорт до медицинско заведение и реpatриация при необходимост.",
    },
  ];

  return (
    <>
      {/* Структурирани данни специфични за главната страница */}
      <HomePageSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqData} />
      <FinancialServiceSchema />

      <WebVitals />
      <HeroSection />
      <Incentives />
      <ImportanceCta />
      <Clients />
      <CTA />
      {/* <Newsletter /> */}
      <Coverage />
      <Lastestposts />
    </>
  );
}
