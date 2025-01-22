import React from "react";
import Product from "./Productcrud";
import Header from "./Headercrud";
import Buttomforms from "./Buttomforms";

const Pagecrud = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="text-center my-6">
        <h1 className="text-3xl font-bold text-gray-800">Título Centrado</h1>
        <p className="text-gray-600 mt-2">
          Este es un párrafo centrado que describe brevemente la sección.
        </p>
      </div>

      <div className="flex justify-end pr-6 ">
        <Buttomforms />
      </div>

      <div>
        <Product />
      </div>
    </div>
  );
};

export default Pagecrud;
