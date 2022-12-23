import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSearchBtn = () => {
    if (!search.trim()) return;
    navigate(`/product/search?search=${search}`);
  };

  return (
    <div className="hidden md:flex flex-row items-center w-full justify-between p-1 pl-2   bg-primaryLight rounded-lg">
      <FiSearch className="text-white font-bold text-2xl" />
      <input
        placeholder="Search..."
        className="bg-transparent outline-0 w-full text-white pl-1"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        className="bg-sapphire rounded-lg py-2 px-5 text-white font-fira"
        onClick={handleSearchBtn}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
