import { useState } from 'react';

const Alert = () => {
  return <div className="alert">Alert</div>;
};

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        toggle alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

export default ToggleChallenge;
