import { useContext } from "react";
import FavoritesContext from "../contexts/FavoritesContext";

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useCharacters must be used within a FavoritesContext");
  }
  return context;
};

export default useFavorites;
