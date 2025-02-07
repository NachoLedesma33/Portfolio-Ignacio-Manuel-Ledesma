import React, { useState } from "react";
import Image from "next/image";
import certificatesData from "../data/certificates.json";

const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen p-12 text-gray-300 flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-4xl font-bold text-red-500 text-center py-1">Certificados</h2>
      <p className="text-xl mt-4 text-gray-400 mb-8">
        Algunos de mis certificados en estos años de desarrollo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedCertificate(cert.id)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={cert.image}
                alt={cert.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-red-300 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-400">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="bg-gray-800 p-4 rounded-lg max-w-3xl max-h-full overflow-auto">
            <Image
              src={
                certificatesData.find((cert) => cert.id === selectedCertificate)
                  ?.fullImage || ""
              }
              alt="Full Certificate"
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

export default Certificates;
