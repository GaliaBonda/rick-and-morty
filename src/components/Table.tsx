import React from 'react';
import ITableData from '../common/interfaces/ITableData';
import TableRow from './TableRow';

interface Props {
  header: string[];
  rows: ITableData[];
}

function Table({ header, rows }: Props) {
  return (
    <table>
      <thead>
        <tr>
          {header.map((item, index) => {
            return <th key={index}>{item}</th>;
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
