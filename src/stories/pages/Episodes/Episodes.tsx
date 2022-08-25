import React, { useEffect, useState } from 'react';
import ICharacterApi from '../../../common/interfaces/ICharacterApi';
import PageTable from '../../components/PageTable/PageTable';

function Episodes({ characters }: { characters: ICharacterApi[] }) {
  const [sortedRows, setSortedRows] = useState([{ id: 0, data: ['', 0] }]);

  useEffect(() => {
    const episodesRows = characters
      .map((item) => {
        return { id: item.id, data: [item.name, item.episode?.length || 0] };
      })
      .sort((a, b) => {
        return a.data[1] <= b.data[1] ? 1 : -1;
      });
    setSortedRows(episodesRows);
  }, [characters]);

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
      header={['Character name', 'Number of episodes']}
      rows={sortedRows}
      changeSort={changeSort}
    />
  );
}

export default Episodes;
