import React from 'react';
import { FixedSizeList as List } from 'react-window';
import SortButtons from '../sortButtons/index';
import { useAppSelector } from '../../app/hooks';

function Column() {
  const dataTable = useAppSelector((state) => state.data.dataTable);
  const headers = Object.keys(dataTable[0]);
  const activeSort = useAppSelector((state) => state.data.activeSort);
  let column: number;
  let sort: string;
  if (activeSort) {
    ({ column, sort } = activeSort);
  }

  return (
    <tr>
      {headers.map((row, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <th key={index}>
          {row}
          <SortButtons column={index} active={index === column ? sort : ''} />
        </th>
      ))}
    </tr>
  );
}

function TableHeader() {
  return (
    <List
      height={75}
      itemCount={1}
      itemSize={35}
      layout="horizontal"
      width={1500}
    >
      {Column}
    </List>
  );
}

export default TableHeader;
