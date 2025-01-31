import React from "react";

const TruckCarouselDisplay = ({ cardsToShow = [] }) => {
  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=573005928483&text&type=phone_number&app_absent=0";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardsToShow.map((card, index) => (
        <div
          key={index}
          className="w-[300px] h-[400px] bg-gray-700 rounded-lg text-neutral-300 p-4 flex flex-col justify-start gap-3 transition transform hover:scale-105 hover:shadow-2xl overflow-hidden"
        >
          {/* Marca */}
          <p className="text-sm text-center h-[40px] overflow-hidden">
            {card.brand}
          </p>

          {/* Imagen */}
          <div className="w-full h-[200px] bg-gray-900 rounded-2xl overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Título */}
          <p className="font-extrabold text-lg h-[40px] overflow-hidden">
            {card.title}
          </p>

          {/* Botones */}
          <div className="flex items-center gap-4 justify-center w-full mt-auto">
            <nav aria-label="Global" className="relative">
              <span className="inline-flex overflow-hidden rounded-md border shadow-sm">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-e px-4 py-2 text-sm font-medium text-white hover:bg-green-500"
                >
                  WhatsApp
                </a>
                <a
                  href={card.urlFichaTecnica}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white hover:bg-red-500"
                >
                  Ficha Técnica
                </a>
              </span>
            </nav>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TruckCarouselDisplay;
