"use client";
import { createContext, useEffect, useState } from "react";
import { Character } from "../types";
import useSearch from "../hooks/useSearch";

type CharactersContextType = {
  characters: Character[] | null;
  setSearch: (search: string) => void;
  loading: boolean;
  search: string;
};

const CharactersContext = createContext<CharactersContextType>(
  {} as CharactersContextType
);

type Props = {
  charactersProps: Character[] | null;
  children: React.ReactNode;
};

export const CharacterProvider = ({ children, charactersProps }: Props) => {
  const { data, search, setSearch, loading, searchCalled } = useSearch(
    "v1/public/characters"
  );
  return (
    <CharactersContext.Provider
      value={{
        characters: searchCalled ? data : charactersProps,
        setSearch,
        loading,
        search,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContext;
