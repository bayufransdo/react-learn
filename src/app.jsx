import { useState } from 'react';

const App = () => {
  const [state, setState] = useState('aasd');
  console.log(setState);
  return <div className="container"></div>;
};
export default App;
