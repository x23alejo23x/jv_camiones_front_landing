import React, { useState } from "react";
import TruckCarouselLogic from "./TruckCarouselLogic";
import TruckCarouselDisplay from "./TruckCarouselDisplay";

const TruckCarousel = () => {
  const [cardsToShow, setCardsToShow] = useState([]);

  const handleDataChange = (filteredCards) => {
    setCardsToShow(filteredCards);
  };

  return (
    <div
      id="productos"
      className="bg-gradient-to-r py-6 flex justify-center items-center  bg-gray-500"
    >
      <div className="flex container mx-auto px-4 sm:px-6 lg:px-8 max-w-full flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10 h-auto md:h-screen">
        <div className=" md:space-y-0 md:space-x-10 h-auto md:h-screen">
          <div className="flex flex-col items-center justify-between space-y-8">
            <div className="flex flex-col justify-center items-center w-full max-w-screen-xl mx-auto ">
              {/* Título */}
              <h1 className="text-3xl font-bold mb-10 text-center text-white">
                Camiones Disponibles
              </h1>

              {/* Filtros y lógica */}
              <div className="w-full px-4">
                <TruckCarouselLogic onDataChange={handleDataChange} />
              </div>

              {/* Tarjetas */}
              <div className="w-full px-4 backdrop-blur-3xl bg-black p-6 bg-opacity-15 rounded-lg">
                <TruckCarouselDisplay cardsToShow={cardsToShow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckCarousel;
