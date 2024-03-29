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
  isPriority?: boolean;
};

const CharacterCard = ({
  character,
  isFavorite,
  onFavorite,
  isPriority,
}: Props) => {
  const image = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  return (
    <div className={`${styles.characterCard} border_decoration`}>
      <Link href={`${ROUTES.CHARACTER_DETAILS}/${character.id}`}>
        <figure className={styles.characterCard__image}>
          <Image
            src={image}
            width={200}
            height={190}
            sizes="100vw"
            alt={character.name}
            style={{
              opacity: "0",
              transition: "opacity 0.3s ease",
              width: "100%",
              height: "100%",
            }}
            onLoad={(image) => (image.currentTarget.style.opacity = "1")}
            priority={isPriority}
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
