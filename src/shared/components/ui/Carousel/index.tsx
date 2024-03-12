import styles from "./styles.module.css";

type Props = {
  children: any;
};

const Carousel = ({ children }: Props) => {
  return (
    <div className={styles.carouselContainer}>
      <ul className={styles.carouselContainer__list}>{children}</ul>
    </div>
  );
};

const CarouselItem = ({ children }: any) => {
  return <li>{children}</li>;
};

Carousel.Item = CarouselItem;

export default Carousel;
