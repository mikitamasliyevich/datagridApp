import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { useAppSelector } from '../../app/hooks';
import { IServerData } from '../../types/index';

function Row() {
  const dataTable = useAppSelector((state) => state.data.dataTable);

  return (
    <>
      {dataTable.map((array: IServerData, index:number) => (
        <tr key={index}>
          {Object.values(array).map((arr: IServerData, i:number) => <td key={i}>{arr}</td>)}
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
