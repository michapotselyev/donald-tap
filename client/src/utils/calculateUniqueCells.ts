function calculateUniqueCells(pressed: number, totalPressesRequired: number, totalCells: number): number {
  if (totalCells <= 0 || pressed < 0 || totalPressesRequired <= 0) {
    throw new Error("Invalid input values");
  }

  const pressesPerCell = totalPressesRequired / totalCells;

  const uniqueCells = Math.min(totalCells, Math.floor(pressed / pressesPerCell));

  return uniqueCells;
}

export default calculateUniqueCells;
