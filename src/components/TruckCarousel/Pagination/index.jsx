import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  cardsPerPage,
  filteredCards,
}) => {
  return (
    <div className="flex justify-center mt-4 mb-4">
      {/* Flecha izquierda */}
      <button
        onClick={onPrev}
        disabled={currentPage === 0}
        className="text-white px-4 py-2 rounded-l-lg flex items-center justify-center hover:bg-gray-800 transition duration-200 ease-in-out"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {/* Página actual */}
      <div className="mx-4 text-white font-semibold">
        Página {currentPage + 1} de {totalPages}
      </div>

      {/* Flecha derecha */}
      <button
        onClick={onNext}
        disabled={(currentPage + 1) * cardsPerPage >= filteredCards.length}
        className="text-white px-4 py-2 rounded-r-lg flex items-center justify-center hover:bg-gray-800 transition duration-200 ease-in-out"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
