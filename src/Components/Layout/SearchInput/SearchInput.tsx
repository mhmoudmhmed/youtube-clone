import React, { FC } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
  term: string;
  setTerm: any;
  handleSubmit: (termFromSearchBar: string) => Promise<void>;
};

const SearchInput: FC<Props> = ({ term, setTerm, handleSubmit }) => {
  const [params, setParams] = useSearchParams();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    handleSubmit(term);
    if (term) {
      params.set(`?search_query`, term);
      setParams(params);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e);
          }}
        />
        <button>
          <span className="material-symbols">search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
