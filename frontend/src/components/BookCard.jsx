import React from "react";
import { Link } from "react-router-dom";
import "../assets/Styles/BookCard.css";

function BookCard({ book }) {
  if (!book) {
    return null;
  }
  return (
    <div className="book-card">
      <Link to={{ pathname: `/books/${book.id}`, state: { book } }}>
        <div className="book-card-image">
          {book.volumeInfo.imageLinks && (
            <img
              // for better image replace zoom=1 with zoom=3
              // there is a bug in the API the good quality images are not always available
              // src={book.volumeInfo.imageLinks.thumbnail.replace(
              //   /zoom=\d+/,
              //   "zoom=3"
              // )}
              // src = {book.volumeInfo.imageLinks.thumbnail}
              src={book.volumeInfo.imageLinks.meduim ? book.volumeInfo.imageLinks.meduim : book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
          )}
          <div className="book-card-overlay">
            <h4 className="book-card-title">{book.volumeInfo.title}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BookCard;
