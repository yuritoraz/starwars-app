"use client";

import { useState } from "react";
import Creatures from "@/components/cards/Creatures";

const Criaturas = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="text-center mt-6">
        <input 
          type="text"
          placeholder="Buscar Criaturas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-center text-black bg-gray-300 rounded-xl p-2 w-96 placeholder-gray-500"
        />
      </div>
      {/* Passando o searchTerm para o componente Characters */}
      <Creatures searchTerm={searchTerm} />
    </div>
  );
};

export default Criaturas;
