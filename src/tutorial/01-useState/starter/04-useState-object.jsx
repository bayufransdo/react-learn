import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'Read Books',
  });
  const changePerson = () => {
    setPerson({
      name: 'John',
      age: 28,
      hobby: 'Scream at the computer',
    });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys to: {person.hobby}</h4>
      <button className="btn" onClick={changePerson}>
        Show john
      </button>
    </div>
  );
};

export default UseStateObject;
