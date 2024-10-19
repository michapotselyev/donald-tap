import styles from "./style.module.scss";
import userIcon from '@/assets/icons/user-icon.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.user}>
            <img src={userIcon} className={styles.userIcon} alt="user-icon"/>

            <p className={styles.userTitle}>Mykhailo Potseluiev</p>
          </div>
          <div className={styles.progress}>
            <div className={styles.progressHeader}>
              <p className={styles.progressHeaderLvl}>Lv. 4</p>
              <p className={styles.progressHeaderPoint}>15/100</p>
            </div>
            <div className={styles.progressLine}>
              <div className={styles.progressLineBackground}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
