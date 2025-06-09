/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPokemons } from './helper';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useHome = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const {
    data: pokemonData,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['pokemon-list'],
    queryFn: ({ pageParam }) => getPokemons(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.pageParams + 10;
    },
  });

  const { ref } = useInView({
    threshold: 0,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?name=${keyword}`);
  };

  const pokemons = pokemonData?.pages.flatMap((page: any) => page.results);

  return {
    pokemons,
    isLoading,
    ref,
    isFetchingNextPage,
    hasNextPage,
    setKeyword,
    handleSearch,
  };
};

export default useHome;
