import React, { useState, useEffect } from 'react';
import BookCard
from '../components/BookCard';
import '../assets/Styles/BookCard.css';


function Book() {
    const [bookData, setBookData] = useState(null);
    const [error, setError] = useState(null);
    const title = 'harry potter and the philosopher stone';
  
    useEffect(() => {
      const apiKey = 'AIzaSyCvF51voi8E3lwf44fOIkQ75VwWJXkzuVk';
      const url = `https://www.googleapis.com/books/v1/volumes?q=title:${title}&key=${apiKey}&language=en`;
  
      fetch(url)
      .then(response => response.json())
      .then(data => {
        const filteredData = data.items.filter(item => item.volumeInfo.language === 'en');
        if (filteredData.length > 0) {
          setBookData(filteredData[0]); // Assume first result is your book
        } else {
          setError('No book found in English with that title.');
        }
      })
      .catch(err => setError('Error fetching book data.'));
  }, [title]);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!bookData) {
      return <div>Loading...</div>;
    }
  
    // Display book details here using bookData
    return (
      <div>
        <BookCard bookData={bookData} />
        <BookCard bookData={bookData} />
        <BookCard bookData={bookData} />
        <BookCard bookData={bookData} />
      </div>
    );
  }
  
  export default Book;