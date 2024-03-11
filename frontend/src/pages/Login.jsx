import React, { useState } from "react";
// Import the CSS file
import "../assets/Styles/Form.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const url = "http://localhost:5000/api/v1/login";

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            console.log("Login successful");
        } else {
            console.log("Login failed");
        }
    };

    return (
        <div className="form-container">
        <h1>Login</h1>
        <p>Login to your account</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} /><br />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
}

export default Login;