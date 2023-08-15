// hooks/useHarryPotterCharacters.ts
import { useState, useEffect } from "react";
import axios from "axios";

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
  };
}

const useRickMortyCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        console.log(response.data.results);
        setCharacters(response.data.results);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { characters, isLoading, error };
};

export default useRickMortyCharacters;
