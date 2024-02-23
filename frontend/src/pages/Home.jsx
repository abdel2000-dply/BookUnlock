import React from "react";
import { Link } from "react-router-dom";
import '../assets/Styles/Home.css';

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-body">
          <div className="hero-content">
            <h1 className="title">Welcome to BookUnluck</h1>
            <h2 className="subtitle">The best place to find books</h2>
            <Link
              to="/signup"
              className="button"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section>
        
      </section>
    </main>
  );
}

export default Home;