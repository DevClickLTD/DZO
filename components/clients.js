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
              Работим с водещите застрахователни компании в България, за да Ви 
              осигурим най-добрите условия и цени на пазара. Нашите партньори са 
              компании с дългогодишен опит, доказана финансова стабилност и отлично 
              обслужване при настъпване на застрахователно събитие. С нас получавате 
              експертен съвет и персонализирано предложение, съобразено с Вашите 
              нужди и очаквания.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {partners.map((partner) => (
              <div key={partner.name} className="flex h-16 items-center justify-center">
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
