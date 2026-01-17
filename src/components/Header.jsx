const text = {
  en: {
    services: "Services",
    about: "Area",
    contact: "Contact",
    toggle: "Español",
  },
  es: {
    services: "Servicios",
    about: "Area",
    contact: "Contacto",
    toggle: "English",
  },
};


export default function Header({ language, setLanguage }) {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT — LOGO + NAME */}
        <div className="flex items-center gap-3">
          <img
            src="/blr.png"
            alt="HP House Cleaning Logo"
            className="h-14 w-auto object-contain"
            draggable="false"
          />
          <span className="text-[#2A3072] font-bold text-2xl">
            HP House Cleaning
          </span>
        </div>

        {/* RIGHT — NAV + LANGUAGE TOGGLE */}
        <div className="flex items-center gap-6">
          <nav className="space-x-6 font-medium text-gray-700">
  <a href="#services" className="hover:text-[#2A3072]">
    {text[language].services}
  </a>
  <a href="#about" className="hover:text-[#2A3072]">
    {text[language].about}
  </a>
  <a href="#contact" className="hover:text-[#2A3072]">
    {text[language].contact}
  </a>
</nav>


          {/* LANGUAGE BUTTON */}
          <button
  onClick={() => setLanguage(language === "en" ? "es" : "en")}
  className="border border-[#2A3072] text-[#2A3072] px-4 py-2 rounded-lg
             hover:bg-[#2A3072] hover:text-white transition
             text-sm font-semibold"
>
  {text[language].toggle}
</button>

        </div>

      </div>
    </header>
  );
}
