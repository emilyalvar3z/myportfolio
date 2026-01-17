const text = {
  en: {
    title: "HP House Cleaning",
    subtitle:
      "Reliable, detailed cleaning services for homes and offices across Westchester County.",
    quote: "Get a Free Quote",
    services: "Our Services",
  },
  es: {
    title: "HP House Cleaning",
    subtitle:
      "Servicios de limpieza confiables y detallados para hogares y oficinas en el condado de Westchester.",
    quote: "Obtén una Cotización Gratis",
    services: "Nuestros Servicios",
  },
};


export default function Hero({ language }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      
      {/* Background image */}
      <img
        src="/hero.png"
        alt="Cleaning service"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#2A3072]/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        
        {/* Logo */}
        <img
          src="/logo.png"
          alt="HP House Cleaning logo"
          className="mx-auto mb-6 w-60 h-auto"
          draggable="false"
        />

        {/* Title */}
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6">
          {text[language].title}
        </h1>

        {/* Subtitle */}
        <p className="text-blue-100 text-lg md:text-xl mb-10">
          {text[language].subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-yellow-400 text-[#2A3072] font-semibold px-8 py-4 rounded-lg hover:bg-yellow-300 transition"
          >
            {text[language].quote}
          </a>

          <a
            href="#services"
            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition"
          >
            {text[language].services}
          </a>
        </div>
      </div>
    </section>
  );
}
