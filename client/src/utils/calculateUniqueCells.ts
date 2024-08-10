function calculateUniqueCells(pressed: number, totalPressesRequired: number, totalCells: number): number {
  if (totalCells <= 0 || pressed < 0 || totalPressesRequired <= 0) {
    throw new Error("Invalid input values");
  }

  const pressesPerCell = totalPressesRequired / totalCells;

  // Количество уникальных ячеек
  const uniqueCells = Math.min(totalCells, pressed / pressesPerCell);

  return Math.round(uniqueCells);
}

export default calculateUniqueCells;
