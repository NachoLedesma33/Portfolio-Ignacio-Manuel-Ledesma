import React, { useState } from "react";
import Image from "next/image";
import projectsData from "../data/projects.json";

interface Project {
  id: number;
  title: string;
  description: string;
  language: string;
  technologies: string[];
  image: string;
  fullImage: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  const filteredProjects =
    selectedLanguage === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.language === selectedLanguage);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen p-12 text-gray-300 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-red-500 text-center py-1">
        Proyectos
      </h2>
      <p className="text-xl mt-5 text-gray-400 mb-9">
        Estos son algunos de mis proyectos mas destacados realizados utilizando diferentes tecnologías.
      </p>

      <div className="mb-4">
        <label htmlFor="languageFilter" className="text-gray-400">
           Lenguaje:
        </label>
        <select
          id="languageFilter"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="ml-2 bg-gray-700 text-gray-300 p-2 rounded"
        >
          <option value="All">Todos</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj: Project) => (
          <div
            key={proj.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedProject(proj.id)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={proj.image}
                alt={proj.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-red-300 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-400 mb-2">{proj.description}</p>
              <p className="text-gray-500">
                <span className="font-bold text-gray-300">Lenguaje: </span>
                {proj.language}
              </p>
              <p className="text-gray-500">
                <span className="font-bold text-gray-300">Tecnologías: </span>
                {proj.technologies.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div className="bg-gray-800 p-4 rounded-lg max-w-3xl max-h-full overflow-auto">
            <Image
              src={
                projectsData.find((proj) => proj.id === selectedProject)
                  ?.fullImage || ""
              }
              alt="Full Project"
              width={800}
              height={600}
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
