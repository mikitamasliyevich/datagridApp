import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { useAppSelector } from '../../app/hooks';

function Row() {
  const dataTable = useAppSelector((state) => state.data.dataTable);
  return (
    <>
      {dataTable.map((array: any, index:number) => (
        <tr key={index}>
          {Object.values(array).map((arr: any, i:number) => <td key={i}>{arr}</td>)}
        </tr>
      ))}
    </>
  );
}

function TableBody() {
  return (
    <List
      height={750}
      itemCount={1}
      itemSize={35}
      width={1500}
    >
      {Row}

    </List>
  );
}

export default TableBody;
