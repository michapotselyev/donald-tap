import ImageMatrix from "../ImageMatrix";
import styles from "./style.module.scss";
import testIcon from "../../assets/nft/test-nft.webp";
import { useEffect, useMemo, useState } from "react";
import calculateUniqueCells from "../../utils/calculateUniqueCells";
import { motion } from "framer-motion";

const Tap = () => {
  const [score, setScore] = useState(9980);

  const openCell = useMemo(() => {
    return calculateUniqueCells(score, 10000, 400);
  }, [score]);

  const [condition, setCondition] = useState(false);

  useEffect(() => {
    console.log(score);
    if (openCell === 400) setCondition(true);
  }, [openCell, score]);

  return (
    <section className={styles.container}>
      <button className={styles.tap} onClick={() => setScore(score + 1)}>
        <ImageMatrix imageSrc={testIcon} visibleCells={openCell} />
      </button>
      {condition && (
        <motion.div className={styles.copy} initial={{ x: 0, y: 0, scale: 1, opacity: 1 }} animate={{ x: "-50vw", y: "-50vh", scale: 0, opacity: 0 }} transition={{ duration: 1, ease: "easeInOut" }}>
          <ImageMatrix imageSrc={testIcon} visibleCells={openCell} />
        </motion.div>
      )}
    </section>
  );
};

export default Tap;
