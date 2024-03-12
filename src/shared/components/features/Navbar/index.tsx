"use client";
import Image from "next/image";
import FavoriteButton from "../../ui/FavoriteButton";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar} role="menu">
      <div className={`${styles.navbar__container} container`}>
        <a href="/" role="navigation">
          <Image
            priority
            src="/assets/Marvel_logo.png"
            alt="Marvel"
            width={130}
            height={56}
          />
        </a>
        {/* Support more items */}
        <ul className={styles.navbar__items}>
          <li role="menuitem">
            <FavoriteButton
              isFavorite={true}
              onClick={() => console.log("hi")}
              length={10}
              sizeIcon={24}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
