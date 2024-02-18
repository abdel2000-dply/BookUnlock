import React from "react";

function Login() {
    return (
        <div>
        <h1>Login</h1>
        <p>Login to your account</p>
        <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username"></input><br></br>
            <label for="password">Password</label>
            <input type="text" id="password" name="password"></input><br></br>
            <input type="submit" value="Submit"></input>
        </form>
        </div>
    );
}

export default Login;