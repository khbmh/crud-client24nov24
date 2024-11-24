import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(name, email);

    fetch('http://localhost:2024/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error); // Add more specific error handling here
      });
  };

  return (
    <>
      <h1>Crud Client</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder="name" />
        <input type="email" name="email" id="email" placeholder="email" />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </>
  );
}

export default App;
