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

      <div className="text-center my-6 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-blue-900 transition-transform transform hover:scale-105">
          ADMINISTRADOR DE PRODUCTOS
        </h1>
        <p className="text-lg text-gray-900 dark:text-gray-800 mt-3 max-w-2xl mx-auto">
          Gestiona los productos de la web{" "}
          <span className="font-semibold text-blue-600">jvcamiones</span>. Aquí
          puedes crear y eliminar productos con facilidad.
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
