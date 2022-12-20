import React from "react";

const SearchInput = () => {
  return (
    <div className="search-bar">
      <form>
        <input type="text" placeholder="Search" />
        <button>
          <span className="material-symbols">search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
