import Script from "next/script";

// Основни структурирани данни за LocalBusiness
export function LocalBusinessSchema() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.dzo.bg/#organization",
    name: "ДЗО.БГ - Допълнително здравно осигуряване",
    alternateName: "dzo.bg",
    url: "https://www.dzo.bg",
    logo: "https://www.dzo.bg/logo.png",
    image: "https://www.dzo.bg/dobrovolno-zdravno-osiguriavane.jpg",
    description:
      "Водещ доставчик на допълнително здравно осигуряване в България. Предлагаме пакетни оферти за фирми и физически лица от отвърдени застрахователни компании.",
    telephone: "+359876995177",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. 'Майор Юрий Гагарин' 30",
      addressLocality: "София",
      postalCode: "1000",
      addressCountry: "BG",
      addressRegion: "София-град",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+359876995177",
      contactType: "customer service",
      email: "hello@insurance.bg",
      availableLanguage: "Bulgarian",
      areaServed: "BG",
    },
    priceRange: "$$",
    currenciesAccepted: "BGN",
    paymentAccepted: "Bank Transfer",
    openingHours: "Mo-Fr 09:00-18:00",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "42.672554",
      longitude: "23.360223",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Мария Петрова",
        },
        reviewBody:
          "Отлично обслужване и добри цени на полиците за ДЗО. Препоръчвам!",
        datePublished: "2024-01-15",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги за допълнително здравно осигуряване",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Индивидуална здравна застраховка",
          description: "Персонализирана грижа за физически лица",
        },
        {
          "@type": "Offer",
          name: "Фирмена здравна застраховка",
          description: "Корпоративни решения за компании",
        },
      ],
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData),
      }}
    />
  );
}

// Схема за Website
export function WebsiteSchema() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.dzo.bg/#website",
    url: "https://www.dzo.bg",
    name: "ДЗО.БГ - Допълнително здравно осигуряване",
    description: "Пълни решения за допълнително здравно осигуряване в България",
    publisher: {
      "@id": "https://www.dzo.bg/#organization",
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.dzo.bg/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    ],
    inLanguage: "bg",
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteData),
      }}
    />
  );
}

// Схема за Organization
export function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": "https://www.dzo.bg/#organization",
    legalName: "ДЗО",
    alternateName: "dzo.bg",
    url: "https://www.dzo.bg",
    logo: {
      "@type": "ImageObject",
      url: "https://www.dzo.bg/logo.png",
      width: "300",
      height: "100",
    },
    image: "https://www.dzo.bg/dobrovolno-zdravno-osiguriavane.jpg",
    description:
      "Водеща компания за допълнително здравно осигуряване в България, предлагаща разнообразни застрахователни продукти и услуги.",
    telephone: "+359876995177",
    foundingDate: "2025-01-01",
    founders: [
      {
        "@type": "Person",
        name: "Момчил Фотев",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "20",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. 'Майор Юрий Гагарин' 30",
      addressLocality: "София",
      postalCode: "1000",
      addressCountry: "BG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+359876995177",
        contactType: "customer service",
        email: "info@example-dzo.bg",
        availableLanguage: "Bulgarian",
      },
      {
        "@type": "ContactPoint",
        telephone: "+359-888-123-457",
        contactType: "sales",
        email: "sales@example-dzo.bg",
        availableLanguage: "Bulgarian",
      },
    ],
    sameAs: [
      "https://www.facebook.com/example-dzo",
      "https://www.linkedin.com/company/example-dzo",
      "https://twitter.com/example_dzo",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Лицензия за застрахователен брокер",
      recognizedBy: {
        "@type": "Organization",
        name: "Комисия за финансов надзор",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "България",
    },
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "България",
    },
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  );
}

// Схема за Breadcrumb
export function BreadcrumbSchema({ items }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData),
      }}
    />
  );
}

// Схема за Services/Услуги
export function ServicesSchema() {
  const servicesData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.dzo.bg/services#services",
    name: "Услуги за допълнително здравно осигуряване",
    description:
      "Пълна гама услуги за здравно осигуряване за физически лица и компании",
    numberOfItems: "4",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          "@id": "https://www.dzo.bg/services/individual-insurance",
          name: "Индивидуална здравна застраховка",
          serviceType: "Здравна застраховка",
          description:
            "Персонализирана грижа, съобразена с вашето здравословно състояние и начин на живот.",
          provider: {
            "@id": "https://www.dzo.bg/#organization",
          },
          areaServed: "България",
          offers: {
            "@type": "Offer",
            price: "50",
            priceCurrency: "BGN",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "50",
              priceCurrency: "BGN",
              valueAddedTaxIncluded: true,
            },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          "@id": "https://www.dzo.bg/services/corporate-insurance",
          name: "Фирмена здравна застраховка",
          serviceType: "Корпоративна здравна застраховка",
          description:
            "Стратегическо предимство за работодателите, които искат да задържат и мотивират своите служители.",
          provider: {
            "@id": "https://www.dzo.bg/#organization",
          },
          areaServed: "България",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          "@id": "https://www.dzo.bg/services/travel-insurance",
          name: "Медицинска застраховка при пътуване в чужбина",
          serviceType: "Туристическа застраховка",
          description: "Спокойствие и сигурност навсякъде по света.",
          provider: {
            "@id": "https://www.dzo.bg/#organization",
          },
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          "@id": "https://www.dzo.bg/services/foreigner-insurance",
          name: "Медицинска застраховка за чужденци в България",
          serviceType: "Здравна застраховка за чужденци",
          description:
            "Защита и достъп до качествено здравеопазване по време на престой в страната.",
          provider: {
            "@id": "https://www.dzo.bg/#organization",
          },
          areaServed: "България",
        },
      },
    ],
  };

  return (
    <Script
      id="services-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(servicesData),
      }}
    />
  );
}

// Схема за Blog
export function BlogSchema() {
  const blogData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.dzo.bg/blog#blog",
    name: "Блог за допълнително здравно осигуряване",
    description:
      "Актуални статии, съвети и новини за здравното осигуряване в България",
    url: "https://www.dzo.bg/blog",
    publisher: {
      "@id": "https://www.dzo.bg/#organization",
    },
    inLanguage: "bg",
    about: [
      {
        "@type": "Thing",
        name: "Допълнително здравно осигуряване",
      },
      {
        "@type": "Thing",
        name: "Здравна застраховка",
      },
      {
        "@type": "Thing",
        name: "Медицинско осигуряване",
      },
    ],
  };

  return (
    <Script
      id="blog-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(blogData),
      }}
    />
  );
}

// Схема за Article/BlogPosting
export function ArticleSchema({ article }) {
  // Функция за форматиране на дата с часова зона
  const formatDateWithTimezone = (dateString) => {
    if (!dateString) return "2024-01-01T00:00:00+02:00";

    try {
      const date = new Date(dateString);
      // Ако датата вече има часова зона, използваме я
      if (dateString.includes("+") || dateString.includes("Z")) {
        return dateString;
      }
      // Иначе добавяме българската часова зона (+02:00)
      const bulgTime = new Date(date.getTime() + 2 * 60 * 60 * 1000);
      return bulgTime.toISOString().replace("Z", "+02:00");
    } catch (error) {
      return "2024-01-01T00:00:00+02:00";
    }
  };

  const articleData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://www.dzo.bg/blog/${article.slug}#article`,
    headline: article.title || "Lorem Ipsum заглавие на статия",
    description:
      article.description ||
      "Lorem ipsum описание на статията за допълнително здравно осигуряване и свързаните теми.",
    image: article.image || "https://www.dzo.bg/placeholder.webp",
    datePublished: formatDateWithTimezone(article.datePublished),
    dateModified: formatDateWithTimezone(article.dateModified),
    author: {
      "@type": "Person",
      name: article.author || "Lorem Ipsum Автор",
      url: "https://www.dzo.bg/author/lorem-ipsum",
    },
    publisher: {
      "@id": "https://www.dzo.bg/#organization",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.dzo.bg/blog/${article.slug}`,
    },
    articleSection: "Здравно осигуряване",
    keywords:
      article.keywords ||
      "допълнително здравно осигуряване, ДЗО, здравна застраховка",
    wordCount: article.wordCount || "1500",
    inLanguage: "bg",
    about: [
      {
        "@type": "Thing",
        name: "Допълнително здравно осигуряване",
      },
    ],
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleData),
      }}
    />
  );
}

// Схема за ContactPage
export function ContactPageSchema() {
  const contactData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.dzo.bg/contact#contact",
    name: "Контакти - ДЗО.БГ",
    description:
      "Свържете се с нас за консултация по допълнително здравно осигуряване",
    url: "https://www.dzo.bg/contact",
    mainEntity: {
      "@id": "https://www.dzo.bg/#organization",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Начало",
          item: "https://www.dzo.bg",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Контакти",
          item: "https://www.dzo.bg/contact",
        },
      ],
    },
  };

  return (
    <Script
      id="contact-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(contactData),
      }}
    />
  );
}

// Схема за FAQ
export function FAQSchema({ faqs }) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData),
      }}
    />
  );
}

// Схема за Product (Service като продукт)
export function ProductSchema({ service }) {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://www.dzo.bg/services/${service.slug}#product`,
    name: service.name || "Lorem ipsum услуга",
    description:
      service.description ||
      "Lorem ipsum описание на услугата за допълнително здравно осигуряване.",
    image: service.image || "https://www.dzo.bg/placeholder.webp",
    brand: {
      "@type": "Brand",
      name: "ДЗО.БГ",
    },
    manufacturer: {
      "@id": "https://www.dzo.bg/#organization",
    },
    category: "Здравно осигуряване",
    offers: {
      "@type": "Offer",
      priceCurrency: "BGN",
      price: parseFloat(service.price) || 100.0,
      priceValidUntil: "2024-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": "https://www.dzo.bg/#organization",
      },
      areaServed: "България",
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "BG",
        },
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "BGN",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: "1",
            maxValue: "2",
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: "1",
            maxValue: "2",
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "BG",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: "14",
        returnFees: "https://schema.org/FreeReturn",
        returnMethod: "https://schema.org/ReturnByMail",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "89",
    },
  };

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productData),
      }}
    />
  );
}

// Схема за HomePage
export function HomePageSchema() {
  const homePageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.dzo.bg/#webpage",
    url: "https://www.dzo.bg",
    name: "Допълнително здравно осигуряване (ДЗО) - За фирми и физически лица",
    description:
      "Водеща компания за допълнително здравно осигуряване в България. Пакетни оферти за фирми и физически лица от отвърдени застрахователни компании.",
    isPartOf: {
      "@id": "https://www.dzo.bg/#website",
    },
    about: {
      "@id": "https://www.dzo.bg/#organization",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.dzo.bg/dobrovolno-zdravno-osiguriavane.jpg",
    },
    datePublished: "2020-01-01T00:00:00+02:00",
    dateModified: "2024-01-01T00:00:00+02:00",
    inLanguage: "bg",
    mainEntity: {
      "@id": "https://www.dzo.bg/#organization",
    },
  };

  return (
    <Script
      id="homepage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(homePageData),
      }}
    />
  );
}

// Схема за Review/Testimonial
export function ReviewSchema({ reviews }) {
  const reviewData = reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `https://www.dzo.bg/reviews/${review.id}#review`,
    itemReviewed: {
      "@id": "https://www.dzo.bg/#organization",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating || "5",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: review.author || "Lorem Ipsum Клиент",
    },
    reviewBody:
      review.text ||
      "Lorem ipsum отзив за отличното обслужване и професионализма на екипа за ДЗО.",
    datePublished: review.date || "2024-01-01T00:00:00+02:00",
  }));

  return (
    <Script
      id="reviews-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(reviewData),
      }}
    />
  );
}

// Схема за HowTo (инструкции)
export function HowToSchema({ howTo }) {
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name || "Как да подадете заявка за ДЗО",
    description:
      howTo.description ||
      "Стъпка по стъпка инструкции за подаване на заявка за допълнително здравно осигуряване",
    image: howTo.image || "https://www.dzo.bg/placeholder.webp",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "BGN",
      value: howTo.cost || "0",
    },
    totalTime: howTo.totalTime || "PT15M",
    step: howTo.steps?.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image || "https://www.dzo.bg/placeholder.webp",
    })) || [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Попълнете формата",
        text: "Въведете вашите данни в онлайн формата за заявка",
        image: "https://www.dzo.bg/step1.webp",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Получете оферти",
        text: "Ще получите персонализирани оферти от различни застрахователи",
        image: "https://www.dzo.bg/step2.webp",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Изберете полица",
        text: "Сравнете офертите и изберете най-подходящата за вас",
        image: "https://www.dzo.bg/step3.webp",
      },
    ],
  };

  return (
    <Script
      id="howto-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(howToData),
      }}
    />
  );
}

// Схема за VideoObject
export function VideoSchema({ video }) {
  const videoData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name || "Lorem ipsum видео за ДЗО",
    description:
      video.description ||
      "Lorem ipsum описание на видеото за допълнително здравно осигуряване",
    thumbnailUrl: video.thumbnail || "https://www.dzo.bg/video-thumbnail.jpg",
    uploadDate: video.uploadDate || "2024-01-01T00:00:00+02:00",
    duration: video.duration || "PT5M30S",
    contentUrl: video.url || "https://example.com/video.mp4",
    embedUrl: video.embedUrl || "https://example.com/embed/video",
    publisher: {
      "@id": "https://www.dzo.bg/#organization",
    },
    potentialAction: {
      "@type": "SeekToAction",
      target: "https://example.com/video?t={seek_to_second_number}",
      "startOffset-input": "required name=seek_to_second_number",
    },
  };

  return (
    <Script
      id="video-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(videoData),
      }}
    />
  );
}

// Схема за Event
export function EventSchema({ event }) {
  const eventData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name || "Lorem ipsum събитие за ДЗО",
    startDate: event.startDate || "2024-06-01T10:00:00+02:00",
    endDate: event.endDate || "2024-06-01T12:00:00+02:00",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: "https://www.dzo.bg/webinar",
    },
    image: event.image || "https://www.dzo.bg/event-image.jpg",
    description:
      event.description ||
      "Lorem ipsum описание на събитието за допълнително здравно осигуряване",
    offers: {
      "@type": "Offer",
      url: "https://www.dzo.bg/register",
      price: "0",
      priceCurrency: "BGN",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01T00:00:00+02:00",
    },
    performer: {
      "@type": "Organization",
      name: "ДЗО.БГ",
    },
    organizer: {
      "@id": "https://www.dzo.bg/#organization",
    },
  };

  return (
    <Script
      id="event-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(eventData),
      }}
    />
  );
}

// Схема за Course (образователен курс)
export function CourseSchema({ course }) {
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name || "Lorem ipsum курс за ДЗО",
    description:
      course.description ||
      "Lorem ipsum описание на образователен курс за допълнително здравно осигуряване",
    provider: {
      "@id": "https://www.dzo.bg/#organization",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      instructor: {
        "@type": "Person",
        name: course.instructor || "Lorem Ipsum Лектор",
      },
    },
  };

  return (
    <Script
      id="course-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(courseData),
      }}
    />
  );
}

// Схема за Software Application
export function SoftwareAppSchema() {
  const appData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ДЗО.БГ Калкулатор",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description:
      "Безплатен онлайн калкулатор за изчисляване цена на допълнително здравно осигуряване",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BGN",
    },
    creator: {
      "@id": "https://www.dzo.bg/#organization",
    },
  };

  return (
    <Script
      id="software-app-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(appData),
      }}
    />
  );
}

// Схема за JobPosting
export function JobPostingSchema({ job }) {
  const jobData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title || "Lorem ipsum позиция за ДЗО",
    description:
      job.description ||
      "Lorem ipsum описание на свободната позиция в областта на допълнителното здравно осигуряване",
    hiringOrganization: {
      "@id": "https://www.dzo.bg/#organization",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Lorem Ipsum 123",
        addressLocality: "София",
        addressCountry: "BG",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "BGN",
      value: {
        "@type": "QuantitativeValue",
        minValue: job.minSalary || 1500,
        maxValue: job.maxSalary || 3000,
        unitText: "MONTH",
      },
    },
    employmentType: job.employmentType || "FULL_TIME",
    datePosted: job.datePosted || "2024-01-01",
    validThrough: job.validThrough || "2024-12-31",
  };

  return (
    <Script
      id="job-posting-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jobData),
      }}
    />
  );
}

// Схема за FinancialService (специфично за застрахователни услуги)
export function FinancialServiceSchema() {
  const financialServiceData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://www.dzo.bg/#financial-service",
    name: "Допълнително здравно осигуряване",
    alternateName: "ДЗО",
    description:
      "Професионални услуги за допълнително здравно осигуряване за физически лица и компании",
    url: "https://www.dzo.bg",
    telephone: "+359-888-123-456",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Lorem Ipsum 123",
      addressLocality: "София",
      postalCode: "1000",
      addressCountry: "BG",
    },
    image: "https://www.dzo.bg/dobrovolno-zdravno-osiguriavane.jpg",
    priceRange: "$$",
    serviceType: "Застрахователно посредничество",
    provider: {
      "@id": "https://www.dzo.bg/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "България",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Застрахователни продукти",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Индивидуална здравна застраховка",
            category: "Здравно осигуряване",
          },
          price: "50.00",
          priceCurrency: "BGN",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "50.00",
            priceCurrency: "BGN",
            billingIncrement: "MONTH",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Корпоративна здравна застраховка",
            category: "Здравно осигуряване",
          },
          price: "100.00",
          priceCurrency: "BGN",
        },
      ],
    },
    feesAndCommissionsSpecification:
      "Комисионата се включва в застрахователната премия",
    termsOfService: "https://www.dzo.bg/obsthi-usloviya",
  };

  return (
    <Script
      id="financial-service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(financialServiceData),
      }}
    />
  );
}

// Схема за Calculator (калкулатор за премии)
export function CalculatorSchema() {
  const calculatorData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": "https://www.dzo.bg/calculator#calculator",
    name: "Калкулатор за здравна застраховка",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description:
      "Безплатен онлайн калкулатор за изчисляване на цена на здравна застраховка",
    url: "https://www.dzo.bg/calculator",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BGN",
    },
    creator: {
      "@id": "https://www.dzo.bg/#organization",
    },
    applicationSubCategory: "Insurance Calculator",
    softwareVersion: "1.0",
    releaseNotes: "Първоначална версия на калкулатора за здравни застраховки",
    screenshot: "https://www.dzo.bg/calculator-screenshot.jpg",
    featureList: [
      "Изчисляване на премия по възраст",
      "Сравнение на различни пакети",
      "Персонализирани препоръки",
      "Експорт на оферти",
    ],
  };

  return (
    <Script
      id="calculator-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(calculatorData),
      }}
    />
  );
}

// Схема за Testimonials/Reviews (отзиви от клиенти)
export function TestimonialsSchema() {
  const testimonialsData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.dzo.bg/testimonials#testimonials",
    name: "Отзиви от клиенти за ДЗО услуги",
    description:
      "Реални отзиви от доволни клиенти за нашите услуги по допълнително здравно осигуряване",
    numberOfItems: "5",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Мария Петрова",
          },
          reviewBody: "Отлично обслужване и много добри цени. Препоръчвам!",
          datePublished: "2024-01-15",
          itemReviewed: {
            "@id": "https://www.dzo.bg/#organization",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Иван Георгиев",
          },
          reviewBody:
            "Бърза и професионална услуга. Много съм доволен от избора си.",
          datePublished: "2024-01-10",
          itemReviewed: {
            "@id": "https://www.dzo.bg/#organization",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Елена Стоянова",
          },
          reviewBody:
            "Добро съотношение цена-качество. Обслужването е на високо ниво.",
          datePublished: "2024-01-05",
          itemReviewed: {
            "@id": "https://www.dzo.bg/#organization",
          },
        },
      },
    ],
  };

  return (
    <Script
      id="testimonials-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(testimonialsData),
      }}
    />
  );
}

// Схема за SpecialOffer (специални оферти)
export function SpecialOfferSchema({ offer }) {
  const offerData = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `https://www.dzo.bg/offers/${offer.id || "special-offer"}#offer`,
    name: offer.name || "Специална оферта за здравна застраховка",
    description:
      offer.description || "Ограничена по време оферта за нови клиенти",
    price: offer.price || "40",
    priceCurrency: "BGN",
    priceValidUntil: offer.validUntil || "2024-12-31",
    availability: "https://schema.org/InStock",
    validFrom: offer.validFrom || "2024-01-01T00:00:00+02:00",
    validThrough: offer.validThrough || "2024-12-31T23:59:59+02:00",
    seller: {
      "@id": "https://www.dzo.bg/#organization",
    },
    itemOffered: {
      "@type": "Service",
      name: offer.serviceName || "Здравна застраховка",
      category: "Здравно осигуряване",
    },
    eligibleCustomerType: "https://schema.org/BusinessEntityType",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: offer.price || "40",
      priceCurrency: "BGN",
      valueAddedTaxIncluded: true,
    },
  };

  return (
    <Script
      id="special-offer-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(offerData),
      }}
    />
  );
}

// Схема за NewsArticle (новини и актуализации)
export function NewsArticleSchema({ news }) {
  const newsData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `https://www.dzo.bg/news/${news.slug || "news-article"}#news`,
    headline: news.headline || "Lorem ipsum новина за здравното осигуряване",
    description:
      news.description ||
      "Lorem ipsum описание на новината за промени в здравното осигуряване",
    image: news.image || "https://www.dzo.bg/news-placeholder.webp",
    datePublished: news.datePublished || "2024-01-01T00:00:00+02:00",
    dateModified: news.dateModified || "2024-01-01T00:00:00+02:00",
    author: {
      "@type": "Person",
      name: news.author || "Редакция ДЗО.БГ",
    },
    publisher: {
      "@id": "https://www.dzo.bg/#organization",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.dzo.bg/news/${news.slug || "news-article"}`,
    },
    articleSection: "Здравно осигуряване",
    keywords: news.keywords || "здравно осигуряване, новини, ДЗО, застраховки",
    inLanguage: "bg",
    about: [
      {
        "@type": "Thing",
        name: "Здравно осигуряване",
      },
    ],
  };

  return (
    <Script
      id="news-article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(newsData),
      }}
    />
  );
}

// Схема за Dataset (данни и статистики)
export function DatasetSchema() {
  const datasetData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": "https://www.dzo.bg/data/insurance-statistics#dataset",
    name: "Статистики за здравното осигуряване в България",
    description:
      "Актуални данни и статистики за пазара на допълнително здравно осигуряване в България",
    url: "https://www.dzo.bg/statistics",
    creator: {
      "@id": "https://www.dzo.bg/#organization",
    },
    publisher: {
      "@id": "https://www.dzo.bg/#organization",
    },
    datePublished: "2024-01-01T00:00:00+02:00",
    dateModified: "2024-01-01T00:00:00+02:00",
    license: "https://creativecommons.org/licenses/by/4.0/",
    keywords: "здравно осигуряване, статистики, България, ДЗО",
    spatialCoverage: {
      "@type": "Place",
      name: "България",
    },
    temporalCoverage: "2020/2024",
    distribution: {
      "@type": "DataDownload",
      encodingFormat: "application/json",
      contentUrl: "https://www.dzo.bg/api/statistics",
    },
  };

  return (
    <Script
      id="dataset-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(datasetData),
      }}
    />
  );
}
