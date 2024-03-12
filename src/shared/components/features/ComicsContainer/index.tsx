import Carousel from "../../ui/Carousel";
import ComicCard from "../../ui/ComicCard";
import styles from "./styles.module.css";

type Props = {
  comics: any[];
};

const ComicsContainer = ({ comics }: Props) => {
  return (
    <section className={styles.comicsContainer}>
      <h2 className={`${styles.comicsContainer__title} h2`}>Comics</h2>
      <div className={styles.comicsContainer__slider}>
        <Carousel>
          {comics.map((comic) => (
            <Carousel.Item key={comic}>
              <ComicCard {...comic} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ComicsContainer;
