import React, { useState } from 'react';
import styled from 'styled-components/macro';

interface Props {
  header: string[];
  changeSort: (desc: boolean, column: number) => void;
}

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

interface StyleProps {
  active?: string;
}
const StyledSpan = styled.span`
  color: ${(props: StyleProps) => props.active || 'inherit'};
`;

function TableHead({ header, changeSort }: Props) {
  const [descSorted, setDescSorted] = useState(true);
  const [activeSort, setActiveSort] = useState(1);
  const handleClick = (index: number) => {
    changeSort(descSorted, index);
    setDescSorted((prevState) => !prevState);
    setActiveSort(index);
  };
  return (
    <StyledTableHead>
      <StyledHeadRow>
        {header.map((item, index) => {
          return (
            <StyledHeadCell
              key={index}
              onClick={() => handleClick(index)}
              data-testid='test-head-cell'
            >
              {item}{' '}
              <StyledSpan
                active={descSorted && activeSort === index ? 'grey' : ''}
              >
                ▼
              </StyledSpan>
              <StyledSpan
                active={!descSorted && activeSort === index ? 'grey' : ''}
                data-testid='test-span'
              >
                ▲
              </StyledSpan>
            </StyledHeadCell>
          );
        })}
      </StyledHeadRow>
    </StyledTableHead>
  );
}

export default TableHead;
