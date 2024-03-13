import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchForm = ({
  location,
  setLocation,
  animal,
  setAnimal,
  breed,
  setBreed,
  doRequestPets,
}) => {
  const [breeds] = useBreedList(animal);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        doRequestPets();
      }}
    >
      <label htmlFor="location">
        <p>Location</p>
        <input
          id="location"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label htmlFor="animal">
        <p>Animal</p>
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
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
        <select
          id="breed"
          value={breed}
          disabled={breeds.length === 0}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        >
          <option>none</option>
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
