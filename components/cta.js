"use client";

import Link from "next/link";
import { useState } from "react";

export default function CTA() {
  const [showMoreItems, setShowMoreItems] = useState(false);

  const toggleShowMore = () => {
    setShowMoreItems(!showMoreItems);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:px-16">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            ДЗО ползи за служителя
          </h2>
          <ul className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300 text-left list-disc list-inside space-y-3">
            <li>
              <strong>Безплатни профилактични прегледи:</strong> <br /> Годишни
              профилактични прегледи при специалисти без доплащане – превенция
              на здравето без разходи от джоба ви.
            </li>
            <li>
              <strong>Специализирани прегледи без направление:</strong> <br />{" "}
              Директен достъп до специалисти без чакане за талони и направления
              от личен лекар.
            </li>
            <li>
              <strong>Покритие на лабораторни изследвания:</strong> <br />{" "}
              Кръвни изследвания, образна диагностика (рентген, ехографии,
              скенер, ЯМР) и други изследвания – напълно или частично покрити.
              решение за малки оплаквания.
            </li>
            <li>
              <strong>Спешна медицинска помощ:</strong> <br /> Бърз достъп до
              спешна медицинска помощ, включително линейка и спешни прегледи,
              когато са необходими.
            </li>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showMoreItems
                  ? "max-h-[2000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="mt-3">
                <strong>Болнично лечение и операции:</strong> <br /> Покритие на
                разходи за болничен престой, операции и лечение в одобрени
                болнични заведения.
              </li>
              <li className="mt-3">
                <strong>Възстановяване на разходи за лекарства:</strong> <br />{" "}
                Частично или пълно възстановяване на средства за предписани
                медикаменти според полицата.
              </li>
              <li className="mt-3">
                <strong>Дентална грижа:</strong> <br /> В зависимост от пакета –
                покритие за прегледи, почистване на зъбен камък, пломби и други
                стоматологични услуги.
              </li>
              <li className="mt-3">
                <strong>Разширена мрежа от лечебни заведения:</strong> <br />{" "}
                Достъп до широка мрежа от частни и държавни болници, клиники и
                медицински центрове с преференциални условия.
              </li>
              <li className="mt-3">
                <strong>Онлайн консултации:</strong> <br /> Видео консултации с
                лекари без необходимост от физическо посещение в клиниката.
              </li>
              <li className="mt-3">
                <strong>Физиотерапия и рехабилитация:</strong> <br /> Покритие
                за физиотерапевтични процедури и рехабилитационни програми след
                травми или операции.
              </li>
              <li className="mt-3">
                <strong>Психологическа подкрепа:</strong> <br /> Консултации с
                психолози и психотерапевти за поддържане на психичното здраве.
              </li>
              <li className="mt-3">
                <strong>
                  Възможност за включване на членове на семейството:
                </strong>{" "}
                <br /> Разширяване на покритието към съпруг/а и деца при
                преференциални условия.
              </li>
              <li className="mt-3">
                <strong>Здравословни програми и превенция:</strong> <br />{" "}
                Участие в програми за здравословен начин на живот, отказване от
                тютюнопушене, контрол на теглото и др.
              </li>
              <li className="mt-3">
                <strong>Мобилно приложение за управление:</strong> <br />{" "}
                Мобилно приложение за бързо записване на час при лекар.
                Дигитална карта – няма нужда от хартиени документи. Лесно
                подаване на претенции.
              </li>
              <li className="mt-3">
                <strong>Финансова помощ – по-малко пари за лечение:</strong>{" "}
                <br /> Намалявате личните си разходи за здраве – DZO покрива
                част от или цялата стойност на услугите. Няма скрити такси –
                знаете какво е покрито още в началото.
              </li>
            </div>
            <button
              onClick={toggleShowMore}
              className="mt-4 px-4 py-2 bg-[#129160] hover:bg-gray-300 hover:text-[#000000] rounded-md cursor-pointer transition-colors duration-300"
            >
              {showMoreItems ? "Скрий" : "Вижте повече"}
            </button>
          </ul>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/services"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Всички услуги
            </Link>
            <Link href="/contact" className="text-sm/6 font-semibold text-white">
              Контакти <span aria-hidden="true">→</span>
            </Link>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-0 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
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
  );
}
