import React from 'react';
import { useAppSelector } from '../../app/hooks';

function TableHeader() {
  const dataTable = useAppSelector((state) => state.data.dataTable);
  const headers = Object.keys(dataTable[0]);

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
