export const fetchCharacters = async () => {
  const endpoint = "https://rickandmortyapi.com/api/character";

  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
};
