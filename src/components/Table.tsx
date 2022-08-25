import React, { useState } from 'react';
import styled from 'styled-components/macro';
import ITableData from '../common/interfaces/ITableData';
import TableHead from './TableHead';
import TableRow from './TableRow';

interface Props {
  header: string[];
  rows: ITableData[];
  changeSort: (desc: boolean, column: number) => void;
}

const StyledTable = styled.table`
  width: 100%;
  rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  background-color: white;
  border-collapse: collapse;
  border-radius: 10px;
`;
const StyledTableHead = styled.thead`
  font-weight: 600;
  font-size: 2em;
  text-align: left;
`;
const StyledHeadRow = styled.tr`
  border-bottom: 2px solid black;
`;
const StyledHeadCell = styled.th`
  padding: 2rem 3rem;
  cursor: pointer;
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
        {rows.map((row) => {
          return <TableRow row={row} key={row.id} />;
        })}
      </StyledTableBody>
    </StyledTable>
  );
}

export default Table;
