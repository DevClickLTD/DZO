"use client";

import { useState } from "react";

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
  const [showMoreItems, setShowMoreItems] = useState(false);

  const toggleShowMore = () => {
    setShowMoreItems(!showMoreItems);
  };

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
                За работодателя ДЗО е:{" "}
              </h2>
              <ul className="list-disc list-inside text-white space-y-4">
                <li>
                  <strong>Победа в борбата за таланти: </strong> <br />
                  Когато има грижа за хората, те се грижат за бизнеса.
                </li>
                <li>
                  <strong>Измеримо по-висока производителност: </strong> <br />{" "}
                  Трансформирането на здравните разходи от непредвидими в
                  стратегически актив е възможно, защото една здравна
                  консултация днес спестява седмица болнични утре.
                </li>
                <li>
                  <strong>Финансово решение, което се изплаща само: </strong>{" "}
                  <br /> Групово покритие, индивидуални ползи, оптимизирани
                  разходи
                </li>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    showMoreItems
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <li className="mt-4">
                    <strong>Персонализирани решения за бизнеса: </strong> <br />
                    Здравно покритие, проектирано за конкретните
                    предизвикателства
                  </li>
                  <li className="mt-4">
                    <strong>Грижа, която се забелязва и оценява: </strong>{" "}
                    <br />
                    Здравното осигуряване, което говори повече от всяка
                    корпоративна реч.
                  </li>
                  <li className="mt-4">
                    <strong>Без административни главоболия: </strong> <br />
                    Здравна грижа с нулево административно натоварване за HR-а,
                    защото ДЗО управлява здравното обслужване, докато Вие
                    управлявате бизнеса си.
                  </li>
                  <li className="mt-4">
                    <strong>VIP достъп до елитна медицинска мрежа: </strong>{" "}
                    <br />
                    Осигурете на екипа си медицинско обслужване без компромиси и
                    приоритетен достъп до специалисти, когато всеки час е от
                    значение
                  </li>
                </div>
                <button
                  onClick={toggleShowMore}
                  className="mt-4 px-4 py-2 bg-[#129160] hover:bg-gray-300 hover:text-[#000000] rounded-md cursor-pointer hover:bg-[#0d6b47] transition-colors duration-300"
                >
                  {showMoreItems ? "Скрий" : "Вижте повече"}
                </button>
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
