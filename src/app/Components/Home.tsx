import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen p-12 text-red-200 flex flex-col lg:flex-row justify-center items-center rounded-lg">
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-5 text-red-800">
          Ledesma Ignacio Manuel
        </h1>
        <h2 className="text-2xl font-bold mb-5 text-red-300">
          Desarrollador Web Full Stack
        </h2>
        <p className="text-xl text-red-100 text-justify lg:text-left">
          Soy un apasionado programador web con enfoque en el desarrollo de
          aplicaciones modernas,{" "}
          <b className="text-red-500">pricipalmente en JavaScript</b>.
        </p>
      </motion.div> 

      <motion.div
        className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 lg:ml-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-80 h-[26rem] overflow-hidden rounded-full border-2 border-red-100 shadow-lg">
          <Image
            src="/profile.jpg"
            alt="Ledesma Ignacio"
            width={700}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
