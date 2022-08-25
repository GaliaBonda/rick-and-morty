import React from 'react';
import styled from 'styled-components/macro';
import ITableData from '../../../common/interfaces/ITableData';
import TableHead from '../PageTableHead/PageTableHead';
import TableRow from '../PageTableRow/PageTableRow';

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
const StyledTableBody = styled.tbody`
  font-size: 1.5em;
  border-radius: 20px;
`;

function PageTable({ header, rows, changeSort }: Props) {
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

export default PageTable;
