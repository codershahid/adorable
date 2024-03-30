import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

const useBreedList = (animal) => {
  const result = useQuery(["breeds", animal], fetchBreedList);
  return [result?.data?.breeds ?? [], result];
};

export default useBreedList;
