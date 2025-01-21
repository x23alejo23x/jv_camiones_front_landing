import React from "react";

const TruckCarouselDisplay = ({ cardsToShow = [] }) => {
  const whatsappLink = "https://wa.me/1234567890";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsToShow.map((card, index) => (
        <div
          key={index}
          className="w-[300px] h-[400px] bg-gray-700 rounded-2xl text-neutral-300 p-4 flex flex-col justify-start gap-3 transition transform hover:scale-105 hover:shadow-2xl"
        >
          <p className="text-sm text-center">{card.brand}</p>
          <div className="w-full h-[200px] bg--900 rounded-2xl mb-4">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <p className="font-extrabold text-lg">{card.title}</p>
          <div className="flex items-center gap-4 justify-center w-full mt-4">
            <nav aria-label="Global" className="relative">
              <span className="inline-flex overflow-hidden rounded-md border shadow-sm">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-e px-4 py-2 text-sm font-medium text-white hover:bg-green-500 focus:relative relative group"
                >
                  WhatsApp
                </a>
                <a
                  href={card.urlFichaTecnica}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:relative relative group"
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
