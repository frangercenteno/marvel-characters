"use client";
import Image from "next/image";
import useFavorites from "@/shared/hooks/useFavorites";
import type { Character } from "@/shared/types";
import FavoriteButton from "../../ui/FavoriteButton";
import styles from "./styles.module.css";

type Props = {
  character: Character;
};

const CharacterHero = ({ character }: Props) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { id, name, description, thumbnail } = character;
  return (
    <header className={`${styles.characterHeroContainer} border_decoration`}>
      <div className={styles.characterHeroContainer__content}>
        <figure className={styles.characterHeroContainer__image}>
          <Image
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={name}
            width={393}
            height={397}
          />
        </figure>
        <div className={styles.characterHeroContainer__info}>
          <article>
            <h1 className={`${styles.characterHeroContainer__info__h1} h1`}>
              <span className={styles.characterHeroContainer__info__text}>
                {name}
              </span>
              <FavoriteButton
                isFavorite={isFavorite(id)}
                onClick={() => toggleFavorite(character)}
                sizeIcon={24}
              />
            </h1>
            <h2 className="paragraph">{description}</h2>
          </article>
        </div>
      </div>
    </header>
  );
};

export default CharacterHero;
