import React from 'react';
import styled from 'styled-components/macro';
import TableHead from '../TableHead/TableHead';
import TableRow from '../TableRow/TableRow';

interface Props {
  header: string[];
  rows: (string | number)[][];
  changeSort: (desc: boolean, column: number) => void;
}

const StyledTable = styled.table`
  width: 100%;
  rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  background-color: white;
  border-collapse: collapse;
  border-radius: 10px;
`;
const StyledTableBody = styled.tbody`
  font-size: 1.5em;
  border-radius: 20px;
`;

function Table({ header, rows, changeSort }: Props) {
  return (
    <StyledTable>
      <TableHead header={header} changeSort={changeSort} />
      <StyledTableBody>
        {rows.map((row, index) => {
          return <TableRow row={row} key={index} />;
        })}
      </StyledTableBody>
    </StyledTable>
  );
}

export default Table;
