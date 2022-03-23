import React from 'react';
import Table from './table/index';
import SearchData from './searchTable/index';
import { useFetchBreedsQuery } from '../features/api/data-api';
import { useAppDispatch } from '../app/hooks';
import { dataTableAdded } from '../features/redux_actions/index';
import Preloader from './preloader/index';
import './app.css';

function App() {
  const { data, isSuccess } = useFetchBreedsQuery();
  const dispatch = useAppDispatch();
  dispatch(dataTableAdded(data));
  return (
    <div className="App">
      {isSuccess ? <SearchData /> : <Preloader />}
      {isSuccess ? <Table /> : <Preloader />}
    </div>
  );
}

export default App;
