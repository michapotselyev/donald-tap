import styles from "./style.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.topLvl}>13 LVL</div>
          <div className={styles.topCurrentLvl}>100LVL</div>
        </div>
        <div className={styles.down}>100.000 points in 1.000.000</div>
      </div>
    </header>
  );
};

export default Header;
