import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table';
import { sagaActions } from '../../store/sagas';
import { RootState } from '../../store/store';

function Episodes() {
  const characters = useSelector((state: RootState) => state.characters);
  const episodesRows = characters
    .map((item) => {
      return { id: item.id, data: [item.name, item.episode?.length || 0] };
    })
    .sort((a, b) => {
      return a.data[1] <= b.data[1] ? 1 : -1;
    });
  const [sortedRows, setSortedRows] = useState(episodesRows);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: sagaActions.GET_ALL_CHARACTERS_SAGA,
    });
  }, []);

  //   useEffect(() => {
  //     setSortedRows((prevRows) =>
  //       [...prevRows].sort((a, b) => {
  //         if (a.data[1] <= b.data[1]) {
  //           return 1;
  //         } else {
  //           return 0;
  //         }
  //       })
  //     );
  //   }, []);

  const changeSort = (desc: boolean, column: number) => {
    setSortedRows((startRows) => {
      if (desc) {
        return [...startRows].sort((a, b) =>
          a.data[column] <= b.data[column] ? 1 : -1
        );
      } else {
        return [...startRows].sort((a, b) =>
          a.data[column] >= b.data[column] ? 1 : -1
        );
      }
    });
  };

  return (
    <Table
      header={['Character name', 'Number of episodes']}
      rows={sortedRows}
      changeSort={changeSort}
    />
  );
}

export default Episodes;
