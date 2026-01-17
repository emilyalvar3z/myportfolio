const text = {
  en: {
    title: "What Our Clients Say",
    subtitle: "Don’t just take our word for it",
    readMore: "Hover to read more",
  },
  es: {
    title: "Lo Que Dicen Nuestros Clientes",
    subtitle: "No solo confíes en nuestra palabra",
    readMore: "Pasa el cursor para leer más",
  },
};

const testimonials = {
  en: [
    {
      name: "Vikrant C.",
      date: "Jul 16, 2025",
      quote:
        "The price is really genuine. I tried first time with her great experience.",
    },
    {
      name: "Kenneth S.",
      date: "Apr 7, 2025",
      quote:
        "HP cleaning service deserves 10+ stars! Service provided is impeccable. They are trustworthy workers whose dedication and priority is to leave your home immaculate. I highly recommend HP services for your cleaning needs.",
    },
    {
      name: "Yvonne M.",
      date: "Jan 13, 2025",
      quote:
        "I loved the cleaning by the 2 ladies, they did a wonderful job! Deep cleaning, fridge, oven, baseboards — everything was spotless.",
    },
  ],

  es: [
    {
      name: "Vikrant C.",
      date: "16 Jul 2025",
      quote:
        "El precio es muy justo. Fue mi primera vez y tuve una excelente experiencia.",
    },
    {
      name: "Kenneth S.",
      date: "7 Abr 2025",
      quote:
        "¡HP Cleaning merece más de 10 estrellas! El servicio fue impecable. Son personas confiables cuya prioridad es dejar su hogar perfecto. Los recomiendo totalmente.",
    },
    {
      name: "Yvonne M.",
      date: "13 Ene 2025",
      quote:
        "Me encantó el trabajo de las dos señoras. Limpieza profunda, refrigerador, horno y zócalos — todo quedó impecable.",
    },
  ],
};

export default function Testimonials({ language }) {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {text[language].title}
          </h2>
          <p className="text-lg text-gray-600">
            {text[language].subtitle}
          </p>
        </div>

        {/* FLOATING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials[language].map((t, i) => (
            <div
              key={i}
              className="
                group relative bg-white rounded-3xl p-8 shadow-lg
                transform transition-all duration-500
                hover:-translate-y-4 hover:shadow-2xl
                animate-float
              "
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              {/* STARS */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                ★★★★★
              </div>

              {/* QUOTE */}
              <p
                className="
                  text-gray-700 text-lg leading-relaxed
                  max-h-20 overflow-hidden
                  group-hover:max-h-96
                  transition-all duration-500
                "
              >
                “{t.quote}”
              </p>

              {/* READ MORE */}
              <p className="mt-4 text-sm text-gray-400 group-hover:hidden">
                {text[language].readMore}
              </p>

              {/* AUTHOR */}
              <div className="mt-6">
                <p className="font-semibold text-gray-900">
                  {t.name}
                </p>
                <p className="text-sm text-gray-500">
                  {t.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
