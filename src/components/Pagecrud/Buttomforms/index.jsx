import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Buttomforms = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    image: "",
    urlFichaTecnica: "",
    feedback: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado con los siguientes datos:", formData);
    alert("Formulario enviado");
    setFormData({
      title: "",
      brand: "",
      image: "",
      urlFichaTecnica: "",
      feedback: "",
    });
    setFormVisible(false);
  };

  return (
    <div className="flex flex-col items-center h-auto p-4 ">
      <div className="w-full flex justify-end  mb-4">
        <button
          onClick={() => setFormVisible(true)}
          className="bg-green-500 text-white p-3 rounded-full"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {formVisible && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Formulario de Producto
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <input
                placeholder="Nombre Completo"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
              <input
                placeholder="Email"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="email"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                required
              />
              <select
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
              >
                <option value="product-1">Producto 1</option>
                <option value="product-2">Producto 2</option>
                <option value="product-3">Producto 3</option>
              </select>
              <input
                placeholder="Calificación (1-5)"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="number"
                name="urlFichaTecnica"
                value={formData.urlFichaTecnica}
                onChange={handleInputChange}
                required
              />
              <textarea
                placeholder="Comentarios"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500 transition ease-in-out duration-150"
                name="feedback"
                value={formData.feedback || ""}
                onChange={handleInputChange}
                required
              ></textarea>

              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-3 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              >
                Enviar
              </button>
            </form>
            <button
              onClick={() => setFormVisible(false)}
              className="text-red-500 mt-3 w-full text-center"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buttomforms;
