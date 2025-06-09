import React from 'react';
import type { PokemonInterface } from '../../../interfaces/pokemon';
import usePokemon from '../../../hooks/usePokemon';
import { Link } from 'react-router-dom';

const Card: React.FC<PokemonInterface> = ({ url }) => {
  const pokemonId = url.split('/').filter(Boolean).pop();
  const { pokemon } = usePokemon(pokemonId ?? '');

  return (
    <Link to={`/pokemon/${pokemonId}`}>
      <div className="w-[361px] h-[330px] text-accent-red flex flex-col items-center justify-center">
        <div>
          <img src={pokemon?.sprites.front_default} alt="" />
        </div>
        <p>{pokemon?.name}</p>
        {pokemon?.abilities.map((ability: any) => (
          <p key={ability.ability.name}>{ability.ability.name}</p>
        ))}
      </div>
    </Link>
  );
};

export default Card;
