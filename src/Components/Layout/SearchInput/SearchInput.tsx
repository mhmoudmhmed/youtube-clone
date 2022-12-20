import React, { FC } from "react";

type Props = {
  term: string;
  setTerm: any;
  handleSubmit: (termFromSearchBar: string) => Promise<void>;
};

const SearchInput: FC<Props> = ({ term, setTerm, handleSubmit }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    handleSubmit(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <button>
          <span className="material-symbols">search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
