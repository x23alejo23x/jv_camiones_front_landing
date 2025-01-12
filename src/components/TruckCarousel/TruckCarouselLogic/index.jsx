import React, { useState, useEffect, useMemo } from "react";
import data from "../data.json";
import TruckCarouselDisplay from "../TruckCarouselDisplay";
import BrandFilter from "../BrandFilter";
import Pagination from "../Pagination";

const TruckCarouselLogic = ({ onDataChange }) => {
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const { carBrands } = data;

  const uniqueBrands = Array.from(new Set(carBrands.map((item) => item.brand)));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const filtered = selectedBrand
      ? carBrands.filter((card) => card.brand === selectedBrand)
      : carBrands;
    setFilteredCards(filtered);
    setCurrentPage(0);
  }, [selectedBrand, carBrands]);

  const cardsToShow = useMemo(() => {
    const startIndex = currentPage * cardsPerPage;
    return filteredCards.slice(startIndex, startIndex + cardsPerPage);
  }, [filteredCards, currentPage, cardsPerPage]);

  useEffect(() => {
    if (typeof onDataChange === "function") {
      onDataChange(cardsToShow);
    }
  }, [cardsToShow, onDataChange]);

  const handleNext = () => {
    if ((currentPage + 1) * cardsPerPage < filteredCards.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Filtros por marca */}
      <BrandFilter
        uniqueBrands={uniqueBrands}
        selectedBrand={selectedBrand}
        handleBrandChange={handleBrandChange}
      />

      {/* Contenedor de flechas y tarjetas */}
      <div className="relative flex justify-center items-center w-full overflow-hidden">
        {/* Flechas laterales */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="absolute left-0 text-white px-4 py-2 flex items-center justify-center hover:bg-gray-800 transition duration-200 ease-in-out"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="flex justify-center items-center w-full max-w-[90%] md:max-w-[70%] gap-4">
          <TruckCarouselDisplay cards={cardsToShow} />
        </div>

        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * cardsPerPage >= filteredCards.length}
          className="absolute right-0 text-white px-4 py-2 flex items-center justify-center hover:bg-gray-800 transition duration-200 ease-in-out"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Paginación debajo de las tarjetas */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrev={handlePrev}
        cardsPerPage={cardsPerPage}
        filteredCards={filteredCards}
      />
    </div>
  );
};

export default TruckCarouselLogic;
