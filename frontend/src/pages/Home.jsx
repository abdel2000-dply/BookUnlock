import React from "react";
import { Link } from "react-router-dom";
import "../assets/Styles/Home.css";
import TopBooks from "../components/TopBooks";

function Home() {
  return (
    <main>
      {/*----------------------------------------------------------------- Hero section */}
      <section className="hero">
        <div className="hero-body">
          <div className="hero-content">
            <h1 className="title">Welcome to BookUnluck</h1>
            <h2 className="subtitle">The best place to find books</h2>
            <Link to="/signup" className="button">
              Get Started
            </Link>
          </div>
        </div>
      </section>
      {/*------------------------------------------------------------------ Newest books section */}
      <section className="newest-books">
        <h2>Top 10 Books in 2023</h2>
        <TopBooks />
      </section>
    </main>
  );
}

export default Home;
