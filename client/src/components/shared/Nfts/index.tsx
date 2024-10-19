import styles from "./style.module.scss";
import testIcon from "@/assets/nft/nft-scrudje3.webp";

const Nfts = () => {
  return (
    <div className={styles.nft}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.price}>1000$</p>
          <img src={testIcon} className={styles.icon} alt="icon-nft" />
          <p className={styles.title}>The Greed of Donald's Ruins</p>
        </li>
        <li className={styles.item}>
          <p className={styles.price}>1000$</p>
          <img src={testIcon} className={styles.icon} alt="icon-nft" />
          <p className={styles.title}>The Greed of Donald's Ruins</p>
        </li>
        <li className={styles.item}>
          <p className={styles.price}>1000$</p>
          <img src={testIcon} className={styles.icon} alt="icon-nft" />
          <p className={styles.title}>The Greed of Donald's Ruins</p>
        </li>
        <li className={styles.item}>
          <p className={styles.price}>1000$</p>
          <img src={testIcon} className={styles.icon} alt="icon-nft" />
          <p className={styles.title}>The Greed of Donald's Ruins</p>
        </li>
      </ul>
    </div>
  );
};

export default Nfts;
