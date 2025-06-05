import React from "react";
import type { PokemonInterface } from "../../../interfaces/pokemon";

const Card: React.FC<PokemonInterface> = ({ name, url }) => {
  console.log(url);
  return (
    <div className="text-red-500">
      <p>{name}</p>
    </div>
  );
};

export default Card;
