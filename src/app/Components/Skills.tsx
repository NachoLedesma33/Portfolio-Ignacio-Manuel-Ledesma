import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import skills from "../data/skills.json";

const Skills: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen p-8 overflow-hidden">
      <h2 className="text-2xl font-bold text-red-500 text-center py-1">
        Habilidades Generales
      </h2>
      <div
        className="flex-grow overflow-y-auto p-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} 
      >
        <p className="text-1xl text-center mb-4 text-gray-300">
          Mis habilidades están basadas en torno a las siguientes tecnologías
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <Link
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2 bg-black bg-opacity-50 rounded-lg shadow-md"
            >
              <div className="relative w-16 h-16 mb-2 flex items-center justify-center">
                <Icon icon={skill.icon} className="w-12 h-12" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-300 text-center">
                {skill.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
