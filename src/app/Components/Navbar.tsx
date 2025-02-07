import React from "react";
import LinkedInIcon from "./Icons/LinkedInIcon";
import GitHubIcon from "./Icons/GitHubIcon";

interface NavbarProps {
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveTab }) => {
  return (
    <nav className="bg-gradient-to-b from-gray-800/80 via-gray-900/80 to-black/80 p-6 flex flex-col items-center justify-between min-h-screen w-48 rounded-lg shadow-lg backdrop-blur-lg">
      <div className="flex flex-col space-y-4 mt-4">
        {[
          "Inicio",
          "Sobre Mi",
          "Habilidades",
          "Proyectos",
          "Contacto",
          "Certificados",
        ].map((tab) => (
          <button
            type="button"
            key={tab}
            className="text-red-400 hover:text-red-100 transition duration-300 transform-gpu hover:scale-110 hover:shadow-lg hover:shadow-red-900/50 text-lg font-semibold px-4 py-2 rounded-md"
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-8">
        <div className="flex items-center space-x-4 mb-2 justify-center">
          <LinkedInIcon />
          <GitHubIcon />
        </div>
        <h3 className="text-white text-lg font-bold">Mis Redes</h3>
      </div>
    </nav>
  );
};

export default Navbar;
