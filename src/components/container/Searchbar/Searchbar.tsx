import React from "react";

const Searchbar: React.FC = () => {
  return (
    <div className="h-[48px] w-[361px] mt-4 bg-white rounded-full flex items-center justify-between px-4">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Pokemon"
        className="w-full mr-2 text-neutral-500"
      />
      <button className="w-[28px] h-[28px] rounded-full bg-secondary-300 flex justify-center items-center">
        <img src="./icons/search.png" alt="search-icon" />
      </button>
    </div>
  );
};

export default Searchbar;
