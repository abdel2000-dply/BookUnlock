import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/images/reading-a-book-illustration.png";
import TopBooks from "../components/TopBooks";
import OpenBook from "../assets/images/open-book-svg.svg";

// import CSS files
import "../assets/Styles/Hero.css";
import "../assets/Styles/about.css";

function Home() {
  return (
    <main>
      {/*----------------------------------------------------------------- Hero section */}
      <section className="hero">
        <div className="hero-body">
          <div className="hero-text-content">
            <h1 className="hero-title">Find Books<br />That Inspire And Entertain You</h1>
            <h2 className="hero-subtitle">Discover hidden gems, share your opinions, and get started today at the best place to find books</h2>
            <div className="hero-button">
            <Link to="/explore" className="call-to-action">
              <img src={OpenBook} alt="open book" className="open-book-icon" />
              Explore
            </Link>
            <Link to="/signup" className="join">
              Join
            </Link>
            </div>
          </div>
          <div className="hero-image-content">
            <img src={HeroImage} alt="Hero image" />
          </div>
        </div>
      </section>
      {/*------------------------------------------------------------------ Top 10 books in 2023 section */}
      <section className="top-books">
        <h2>Top 10 Books in 2023</h2>
        <TopBooks />
      </section>
      <section className="about">
        <h2>About Book Unluck</h2>
        <img></img>
        <p>
          BookUnluck is a platform where you can find the best books to read. We
          have a wide variety of books from different genres. You can find books
          from different authors and publishers. You can also find books in
          different languages.
        </p>
      </section>
    </main>
  );
}

export default Home;
