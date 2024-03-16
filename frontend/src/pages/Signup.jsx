import React, { useState } from "react";

// Import the CSS file
import "../assets/Styles/Form.css";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const url = "http://localhost:5000/api/v1/signup";

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
            alert("Signup successful");
        } else {
            alert("Signup failed");
        }
    };

    return (
        <div className="form-container">
        <h1>Signup</h1>
        <p>Signup for an account</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} /><br />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
}

export default Signup;