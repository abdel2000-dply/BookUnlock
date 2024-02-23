import React, { useState, useEffect } from 'react';


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
          {bookData.volumeInfo.imageLinks && (
            <img
              src={bookData.volumeInfo.imageLinks.thumbnail}
              alt={bookData.volumeInfo.title}
            />
          )}
          <h1>{bookData.volumeInfo.title}</h1>
          <p>By {bookData.volumeInfo.authors?.join(', ')}</p>
          <p>{bookData.volumeInfo.description?.substring(0, 100) + "..."}</p>
          {/* Access other book information using bookData object */}
          <p>Published: {bookData.volumeInfo.publishedDate}</p>
          <p>Average Rating: {bookData.volumeInfo.averageRating}</p>
          <a href={bookData.infoLink}>More Info</a>
        </div>
      );
  }
  
  export default Book;