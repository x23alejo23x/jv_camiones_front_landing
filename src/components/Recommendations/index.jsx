import React, { useState, useEffect } from "react";

const user = "/assets/Images/user.png";
const HomeLogo = "/assets/Images/cliente1.jpg";
const HomeLogo2 = "/assets/Images/cliente2.jpg";
const HomeLogo3 = "/assets/Images/cliente3.jpg";

const Recommendations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cards = [
    { image: HomeLogo },
    { image: HomeLogo2 },
    { image: HomeLogo3 },
  ];

  // Función para pasar a la siguiente imagen
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  // Establecer el intervalo para el carrusel
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Cambiar imagen cada 3 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="Nosotros"
      className="bg-gray-500 py-6 flex justify-center items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
        {/* Sección Derecha */}
        <div className="flex-1 flex flex-col justify-center items-center space-y-8">
          {/* Imagen y Título */}
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-full overflow-hidden shadow-lg w-16 h-16 sm:w-20 sm:h-20">
              <img
                src={user}
                alt="Foto pequeña"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
              Nuestros Testimonios
            </h2>
          </div>

          <p className="text-white text-sm sm:text-base leading-relaxed text-justify">
            En <strong>El Man de los Camiones</strong>, creemos en la{" "}
            <strong className="text-blue-600">confianza</strong> como el pilar
            fundamental de cada negocio, asegurando que cada vehículo cumpla con
            los más altos estándares de calidad y{" "}
            <strong className="text-blue-600">Garantía</strong>. Nos destacamos
            por nuestra <strong className="text-blue-600">transparencia</strong>
            en cada transacción, proporcionando información clara y detallada sobre
            cada camión, su historial y sus características.{" "}
            <span role="img" aria-label="truck" className="ml-2 text-green-500">
              🚚
            </span>
          </p>

          {/* Estrellas Interactivas */}
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <button
                key={star}
                className={`text-yellow-500 hover:scale-125 transform transition-transform duration-150 text-3xl animate-jump`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Sección Izquierda con carrusel */}
        <div className="flex-1 flex justify-center items-center w-full p-12">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
            <div
              className="absolute inset-0 flex transition-transform duration-1000"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
