import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { dataTableSearch } from '../../features/redux_actions';

function SearchData() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  function onChangeHandler(event: React.FormEvent<HTMLInputElement>) {
    setValue((event.target as HTMLInputElement).value);
  }
  useEffect(() => (value !== '' ? dispatch(dataTableSearch(value)) : console.log('here I can all again')), [dispatch, value]);

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
