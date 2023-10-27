import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'Bayu Maulana' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <h4>Welcome {user.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default UserChallenge;
