const text = {
  en: {
    title: "HP House Cleaning",
    subtitle:
      "Reliable, detailed cleaning services for homes and offices across Westchester County.",
    primaryBtn: "Get a Free Quote",
    secondaryBtn: "Our Services",
  },
  es: {
    title: "HP House Cleaning",
    subtitle:
      "Servicios de limpieza confiables y detallados para hogares y oficinas en el condado de Westchester.",
    primaryBtn: "Obtén una Cotización Gratis",
    secondaryBtn: "Nuestros Servicios",
  },
};

export default function Hero({ language }) {
  return (
    <section className="hero relative h-screen w-full overflow-hidden flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <img
        src={`${import.meta.env.BASE_URL}hero.png`}
        alt="Professional cleaning service"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BLUE OVERLAY */}
      <div className="absolute inset-0 bg-[#2A3072]/80"></div>

      {/* ✨ FLOATING SPARKLES */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-20 text-center px-6 max-w-4xl">

        {/* LOGO */}
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="HP House Cleaning Logo"
          className="mx-auto mb-6 w-48 md:w-56"
          draggable="false"
        />

        {/* TITLE */}
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6">
          {text[language].title}
        </h1>

        {/* SUBTITLE */}
        <p className="text-blue-100 text-lg md:text-xl mb-10">
          {text[language].subtitle}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-yellow-400 text-[#2A3072] font-semibold px-8 py-4 rounded-lg hover:bg-yellow-300 transition"
          >
            {text[language].primaryBtn}
          </a>

          <a
            href="#services"
            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition"
          >
            {text[language].secondaryBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
