"use client";
import FavoriteIconActive from "../Icons/FavoriteIconActive";
import FavoriteIconDisabled from "../Icons/FavoriteIconDisabled";
import styles from "./styles.module.css";

type Props = {
  isFavorite: boolean;
  onClick: () => void;
  length?: number;
  sizeIcon?: number;
  className?: string;
  classNameIcon?: string;
};

const FavoriteButton = ({
  isFavorite,
  onClick,
  length,
  sizeIcon,
  className,
  classNameIcon,
}: Props) => (
  <button
    className={`${styles.favoriteButton} ${className}`}
    type="button"
    role="button"
    onClick={onClick}
  >
    {isFavorite ? (
      <FavoriteIconActive size={sizeIcon} className={classNameIcon} />
    ) : (
      <FavoriteIconDisabled size={sizeIcon} className={classNameIcon} />
    )}{" "}
    <span className={styles.favoriteButton__number}>{length}</span>
  </button>
);

export default FavoriteButton;
