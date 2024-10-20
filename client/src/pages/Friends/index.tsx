import styles from "./style.module.scss";

const Friends = () => {
  return (
    <section className={styles.friends}>
      <div className={styles.container}>
        <p className={styles.title}>Invite Your Friends and Share the Fun!</p>
        <p className={styles.second}>Your Friends and You Both Earn Rewards!</p>

        <div className={styles.block}>
          <p className={styles.total}>Total earn</p>
          <p className={styles.totalValue}>0 EXP</p>

          <button className={styles.button}>Get reward</button>
          <p className={styles.desc}>
            2 EXP for each referred friend + 2 % from the EXP they earn
          </p>
        </div>
      </div>
    </section>
  );
};

export default Friends;
