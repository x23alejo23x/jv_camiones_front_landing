import React, { useState } from "react";

const photoform = "/assets/Images/toyota.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    correo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.nombre) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!formData.celular) {
      newErrors.celular = "El celular es obligatorio.";
    }

    if (!formData.correo) {
      newErrors.correo = "El correo es obligatorio.";
    } else if (!validateEmail(formData.correo)) {
      newErrors.correo = "El correo no es válido.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const email = "alejandroamayac8@gmail.com";
      const subject = `Contacto de ${formData.nombre}`;
      const body = `Hola,\n\nMi nombre es ${formData.nombre}, mi celular es ${formData.celular}, y mi correo es ${formData.correo}.\n\nSaludos.`;

      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        email
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.open(gmailLink, "_blank");
    }
  };

  return (
    <div className="flex flex-col md:flex-row mx-auto p-20 max-w-7xl h-auto md:h-screen">
      <div className="w-full md:w-1/2 bg-gray-900 rounded-md m-2 p-4 md:p-8 flex-1">
        <div className="flex flex-col bg-gray-900 rounded-lg p-8 md:p-16 h-full">
          <h2 className="text-white text-center font-bold text-xl md:text-2xl mb-2 md:mb-4">
            Contáctanos
          </h2>

          <div className="mt-4">
            <label className="text-white text-md md:text-lg" htmlFor="nombre">
              Nombre
            </label>
            <input
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder={errors.nombre || "nombre..."}
              className={`w-full bg-gray-800 rounded-md border ${
                errors.nombre ? "border-red-500" : "border-gray-700"
              } text-white px-2 py-1 md:px-4 md:py-2 mt-1`}
              type="text"
            />
          </div>

          <div className="mt-4">
            <label className="text-white text-md md:text-lg" htmlFor="celular">
              Celular
            </label>
            <input
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              placeholder={errors.celular || "celular..."}
              className={`w-full bg-gray-800 rounded-md border ${
                errors.celular ? "border-red-500" : "border-gray-700"
              } text-white px-2 py-1 md:px-4 md:py-2 mt-1`}
              type="text"
            />
          </div>

          <div className="mt-4">
            <label className="text-white text-md md:text-lg" htmlFor="correo">
              Correo
            </label>
            <input
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder={errors.correo || "correo..."}
              className={`w-full bg-gray-800 rounded-md border ${
                errors.correo ? "border-red-500" : "border-gray-700"
              } text-white px-2 py-1 md:px-4 md:py-2 mt-1`}
              type="text"
            />
          </div>
        </div>
      </div>

      {/* Sección de la derecha */}
      <div className="w-full md:w-1/2 rounded-md bg-gray-700 shadow-md p-4 m-2 md:p-8 flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div
            className="w-64 h-48 md:w-80 md:h-60 rounded-md"
            style={{
              backgroundImage: `url(${photoform})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="flex flex-col gap-4 md:gap-6">
            <span className="text-md md:text-lg text-center text-white">
              Déjanos tus datos, pronto nos pondremos en contacto
            </span>

            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
