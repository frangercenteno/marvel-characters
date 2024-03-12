import CharacterCard from "../../ui/CharacterCard";
import styles from "./styles.module.css";

type Props = {
  characters: any[];
};

const CharactersContainer = ({ characters }: Props) => {
  return (
    <section className={styles.charactersContainer}>
      <ul className={styles.charactersContainer__list}>
        {characters.map((character) => (
          <li key={character}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default CharactersContainer;
