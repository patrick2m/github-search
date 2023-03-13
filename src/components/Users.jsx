import axios from 'axios';
import { useEffect, useState } from 'react';
import './Users.css';


export default function Users() {
  const [users, setUsers] = useState([]);

  const usuario = 'patrick2m'

  useEffect(() => {
    axios.get(`https://api.github.com/search/users?q=${usuario}`).then(response => {
    setUsers(response.data.items)
    })
    return () => {
    }
  }, [])

  return (
    <div className="HomeContainer">
      <div>
        {users.map((user) => {
          return (
            <div
              key={user.id}
            >
              {user.login}
              <p>
              <img src={user.avatar_url} alt="" width="150px" />
              </p>
            </div>
          )
        })}
      </div>
    </div>
  );
}