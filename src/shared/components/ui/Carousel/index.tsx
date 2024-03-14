import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

const Carousel = ({ children }: Props) => {
  return (
    <div className={styles.carouselContainer} data-testid="carousel-container">
      <ul className={styles.carouselContainer__list}>{children}</ul>
    </div>
  );
};

const CarouselItem = ({ children }: Props) => {
  return <li data-testid="carousel-item">{children}</li>;
};

Carousel.Item = CarouselItem;

export default Carousel;
