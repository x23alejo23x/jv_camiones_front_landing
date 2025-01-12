import React from "react";

const user = "/assets/Images/user.png";
const HomeLogo = "assets/Images/home_Logo.png";
const HomeLogo2 = "assets/Images/suzuki.jfif";
const HomeLogo3 = "assets/Images/toyota.jpg";

const Recommendations = () => {
  const cards = [
    { image: HomeLogo, text: "Garantía" },
    { image: HomeLogo2, text: "Confianza" },
    { image: HomeLogo3, text: "Transparencia" },
  ];

  return (
    <div className="min-h-screen p-10 space-y-10 md:flex md:space-y-0 md:space-x-10">
      {/* Sección Izquierda oculta en pantallas pequeñas */}
      <div className="flex-1 justify-center items-center hidden md:flex">
        <div className="md:flex w-[500px] h-[354px] bw-full rounded-lg shadow-[0px_3px_160px_15px_rgba(123,_155,_231,_0.93)]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-1 h-full overflow-hidden cursor-pointer rounded-lg transition-all duration-1000 border border-[#b3b3b3] flex justify-center items-center hover:flex-[2] hover:shadow-neon-blue relative"
            >
              {/* Fondo gris con mensaje */}
              <div className="absolute inset-0 flex justify-center items-center bg-gray-800 text-white text-lg font-semibold transition-opacity duration-500 hover:opacity-0">
                <span>{card.text}</span>
              </div>
              {/* Imagen */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-0 hover:opacity-100"
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección Derecha */}
      <div className="flex-1 flex flex-col justify-center space-y-8">
        {/* Imagen y Título */}
        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-full overflow-hidden shadow-lg w-16 h-16 md:w-20 md:h-20">
            <img
              src={user}
              alt="Foto pequeña"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-4xl font-bold text-white text-center">
            Nuestros Testimonios
          </h2>
        </div>

        {/* Párrafo */}
        <p className="text-white text-lg leading-relaxed text-justify">
          Este es un texto detallado sobre la recomendación. Aquí puedes añadir
          información que describa por qué este contenido es especial y cómo
          puede ser útil para los usuarios. Este texto permite mostrar las
          características únicas de los servicios ofrecidos.
        </p>

        {/* Estrellas Interactivas */}
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className="text-yellow-500 hover:scale-125 transform transition-transform duration-150 text-3xl"
            >
              ★
            </button>
          ))}
        </div>

        {/* Imagen pequeña debajo de las estrellas solo en dispositivos móviles */}
        <div className="mb-2">
          <div className="flex justify-center mt-6 md:hidden space-x-4">
            <img
              src={HomeLogo}
              alt="Recomendación pequeña"
              className="w-40 h-auto rounded-lg shadow-lg object-cover"
            />
            <img
              src={HomeLogo}
              alt="Recomendación pequeña"
              className="w-40 h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
