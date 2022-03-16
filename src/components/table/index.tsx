import React from 'react';
import TableHeader from '../tableHeader/index';
import { useFetchBreedsQuery } from '../../features/api/data-api';
import Preloader from '../preloader/index';
import TableBody from '../tableBody/index';

function Table() {
  const { isSuccess } = useFetchBreedsQuery();
  return (
    <div className="table">
      <table>
        <caption>DataGrid Table</caption>
        {isSuccess ? <TableHeader /> : <Preloader />}
        {isSuccess ? <TableBody /> : <Preloader />}
      </table>
    </div>
  );
}

export default Table;
