import React from "react";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const headerLogo = "/assets/Images/logo-header.png";

const Header = () => {
  return (
    <header className=" bg-white bg-gradient-to-r from-[#0f172a]  to-[#334155]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-start flex-1">
            <span className="sr-only">Home</span>
            <img
              src={headerLogo}
              alt="Camiones"
              className="h-12 w-auto"
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
                  First
                </a>
                <a
                  href="#productos"
                  className="inline-block border-e px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:relative relative group"
                >
                  Second
                </a>
                <a
                  href="#sobreNosotros"
                  className="inline-block border-e px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:relative relative group"
                >
                  Third
                </a>
                <a
                  href="#Recommendations"
                  className="inline-block px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:relative relative group"
                >
                  Fourth
                </a>
              </span>
            </nav>
          </div>

          {/* User Profile / Icon Section */}
          <div className="flex items-center justify-end flex-1">
            <div className="relative">
              <FontAwesomeIcon
                icon={faTruckFast}
                className="text-3xl text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
