import { FixedSizeGrid as Grid } from "react-window";
import styles from "./style.module.scss";

interface ImageMatrixProps {
  imageSrc: string;
  visibleCells: number;
  emptyCellColor?: string;
}

const ImageMatrix = ({ imageSrc, visibleCells, emptyCellColor = "#ffffff" }: ImageMatrixProps) => {
  const containerWidth = 0.9 * window.innerWidth;
  const containerHeight = 0.9 * window.innerHeight;

  const cellSize = Math.min(containerWidth, containerHeight) / 20;

  const totalRows = 20;
  const totalCols = 20;

  const cellRenderer = ({ columnIndex, rowIndex, style }: any) => {
    const index = rowIndex * totalCols + columnIndex;
    const isEmpty = index >= visibleCells;

    return (
      <div
        style={{
          ...style,
          width: `${cellSize}px`,
          height: `${cellSize}px`,
          backgroundColor: isEmpty ? emptyCellColor : "transparent",
          backgroundImage: isEmpty ? "none" : `url(${imageSrc})`,
          backgroundPosition: `-${columnIndex * cellSize}px -${rowIndex * cellSize}px`,
          backgroundSize: `${totalCols * cellSize}px ${totalRows * cellSize}px`,
          borderWidth: visibleCells >= totalRows * totalCols ? 0 : "0px",
        }}
        className={styles.gridCell}
      />
    );
  };

  return (
    <div className={styles.gridContainer}>
      <Grid columnCount={totalCols} columnWidth={cellSize} height={containerHeight} rowCount={totalRows} rowHeight={cellSize} width={containerWidth}>
        {cellRenderer}
      </Grid>
    </div>
  );
};

export default ImageMatrix;
