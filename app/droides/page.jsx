"use client";

import { useState } from "react";
import Droids from '@/components/cards/Droids';

const Droides = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="text-center mt-6">
        <input 
          type="text"
          placeholder="Buscar dróides..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-center text-black bg-gray-300 rounded-xl p-2 w-96 placeholder-gray-500"
        />
      </div>
      {/* Passando o searchTerm para o componente Characters */}
      <Droids searchTerm={searchTerm} />
    </div>
  );
};

export default Droides;
