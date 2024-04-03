import { useState } from "react";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchForm = ({ doSetRequestParams }) => {
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const fromData = new FormData(event.target);
        const obj = {
          animal: animal ?? "",
          breed: fromData.get("breed") ?? "",
          location: fromData.get("location") ?? "",
        };
        doSetRequestParams(obj);
      }}
    >
      <label htmlFor="location">
        <p>Location</p>
        <input name="location" id="location" placeholder="Location" />
      </label>
      <label htmlFor="animal">
        <p>Animal</p>
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option>none</option>
          {ANIMALS.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="breed">
        <p>Breed</p>
        <select id="breed" name="breed" disabled={breeds.length === 0}>
          <option value={""}>Select</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
