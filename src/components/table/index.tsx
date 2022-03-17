import React from 'react';
import TableHeader from '../tableHeader/index';
import { useAppDispatch } from '../../app/hooks';
import { dataTableAdded } from '../../features/state_feature/state_feature';
import { useFetchBreedsQuery } from '../../features/api/data-api';
import Preloader from '../preloader/index';
import TableBody from '../tableBody/index';

function Table() {
  const { data, isSuccess } = useFetchBreedsQuery();
  const dispatch = useAppDispatch();
  dispatch(dataTableAdded(data));

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
