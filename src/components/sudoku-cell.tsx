import React from 'react';

interface SudokuCellProps {
  cellValue: string;
  cellOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SudokuCell = ({ cellValue, cellOnChange }: SudokuCellProps) => {
  return <input value={cellValue} onChange={cellOnChange} />;
};
