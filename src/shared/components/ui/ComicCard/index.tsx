import Image from "next/image";
import type { Comic } from "@/shared/types";
import style from "./styles.module.css";

type Props = Comic;

const ComicCard = ({ thumbnail, title, issn }: Props) => {
  return (
    <div className={style.comicCardContainer}>
      <figure className={style.comicCardContainer__image}>
        <Image
          width={180}
          height={268}
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={title}
        />
      </figure>
      <h3 className={`${style.comicCardContainer__info} paragraph`}>{title}</h3>
      <small className={`${style.comicCardContainer__info__small} small`}>
        {issn}
      </small>
    </div>
  );
};

export default ComicCard;
