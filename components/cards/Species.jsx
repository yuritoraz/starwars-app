"use client";
import { useEffect, useState } from "react";
import SpeciesCard from "./SpeciesCard";
import { Skeleton } from "@heroui/react";

const Species = ({ searchTerm = "" }) => {
  const [species, setSpecies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllSpecies = async () => {
      try {
        let allSpecies = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const response = await fetch(
            `https://starwars-databank-server.vercel.app/api/v1/species?page=${page}&limit=50`
          );
          const data = await response.json();

          if (!data.data){
            throw new Error("Nenhum dado econtrado");
          }
          allSpecies = [...allSpecies, ...data.data];
          // Verifica se há mais páginas
          hasMore = data.info.next !== null;
          page++;
        }

        setSpecies(allSpecies);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllSpecies();
  }, []);

  if (error)
    return (
      <div className="text-center mt-4 text-red-500">
        Erro ao carregar dados: {error}
      </div>
    );

  // Filtro de busca
  const filteredSpecies = species.filter((specie) =>
    specie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid justify-center">
      <div className="grid xl:grid-cols-4 mt-12 pl-8 pr-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {isLoading
          ? // Renderiza skeletons enquanto carrega os dados
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <Skeleton className="w-[400px] h-[250px] rounded-lg" />
                <Skeleton className="w-[200px] h-6 rounded" />
              </div>
            ))
          : // Renderiza os personagens reais
            filteredSpecies.length > 0 ? (
              filteredSpecies.map((specie) => (
                <SpeciesCard
                  key={specie._id}
                  species={{
                    ...specie,
                    imageUrl: specie.image,
                  }}
                />
              ))
            ) : (
              <div className="text-red-500 text-center">
                Nenhum personagem encontrado
              </div>
            )}
      </div>
    </div>
  );
};

export default Species;
