import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../components/common/UserContext";
// Import the CSS file
import "../assets/Styles/Form.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  const url = "http://localhost:5000/api/v1/login";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      //   const tokenExpiration = jwt.decode(token).exp;
      localStorage.setItem("token", token);
      //   localStorage.setItem("tokenExpiration", tokenExpiration);
      console.log("Login successful");
      setUser({ username });
      navigate("/");
    } else {
      console.log("Login failed");
      setUser(null);
    }
  };

  return (
    <div className='form-container'>
      <h1>Login</h1>
      <p>Login to your account</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default Login;
