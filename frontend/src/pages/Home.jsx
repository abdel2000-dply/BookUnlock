import React from "react";
import { Link } from "react-router-dom";
// import images
import HeroImage from "../assets/images/reading-a-book-illustration.png";
import Library from "../assets/images/bookunluck-library.jpg";
import abdel from "../assets/images/abdel-selfie.png";
// import components
import TopBooks from "../components/TopBooks";
import OpenBook from "../assets/images/open-book-svg.svg";
// import fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

// import CSS files
import "../assets/Styles/Hero.css";
import "../assets/Styles/about.css";
import "../assets/Styles/Ourteam.css";

function Home() {
  return (
    <main>
      {/*----------------------------------------------------------------- Hero section */}
      <section className="hero">
        <div className="hero-body">
          <div className="hero-text-content">
            <h1 className="hero-title">
              Find Books
              <br />
              That Inspire And Entertain You
            </h1>
            <h2 className="hero-subtitle">
              Discover hidden gems, share your opinions, and get started today
              at the best place to find books
            </h2>
            <div className="hero-button">
              <Link to="/explore" className="call-to-action">
                <img
                  src={OpenBook}
                  alt="open book"
                  className="open-book-icon"
                />
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
        <div className="about-intro">
          <div className="library-img-container">
            <img src={Library} alt="Bookunluck library" />
          </div>
          <div className="bookunluck-intro">
            <h2>About BookUnluck</h2>
            <h3>Delve into the Worlds You Love</h3>
            <p className="about-paragraph">
              BookUnlock is your gateway to a boundless universe of literature.
              We're a platform powered by the Google Books API, designed to
              empower book discovery and exploration for readers of all stripes.
              Whether you're a seasoned bibliophile or just starting your
              literary adventure, BookUnlock is your one-stop for finding your
              next great read.
            </p>
            {/* add a quete  */}
            <div className="quote">
              <blockquote>
                "A reader lives a thousand lives before he dies." - George R.R.
              </blockquote>
            </div>
          </div>
        </div>
        <div className="about-features">
          <div className="ourmission-container">
            <h3>Our Mission</h3>
            <p className="about-paragraph">
              Our mission is to connect readers with the books they love. We
              believe that books are a powerful tool for personal growth and
              development, and we want to make it easier for readers to find the
              books that inspire them. We're committed to helping readers
              discover new books, share their opinions, and connect with other
              readers who share their interests.
            </p>
          </div>
          <div className="whyus-container">
            <h3>Why Choose BookUnlock?</h3>
            <div className="reasons-container">
              <div className="reason-block">
                <p>
                  BookUnlock is the best place to find books because we make it
                  easy to discover new books, share your opinions, and connect
                  with other readers.
                </p>
              </div>
              <div className="reason-block">
                <p>
                  Our platform is powered by the Google Books API, so you can be
                  sure that you're getting the most accurate and up-to-date
                  information about the books you love.
                </p>
              </div>
              <div className="reason-block">
                <p>
                  Whether you're looking for your next great read or want to
                  connect with other readers who share your interests,
                  BookUnlock is the place to be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourteam">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img
              src={abdel}
              alt="team member: abdellah abnoune"
              className="team-member-image"
            />
            <h3>Abdellah Abnoune</h3>
            <p>Full Stack Developer</p>
            <ul className="social-media-icons">
              <li>
                <a
                  href="https://twitter.com/Abdel2272"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abdellah-abnoune-646299180/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/abdel2000-dply"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
