/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPokemons } from "./helper";
import { useInView } from "react-intersection-observer";

const useHome = () => {
  // const location = useLocation()
  // const navigate = useNavigate()

  const {
    data: pokemonData,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["pokemon-list"],
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

  const pokemons = pokemonData?.pages.flatMap((page: any) => page.results);

  return {
    pokemons,
    isLoading,
    ref,
    isFetchingNextPage,
    hasNextPage,
  };
};

export default useHome;
