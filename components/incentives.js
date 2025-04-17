const incentives = [
  {
    name: "Основен пакет",
    imageSrc: "/icons/cta-icon-1.svg",
    description:
      "Базови медицински услуги.​ Подходящ за неосигурени лица в НЗОК",
  },
  {
    name: "Разширен пакет",
    imageSrc: "/icons/cta-icon-2.svg",
    description:
      "Стандартни медицински услуги в разширен вид, вкл. бременност, раждане, изследвания и др.",
  },
  {
    name: "Премиум пакет",
    imageSrc: "/icons/cta-icon-3.svg",
    description:
      "Включва всички услуги от основния и разширения пакет, плюс допълнителни такива, както и по-високи лимити.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
                ДЗО: ползи за работодателите
              </h2>
              <ul className="list-disc list-inside text-white space-y-4">
                <li>
                  <strong>Привличане и задържане на таланти: </strong> <br />
                  Предоставянето на Допълнително здравно осигуряване (ДЗО) е
                  ценен социален бонус, който отличава работодателя на пазара на
                  труда.
                </li>
                <li>
                  <strong>Повишена продуктивност: </strong> <br /> Здравите
                  служители отсъстват по-рядко и работят по-ефективно.
                </li>
                <li>
                  <strong>Данъчни облекчения: </strong> <br /> Разходите за
                  Допълнително здравно осигуряване могат да бъдат признати за
                  разходи на фирмата.
                </li>
              </ul>
            </div>
            <img
              alt="доброволно здравно осигуряване"
              src="/dobrovolno-zdravno-osiguriavane.jpg"
              className="aspect-3/2 w-full rounded-lg bg-gray-100 object-cover"
            />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:shrink-0">
                  <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#129160]">
                    <img
                      alt=""
                      src={incentive.imageSrc}
                      className="h-10 w-10"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-white">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-white">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
