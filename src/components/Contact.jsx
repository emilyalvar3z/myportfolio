import { useState } from "react";

/* ================= TRANSLATIONS ================= */

const text = {
  en: {
    getInTouch: "Get In Touch",
    intro:
      "Ready to experience the difference? Contact us today for a free quote or to schedule your first cleaning.",
    phone: "Phone",
    email: "Email",
    location: "Location",
    hours: "Hours",
    hoursValue: "Mon–Sun: 7am – 8pm",

    requestQuote: "Request a Quote",
    formIntro:
      "Help us get to know your space. A few details allow us to provide the closest and most accurate estimate for your cleaning needs.",

    cleaningType: "Type of Cleaning",
    bedrooms: "Bedrooms",
    bathrooms: "Bathrooms",
    propertyType: "Property Type",
    zip: "Zip Code",
    extras: "Optional Extras",
    notes: "Additional Notes",
    submit: "Send Request",

    options: {
      cleaning: [
        "Regular Cleaning",
        "Deep Cleaning",
        "Move-In / Move-Out Cleaning",
        "Office / Commercial Cleaning",
      ],
      bedrooms: ["Studio", "1 bedroom", "2 bedrooms", "3 bedrooms", "4+ bedrooms"],
      bathrooms: ["1 bathroom", "2 bathrooms", "3 bathrooms", "4+ bathrooms"],
      property: ["Apartment", "House", "Office", "Other"],
      extras: [
        "Inside fridge",
        "Inside oven",
        "Baseboards",
        "Interior windows",
        "Laundry room",
        "Office areas",
      ],
    },
  },

  es: {
    getInTouch: "Contáctanos",
    intro:
      "¿Listo para notar la diferencia? Contáctanos hoy para una cotización gratuita o para programar tu primera limpieza.",
    phone: "Teléfono",
    email: "Correo",
    location: "Ubicación",
    hours: "Horario",
    hoursValue: "Lun–Dom: 7am – 8pm",

    requestQuote: "Solicitar una Cotización",
    formIntro:
      "Ayúdanos a conocer tu espacio. Algunos detalles nos permiten brindarte una estimación más precisa.",

    cleaningType: "Tipo de Limpieza",
    bedrooms: "Habitaciones",
    bathrooms: "Baños",
    propertyType: "Tipo de Propiedad",
    zip: "Código Postal",
    extras: "Extras Opcionales",
    notes: "Notas Adicionales",
    submit: "Enviar Solicitud",

    options: {
      cleaning: [
        "Limpieza Regular",
        "Limpieza Profunda",
        "Mudanza (Entrada / Salida)",
        "Limpieza de Oficina",
      ],
      bedrooms: ["Estudio", "1 habitación", "2 habitaciones", "3 habitaciones", "4+ habitaciones"],
      bathrooms: ["1 baño", "2 baños", "3 baños", "4+ baños"],
      property: ["Apartamento", "Casa", "Oficina", "Otro"],
      extras: [
        "Dentro del refrigerador",
        "Dentro del horno",
        "Zócalos",
        "Ventanas interiores",
        "Lavandería",
        "Áreas de oficina",
      ],
    },
  },
};

/* ================= COMPONENT ================= */

export default function Contact({ language }) {
  const t = text[language];

  const [formData, setFormData] = useState({
    cleaningType: "",
    bedrooms: "",
    bathrooms: "",
    propertyType: "",
    extras: [],
    zipCode: "",
    notes: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const toggleExtra = (extra) => {
    setFormData((prev) => ({
      ...prev,
      extras: prev.extras.includes(extra)
        ? prev.extras.filter((e) => e !== extra)
        : [...prev.extras, extra],
    }));
  };

  return (
    <section id="contact" className="py-24 bg-[#2A3072] text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.getInTouch}</h2>
          <p className="text-blue-100 mb-10 max-w-xl">{t.intro}</p>

          <Info label={t.phone} value="(914) 989-0040" href="tel:19149890040" />
          <Info label={t.email} value="hildapesantez3@gmail.com" href="mailto:hildapesantez3@gmail.com" />
          <Info label={t.location} value="36 Donald Ln, Ossining NY 10562" />
          <Info label={t.hours} value={t.hoursValue} />
        </div>

        {/* FORM */}
        <div className="bg-white text-gray-900 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold mb-4">{t.requestQuote}</h3>
          <p className="text-gray-600 mb-8">{t.formIntro}</p>

          <form className="space-y-6">
            <Select label={t.cleaningType} options={t.options.cleaning} />
            <Select label={t.bedrooms} options={t.options.bedrooms} />
            <Select label={t.bathrooms} options={t.options.bathrooms} />
            <Select label={t.propertyType} options={t.options.property} />

            <Input label={t.zip} placeholder="e.g. 10562" />

            <div>
              <p className="font-medium mb-2">{t.extras}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {t.options.extras.map((extra) => (
                  <label key={extra} className="flex gap-2">
                    <input type="checkbox" onChange={() => toggleExtra(extra)} />
                    {extra}
                  </label>
                ))}
              </div>
            </div>

            <textarea
              rows="4"
              placeholder={t.notes}
              className="w-full border rounded-lg px-4 py-3"
            />

            <button className="w-full bg-yellow-400 text-[#2A3072] font-bold py-4 rounded-lg">
              {t.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ================= HELPERS ================= */

function Info({ label, value, href }) {
  return (
    <div className="mb-6">
      <p className="font-semibold">{label}</p>
      {href ? (
        <a href={href} className="text-blue-100 hover:underline">{value}</a>
      ) : (
        <p className="text-blue-100">{value}</p>
      )}
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <select className="w-full border rounded-lg px-4 py-3">
        <option>Select an option</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <input className="w-full border rounded-lg px-4 py-3" placeholder={placeholder} />
    </div>
  );
}
