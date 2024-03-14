import { NextRouter } from "next/router";
import { CharacterProvider } from "@/shared/contexts/CharactersContext";
import { FavoritesProvider } from "@/shared/contexts/FavoritesContext";
import MainLayout from "@/shared/layouts/MainLayout";
import { mockCharacters } from "./mocks/characters.mock";

type Props = {
  children: React.ReactNode;
};

const TestLayout = ({ children }: Props) => (
  <FavoritesProvider>
    <MainLayout>
      <CharacterProvider charactersProps={mockCharacters}>
        {children}
      </CharacterProvider>
    </MainLayout>
  </FavoritesProvider>
);

export default TestLayout;
