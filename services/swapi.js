// services/swapi.js
export const fetchStarWarsData = async (endpoint) => {
  const res = await fetch(`https://starwars-databank-server.vercel.app/api/v1/${endpoint}`);
  if (!res.ok) {
    throw new Error('Erro ao buscar dados');
  }
  return res.json();
};