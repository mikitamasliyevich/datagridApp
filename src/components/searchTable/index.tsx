import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { dataTableAdded, dataTableSearch } from '../../features/redux_actions';
import { useFetchBreedsQuery } from '../../features/api/data-api';

function SearchData() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  function onChangeHandler(event: React.FormEvent<HTMLInputElement>) {
    setValue((event.target as HTMLInputElement).value);
  }
  const { data } = useFetchBreedsQuery();

  useEffect(() => (value !== '' ? dispatch(dataTableSearch(value)) : dispatch(dataTableAdded(data))), [dispatch, value]);

  return (
    <div className="search-global">
      <input
        className="search-global__input"
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default SearchData;
