"use client";
import Image from "next/image";
import FavoriteButton from "../../ui/FavoriteButton";
import styles from "./styles.module.css";

type Props = {
  id: number;
  name: string;
  image: string;
  description: string;
  isFavorite: boolean;
};

const CharacterHero = ({ name, image, description, isFavorite }: Props) => {
  return (
    <header className={`${styles.characterHeroContainer} border_decoration`}>
      <div className={styles.characterHeroContainer__content}>
        <figure className={styles.characterHeroContainer__image}>
          <Image src={image} alt={name} width={393} height={397} />
        </figure>
        <div className={styles.characterHeroContainer__info}>
          <article>
            <h1 className={`${styles.characterHeroContainer__info__h1} h1`}>
              <span>{name}</span>
              <FavoriteButton
                isFavorite={isFavorite}
                onClick={() => console.log("clicked")}
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
