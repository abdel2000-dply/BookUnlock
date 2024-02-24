import React from "react";

function BookCard({ bookData }) {
  return (
    <div className="book-card">
      <div className="book-card-image">
        {bookData.volumeInfo.imageLinks && (
          <img
            src={bookData.volumeInfo.imageLinks.thumbnail.replace(
              "zoom=1",
              "zoom=3"
            )}
            alt={bookData.volumeInfo.title}
          />
        )}
        <div className="book-card-overlay">
          <h4 className="book-card-title">{bookData.volumeInfo.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
