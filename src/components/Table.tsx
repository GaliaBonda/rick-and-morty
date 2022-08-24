import React, { useState } from 'react';
import ITableData from '../common/interfaces/ITableData';
import TableRow from './TableRow';

interface Props {
  header: string[];
  rows: ITableData[];
  changeSort: (desc: boolean, column: number) => void;
}

function Table({ header, rows, changeSort }: Props) {
  const [descSorted, setDescSorted] = useState(false);
  const handleClick = (index: number) => {
    setDescSorted((prevState) => !prevState);
    changeSort(!descSorted, index);
  };
  return (
    <table>
      <thead>
        <tr>
          {header.map((item, index) => {
            return (
              <th key={index} onClick={() => handleClick(index)}>
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return <TableRow row={row} key={row.id} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
