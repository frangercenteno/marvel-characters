"use client";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/lib/constants";
import type { Character } from "@/shared/types";
import FavoriteButton from "../FavoriteButton";
import styles from "./styles.module.css";

type Props = {
  character: Character;
  isFavorite: boolean;
  onFavorite: (character: Character) => void;
};

const CharacterCard = ({ character, isFavorite, onFavorite }: Props) => {
  const image = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  return (
    <div className={`${styles.characterCard} border_decoration`}>
      <Link href={`${ROUTES.CHARACTER_DETAILS}/${character.id}`}>
        <figure className={styles.characterCard__image}>
          <Image
            width={189}
            height={190}
            src={image}
            alt={character.name}
            style={{ opacity: "0", transition: "opacity 0.3s ease" }}
            onLoad={(image) => (image.currentTarget.style.opacity = "1")}
          />
        </figure>
      </Link>
      <div className={styles.characterCard__info}>
        <div className={styles.characterCard__info__content}>
          <h2>{character.name}</h2>
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={() => onFavorite(character)}
            sizeIcon={13}
            classNameIcon={isFavorite ? styles.characterCard__info__svg : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
