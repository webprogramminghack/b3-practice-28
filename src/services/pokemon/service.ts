import { api } from "../api";
import { pokemonService } from "./endpoints";

const getPokemonList = async (pageParams: number = 10) => {
  const response = await api.get(
    `${pokemonService.getPokemon}?limit=10&offset=${pageParams}`
  );
  const { data } = response;
  return { ...data, pageParams };
};

const pokemonServices = {
  getPokemonList,
};

export default pokemonServices;
