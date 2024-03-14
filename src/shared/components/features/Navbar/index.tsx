"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useFavorites from "@/shared/hooks/useFavorites";
import { ROUTES } from "@/shared/lib/constants";
import FavoriteButton from "../../ui/FavoriteButton";
import styles from "./styles.module.css";

const Navbar = () => {
  const { favorites, toggleVisible } = useFavorites();
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    toggleVisible();
    if (pathname !== ROUTES.HOME) {
      router.push(ROUTES.HOME);
    }
  };

  return (
    <nav className={styles.navbar} role="menu">
      <div className={`${styles.navbar__container} container`}>
        <Link href={ROUTES.HOME} role="navigation">
          <Image
            priority
            src="/assets/Marvel_logo.png"
            alt="Marvel"
            width={130}
            height={56}
          />
        </Link>
        {/* Support more items */}
        <ul className={styles.navbar__items}>
          <li role="menuitem">
            <FavoriteButton
              isFavorite={favorites?.length > 0 ? true : false}
              onClick={handleClick}
              length={favorites?.length || 0}
              sizeIcon={24}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
