import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { useAppSelector } from '../../app/hooks';

function Column() {
  const dataTable = useAppSelector((state) => state.data.dataTable);
  const headers = Object.keys(dataTable[0]);
  return (
    <tr>
      {headers.map((row) => (
        <th>
          {row}
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
