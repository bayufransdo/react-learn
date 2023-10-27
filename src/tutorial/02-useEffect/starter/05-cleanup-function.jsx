import { useState, useEffect } from 'react';

const CleanupFunction = () => {
  const [value, setValue] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setValue(!value)}>
        toggle component
      </button>
      {value && <UseEffectBasics />}
    </div>
  );
};

const UseEffectBasics = () => {
  useEffect(() => {
    console.log('tetew');

    return () => console.log('aku kan menghilang...');
  });
  return <h2>useEffect basics</h2>;
};

export default CleanupFunction;
