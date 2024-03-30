import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">&#128049;</h2>
      </div>
    );
  }

  if (results.isError) {
    return (
      <div>
        <h2>failed to fetch pet</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];
  let heroImage = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (pet.images.length) heroImage = pet.images[0];

  return (
    <div className="details">
      <div>
        <div style={{ width: "300px", margin: "10px auto" }}>
          <img src={heroImage} alt={pet.name} style={{ width: "100%", borderRadius: "50%" }} />
        </div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
