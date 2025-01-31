import React from "react";
import { motion } from "framer-motion";
import SocialButtons from "../SocialButtons/index";

const homeLogo = "/assets/Images/foto_home.png";

const HomeLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div
        id="inicio"
        className=" py-6 flex justify-center items-center bg-gradient-to-t from-[#0f172a] to-[#334155]  relative overflow-hidden"
      >
        <div className="flex container mx-auto px-4 sm:px-6 lg:px-8 max-w-full flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10 h-auto md:h-screen">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl  text-center font-medium text-transparent bg-clip-text bg-gradient-to-r text-white mb-8">
              <span className="text-black  "></span> EL MAN <br /> DE LOS
              CAMIONES
            </h1>

            <hr className="border-gray-300 mb-4 md:mb-8" />
            <p className="text-white mb-10 text-justify text-sm md:text-base">
              En{" "}
              <span className="text-blue-500 font-semibold">
                nuestra empresa
              </span>
              , nos enorgullece ofrecer una amplia gama de camiones de{" "}
              <span className="text-blue-500 font-semibold">alta calidad</span>{" "}
              diseñados para satisfacer todas tus necesidades de transporte. Con
              años de experiencia en la industria, entendemos la importancia de
              contar con vehículos confiables y eficientes que impulsen tu
              negocio.
            </p>

            <div className="flex justify-center">
              <a
                href="https://api.whatsapp.com/send/?phone=573005928483&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-12 md:px-16 py-3 md:py-4 bg-green-500 text-white text-base md:text-lg rounded-xl shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 relative group"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="absolute inset-0 rounded-xl bg-transparent border-4 border-green-400 opacity-30 group-hover:opacity-80 group-hover:shadow-[0_0_10px_#00FF00,0_0_20px_#00FF00,0_0_30px_#00FF00]"></span>
                <span className="relative z-10 flex items-center space-x-2">
                  <i className="fab fa-whatsapp mr-2"></i>
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Contáctanos por WhatsApp
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4">
            <div className="relative w-4/5 sm:w-3/4 md:max-w-[310px]">
              <img
                src={homeLogo}
                alt="Dueño"
                className="w-full h-auto rounded-lg shadow-[0px_3px_160px_15px_rgba(123,_155,_231,_0.93)] md:w-[310px] sm:w-[200px] xs:w-[150px]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 rounded-lg"></div>
            </div>
            <div className="w-full flex justify-center  md:mt-20">
              <SocialButtons />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeLayout;
