import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the BookUnluck!</p><br></br>
      <p>BookUnluck is a book review website where you can find reviews for books you want to read.</p>
      <li>
        <ul><Link to="/login">Log in now</Link></ul>
        <ul><Link to="/signup">Sign up now</Link></ul>
      </li>
    </div>
  );
}

export default Home;