// import { useLocation, useNavigate } from "react-router-dom";
import pokemonTitle from "../../../assets/pokemon-title.svg";
import type { PokemonInterface } from "../../../interfaces/pokemon";
import Card from "../../container/Card";
import Searchbar from "../../container/Searchbar";
import useHome from "./useHome";

const HomeView: React.FC = () => {
  const { pokemons, isLoading, ref, isFetchingNextPage, hasNextPage } =
    useHome();

  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-accent-yellow relative"
        style={{
          backgroundImage: "url('background-hero.png')",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="flex flex-col items-center pt-35 justify-center text-center gap-3.5 mx-auto px-4 max-w-[686px]">
          <div>
            <img src={pokemonTitle} alt="pokemon-title" />
          </div>
          <h1 className="text-display-sm text-neutral-900 md:text-display-2xl font-bold">
            Discover the Most Powerful Pokémon in the Wild!
          </h1>
          <p className="text-sm font-medium md:text-md text-neutral-900">
            Train, Battle, and Collect Your Favorites!
          </p>
          <Searchbar />
        </div>
        <div>
          <img
            src="./hero-right-pokemon.png"
            alt=""
            className="absolute right-0 z-0"
          />
          <img src="mobile-cloud.png" alt="" className="w-full relative z-1" />
        </div>
      </div>
      {/* pokemon list section */}
      <div className="px-4 mt-4">
        <h1 className="text-display-sm text-neutral-900 md:text-display-2xl font-bold">
          List Pokemon
        </h1>
        {!isLoading &&
          pokemons?.map((pokemon: PokemonInterface) => (
            <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
      </div>
      {/* infinite scroll trigger */}
      <div ref={ref} className="h-10 flex justify-center items-center">
        {isFetchingNextPage && (
          <div className="text-gray-400">Loading more pokemons...</div>
        )}
        {!hasNextPage && (
          <div className="text-gray-400">No more pokemons to load</div>
        )}
      </div>
    </>
  );
};
export default HomeView;
