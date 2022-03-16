import React from 'react';
import { useFetchBreedsQuery } from '../../features/api/data-api';

function TableBody() {
  const { data = [] } = useFetchBreedsQuery();
  const allData = data.map((dataRow) => (
    Object.values(dataRow)
  ));

  return (
    <tbody>
      {allData.map((array, index) => (
        <tr key={index}>
          {array.map((arr, i) => <td key={i}>{arr}</td>)}
        </tr>
      ))}

    </tbody>
  );
}

export default TableBody;
