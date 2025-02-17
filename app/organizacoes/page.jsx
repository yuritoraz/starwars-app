"use client";

import { useState } from "react";
import Organizations from '@/components/cards/Organizations';

const Organizacoes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="text-center mt-6">
        <input 
          type="text"
          placeholder="Buscar Organizações..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-center text-black bg-gray-300 rounded-xl p-2 w-96 placeholder-gray-500"
        />
      </div>
      {/* Passando o searchTerm para o componente Characters */}
      <Organizations searchTerm={searchTerm} />
    </div>
  );
};

export default Organizacoes;
