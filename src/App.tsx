import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypeSelector';
import { getItems } from './store/getItems';
import { Item } from './model/item';

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
      ) : (
        <table>
          <th>
            Guid
          </th>
          <th>
            Name
          </th>
          <th>
            Path
          </th>
          {items?.map((item) => (
            <tr>
              <td>{item.guid}</td>
              <td>{item.name}</td>
              <td>{item.path}</td>
            </tr>
          ))}
        </table>
      )}
    </>
  );
}

export default App;
