import Image from "next/image";
import Link from "next/link";
import { getServices } from "../../services/services";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";

// Динамично зареждане на компонента със списъка с услуги
const ServicesList = dynamic(() => import("../../components/ServicesList"), {
  ssr: true,
  loading: () => (
    <div className="animate-pulse h-96 bg-gray-100 rounded-md"></div>
  ),
});

// Добавяне на ISR ревалидиране на всеки час
export const revalidate = 3600;

export const metadata = {
  title: "Нашите услуги - dzo.bg",
  description:
    "Предлагаме широка гама от услуги, които осигуряват достъп до качествени медицински грижи, намаляват финансовата тежест и повишават удовлетвореността на служителите.",
  keywords: ["ДЗО", "здравно осигуряване", "медицинска застраховка", "здравна застраховка", "здравеопазване"],
  openGraph: {
    title: "Нашите услуги | dzo.bg",
    description: "Здравето и благосъстоянието на екипа са от ключово значение за успеха на всяка компания.",
    images: [
      {
        url: "/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "dzo.bg Services",
      },
    ],
  },
};

export default async function Services() {
  try {
    const services = await getServices();

    // Подготвяме структурирани данни за Schema.org
    const servicesSchemaData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Медицинска застраховка при пътуване в чужбина",
            url: "https://dzo.bg/services/travel-insurance",
            description: "Спокойствие и сигурност навсякъде по света.",
          }
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Медицинска застраховка за чужденци в България",
            url: "https://dzo.bg/services/foreigner-insurance",
            description: "Защита и достъп до качествено здравеопазване по време на престой в страната.",
          }
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "Индивидуална здравна застраховка",
            url: "https://dzo.bg/services/individual-insurance",
            description: "Персонализирана грижа, съобразена с вашето здравословно състояние и начин на живот.",
          }
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            name: "Фирмена здравна застраховка",
            url: "https://dzo.bg/services/corporate-insurance",
            description: "Стратегическо предимство за работодателите, които искат да задържат и мотивират своите служители.",
          }
        }
      ]
    };

    return (
      <>
        <Script
          id="services-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchemaData),
          }}
        />
        <div className="bg-white">
          <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 text-center shadow-2xl sm:px-12">
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                Нашите услуги
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
                Здравето и благосъстоянието на екипа са от ключово значение за успеха на всяка компания.
              </p>

              <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute -top-50 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              >
                <circle
                  r={512}
                  cx={512}
                  cy={512}
                  fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stopColor="#129160" />
                    <stop offset={1} stopColor="#129160" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Предлагаме широка гама от услуги, които осигуряват достъп до качествени медицински грижи, 
                намаляват финансовата тежест и повишават удовлетвореността на служителите.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Нашите услуги включват:</h2>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Персонализирани планове за ДЗО</li>
                <li>Широк спектър от покрити медицински услуги</li>
                <li>Достъп до партньорска мрежа от лечебни заведения</li>
                <li>Онлайн управление на полици и искове</li>
                <li>Консултации и поддръжка от експерти</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Основни направления:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <span className="text-emerald-600 mr-2">🔹</span>
                    Медицинска застраховка при пътуване в чужбина
                  </h3>
                  <p className="text-gray-700">
                    За спокойствие и сигурност навсякъде по света.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <span className="text-emerald-600 mr-2">🔹</span>
                    Медицинска застраховка за чужденци в България
                  </h3>
                  <p className="text-gray-700">
                    Защита и достъп до качествено здравеопазване по време на престой в страната.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <span className="text-emerald-600 mr-2">🔹</span>
                    Индивидуална здравна застраховка
                  </h3>
                  <p className="text-gray-700">
                    Персонализирана грижа, съобразена с вашето здравословно състояние и начин на живот.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <span className="text-emerald-600 mr-2">🔹</span>
                    Фирмена здравна застраховка
                  </h3>
                  <p className="text-gray-700">
                    Стратегическо предимство за работодателите, които искат да задържат и мотивират своите служители.
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                Нашите услуги са <strong>гъвкави</strong> – избирате само това, от което се нуждаете. 
                Работим с <strong>широка мрежа от клиники и специалисти</strong>, гарантирайки качествено обслужване.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Защо да изберете нас?</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-2">✔</span> 
                  <span><strong>Персонализирани решения</strong> за всяка компания</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-2">✔</span> 
                  <span><strong>Прозрачност</strong> – ясни условия без скрити такси</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-2">✔</span> 
                  <span><strong>Цифрови инструменти</strong> – лесно управление онлайн</span>
                </li>
              </ul>

              <div className="bg-emerald-50 p-6 rounded-lg shadow-sm border border-emerald-100 text-center mb-8">
                <h3 className="text-xl font-bold text-emerald-800 mb-2">
                  Осигурете на служителите си спокойствие и сигурност!
                </h3>
                <Link href="/contact" className="inline-block mt-4 px-6 py-3 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors">
                  Свържете се с нас
                </Link>
              </div>
            </div>

            {services && services.length > 0 ? (
              <Suspense
                fallback={
                  <div className="animate-pulse h-96 bg-gray-100 rounded-md"></div>
                }
              >
                <ServicesList services={services} />
              </Suspense>
            ) : null}
          </div>
        </div>
      </>
    );
  } catch (error) {
    return (
      <p className="text-gray-600 text-center mt-10">
        Неуспешно зареждане на услугите!
      </p>
    );
  }
}
