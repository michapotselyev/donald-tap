import ImageMatrix from "../ImageMatrix";
import styles from "./style.module.scss";
import testIcon from "../../assets/nft/test-nft.webp";
import { useMemo, useState } from "react";
import calculateUniqueCells from "../../utils/calculateUniqueCells";

const Tap = () => {
  const [score, setScore] = useState(1000);

  const openCell = useMemo(() => {
    return calculateUniqueCells(score, 10000, 400);
  }, [score]);

  return (
    <section className={styles.container}>
      <button className={styles.tap} onClick={() => setScore(score + 1)}>
        <ImageMatrix imageSrc={testIcon} visibleCells={openCell} />
      </button>
    </section>
  );
};

export default Tap;
