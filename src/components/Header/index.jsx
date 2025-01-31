import React from "react";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const headerLogo = "/assets/Images/logoheader.png";

const Header = () => {
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate("/Login");
  };
  return (
    <header className=" bg-white bg-gradient-to-r from-[#0f172a]  to-[#334155]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-start flex-1">
            <span className="sr-only">Home</span>
            <img
              src={headerLogo}
              alt="Camiones"
              className="h-12 w-auto cursor-pointer"
              onClick={() =>
                (window.location.href = "https://elmandeloscamiones.com/")
              }
              style={{ filter: "invert(1)" }}
            />
          </div>

          <div className="hidden md:flex md:items-center md:gap-12 flex-1 justify-center">
            <nav aria-label="Global" className="relative">
              <span className="inline-flex overflow-hidden rounded-md border shadow-sm">
                <a
                  href="#inicio"
                  className="inline-block border-e px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:relative relative group"
                >
                  Incio
                </a>
                <a
                  href="#productos"
                  className="inline-block border-e px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:relative relative group"
                >
                  Productos
                </a>
                <a
                  href="#Contactanos"
                  className="inline-block border-e px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:relative relative group"
                >
                  Contactanos
                </a>
                <a
                  href="#Nosotros"
                  className="inline-block px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:relative relative group"
                >
                  Nosotros
                </a>
              </span>
            </nav>
          </div>

          <div className="flex items-center justify-end flex-1">
            <div className="relative">
              <FontAwesomeIcon
                icon={faTruckFast}
                className="text-3xl text-white cursor-pointer"
                onClick={handleIconClick}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
