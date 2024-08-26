import styles from "./style.module.scss";
import testIcon from "@/assets/nft/test-nft.webp";
import testIcon2 from "@/assets/nft/test-icon2.webp";
import testIcon3 from "@/assets/nft/nft-scrudje3.webp";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.gallery}>
          <ul className={styles.galleryList}>
            <li className={styles.galleryItem}>
              <img className={styles.galleryItemImg} src={testIcon} alt="suka" />
            </li>
            <li className={styles.galleryItem}>
              <img className={styles.galleryItemImg} src={testIcon2} alt="suka" />
            </li>
            <li className={styles.galleryItem}>
              <img className={styles.galleryItemImg} src={testIcon3} alt="suka" />
            </li>
          </ul>
        </div>
        <div className={styles.info}>
          <button className={styles.infoBuy}>34$</button>
          <span className={styles.infoBalance}>Buy</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
