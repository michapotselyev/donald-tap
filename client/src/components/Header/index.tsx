import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.gallery}>
          <ul className={styles.galleryList}>
            <li className={styles.galleryItem}></li>
          </ul>
        </div>
        <div className={styles.info}>
          <button className={styles.InfoBuy}>Buy</button>
          <span className={styles.infoBalance}>34$</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
