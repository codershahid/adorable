import { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import SearchForm from "./SearchForm";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <SearchForm
        location={location}
        setLocation={setLocation}
        animal={animal}
        setAnimal={setAnimal}
        breed={breed}
        setBreed={setBreed}
        doRequestPets={requestPets}
      />
      <SearchResult pets={pets} />
    </div>
  );
};

export default SearchParams;
