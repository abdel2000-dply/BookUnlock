import React from "react";

function Signup() {
    return (
        <div>
        <h1>Signup</h1>
        <p>Signup for an account</p>
        <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username"></input><br></br>
            <label for="email">Email</label>
            <input type="text" id="email" name="email"></input><br></br>
            <label for="password">Password</label>
            <input type="text" id="password" name="password"></input><br></br>
            <input type="submit" value="Submit"></input>
        </form>
        </div>
    );
}

export default Signup;