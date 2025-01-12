import React, { useState } from "react";
import TruckCarouselLogic from "./TruckCarouselLogic";
import TruckCarouselDisplay from "./TruckCarouselDisplay";

const TruckCarousel = () => {
  const [cardsToShow, setCardsToShow] = useState([]);

  const handleDataChange = (filteredCards) => {
    setCardsToShow(filteredCards);
  };

  return (
    <div className="flex flex-col items-center justify-between p-6 space-y-8">
      <div className="flex flex-col justify-center items-center w-full max-w-screen-lg mx-auto py-10">
        {/* Título */}
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Camiones Disponibles
        </h1>

        {/* Filtros y lógica */}
        <div className="w-full px-4">
          <TruckCarouselLogic onDataChange={handleDataChange} />
        </div>

        {/* Tarjetas */}
        <div className="w-full px-4 backdrop-blur-3xl p-6 bg-black bg-opacity-15 rounded-lg">
          <TruckCarouselDisplay cardsToShow={cardsToShow} />
        </div>
      </div>
    </div>
  );
};

export default TruckCarousel;
