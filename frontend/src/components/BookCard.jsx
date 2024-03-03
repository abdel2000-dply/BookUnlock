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
              src={book.volumeInfo.imageLinks.thumbnail.replace(
                "zoom=1",
                "zoom=3"
              )}
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
