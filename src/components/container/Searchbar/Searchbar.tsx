import React from 'react';
import { useLocation } from 'react-router-dom';

const Searchbar: React.FC<any> = ({ keyword, setKeyword, handleSearch }) => {
  const { search } = useLocation();

  return (
    <form
      action=""
      className="h-[48px] w-[361px] bg-white rounded-full flex items-center justify-between px-4"
    >
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Pokemon"
        className="w-full mr-2 text-neutral-500"
        onChange={(e) => setKeyword(e.target.value)}
        defaultValue={keyword}
      />
      <div className="flex gap-2 items-center justify-center">
        {search.split('=').pop() !== '' && (
          <button
            onClick={() => setKeyword('')}
            className="w-[20px] h-[20px] rounded-full bg-neutral-400 flex justify-center items-center"
          >
            <p className="text-[10px] text-white">x</p>
          </button>
        )}
        <button
          onClick={handleSearch}
          className="w-[28px] h-[28px] rounded-full bg-secondary-300 flex justify-center items-center"
        >
          <img src="./icons/search.png" alt="search-icon" />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
