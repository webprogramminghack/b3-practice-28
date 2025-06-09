import { CardSearch } from '../../container/Card';
import useSearch from './useSearch';

const SearchView = () => {
  const { pokemon, pokemonLoading, pokemonError, keyword } = useSearch();

  return (
    <>
      {pokemonLoading ? (
        <div className="text-black mt-[76px]">Loading</div>
      ) : (
        <div className="text-black mt-[76px] p-4">
          <p className="text-lg font-semibold pb-4">
            {pokemonError
              ? `No results found for for "${keyword}"`
              : `Search Result for "${keyword}"`}
          </p>
          {pokemonError ? (
            <>
              <img className="mx-auto" src="./not-found.png" alt="" />
            </>
          ) : (
            <CardSearch pokemon={pokemon} />
          )}
        </div>
      )}
    </>
  );
};

export default SearchView;
