import React from "react";
import BookCard from "./BookCard";
import "../assets/Styles/BookList.css";

function BookList({ bookData }) {
  if (!Array.isArray(bookData)) {
    return null;
  }

  return (
    <ul className="book-list">
      {bookData.map((book, index) => (
        <li key={index}>
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
