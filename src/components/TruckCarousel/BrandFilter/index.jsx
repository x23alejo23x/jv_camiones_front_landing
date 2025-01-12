import React from "react";

const BrandFilter = ({ uniqueBrands, handleBrandChange }) => {
  return (
    <nav aria-label="Global" className="relative">
      <span className="inline-flex overflow-hidden rounded-md border shadow-sm">
        <button
          onClick={() => handleBrandChange("")}
          className="inline-block px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 border-r focus:outline-none"
        >
          Todos
        </button>
        {uniqueBrands.map((brand, index) => (
          <button
            key={index}
            onClick={() => handleBrandChange(brand)}
            className={`px-4 py-2 text-sm font-medium  text-white hover:bg-gray-500 focus:outline-none ${
              index !== uniqueBrands.length - 1 ? "border-r" : ""
            }`}
          >
            {brand}
          </button>
        ))}
      </span>
    </nav>
  );
};

export default BrandFilter;
