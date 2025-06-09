import { useQuery } from '@tanstack/react-query';
import pokemonServices from '../services/pokemon/service';
import { useCallback } from 'react';

const usePokemon = (id: string) => {
  const getDetailPokemon = useCallback(async () => {
    try {
      return await pokemonServices.getDetailPokemon(id);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const {
    data: pokemon,
    isLoading: isLoadingPokemon,
    isError: isErrorPokemon,
    error: errorPokemon,
  } = useQuery({
    queryFn: getDetailPokemon,
    queryKey: ['pokemon-detail', id],
  });

  return { pokemon, isLoadingPokemon, isErrorPokemon, errorPokemon };
};

export default usePokemon;
