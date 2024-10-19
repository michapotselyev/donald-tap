import styles from "./style.module.scss";

const Progress = ({
  currentValue,
  maxValue,
}: {
  currentValue: number;
  maxValue: number;
}) => {
  const percentage = (currentValue / maxValue) * 100;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressHeader}>
        <span className={styles.progressTitle}>PROGRESS</span>
      </div>
      <div className={styles.block}>
        <span className={styles.minValue}>0</span>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${percentage}%` }}
          >
            <span className={styles.currentValue}>
              {currentValue.toLocaleString()}
            </span>
          </div>
        </div>
        <span className={styles.maxValue}>10 M</span>
      </div>
    </div>
  );
};

export default Progress;
