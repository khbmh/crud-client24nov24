import { useLoaderData } from 'react-router-dom';

function Update() {
  const loadedUser = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const updatedUser = { name, email };

    fetch(`http://localhost:2024/users/${loadedUser._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>
        Update information of{' '}
        <span style={{ color: 'burlywood' }}>{loadedUser.name}</span>
      </h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={loadedUser?.name}
        />
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={loadedUser?.email}
        />
        <input type="submit" value="Update" className="btn" />
      </form>
    </div>
  );
}

export default Update;
