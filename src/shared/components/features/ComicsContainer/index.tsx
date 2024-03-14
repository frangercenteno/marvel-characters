import type { Comic } from "@/shared/types";
import styles from "./styles.module.css";
import Carousel from "../../ui/Carousel";
import ComicCard from "../../ui/ComicCard";

type Props = {
  comics: Comic[];
};

const ComicsContainer = ({ comics }: Props) => {
  return (
    <section className={styles.comicsContainer}>
      <h2 className={`${styles.comicsContainer__title} h2`}>Comics</h2>
      <div className={styles.comicsContainer__slider}>
        <Carousel>
          {comics.map((comic) => (
            <Carousel.Item key={comic.id}>
              <ComicCard {...comic} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ComicsContainer;
