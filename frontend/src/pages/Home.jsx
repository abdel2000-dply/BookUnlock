import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/images/reading-a-book-illustration.png";
import "../assets/Styles/Home.css";
import TopBooks from "../components/TopBooks";
import OpenBook from "../assets/images/open-book.png";

function Home() {
  return (
    <main>
      {/*----------------------------------------------------------------- Hero section */}
      <section className="hero">
        <div className="hero-body">
          <div className="hero-text-content">
            <h1 className="hero-title">Welcome to BookUnluck</h1>
            <h2 className="hero-subtitle">The best place to find books</h2>
            <Link to="/signup" className="call-to-action">
              <img src={OpenBook} alt="open book" className="open-book-icon" />
              Explore
            </Link>
          </div>
          <div className="hero-image-content">
            <img src={HeroImage} alt="Hero image" />
          </div>
        </div>
      </section>
      {/*------------------------------------------------------------------ Newest books section */}
      <section className="top-books">
        <h2>Top 10 Books in 2023</h2>
        <TopBooks />
      </section>
      <section className="about">
        <h2>About BookUnluck</h2>
        <img></img>
        <p>
          BookUnluck is a platform where you can find the best books to read. We
          have a wide variety of books from different genres. You can find books
          from different authors and publishers. You can also find books in
          different languages. We have a recommendation system that will help
          you find the best books based on your interests. You can also find
          books based on their popularity and ratings. You can also find books
          based on their publication date. You can also find books based on
          their page count. You can also find books based on their categories.
          You can also find books based on their average rating. You can also
          find books based on their rating count. You can also find books based
          on their preview link. You can also find books based on their image
          links. You can also find books based on their authors. You can also
          find books based on their published date.You can also find books based
          on their categories. You can also find books based on their authors.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </section>
    </main>
  );
}

export default Home;
