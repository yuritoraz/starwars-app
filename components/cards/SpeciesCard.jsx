"use client";

import { useState } from 'react';

const SpeciesCard = ({ species }) => {
  if (!species || !species.imageUrl) {
    return null;
  }
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };

  return (
    <div className="relative cursor-pointer transition-all duration-300 hover:scale-105">
      <img
        src={species.imageUrl}
        alt={species.name}
        className={`sm:w-48 sm:h-36 md:w-56 md:h-62 lg:w-60 lg:h-40 xl:w-[400px] xl:h-[250px] rounded-lg ${showInfo ? 'blur-xl opacity-10' : ''}`}
      />
      <div className="grid text-lg items-center absolute inset-0 bg-black bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg overflow-hidden">
        <div className=''>
          <h2 className="px-4 text-center text-2xl font-bold text-yellow-300 mb-2">{species.name}</h2>
          <p className='px-6 text-blue-300 text-[8px] text-justify justify-center'>{species.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeciesCard;
