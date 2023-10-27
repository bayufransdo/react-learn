import { useState, useEffect } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState('');

  const removeItem = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    console.log(new Date().getTimezoneOffset() / 60);
    const prevId = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers((prev) => [...prev, { id: prevId, name }]);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map((user) => {
        const { id, name } = user;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
