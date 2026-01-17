import { useState } from "react";

const text = {
  en: {
    title: "Check Our Service Area",
    subtitle:
      "Enter your ZIP code below to quickly confirm if we service your area.",
    label: "Enter your ZIP code",
    check: "Check",
    success: "Great news! We serve your area.",
    maybe: "We may still serve your area — contact us to confirm.",
    areasTitle: "Areas we commonly serve:",
    areas: [
      "Ossining",
      "White Plains",
      "Yonkers",
      "Tarrytown",
      "Peekskill",
      "Mount Kisco",
    ],
  },

  es: {
    title: "Verifique Nuestra Área de Servicio",
    subtitle:
      "Ingrese su código postal para confirmar rápidamente si atendemos su área.",
    label: "Ingrese su código postal",
    check: "Verificar",
    success: "¡Buenas noticias! Atendemos su área.",
    maybe: "Es posible que aún atendamos su área — contáctenos para confirmar.",
    areasTitle: "Áreas que atendemos comúnmente:",
    areas: [
      "Ossining",
      "White Plains",
      "Yonkers",
      "Tarrytown",
      "Peekskill",
      "Mount Kisco",
    ],
  },
};

export default function About({ language }) {
  return (
    <section id="about" className="relative py-24">

      {/* BACKGROUND MAP */}
      <img
        src="/map.png"
        alt="Service area map"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        draggable="false"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-10 md:p-14 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {text[language].title}
          </h2>

          <p className="text-lg text-gray-600 mb-10">
            {text[language].subtitle}
          </p>

          <ZipChecker language={language} />

          {/* AREAS */}
          <div className="mt-10">
            <p className="text-gray-700 font-semibold mb-3">
              {text[language].areasTitle}
            </p>

            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600">
              {text[language].areas.map((area) => (
                <li key={area}>• {area}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- ZIP CHECKER ---------- */

function ZipChecker({ language }) {
  const serviceZips = [
    "10562",
    "10601",
    "10603",
    "10701",
    "10705",
    "10591",
  ];

  const [zip, setZip] = useState("");
  const [result, setResult] = useState(null);

  const checkZip = () => {
    if (serviceZips.includes(zip)) {
      setResult("yes");
    } else {
      setResult("maybe");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <label className="block font-semibold mb-2">
        {text[language].label}
      </label>

      <div className="flex gap-3 justify-center">
        <input
          type="text"
          maxLength={5}
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="e.g. 10562"
          className="border border-gray-300 rounded-lg px-4 py-3 w-40 text-center
                     focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          onClick={checkZip}
          className="bg-yellow-400 text-black px-6 rounded-lg
                     hover:bg-yellow-300 transition font-semibold"
        >
          {text[language].check}
        </button>
      </div>

      {result === "yes" && (
        <p className="mt-6 text-green-700 font-semibold">
          {text[language].success}
        </p>
      )}

      {result === "maybe" && (
        <p className="mt-6 text-yellow-700 font-semibold">
          {text[language].maybe}
        </p>
      )}
    </div>
  );
}
