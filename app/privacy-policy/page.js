import { getContactInfo } from "../../services/contacts";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Политика за поверителност - dzo.bg",
    description:
      "Научете повече за нашата политика за поверителност и как обработваме вашите лични данни.",
  };
}

export default async function PrivacyPolicy() {
  const contactInfo = await getContactInfo();

  return (
    <div className="container mx-auto p-6 max-w-5xl bg-white py-12">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">
        Политика за поверителност на dzo.bg
      </h1>
      <p className="mb-4 text-gray-700">
        <em>Последна актуализация: 17.04.2025 г.</em>
      </p>
      <p className="mb-4 text-gray-700">
        В dzo.bg се ангажираме с опазването на личните ви данни и поверителността на информацията, 
        която споделяте с нас. Настоящата Политика за поверителност обяснява какви данни събираме, 
        как ги използваме, как ги съхраняваме и какви са вашите права.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        1. Какви лични данни събираме?
      </h2>
      <p className="text-gray-700">
        Може да събираме следните категории лични данни:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Име и фамилия</li>
        <li>Имейл адрес</li>
        <li>Телефонен номер</li>
        <li>Фирмени данни (за заявки от юридически лица)</li>
        <li>IP адрес</li>
        <li>Данни, събрани чрез бисквитки (cookies)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        2. С каква цел използваме вашите данни?
      </h2>
      <p className="text-gray-700">
        Вашите лични данни се използват за:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Обработка на запитвания и заявки</li>
        <li>Комуникация по телефон или имейл</li>
        <li>Изпращане на информационни бюлетини (само при изрично съгласие)</li>
        <li>Подобряване на функционалността на сайта</li>
        <li>Спазване на законови задължения</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        3. Правно основание за обработка
      </h2>
      <p className="text-gray-700">
        Обработваме личните ви данни въз основа на:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Вашето съгласие</li>
        <li>Изпълнение на договорни задължения</li>
        <li>Законен интерес</li>
        <li>Спазване на законови изисквания</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        4. Съхранение на данни
      </h2>
      <p className="text-gray-700">
        Съхраняваме вашите данни за срок, необходим за изпълнение на целите, за които са събрани, 
        освен ако законът не изисква по-дълъг период.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        5. Споделяне на лични данни
      </h2>
      <p className="text-gray-700">
        Не предоставяме вашите данни на трети лица без ваше съгласие, освен когато това се изисква 
        по закон или е необходимо за изпълнение на услуга.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        6. Вашите права
      </h2>
      <p className="text-gray-700">
        Имате право да:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Получите достъп до личните си данни</li>
        <li>Коригирате неточни или непълни данни</li>
        <li>Изискате изтриване („правото да бъдете забравен")</li>
        <li>Ограничите обработването</li>
        <li>Възразите срещу обработка</li>
        <li>Преносимост на данните</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        7. Бисквитки (Cookies)
      </h2>
      <p className="text-gray-700">
        Сайтът използва бисквитки за подобряване на потребителското изживяване. 
        Имате възможност да управлявате предпочитанията си чрез настройките на браузъра.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        8. Сигурност
      </h2>
      <p className="text-gray-700">
        Прилагаме технически и организационни мерки за защита на вашите лични данни 
        срещу неоторизиран достъп, загуба или злоупотреба.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        9. Контакти
      </h2>
      <p className="text-gray-700">
        Ако имате въпроси относно тази политика или обработката на личните ви данни, моля свържете се с нас:
      </p>
      {contactInfo && (
        <p className="text-gray-700 mt-2">
          <Link
            href={`mailto:${contactInfo.email}`}
            className="hover:text-gray-900"
          >
            <strong>Email:</strong> {contactInfo.email} <br />
          </Link>
          <strong>Адрес:</strong> {contactInfo.address}
        </p>
      )}
    </div>
  );
}
