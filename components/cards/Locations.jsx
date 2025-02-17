"use client";
import { useEffect, useState } from 'react';
import LocationsCard from './LocationsCard';
import { Skeleton } from "@heroui/react";

const Locations = ({ searchTerm = "" }) => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllLocations = async () => {
      try {
        let allLocations = [];
        let page = 1;
        let hasMore = true;

        // Loop para buscar todas as páginas
        while (hasMore) {
          const response = await fetch(`https://starwars-databank-server.vercel.app/api/v1/locations?page=${page}&limit=50`);
          const data = await response.json();

          if (!data.data){
            throw new Error("Nenhum dado econtrado");
          }
          
          allLocations = [...allLocations, ...data.data];

          // Verifica se há mais páginas
          hasMore = data.info.next !== null; 
          page ++;
        }

        setLocations(allLocations);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchAllLocations();
  }, []);

  if (error)
    return (
      <div className="text-center mt-4 text-red-500">
        Erro ao carregar dados: {error}
      </div>
    );

  // Aplicando o filtro de busca
  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          :
        filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <LocationsCard
              key={location._id}
              locations={{
                ...location,
                imageUrl: location.image,
              }}
            />
          ))
        ) : (
          <div className="text-red-500 text-center">Nenhuma localização encontrada</div>
        )}
      </div>
    </div>
  );
};

export default Locations;
