import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypeSelector';
import { getItems } from './store/getters/getItems';
import ItemsTable from './components/ItemsTable';

function App() {
  const dispatch = useDispatch()
  const { items, loading, error } = useTypedSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);


  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div style={{ color: 'red' }}>Error: {error}</div>
      ) : ( items ?
        <ItemsTable items={items} /> : null
      )}
    </>
  );
}

export default App;
