import { useParams } from 'react-router-dom';
import usePokemon from '../../../hooks/usePokemon';

const DetailView = () => {
  const { id: pokemonId } = useParams();
  const { pokemon } = usePokemon(pokemonId ?? '');
  console.log(pokemon);
  return <div className="text-black mt-[72px]">DetailView</div>;
};

export default DetailView;
