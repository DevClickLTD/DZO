"use client";

import { useState, useRef } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

const URL_FORM =
  "https://dzo.polirane.net/wp-json/contact-form-7/v1/contact-forms/93/feedback";

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [selectedPackages, setSelectedPackages] = useState([]);
  const recaptchaRef = useRef(null);

  const handleCaptchaChange = async (token) => {
    if (!token) {
      setIsVerified(false);
      return;
    }

    try {
      const response = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token })
      });

      const data = await response.json();
      if (data.success) {
        setIsVerified(true);
      } else {
        console.error("reCAPTCHA verification failed:", data.errors);
        setIsVerified(false);
        if (data.errors && data.errors.length > 0) {
          Swal.fire({
            icon: "error",
            title: "Грешка при потвърждаване!",
            text: "Моля, опитайте отново или свържете се с нас, ако проблемът продължава.",
          });
        }
      }
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      setIsVerified(false);
    }
  };

  const handleCaptchaExpired = () => {
    setIsVerified(false);
  };

  const handlePackageChange = (packageName, isChecked) => {
    if (isChecked) {
      setSelectedPackages(prev => [...prev, packageName]);
    } else {
      setSelectedPackages(prev => prev.filter(pkg => pkg !== packageName));
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!isVerified) {
      Swal.fire({
        icon: "error",
        title: "Грешка при изпращане!",
        text: "Моля, потвърдете, че не сте робот.",
      });
      return;
    }

    // Validate that at least one package is selected
    if (selectedPackages.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Грешка при изпращане!",
        text: "Моля, изберете поне един желан пакет.",
      });
      return;
    }
    
    setLoading(true);

    const formData = new FormData();

    const clientName = e.target["client-name"].value;
    const menCount = e.target["men-count"].value;
    const womenCount = e.target["women-count"].value;
    const averageAge = e.target["average-age"].value;
    const companyEik = e.target["company-eik"].value;
    const clientEmail = e.target["client-email"].value;
    const clientPhone = e.target["client-phone"].value;
    const clientMessage = e.target["client-message"].value;
    const packagesText = selectedPackages.join(", ");
    const defaultSubject = "Запитване за допълнително здравно осигуряване";

    formData.append("_wpcf7_unit_tag", "93");
    formData.append("client-name", clientName);
    formData.append("men-count", menCount);
    formData.append("women-count", womenCount);
    formData.append("average-age", averageAge);
    formData.append("company-eik", companyEik);
    formData.append("client-email", clientEmail);
    formData.append("client-phone", clientPhone);
    formData.append("your-subject", defaultSubject);
    formData.append("desired-packages", packagesText);
    formData.append("client-message", clientMessage);
    formData.append("your-name", clientName);
    formData.append("your-email", clientEmail);

    const reqOptions = {
      method: "POST",
      body: formData,
    };

    try {
      const req = await fetch(URL_FORM, reqOptions);
      const response = await req.json();

      if (response.status === "validation_failed") {
        let fieldErrors = {};
        response.invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
      } else if (response.status === "mail_sent") {
        Swal.fire({
          icon: "success",
          title: "Успешно изпратено!",
          text: "Очаквайте отговор скоро : )",
          timer: 4000,
        });
        setErrors({});
        setSelectedPackages([]);
        e.target.reset();
        recaptchaRef.current.reset();
        setIsVerified(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Грешка при изпращане!",
          text: "Моля, опитайте отново по-късно.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Неуспешно изпращане!",
        text: "Проверете връзката с интернет и опитайте отново.",
      });
    }

    setLoading(false);
  }

  const packages = [
    "Болнично лечение",
    "Извънболнично лечение", 
    "Лекарства",
    "Профилактика",
    "Дентално лечение"
  ];

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-10 pointer-events-none">
          <div className="w-12 h-12 border-4 border-gray-400 border-t-[#129160] rounded-full animate-spin"></div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className={`px-6 pt-20 pb-24 sm:pb-24 lg:px-8 lg:py-24 ${
          loading ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Client Name */}
            <div className="sm:col-span-2">
              <label
                htmlFor="client-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Вашето име*
              </label>
              <div className="mt-2.5">
                <input
                  id="client-name"
                  name="client-name"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["client-name"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["client-name"]}
                </p>
              )}
            </div>

            {/* Men Count */}
            <div>
              <label
                htmlFor="men-count"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Брой мъже*
              </label>
              <div className="mt-2.5">
                <input
                  id="men-count"
                  name="men-count"
                  type="number"
                  min="0"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["men-count"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["men-count"]}
                </p>
              )}
            </div>

            {/* Women Count */}
            <div>
              <label
                htmlFor="women-count"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Брой жени*
              </label>
              <div className="mt-2.5">
                <input
                  id="women-count"
                  name="women-count"
                  type="number"
                  min="0"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["women-count"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["women-count"]}
                </p>
              )}
            </div>

            {/* Average Age */}
            <div>
              <label
                htmlFor="average-age"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Средна възраст*
              </label>
              <div className="mt-2.5">
                <input
                  id="average-age"
                  name="average-age"
                  type="number"
                  min="18"
                  max="100"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["average-age"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["average-age"]}
                </p>
              )}
            </div>

            {/* Company EIK */}
            <div>
              <label
                htmlFor="company-eik"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                ЕИК на компанията*
              </label>
              <div className="mt-2.5">
                <input
                  id="company-eik"
                  name="company-eik"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["company-eik"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["company-eik"]}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="client-email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Вашият имейл*
              </label>
              <div className="mt-2.5">
                <input
                  id="client-email"
                  name="client-email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["client-email"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["client-email"]}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="sm:col-span-2">
              <label
                htmlFor="client-phone"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Вашият телефон*
              </label>
              <div className="mt-2.5">
                <input
                  id="client-phone"
                  name="client-phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["client-phone"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["client-phone"]}
                </p>
              )}
            </div>

            {/* Desired Packages */}
            <div className="sm:col-span-2">
              <label className="block text-sm/6 font-semibold text-gray-900 mb-3">
                Желани пакети*
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {packages.map((packageName) => (
                  <div key={packageName} className="flex items-center">
                    <input
                      id={`package-${packageName}`}
                      type="checkbox"
                      value={packageName}
                      onChange={(e) => handlePackageChange(packageName, e.target.checked)}
                      className="h-4 w-4 text-[#129160] focus:ring-[#129160] border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`package-${packageName}`}
                      className="ml-3 text-sm text-gray-900"
                    >
                      {packageName}
                    </label>
                  </div>
                ))}
              </div>
              {errors["desired-packages"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["desired-packages"]}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="client-message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Вашето съобщение
              </label>
              <div className="mt-2.5">
                <textarea
                  id="client-message"
                  name="client-message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["client-message"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["client-message"]}
                </p>
              )}
            </div>

            {/* reCAPTCHA */}
            <div className="sm:col-span-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
                onExpired={handleCaptchaExpired}
              />
            </div>

            {/* Privacy Policy */}
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <input
                  id="privacy-policy"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-[#129160] focus:ring-[#129160] border-gray-300 rounded mt-1"
                />
                <label
                  htmlFor="privacy-policy"
                  className="ml-3 text-sm text-gray-900"
                >
                  Съгласен съм с{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#129160] underline hover:text-gray-700"
                  >
                    Политиката за поверителност
                  </Link>
                  .*
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className={`rounded-md bg-[#129160] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs ${
                isVerified ? "hover:bg-[#0d6b47] cursor-pointer" : ""
              } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                !isVerified ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading || !isVerified}
            >
              Изпращане
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
