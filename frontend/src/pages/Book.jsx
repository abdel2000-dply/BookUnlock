import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import '../assets/Styles/BookCard.css';

function Book() {
  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [display, setDisplay] = useState(false); // Use a state variable

  const apiKey = "AIzaSyCvF51voi8E3lwf44fOIkQ75VwWJXkzuVk";

  const fetchBooks = async () => {
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(searchValue)}&printType=books&key=${apiKey}&language=en`;
      const response = await fetch(url);
      const data = await response.json();
      const filteredBooks = data.items.filter(book => book.volumeInfo.pageCount);
      setBookData(filteredBooks);
    } catch (err) {
      setError("Error fetching book data.");
    }
  };

  const handleSearch = () => {
    fetchBooks();
    setDisplay(true); // display the books after the search
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <br />
      <input
        type="text"
        placeholder="Search for books"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <br />
      <br />
      {display && bookData && bookData.map((book) => (
        console.log(book.id),
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
}

export default Book;