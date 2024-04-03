import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchResult from "./SearchResult";
import SearchForm from "./SearchForm";
import fetchPets from "./fetchPets";

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const results = useQuery(["search", requestParams], fetchPets);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <SearchForm doSetRequestParams={setRequestParams} />
      <SearchResult pets={pets} />
    </div>
  );
};

export default SearchParams;
