import { useParams } from 'react-router-dom';
import usePokemon from '../../../hooks/usePokemon';

const DetailView = () => {
  const { id: pokemonId } = useParams();
  const { pokemon, isLoadingPokemon } = usePokemon(pokemonId ?? '');

  if (isLoadingPokemon) return <p className="text-center mt-8">Loading...</p>;
  if (!pokemon) return <p className="text-center mt-8">No data found.</p>;
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 font-sans text-neutral-900">
      <button
        className="text-sm text-gray-500 mb-4 cursor-pointer hover:text-gray-700 transition-colors"
        onClick={() => {
          if (window.history.length > 1) {
            window.history.back(); // Kembali ke halaman sebelumnya
          } else {
            window.location.href = '/'; // Fallback ke halaman utama
          }
        }}
      >
        ← Back
      </button>
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={pokemon?.sprites?.other?.['official-artwork'].front_default}
          alt={pokemon?.name}
          className="w-64 h-64 object-contain mx-auto"
        />
        <div className="flex-1">
          <h2 className="text-sm text-gray-500">
            {String(pokemon?.id).padStart(3, '0')}
          </h2>
          <h1 className="text-4xl text-neutral-900 font-bold capitalize">
            {pokemon?.name}
          </h1>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">Type</p>
              <div className="flex gap-2">
                {pokemon?.types.map((type: any, index: number) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-sm bg-gray-100 text-neutral-900 rounded capitalize"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">Abilities</p>
              <div className="flex gap-2 flex-wrap">
                {pokemon?.abilities.map((ability: any, index: number) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-sm bg-gray-100 text-neutral-900 rounded capitalize"
                  >
                    {ability.ability.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p>Size</p>
              <div>
                <div>
                  <img src="" alt="" />
                  <p className="text-sm text-gray-400 mb-1">Weight</p>
                </div>
                <p className="text-lg font-bold">{pokemon?.weight}</p>
              </div>
              <div>
                <div>
                  <img src="" alt="" />
                  <p className="text-sm text-gray-400 mb-1">Height</p>
                </div>
                <p className="text-lg font-bold">{pokemon?.height}</p>
              </div>
            </div>
            <div>
              <p>Artwork</p>
              <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-400 mt-12">
        ©2025 Pokedex
      </footer>
    </div>
  );
};

export default DetailView;
