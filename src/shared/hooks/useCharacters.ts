import { useContext } from "react";
import CharactersContext from "../contexts/CharactersContext";

const useCharacters = () => {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error("useCharacters must be used within a CharactersProvider");
  }
  return context;
};

export default useCharacters;
