import { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [people, setPeople] = useState([]);
  const data = async () => {
    try {
      const githubPeople = await fetch(url).then((res) => res.json());
      setPeople(githubPeople);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {people.map((p) => {
          const { id, avatar_url, login, html_url } = p;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
