import React from "react";
import styles from "./style.module.scss";

type GridProps = {
  imageSrc: string;
  visibleCells: number;
  emptyCellColor?: string;
};

const Grid: React.FC<GridProps> = ({ imageSrc, visibleCells, emptyCellColor = "transparent" }) => {
  const totalCells = 10000;
  const cells = Array(totalCells).fill(null);

  return (
    <div className={styles.gridContainer} style={{ backgroundImage: `url(${imageSrc})` }}>
      {cells.map((_, index) => {
        const isEmpty = index >= visibleCells;
        const row = Math.floor(index / 100);
        const col = index % 100;

        return (
          <div
            key={index}
            className={styles.gridCell}
            style={{
              backgroundColor: isEmpty ? emptyCellColor : "transparent",
              backgroundPosition: `-${col * 10}px -${row * 10}px`,
              backgroundSize: "1000px 1000px",
            }}
          />
        );
      })}
    </div>
  );
};

export default Grid;
