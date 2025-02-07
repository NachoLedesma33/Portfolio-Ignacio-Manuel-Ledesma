import React, { JSX, useEffect, useState } from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import Certificates from "./Certificates";

interface ContentProps {
  activeTab: string;
}

const tabMap: Record<string, JSX.Element> = {
  "Inicio": <Home />,
  "Sobre Mi": <AboutMe />,
  "Habilidades": <Skills />,
  "Proyectos": <Projects />,
  "Contacto": <ContactMe />,
  "Certificados": <Certificates />,
};

const Content: React.FC<ContentProps> = ({ activeTab }) => {
  const [currentTab, setCurrentTab] = useState<string>("Inicio");
  const [transitioning, setTransitioning] = useState<boolean>(false);

  useEffect(() => {
    if (currentTab !== activeTab) {
      setTransitioning(true);
      const timer = setTimeout(() => {
        setCurrentTab(activeTab);
        setTransitioning(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [activeTab, currentTab]);

  return (
    <div className="flex-grow flex items-center justify-center p-4 relative overflow-hidden ml-8">
      <div className={`absolute w-full h-full rounded-lg shadow-lg transition-opacity duration-500 ease-in-out bg-gradient-to-r from-black via-red-900 to-black text-white ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
        style={{ overflow: "hidden", maxHeight: "calc(100vh)" }}
      >
        <div
          className="hidden-scroll"
          style={{ overflowY: "auto", height: "100%" }}
        >
          {tabMap[currentTab]}
        </div>
      </div>
    </div>
  );
};

export default Content;
