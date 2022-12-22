import React, { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
  handleSubmit: (termFromSearchBar: string) => Promise<void>;
};

const SearchInput: FC<Props> = ({ handleSubmit }) => {
  const [term, setTerm] = useState<string>("");
  const [params, setParams] = useSearchParams();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    handleSubmit(term);
    if (term) {
      params.set(`search_query`, term);
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
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
