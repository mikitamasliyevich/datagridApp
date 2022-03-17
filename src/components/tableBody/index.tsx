import React from 'react';
import { useAppSelector } from '../../app/hooks';

function TableBody() {
  const dataTable = useAppSelector((state) => state.data.dataTable);

  return (
    <tbody>
      {dataTable.map((array, index:number) => (
        <tr key={index}>
          {Object.values(array).map((arr, i:number) => <td key={i}>{arr}</td>)}
        </tr>
      ))}

    </tbody>
  );
}

export default TableBody;
