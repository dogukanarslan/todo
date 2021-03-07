import { useState } from "react";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [redirected, setRedirected] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ name, surname }));
    setRedirected(true);
  };

  if (redirected) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={handleNameChange} />
        <label htmlFor="name">Surname</label>
        <input type="text" value={surname} onChange={handleSurnameChange} />
        <button>Save</button>
      </form>
    </div>
  );
};

export default Login;
