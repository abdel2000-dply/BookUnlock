// Updated BookTemplate.jsx

import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import parse from "html-react-parser";

import "../assets/Styles/BookTemplate.css";

function Book() {
  const location = useLocation();
  const { id } = useParams();
  const [book, setBook] = useState(location.state?.book || null);

  useEffect(() => {
    if (!book) {
      const fetchBook = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes/${id}`
          );
          const data = await response.json();
          setBook(data);
        } catch (error) {
          console.error("Error fetching book:", error);
        }
      };
      fetchBook();
    }
  }, [book, id]);

  if (!book) return null;

  return (
    <div className="book-container">
      <div className="book-image">
        {book.volumeInfo.imageLinks && (
          <img
            src={book.volumeInfo.imageLinks.thumbnail.replace(
              "zoom=1",
              "zoom=3"
            )}
            alt={book.volumeInfo.title}
          />
        )}
      </div>
      <div className="book-details">
        <h1>{book.volumeInfo.title}</h1>
        <p className="authors">{book.volumeInfo.authors.join(", ")}</p>
        <div className="description">{parse(book.volumeInfo.description)}</div>
        <div className="metadata">
          <p>Page Count: {book.volumeInfo.pageCount}</p>
          <p>Published Date: {book.volumeInfo.publishedDate}</p>
          <p>Language: {book.volumeInfo.language}</p>
          <p>Categories: {book.volumeInfo.categories.join(", ")}</p>
          <p>Rating: {book.volumeInfo.averageRating}</p>
          <p>Rating Count: {book.volumeInfo.ratingsCount}</p>
        </div>
        <a
          href={book.volumeInfo.previewLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Preview</button>
        </a>
      </div>
    </div>
  );
}

export default Book;
