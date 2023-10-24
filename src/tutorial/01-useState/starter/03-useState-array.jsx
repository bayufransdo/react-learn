import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const deleteItem = (id) => {
    const newData = people.filter((data) => {
      if (data.id !== id) {
        return data;
      }
    });
    setPeople(newData);
  };

  const clearItem = () => {
    setPeople([]);
  };
  const komponen = people.map((data) => {
    return (
      <div key={data.id}>
        <h4>{data.name}</h4>
        <button onClick={() => deleteItem(data.id)}>Delete</button>
      </div>
    );
  });

  return (
    <>
      {komponen}
      <button style={{ marginTop: '2rem' }} onClick={clearItem}>
        Clear Item
      </button>
    </>
  );
};

export default UseStateArray;
