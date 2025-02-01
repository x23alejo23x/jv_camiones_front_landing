import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa"; // Importar íconos

const photoform = "/assets/Images/toyota.jpg";
const photoform2 = "/assets/Images/toyota.jpg";
const photoform3 = "/assets/Images/volvo.jfif";

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
    <div
      id="Contactanos"
      className="bg-gradient-to-r py-6 flex justify-center items-center from-[#0f172a] to-[#334155] min-h-screen"
    >
      <div className="container mx-auto px-4 justify-center  sm:px-6 lg:px-8 max-w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">

        {/* Tarjeta completa */}
        <motion.div
          className="relative w-full max-w-md bg-gray-700 rounded-lg p-6 md:p-8 flex flex-col items-center justify-center shadow-[0px_3px_160px_15px_rgba(123,_155,_231,_0.93)]"
       
        >
          <motion.div
         
          >
            <img
              src={photoform}
              alt="Formulario"
              className="w-full h-full rounded-lg object-cover"
            />
          </motion.div>

          <h2 className="text-white text-center font-bold text-xl md:text-2xl my-4">
            Contáctanos
          </h2>

          <div className="w-full">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-600 p-2 rounded-sm hover:shadow-xl hover:shadow-blue-900 transition-all duration-300 ease-in-out">
                <FaUser className="text-white text-lg" />
              </div>
              <input
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder={errors.nombre || "Nombre"}
                className={`w-full bg-gray-800 rounded-md border ${
                  errors.nombre ? "border-red-500" : "border-gray-700"
                } text-white placeholder-gray-500 px-4 py-2 mt-1`}
                type="text"
              />
            </div>
          </div>

          <div className="mt-4 w-full">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-600 p-2 rounded-sm hover:shadow-xl hover:shadow-green-900 transition-all duration-300 ease-in-out">
                <FaPhone className="text-white text-lg" />
              </div>
              <input
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                placeholder={errors.celular || "Celular"}
                className={`w-full bg-gray-800 rounded-md border ${
                  errors.celular ? "border-red-500" : "border-gray-700"
                } text-white placeholder-gray-500 px-4 py-2 mt-1`}
                type="text"
              />
            </div>
          </div>

          <div className="mt-4 w-full">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-600 p-2 rounded-sm hover:shadow-xl hover:shadow-red-900 transition-all duration-300 ease-in-out">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <input
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder={errors.correo || "Correo"}
                className={`w-full bg-gray-800 rounded-md border ${
                  errors.correo ? "border-red-500" : "border-gray-700"
                } text-white placeholder-gray-500 px-4 py-2 mt-1`}
                type="email"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-500 hover:scale-110 hover:brightness-110"
          >
            Enviar
          </button>
        </motion.div>

       {/* Sección con las dos tarjetas apiladas */}
<div className=" flex-col space-y-8 w-full max-w-md hidden md:block">
  {/* Tarjeta 1 */}
  <motion.div
    className="relative w-full bg-gray-700 rounded-lg p-6 md:p-8 flex flex-col items-center justify-center shadow-[0px_3px_160px_15px_rgba(123,_155,_231,_0.93)]"
  >
    <motion.div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
      <img
        src={photoform2}
        alt="Formulario"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </motion.div>

  {/* Tarjeta 2 */}
  <motion.div
    className="relative w-full bg-gray-700 rounded-lg p-6 md:p-8 flex flex-col items-center justify-center shadow-[0px_3px_160px_15px_rgba(123,_155,_231,_0.93)]"
  >
    <motion.div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
      <img
        src={photoform3}
        alt="Formulario"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </motion.div>
</div>


      </div>
    </div>
  );
};

export default ContactForm;
