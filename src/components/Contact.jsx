import { useState } from "react";



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

    name: "Full Name",
    phoneInput: "Phone Number",
    cleaningType: "Type of Cleaning",
    bedrooms: "Bedrooms",
    bathrooms: "Bathrooms",
    propertyType: "Property Type",
    zip: "Zip Code",
    extras: "Optional Extras",
    notes: "Additional Notes",
    submit: "Send Request",

    success:
      "Thank you for your interest! We’ve received your request and will get back to you as soon as possible.",
    error:
      "Something went wrong. Please try again or contact us directly.",

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

    name: "Nombre Completo",
    phoneInput: "Número de Teléfono",
    cleaningType: "Tipo de Limpieza",
    bedrooms: "Habitaciones",
    bathrooms: "Baños",
    propertyType: "Tipo de Propiedad",
    zip: "Código Postal",
    extras: "Extras Opcionales",
    notes: "Notas Adicionales",
    submit: "Enviar Solicitud",

    success:
      "¡Gracias por tu interés! Hemos recibido tu solicitud y nos comunicaremos contigo lo antes posible.",
    error:
      "Algo salió mal. Inténtalo nuevamente o contáctanos directamente.",

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



export default function Contact({ language }) {
  const t = text[language];

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/mwvvvnwj", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#2A3072] text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        //contact left side
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.getInTouch}</h2>
          <p className="text-blue-100 mb-10 max-w-xl">{t.intro}</p>

          <Info label={t.phone} value="(914) 989-0040" href="tel:19149890040" />
          <Info label={t.email} value="hildapesantez3@gmail.com" href="mailto:hildapesantez3@gmail.com" />
          <Info label={t.location} value="36 Donald Ln, Ossining NY 10562" />
          <Info label={t.hours} value={t.hoursValue} />
        </div>

        // actual form
        <div className="bg-white text-gray-900 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold mb-4">{t.requestQuote}</h3>
          <p className="text-gray-600 mb-6">{t.formIntro}</p>

          / if submitted correctly
          {submitted && (
            <div className="mb-6 bg-green-50 border border-green-200 p-4 rounded-lg">
              <p className="text-green-700 font-semibold">{t.success}</p>
            </div>
          )}
          // if NOT submitted correctly
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 p-4 rounded-lg">
              <p className="text-red-700 font-semibold">{t.error}</p>
            </div>
          )}

          {!submitted && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input label={t.name} name="name" value={formData.name} onChange={handleChange} required />
              <Input label={t.phoneInput} name="phone" value={formData.phone} onChange={handleChange} required />

              <Select label={t.cleaningType} name="cleaningType" value={formData.cleaningType} onChange={handleChange} options={t.options.cleaning} />
              <Select label={t.bedrooms} name="bedrooms" value={formData.bedrooms} onChange={handleChange} options={t.options.bedrooms} />
              <Select label={t.bathrooms} name="bathrooms" value={formData.bathrooms} onChange={handleChange} options={t.options.bathrooms} />
              <Select label={t.propertyType} name="propertyType" value={formData.propertyType} onChange={handleChange} options={t.options.property} />

              <Input label={t.zip} name="zipCode" value={formData.zipCode} onChange={handleChange} required />

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
                name="notes"
                rows="4"
                placeholder={t.notes}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              />

              <button className="w-full bg-yellow-400 text-[#2A3072] font-bold py-4 rounded-lg">
                {t.submit}
              </button>
            </form>
          )}
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

function Select({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <select name={name} value={value} onChange={onChange} className="w-full border rounded-lg px-4 py-3">
        <option value="">Select an option</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Input({ label, name, value, onChange, required }) {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border rounded-lg px-4 py-3"
      />
    </div>
  );
}
