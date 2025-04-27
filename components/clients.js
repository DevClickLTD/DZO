import Image from "next/image";

export default function Clients() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Доверени партньори
            </h2>

            <p className="mt-6 text-lg/8 text-gray-600">
              Високо качество и сигурност за Вашето здраве
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Избираме само най-надеждните застрахователни компании в България,
              за да гарантираме пълно спокойствие при нужда от съдействие.
              Нашите партньори се отличават с:
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-[#129160]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">
                  Проверена история и опит в предоставянето на здравни
                  застрахователни услуги
                </span>
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-[#129160]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">
                  Солидна финансова стабилност, гарантираща изплащане на всички
                  претенции
                </span>
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-[#129160]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">
                  Бързо и безпроблемно обслужване при здравословни проблеми
                </span>
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-[#129160]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">
                  Обширна мрежа от медицински центрове и специалисти в цялата
                  страна
                </span>
              </li>
            </ul>
            <p className="mt-6 text-lg/8 text-gray-600">
              Ролята ни като Ваш консултант е да анализираме множество оферти и
              да подберем само тези, които отговарят на Вашите конкретни здравни
              нужди и бюджет. Вместо да се лутате между десетки застрахователи,
              получавате точно подбрано предложение от нашите експерти.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-16 items-center justify-center"
              >
                <Image
                  alt={partner.name}
                  src={partner.logo}
                  width={160}
                  height={60}
                  quality={80}
                  loading="lazy"
                  className="h-15 w-40 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const partners = [
  {
    name: "Allianz",
    logo: "/partners/partner_allianz.svg",
  },
  {
    name: "Bulstrad",
    logo: "/partners/partner_bulstrad.jpeg",
  },
  {
    name: "Euroins",
    logo: "/partners/partner_euroins.svg",
  },
  {
    name: "DZI",
    logo: "/partners/partner_dzi.svg",
  },
  {
    name: "Uniqa",
    logo: "/partners/partner_uniqa.png",
  },
  {
    name: "Generali",
    logo: "/partners/partner_generali.png",
  },
];
