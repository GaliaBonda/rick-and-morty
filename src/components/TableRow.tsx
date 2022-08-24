import React from 'react';
import ITableData from '../common/interfaces/ITableData';

interface Props {
  row: ITableData;
}

function TableRow({ row }: Props) {
  return (
    <tr>
      {row.data.map((item, index) => {
        return <td key={index}>{item}</td>;
      })}
    </tr>
  );
}

export default TableRow;
