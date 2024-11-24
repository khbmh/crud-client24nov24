import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';

function Users() {
  const { users: initialUsers } = useLoaderData();
  const [users, setUsers] = useState(initialUsers); // Use useState to store users

  const handleDelete = (id) => {
    console.log('delete', id);
    fetch(`http://localhost:2024/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Update the state to remove the deleted user
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      })
      .catch((error) => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <h1>Users: {users.length}</h1>
      <div>
        {users.map((user) => (
          <div
            key={user._id}
            style={{
              border: '2px solid #473',
              padding: '10px 20px',
              marginBottom: '10px',
            }}
          >
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <div>
              <button
                style={{
                  backgroundColor: '#ff0000',
                  color: 'white',
                  padding: '5px 10px',
                }}
                onClick={() => handleDelete(user._id)}
              >
                X
              </button>
              <Link
                to={`/update/${user._id}`}
                style={{
                  backgroundColor: '#ff0000',
                  color: 'white',
                  padding: '5px 10px',
                }}
              >
                Update
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;

/*
import { useLoaderData } from 'react-router-dom';

function Users() {
  const { users } = useLoaderData();
  const handleDelete = (id) => {
    console.log('delete', id);
    fetch(`http://localhost:2024/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };


  return (
    <div>
      <h1>Users: {users.length}</h1>
      <div>
        {users.map((user) => (
          <div
            key={user._id}
            style={{
              border: '2px solid #473',
              padding: '10px, 20px',
              marginBottom: '10px',
            }}
          >
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button
              style={{
                backgroundColor: '#ff0000',
                color: 'white',
                padding: '5px 10px',
              }}
              onClick={() => handleDelete(user._id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
*/
