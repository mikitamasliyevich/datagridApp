import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, amountAdded } from './features/counter/counter-slice';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';


function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { data = [] } = useFetchBreedsQuery();
console.log("data", data);
  

  return (
    <div className="App">
      <tr>
{data.map((data, i) => (
	
))}
	</tr>
    </div>
  )
}

     
    export default App
