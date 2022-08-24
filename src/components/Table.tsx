import React, { useState } from 'react';
import styled from 'styled-components/macro';
import ITableData from '../common/interfaces/ITableData';
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

interface StyleProps {
  active?: string;
}
const StyledSpan = styled.span`
  color: ${(props: StyleProps) => props.active || 'inherit'};
`;

function Table({ header, rows, changeSort }: Props) {
  const [descSorted, setDescSorted] = useState(true);
  const [activeSort, setActiveSort] = useState(1);
  const handleClick = (index: number) => {
    changeSort(descSorted, index);
    setDescSorted((prevState) => !prevState);
    setActiveSort(index);
  };
  return (
    <StyledTable>
      <StyledTableHead>
        <StyledHeadRow>
          {header.map((item, index) => {
            return (
              <StyledHeadCell key={index} onClick={() => handleClick(index)}>
                {item}{' '}
                <StyledSpan
                  active={descSorted && activeSort === index ? 'grey' : ''}
                >
                  ▼
                </StyledSpan>
                <StyledSpan
                  active={!descSorted && activeSort === index ? 'grey' : ''}
                >
                  ▲
                </StyledSpan>
              </StyledHeadCell>
            );
          })}
        </StyledHeadRow>
      </StyledTableHead>
      <StyledTableBody>
        {rows.map((row) => {
          return <TableRow row={row} key={row.id} />;
        })}
      </StyledTableBody>
    </StyledTable>
  );
}

export default Table;
