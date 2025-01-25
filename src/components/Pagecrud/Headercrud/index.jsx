import React from "react";
const headerLogo = "/assets/Images/logoheader.png";


const Headercrud = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-[#0f172a]  to-[#334155] text-white">
     <img
              src={headerLogo}
              alt="Camiones"
              className="h-12 w-auto cursor-pointer"
              onClick={() =>
                (window.location.href = "https://elmandeloscamiones.com/")
              }
              style={{ filter: "invert(1)" }}
            />
    </header>
  );
};

export default Headercrud;
