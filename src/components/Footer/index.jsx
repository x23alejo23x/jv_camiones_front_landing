import React from "react";
const headerLogo = "/assets/Images/logoheader.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Imagen en la izquierda */}
        <div className="flex justify-center md:justify-start">
          <img
            src={headerLogo}
            alt="Camiones"
            className="h-12 w-auto"
            style={{ filter: "invert(1)" }}
          />
        </div>

        {/* Texto centrado */}
        <div className="text-center">
          <p className="text-sm">
            &copy; 2025 El man de los camiones. Todos los derechos reservados.
          </p>
        </div>

        {/* Íconos de redes sociales a la derecha */}
        <div className="flex justify-center md:justify-end">
          <ul className="flex space-x-4">
            {/* Botón de Facebook */}
            <li
              className="group relative rounded-full w-12 h-12 text-lg flex justify-center items-center shadow-lg cursor-pointer transition-all duration-200 hover:bg-blue-600"
              onClick={() => window.open("https://www.facebook.com/profile.php?id=61553250650418", "_blank")}
            >
              <span className="absolute bottom-full mb-2 text-sm bg-black text-white px-2 py-1 rounded-md shadow-lg opacity-0 transition-all duration-200 group-hover:opacity-100">
                Facebook
              </span>
              <i className="fab fa-facebook-f text-blue-600 group-hover:text-white"></i>
            </li>

            {/* Botón de TikTok */}
            <li
              className="group relative rounded-full w-12 h-12 text-lg flex justify-center items-center shadow-lg cursor-pointer transition-all duration-200 hover:bg-slate-800"
              onClick={() => window.open("https://www.tiktok.com/@josecamionesv?_t=ZS-8tU2576dUw5&_r=1", "_blank")}
            >
              <span className="absolute bottom-full mb-2 text-sm bg-black text-white px-2 py-1 rounded-md shadow-lg opacity-0 transition-all duration-200 group-hover:opacity-100">
                TikTok
              </span>
              <i className="fa-brands fa-tiktok hover:text-[#282828] group-hover:text-white"></i>
            </li>

            {/* Botón de Instagram */}
            <li
              className="group relative rounded-full w-12 h-12 text-lg flex justify-center items-center shadow-lg cursor-pointer transition-all duration-200 hover:bg-pink-500"
              onClick={() => window.open("https://www.instagram.com/elmadeloscamiones/", "_blank")}
            >
              <span className="absolute bottom-full mb-2 text-sm bg-black text-white px-2 py-1 rounded-md shadow-lg opacity-0 transition-all duration-200 group-hover:opacity-100">
                Instagram
              </span>
              <i className="fab fa-instagram text-pink-500 group-hover:text-white"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
