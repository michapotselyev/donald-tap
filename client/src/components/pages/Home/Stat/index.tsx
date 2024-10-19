import styles from "./style.module.scss";
import limitIcon from '@/assets/icons/icon-update.png'

function formatNumber(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const Stat = () => {
  return (
    <div className={styles.block}>
      <div className={styles.limit}>
        <img  src={limitIcon} className={styles.limitIcon} alt="limit" />
        <p className={styles.limitText}>
          {formatNumber(10000)}/{formatNumber(10000)}
        </p>
      </div>

      <button className={styles.button}>Update</button>
    </div>
  );
};

export default Stat;
