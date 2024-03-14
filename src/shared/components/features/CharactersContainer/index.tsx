"use client";
import SearchIcon from "@/shared/components/ui/Icons/SearchIcon";
import Label from "@/shared/components/ui/Label";
import TextField from "@/shared/components/ui/TextField";
import useCharacters from "@/shared/hooks/useCharacters";
import useFavorites from "@/shared/hooks/useFavorites";
import CharacterCard from "../../ui/CharacterCard";
import styles from "./styles.module.css";

const CharactersContainer = () => {
  const { setSearch, search, characters } = useCharacters();
  const { favorites, visible, setVisible, isFavorite, toggleFavorite } =
    useFavorites();
  return (
    <main className="container">
      {visible && (
        <h2 className={`${styles.charactersContainer__title} h2`}>Favorite</h2>
      )}
      <TextField
        placeholder="Search a character..."
        id="search"
        role="search"
        onChange={(e) => {
          setSearch(e.target.value);
          if (visible) {
            setVisible(false);
          }
        }}
        value={search}
        Icon={<SearchIcon />}
      />
      <Label text={`${(visible ? favorites : characters)?.length} Results`} />

      <section className={styles.charactersContainer}>
        <ul className={styles.charactersContainer__list}>
          {(visible ? favorites : characters)?.map((character) => (
            <li key={character.id}>
              <CharacterCard
                character={character}
                isFavorite={isFavorite(character.id)}
                onFavorite={toggleFavorite}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
export default CharactersContainer;
