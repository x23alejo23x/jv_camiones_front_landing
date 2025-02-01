import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Importar Framer Motion

const BrandFilter = ({ uniqueBrands, handleBrandChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
  const modalRef = useRef(null); // Referencia para el modal

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Abrir o cerrar el modal
  };

  // Cerrar el modal si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false); // Cerrar el modal si el clic es fuera
      }
    };

    // Agregar el event listener cuando el modal está abierto
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Limpiar el event listener cuando el componente se desmonta o el modal se cierra
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Animación para el fondo oscuro
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Animación para el modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <nav aria-label="Global" className="relative">
      {/* En pantallas grandes (lg) mostramos los botones */}
      <div className="hidden lg:flex">
        <span className="inline-flex overflow-hidden rounded-md border shadow-sm">
          <button
            onClick={() => handleBrandChange("")} // Resetea la selección
            className="inline-block px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 border-r focus:outline-none"
          >
            Todos
          </button>
          {uniqueBrands.map((brand, index) => (
            <button
              key={index}
              onClick={() => handleBrandChange(brand)} // Cambia la marca seleccionada
              className={`px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:outline-none ${
                index !== uniqueBrands.length - 1 ? "border-r" : ""
              }`}
            >
              {brand}
            </button>
          ))}
        </span>
      </div>

      {/* En pantallas móviles (sm) mostramos un botón para abrir el modal */}
      <div className="lg:hidden">
        <button
          onClick={toggleModal} // Abrir o cerrar el modal
          className="px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none rounded-md flex items-center space-x-2"
        >
          <span>Categoría</span>
          <i className="fa-solid fa-code-commit"></i> {/* Ícono con animación */}
        </button>

        {/* Modal con Framer Motion */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md" // Fondo oscuro y difuso
              variants={backdropVariants} // Animación del fondo
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2 }}
            >
              <motion.div
                ref={modalRef} // Referencia para el modal
                className="bg-gray-900 rounded-lg shadow-lg w-full max-w-xs p-4" // Contenido del modal
                variants={modalVariants} // Animación del modal
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                {/* Opciones del modal */}
                <button
                  onClick={() => {
                    handleBrandChange(""); // Cambia a "Todos"
                    setIsModalOpen(false); // Cierra el modal
                  }}
                  className="block w-full px-4 py-2 text-sm text-gray-200 bg-gray-900 border-b border-gray-800 rounded-t-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Todos
                </button>
                {uniqueBrands.map((brand, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      handleBrandChange(brand); // Cambia a la marca seleccionada
                      setIsModalOpen(false); // Cierra el modal
                    }}
                    className={`block w-full px-4 py-2 text-sm text-gray-200 bg-gray-900 border-b border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    {brand}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default BrandFilter;
