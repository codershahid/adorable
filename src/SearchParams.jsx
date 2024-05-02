import { useState, useDeferredValue, useMemo } from "react";
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
  const deferredPets = useDeferredValue(pets);
  const renderedPets = useMemo(() => <SearchResult pets={deferredPets} />, [deferredPets]);

  return (
    <div className="search-params">
      <SearchForm doSetRequestParams={setRequestParams} />
      {renderedPets}
    </div>
  );
};

export default SearchParams;
