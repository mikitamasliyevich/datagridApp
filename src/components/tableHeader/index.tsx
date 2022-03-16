import React, { useState } from 'react';
// import { useAppDispatch, useAppSelector } from './app/hooks';
// import { incremented, amountAdded } from './features/counter/counter-slice';
import { useFetchBreedsQuery } from '../../features/api/data-api';

function TableHeader() {
  // const data = useAppSelector((state) => state.counter.value);
  // const dispatch = useAppDispatch();

  const { data = [] } = useFetchBreedsQuery();
  const [headers, setHeaders] = useState(Object.keys(data[0]));

  return (
    <thead>
      <tr className="table-header">
        {headers.map((row) => (
          <th key={row}>
            <div className="table-header-cell">
              <span>{row}</span>
            </div>
          </th>
        ))}

      </tr>
    </thead>

  );
}

export default TableHeader;
