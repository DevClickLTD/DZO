"use client";

import { useState, useRef } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

const URL_FORM =
  "https://dzo.polirane.net/wp-json/contact-form-7/v1/contact-forms/93/feedback";

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
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
    
    setLoading(true);

    const formData = new FormData();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const phoneNumber = e.target["phone-number"].value;
    const message = e.target.message.value;

    formData.append("_wpcf7_unit_tag", "93");
    formData.append("your-name", name);
    formData.append("your-email", email);
    formData.append("your-subject", subject);
    formData.append("your-tel", phoneNumber);
    formData.append("your-message", message);

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
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Име*
              </label>
              <div className="mt-2.5">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["your-name"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["your-name"]}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Имейл*
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["your-email"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["your-email"]}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Телефон*
              </label>
              <div className="mt-2.5">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["your-tel"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["your-tel"]}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Тема*
              </label>
              <div className="mt-2.5">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["your-subject"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["your-subject"]}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Съобщение
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
                onExpired={handleCaptchaExpired}
              />
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className={`rounded-md bg-[#129160] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs ${
                isVerified ? "hover:bg-gray-300 cursor-pointer" : ""
              } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                !isVerified ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading || !isVerified}
            >
              Изпрати запитване
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
