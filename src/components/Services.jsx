const text = {
  en: {
    title: "Our Services",
    subtitle:
      "From regular maintenance to deep cleaning, we offer comprehensive solutions for all your cleaning needs.",
    learnMore: "View more →",
    services: [
      {
        title: "Residential Cleaning",
        description:
          "Complete home cleaning services including bedrooms, kitchens, bathrooms, and living areas.",
      },
      {
        title: "Office Cleaning",
        description:
          "Professional commercial cleaning to keep your workspace pristine and productive.",
      },
      {
        title: "Deep Cleaning",
        description:
          "Thorough deep cleaning service for hard-to-reach areas and stubborn stains.",
      },
      {
        title: "Move In / Out Cleaning",
        description:
          "Comprehensive cleaning for moving transitions, leaving spaces spotless.",
      },
    ],
  },

  es: {
    title: "Nuestros Servicios",
    subtitle:
      "Desde mantenimiento regular hasta limpieza profunda, ofrecemos soluciones completas para todas sus necesidades de limpieza.",
    learnMore: "Ver más →",
    services: [
      {
        title: "Limpieza Residencial",
        description:
          "Servicios completos de limpieza del hogar que incluyen dormitorios, cocinas, baños y áreas comunes.",
      },
      {
        title: "Limpieza de Oficinas",
        description:
          "Limpieza comercial profesional para mantener su espacio de trabajo impecable y productivo.",
      },
      {
        title: "Limpieza Profunda",
        description:
          "Servicio de limpieza profunda para áreas difíciles de alcanzar y manchas difíciles.",
      },
      {
        title: "Limpieza de Mudanza",
        description:
          "Limpieza completa para mudanzas, dejando los espacios impecables.",
      },
    ],
  },
};

export default function Services({ language }) {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {text[language].title}
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {text[language].subtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {text[language].services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden
                         hover:-translate-y-2 hover:shadow-xl
                         transition-all duration-300"
            >
              <img
                src={`${import.meta.env.BASE_URL}service${index + 1}.png`}
                alt={service.title}
                className="w-full h-48 object-cover"
                draggable="false"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                <p className="mt-4 text-[#2A3072] font-medium">
                  {text[language].learnMore}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
