export default function Example() {
  return (
    <div className="relative bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block"
      />
      <div className="w-full bg-[#129160] lg:bg-transparent">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-24">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
            />
            <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
              <img
                alt=""
                src="https://dzo.polirane.net/wp-content/uploads/2025/04/dzo-cta-image.jpg"
                className="relative aspect-10/6 w-full rounded-3xl object-cover shadow-2xl sm:aspect-2/1 lg:aspect-square"
              />
            </div>
          </div>

          <div className="relative bg-[#ffffff] lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
            >
              <svg
                fill="none"
                width={404}
                height={184}
                viewBox="0 0 404 184"
                aria-hidden="true"
                className="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:top-0 xl:bottom-auto xl:translate-y-0"
              >
                <defs>
                  <pattern
                    x={0}
                    y={0}
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      fill="currentColor"
                      width={4}
                      height={4}
                      className="text-[#0D7A4F]"
                    />
                  </pattern>
                </defs>
                <rect
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  width={404}
                  height={384}
                />
              </svg>
              <svg
                fill="none"
                width={404}
                height={384}
                viewBox="0 0 404 384"
                aria-hidden="true"
                className="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2"
              >
                <defs>
                  <pattern
                    x={0}
                    y={0}
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      fill="currentColor"
                      width={4}
                      height={4}
                      className="text-[#0D7A4F]"
                    />
                  </pattern>
                </defs>
                <rect
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  width={404}
                  height={384}
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md space-y-6 px-6 py-16 sm:max-w-3xl sm:py-24 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
              <h2
                id="join-heading"
                className="text-3xl font-bold tracking-tight text-black"
              >
                Превърнете здравето на служителите в конкурентно предимство
              </h2>
              <p className="text-lg text-black">
                Поискайте оферта сега и инвестирайте в здравето на екипа, за да
                печелите в бизнеса!
              </p>
              <p className="text-lg text-black">
                Защо това е важно сега? Здравните придобивки са сред топ 3
                фактора при избора на работодател. Инвестирайте в най-важния
                ресурс - хората! Допълнителното здравно осигуряване премахва
                финансовия и административен стрес около здравето на
                служителите, като осигурява бърз достъп до качествена медицина,
                по‑нисък обем болнични дни и по‑висока лоялност – всичко това в
                рамките на ясен, оптимизиран бюджет.
              </p>
              <a
                href="#"
                className="block rounded-md border border-transparent bg-[#129160] hover:bg-gray-300 hover:text-[#000000] px-5 py-3 text-center text-white text-base font-medium shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
              >
                Запишете се за консултация
              </a>
              <p className="text-lg text-black">
                и разберете как ДЗО може да трансформира социалния пакет в
                компанията!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
