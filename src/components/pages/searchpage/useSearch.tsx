import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPokemonByName } from './helper';
import { useQuery } from '@tanstack/react-query';

const useSearch = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const initialQuery = params.get('name') ?? '';

  const [query, setQuery] = useState(initialQuery);
  const [keyword, setKeyword] = useState(initialQuery);

  useEffect(() => {
    navigate(`?name=${query}`);
  }, [query, navigate]);

  const getPokemonList = useCallback(async () => {
    const response = await getPokemonByName(query);
    return response;
  }, [query]);

  const {
    data: pokemon,
    isError: pokemonError,
    isLoading: pokemonLoading,
  } = useQuery({
    queryFn: getPokemonList,
    queryKey: ['pokemon-list', query],
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(keyword);
  };

  return {
    pokemon,
    pokemonLoading,
    pokemonError,
    keyword,
    setKeyword,
    handleSearch,
  };
};

export default useSearch;
