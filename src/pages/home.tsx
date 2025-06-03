import Navbar from "./navbar";
import pokemonTitle from "../assets/pokemon-title.svg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-accent-yellow relative h-500"
        style={{
          backgroundImage: "url('background-hero.png')",
          backgroundRepeat: "repeat",
        }}
      >
        <Navbar />

        <div className="flex flex-col items-center pt-35 justify-center text-center gap-3.5 mx-auto px-4 max-w-[686px]">
          <div>
            <img src={pokemonTitle} alt="pokemon-title" />
          </div>
          <h1 className="text-display-sm text-neutral-900 md:text-display-2xl font-bold">Discover the Most Powerful Pokémon in the Wild!</h1>
          <p className="text-sm font-medium md:text-md text-neutral-900">Train, Battle, and Collect Your Favorites!</p>
        </div>
      </div>
    </>
  );
};
export default Home;
