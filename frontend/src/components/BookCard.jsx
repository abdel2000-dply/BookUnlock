import React from "react";

function BookCard({ bookData }) {
  return (
    <div className="BookCard">
      {bookData.volumeInfo.imageLinks && (
        <img
        src={bookData.volumeInfo.imageLinks.thumbnail.replace('zoom=1', 'zoom=3')}
        alt={bookData.volumeInfo.title}
        />
      )}
      <h4>{bookData.volumeInfo.title}</h4>
      <p>By {bookData.volumeInfo.authors?.join(", ")}</p>
      <p>Published: {bookData.volumeInfo.publishedDate}</p>
      <p>Average Rating: {bookData.volumeInfo.averageRating}</p>
    </div>
  );
}

export default BookCard;