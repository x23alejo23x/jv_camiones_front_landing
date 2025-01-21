import React from "react";
import SocialButtons from "../SocialButtons/index";

const homeLogo = "/assets/Images/foto_home.png";

const HomeLayout = () => {
  return (
    <div className="px-4 md:px-12 flex flex-col items-center justify-between py-6 space-y-8">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6988a7] via-[#7a9fb8] to-[#6988a7] mb-4">
            <span className="text-black "></span> JV CAMIONES
          </h1>

          <hr className="border-gray-300 mb-4 md:mb-8" />
          <p className="text-white mb-10 text-justify text-sm md:text-base">
            En <span className="text-blue-200 font-semibold">JV Camiones</span>,
            nos enorgullece ofrecer una amplia gama de camiones de{" "}
            <span className="text-yellow-500 font-semibold">alta calidad</span>{" "}
            diseñados para satisfacer todas tus necesidades de transporte. Con
            años de experiencia en la industria, entendemos la importancia de
            contar con vehículos confiables y eficientes que impulsen tu
            negocio.
          </p>

          <div className="flex justify-center">
            {" "}
            {/* Nuevo div para centrar */}{" "}
            <a
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 md:px-16 py-3 md:py-4 bg-green-500 text-white text-base md:text-lg rounded-xl shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 relative group"
            >
              {" "}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>{" "}
              <span className="absolute inset-0 rounded-xl bg-transparent border-4 border-green-400 opacity-30 group-hover:opacity-80 group-hover:shadow-[0_0_10px_#00FF00,0_0_20px_#00FF00,0_0_30px_#00FF00]"></span>{" "}
              <span className="relative z-10 flex items-center space-x-2">
                {" "}
                <i className="fab fa-whatsapp mr-2"></i>{" "}
                <span className="transition-all duration-500 group-hover:translate-x-1">
                  {" "}
                  Contáctanos por WhatsApp{" "}
                </span>{" "}
              </span>{" "}
            </a>{" "}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4">
          <div className="relative w-4/5 sm:w-3/4 md:max-w-[310px]">
            <img
              src={homeLogo}
              alt="Dueño"
              className="w-full h-auto rounded-lg shadow-[0px_3px_160px_15px_rgba(123,_155,_231,_0.93)] md:w-[310px] sm:w-[200px] xs:w-[150px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 rounded-lg"></div>
          </div>
          <div className="w-full flex justify-center mt-10 md:mt-20">
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
