"use client";
import { createContext, useEffect, useState } from "react";
import { Character } from "../types";

type FavoritesContextType = {
  favorites: Character[];
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  addFavorite: (character: Character) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  toggleFavorite: (character: Character) => void;
  toggleVisible: () => void;
};

const FavoritesContext = createContext<FavoritesContextType>(
  {} as FavoritesContextType
);

type Props = {
  children: React.ReactNode;
};

export const FavoritesProvider = ({ children }: Props) => {
  const [visible, setVisible] = useState(false);
  const [favorites, setFavorites] = useState<{
    [key: number]: Character;
  } | null>(null);

  const addFavorite = (character: Character) => {
    setFavorites((prev) => ({ ...prev, [character.id]: character }));
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => {
      const newFavorites = { ...prev };
      delete newFavorites[id];
      return newFavorites;
    });
  };

  const toggleFavorite = (character: Character) => {
    if (isFavorite(character.id)) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  const isFavorite = (id: number) => {
    return Boolean(favorites && favorites[id]);
  };

  useEffect(() => {
    const data = localStorage.getItem("favorites");
    if (data) {
      setFavorites(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (favorites) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        visible,
        setVisible,
        favorites: favorites ? Object.values(favorites) : [],
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
        toggleVisible,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
