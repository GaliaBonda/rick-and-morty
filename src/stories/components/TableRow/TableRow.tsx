import React from 'react';
import styled from 'styled-components/macro';
import ITableData from '../../../common/interfaces/ITableData';

interface Props {
  row: ITableData;
}

const StyledTableRow = styled.tr``;
const StyledTableCell = styled.td`
  padding: 2rem 3rem;
`;

function TableRow({ row }: Props) {
  return (
    <StyledTableRow>
      {row.data.map((item, index) => {
        return <StyledTableCell key={index}>{item}</StyledTableCell>;
      })}
    </StyledTableRow>
  );
}

export default TableRow;
