import styles from "./style.module.scss";
import testIcon from "@/assets/nft/test-nft.webp";
import testIcon2 from "@/assets/nft/test-icon2.webp";
import testIcon3 from "@/assets/nft/nft-scrudje3.webp";
import arrowGallery from '@/assets/icons/arrow-gallery.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.galleryBlock}>
          <div className={styles.galleryInfo}>
            <p className={styles.galleryInfoText}>
              9+
            </p>
          </div>
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
          <img src={arrowGallery} className={styles.galleryIcon} alt="arrow-gallery"/>
        </div>
        <div className={styles.info}> 
          <button className={styles.infoBuy}>GET NFT</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
