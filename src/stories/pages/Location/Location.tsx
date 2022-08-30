import React, { useEffect, useState } from 'react';
import ILocation from '../../../common/interfaces/ILocation';
import PageTable from '../../components/PageTable/PageTable';

function Location({ locations }: { locations: ILocation[] }) {
  const [sortedRows, setSortedRows] = useState([{ id: 0, data: ['', 0] }]);

  useEffect(() => {
    const locationsRows = locations
      .map((item) => {
        return { id: item.id, data: [item.name, item.residents?.length || 0] };
      })
      .sort((a, b) => {
        return a.data[1] <= b.data[1] ? 1 : -1;
      });
    setSortedRows(locationsRows);
  }, [locations]);

  const changeSort = (desc: boolean, column: number) => {
    setSortedRows((startRows) => {
      if (desc) {
        return [...startRows].sort((a, b) =>
          a.data[column] >= b.data[column] ? 1 : -1
        );
      } else {
        return [...startRows].sort((a, b) =>
          a.data[column] <= b.data[column] ? 1 : -1
        );
      }
    });
  };

  return (
    <PageTable
      header={['Location', 'Number of characters']}
      rows={sortedRows}
      changeSort={changeSort}
    />
  );
}

export default Location;
