"use client";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import styles from "./styles.module.css";

type Props = {
  character: any;
};

const CharacterCard = ({ character }: Props) => {
  const isFavorite = true;
  return (
    <div className={`${styles.characterCard} border_decoration`}>
      <figure className={styles.characterCard__image}>
        <Image
          width={189}
          height={190}
          src="/assets/Character_photo.png"
          alt="Character"
        />
      </figure>
      <div className={styles.characterCard__info}>
        <div className={styles.characterCard__info__content}>
          <h2>{character}</h2>
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={() => console.log("lala")}
            sizeIcon={13}
            classNameIcon={isFavorite ? styles.characterCard__info__svg : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
