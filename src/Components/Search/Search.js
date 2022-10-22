import React from "react";
import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <div className="flex flex-row items-center w-9/12 justify-between p-1 pl-2   bg-primaryLight rounded-lg">
      <FiSearch className="text-white font-bold text-2xl" />
      <input
        placeholder="Search..."
        className="bg-transparent outline-0 w-full text-white pl-1"
      />
      <button className="bg-sapphire rounded-lg py-2 px-5 text-white font-fira">
        Search
      </button>
    </div>
  );
};

export default Search;
