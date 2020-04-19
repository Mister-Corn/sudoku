import React from 'react';
import styled from 'styled-components';
import { SudokuCell } from './sudoku-cell';

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2rem);
`;

export const SudokuBox = () => {
  const initialBoxValues = ['', '', '', '', '', '', '', '', ''];

  const [boxValues, setBoxValues] = React.useState(initialBoxValues);

  const cellOnChange = (position: number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const boxValueCopy = [...boxValues];
    boxValueCopy[position] = e.target.value;
    setBoxValues(boxValueCopy);
  };

  return (
    <StyledBox>
      {boxValues.map((value, index) => (
        <SudokuCell
          key={index}
          cellValue={value}
          cellOnChange={cellOnChange(index)}
        />
      ))}
    </StyledBox>
  );
};
