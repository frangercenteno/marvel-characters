import Image from "next/image";
import style from "./styles.module.css";

type Comic = {
  image: string;
  title: string;
  age: string;
};

const ComicCard = ({ image, title, age }: Comic) => {
  return (
    <div className={style.comicCardContainer}>
      <figure className={style.comicCardContainer__image}>
        <Image width={180} height={268} src={image} alt={title} />
      </figure>
      <h3 className={`${style.comicCardContainer__info} paragraph`}>{title}</h3>
      <small className={`${style.comicCardContainer__info__small} small`}>
        {age}
      </small>
    </div>
  );
};

export default ComicCard;
