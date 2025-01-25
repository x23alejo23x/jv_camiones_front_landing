import React, { useState, useEffect } from "react";
import { Apiurl } from "../../../serve";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Productcrud = () => {
  const [carBrands, setCarBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarBrands = async () => {
      const url = Apiurl;
      console.log("API  URL:", Apiurl);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error fetching products");
        }

        const jsonResponse = await response.json();

        if (
          jsonResponse.status === "success" &&
          Array.isArray(jsonResponse.data)
        ) {
          setCarBrands(jsonResponse.data);
        } else {
          throw new Error("Estructura de JSON inesperada.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCarBrands();
  }, []);

  const handleDelete = async (id) => {
    const deleteUrl = process.env.REACT_APP_API_URL_DELETE;
    try {
      const response = await fetch(`${deleteUrl}?id=${id}`, {
        method: "DELETE", 
      });
      if (!response.ok) {
        throw new Error("Error eliminando el producto");
      }
      
      const jsonResponse = await response.json();
      if (jsonResponse.status === "success") {
        setCarBrands(carBrands.filter((car) => car.id !== id));
        toast.error("Producto eliminado exitosamente.");
      } else {
        throw new Error("Error en la respuesta de la API");
      }
    } catch (err) {
      setError(err.message);
      toast.warn(err.message || "Hubo un problema al eliminar el producto.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-full max-w-[90%] md:max-w-[80%] lg:max-w-[90%] gap-4">
        {loading ? (
          <p>Cargando productos...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="overflow-x-auto w-full bg-gray-500 p-8 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {carBrands.map((car) => (
                <div
                  key={car.id}
                  className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-900 shadow-md m-4"
                >
                  <div className="relative overflow-hidden rounded-lg bg-blue-gray-900 bg-clip-border text-white bg-gray-900">
                    <p className="block text-center leading-relaxed ">{car.brand}</p>
                    <img
                      src={car.image}
                      alt={car.title}
                      className="w-full h-64 object-cover "
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 block font-sans text-center text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {car.title}
                    </h5>
                  </div>
                  <div className="p-4 pt-0 flex justify-center">
                    <button
                      className="bg-red-500 text-white py-2 px-24 rounded-lg"
                      onClick={() => handleDelete(car.id)} 
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          closeButton={false}
          newestOnTop
          rtl={false}
          limit={1}
        />
      </div>
    </div>
  );
};

export default Productcrud;
