import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { getContactInfo } from "../../services/contacts";
import ContactForm from "../../components/contactForm"; // Вкарваме клиентската форма
import Link from "next/link";
import {
  ContactPageSchema,
  BreadcrumbSchema,
} from "../../components/StructuredData";

export async function generateMetadata() {
  return {
    title: "Контакти - dzo.bg",
    description:
      "Контактна информация за допълнително здравно осигуряване (ДЗО) - Пакетни оферти за фирми и физически лица от отвърдени застрахователни компании. Изпратете ни запитване.",
    openGraph: {
      title: "Контакти - dzo.bg",
      description:
        "Контактна информация за допълнително здравно осигуряване (ДЗО) - Пакетни оферти за фирми и физически лица от отвърдени застрахователни компании. Изпратете ни запитване.",
      images: [
        {
          url: "/zdravno-zastrahovane.webp",
          width: 1200,
          height: 630,
          alt: "Контакти - dzo.bg",
        },
      ],
      locale: "bg_BG",
      type: "website",
    },
  };
}

export default async function ContactPage() {
  const contactInfo = await getContactInfo();

  // Breadcrumb данни за контактната страница
  const breadcrumbItems = [
    { name: "Начало", url: "https://dzo.bg" },
    { name: "Контакти", url: "https://dzo.bg/contact" },
  ];

  return (
    <div className="relative isolate bg-white">
      {/* Структурирани данни за контактната страница */}
      <ContactPageSchema />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="px-6 pt-24 pb-20 sm:pt-24 lg:static lg:px-8 lg:py-24">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Свържете се с нас
            </h2>
            <dl className="mt-10 space-y-4 text-base text-gray-600">
              {contactInfo && (
                <>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <BuildingOffice2Icon className="h-7 w-6 text-gray-400" />
                    </dt>
                    <dd>{contactInfo.address}</dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <PhoneIcon className="h-7 w-6 text-gray-400" />
                    </dt>
                    <dd>
                      <Link
                        href={`tel:${contactInfo.phone_number}`}
                        className="hover:text-gray-900"
                      >
                        {contactInfo.phone_number}
                      </Link>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <EnvelopeIcon className="h-7 w-6 text-gray-400" />
                    </dt>
                    <dd>
                      <Link
                        href={`mailto:${contactInfo.email}`}
                        className="hover:text-gray-900"
                      >
                        {contactInfo.email}
                      </Link>
                    </dd>
                  </div>
                </>
              )}
            </dl>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
